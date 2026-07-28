import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const manifest = JSON.parse(
  await readFile(new URL("./etsy-axe-manifest.json", import.meta.url), "utf8"),
);

const outDir = path.join(process.cwd(), "public", "images", "products", "axes");
const BG = { r: 18, g: 18, b: 18, alpha: 1 };
const WHITE_THRESHOLD = 228;

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; NordbladeImport/1.0)" },
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processOnDarkBg(inputBuffer) {
  const base = sharp(inputBuffer).rotate().ensureAlpha();
  const { data, info } = await base.raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const avg = (r + g + b) / 3;

    if (avg >= WHITE_THRESHOLD && Math.abs(r - g) < 18 && Math.abs(g - b) < 18) {
      data[i] = BG.r;
      data[i + 1] = BG.g;
      data[i + 2] = BG.b;
      data[i + 3] = 255;
    }
  }

  const trimmed = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 12, background: BG })
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

await mkdir(outDir, { recursive: true });

const exported = [];

for (let i = 0; i < manifest.length; i++) {
  const item = manifest[i];
  const index = String(i + 1).padStart(2, "0");
  const images = [];

  for (const [imgIndex, url] of [item.image, item.image2].filter(Boolean).entries()) {
    const suffix = imgIndex === 0 ? "" : "-alt";
    const filename = `axe-${index}${suffix}.jpg`;
    const dest = path.join(outDir, filename);

    try {
      const raw = await download(url);
      const processed = await processOnDarkBg(raw);
      await writeFile(dest, processed);
      const localPath = `/images/products/axes/${filename}`;
      images.push(localPath);
      console.log("saved", localPath);
    } catch (err) {
      console.error("failed", item.slug, url, err.message);
    }
  }

  exported.push({
    slug: item.slug,
    name: item.name,
    material: item.material,
    sourceUrl: item.sourceUrl,
    image: images[0],
    images,
  });
}

await writeFile(
  path.join(outDir, "products.json"),
  JSON.stringify(exported, null, 2),
);
console.log("done", exported.length, "products");
