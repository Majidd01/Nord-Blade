import sharp from "sharp";

export const BG = { r: 18, g: 18, b: 18, alpha: 1 };
const WHITE_THRESHOLD = 228;
const COLOR_TOLERANCE = 42;

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

function saturation(r, g, b) {
  return Math.max(r, g, b) - Math.min(r, g, b);
}

function avgRgb(data, i) {
  return (data[i] + data[i + 1] + data[i + 2]) / 3;
}

/** Remove semi-transparent logo/text overlays left visible after bg flattening. */
function stripWatermarks(data, width, height) {
  const channels = 4;
  const marked = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const i = idx * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const avg = (r + g + b) / 3;
      const sat = saturation(r, g, b);

      if (avg < 55 || avg > 252) continue;

      let darker = 0;
      let lighter = 0;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          if (!dx && !dy) continue;
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const ni = (ny * width + nx) * channels;
          const navg = avgRgb(data, ni);
          if (navg < avg - 18) darker++;
          if (navg > avg + 18) lighter++;
        }
      }

      const inCenter =
        y > height * 0.18 && y < height * 0.88 && x > width * 0.08 && x < width * 0.92;
      const inCornerBadge =
        (y < height * 0.22 && x < width * 0.28) ||
        (y < height * 0.22 && x > width * 0.72) ||
        (y > height * 0.78 && x < width * 0.28) ||
        (y > height * 0.78 && x > width * 0.72);

      const watermarkGray = avg >= 95 && avg <= 245 && sat < 38;
      const textStroke = watermarkGray && darker >= 3 && lighter <= 2;
      const faintOverlay = inCenter && avg >= 110 && avg <= 210 && sat < 28;
      const cornerOverlay = inCornerBadge && avg >= 80 && sat < 55;

      if (textStroke || faintOverlay || cornerOverlay) {
        marked[idx] = 1;
      }
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!marked[idx]) continue;

      let rs = 0;
      let gs = 0;
      let bs = 0;
      let count = 0;

      for (let dy = -5; dy <= 5; dy++) {
        for (let dx = -5; dx <= 5; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const nidx = ny * width + nx;
          if (marked[nidx]) continue;
          const ni = nidx * channels;
          rs += data[ni];
          gs += data[ni + 1];
          bs += data[ni + 2];
          count++;
        }
      }

      const i = idx * channels;
      if (count >= 4) {
        data[i] = Math.round(rs / count);
        data[i + 1] = Math.round(gs / count);
        data[i + 2] = Math.round(bs / count);
      } else {
        data[i] = BG.r;
        data[i + 1] = BG.g;
        data[i + 2] = BG.b;
      }
      data[i + 3] = 255;
    }
  }
}

export async function processOnDarkBg(inputBuffer) {
  const base = sharp(inputBuffer).rotate().ensureAlpha();
  const { data, info } = await base.raw().toBuffer({ resolveWithObject: true });

  const corners = [
    [0, 0],
    [info.width - 1, 0],
    [0, info.height - 1],
    [info.width - 1, info.height - 1],
  ].map(([x, y]) => {
    const i = (y * info.width + x) * 4;
    return { r: data[i], g: data[i + 1], b: data[i + 2] };
  });

  const bgSample = {
    r: Math.round(corners.reduce((s, c) => s + c.r, 0) / corners.length),
    g: Math.round(corners.reduce((s, c) => s + c.g, 0) / corners.length),
    b: Math.round(corners.reduce((s, c) => s + c.b, 0) / corners.length),
  };

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const avg = (r + g + b) / 3;

    const nearCorner = colorDistance(r, g, b, bgSample.r, bgSample.g, bgSample.b) < COLOR_TOLERANCE;
    const nearWhite = avg >= WHITE_THRESHOLD && Math.abs(r - g) < 18 && Math.abs(g - b) < 18;

    if (nearCorner || nearWhite) {
      data[i] = BG.r;
      data[i + 1] = BG.g;
      data[i + 2] = BG.b;
      data[i + 3] = 255;
    }
  }

  stripWatermarks(data, info.width, info.height);

  const trimmed = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 14, background: BG })
    .toBuffer({ resolveWithObject: true });

  const pad = Math.round(Math.max(trimmed.info.width, trimmed.info.height) * 0.08);
  const size = Math.max(trimmed.info.width, trimmed.info.height) + pad * 2;

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([
      {
        input: trimmed.data,
        raw: {
          width: trimmed.info.width,
          height: trimmed.info.height,
          channels: trimmed.info.channels,
        },
        gravity: "centre",
      },
    ])
    .jpeg({ quality: 92 })
    .toBuffer();
}

export async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; NordbladeImport/1.0)" },
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}
