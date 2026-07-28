import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { download, processOnDarkBg } from "./lib/process-product-image.mjs";

const jobs = [
  { manifest: "etsy-axe-manifest.json", dir: "axes", prefix: "axe" },
  { manifest: "etsy-dagger-manifest.json", dir: "daggers", prefix: "dagger" },
  { manifest: "folding-knife-manifest.json", dir: "folding-knives", prefix: "folder" },
  { manifest: "hunting-knife-manifest.json", dir: "hunting-knives", prefix: "hunting" },
  { manifest: "kitchen-knife-manifest.json", dir: "kitchen-knives", prefix: "kitchen" },
];

const root = path.join(process.cwd(), "public", "images", "products");

for (const job of jobs) {
  const manifest = JSON.parse(
    await readFile(new URL(`./${job.manifest}`, import.meta.url), "utf8"),
  );
  const outDir = path.join(root, job.dir);

  for (let i = 0; i < manifest.length; i++) {
    const item = manifest[i];
    const index = String(i + 1).padStart(2, "0");

    for (const [imgIndex, url] of [item.image, item.image2].filter(Boolean).entries()) {
      const suffix = imgIndex === 0 ? "" : "-alt";
      const filename = `${job.prefix}-${index}${suffix}.jpg`;
      try {
        const raw = await download(url);
        const processed = await processOnDarkBg(raw);
        await writeFile(path.join(outDir, filename), processed);
        console.log("reprocessed", `${job.dir}/${filename}`);
      } catch (err) {
        console.error("failed", item.slug, url, err.message);
      }
    }
  }
}

// Legacy categories still using old Surgi Forge assets
const legacy = [
  { src: "large-hunting-knives-01.png", dest: "large-hunting-knives/large-01.jpg" },
  { src: "large-hunting-knives-02.jpg", dest: "large-hunting-knives/large-02.jpg" },
  { src: "large-hunting-knives-03.jpg", dest: "large-hunting-knives/large-03.jpg" },
  { src: "large-hunting-knives-04.jpg", dest: "large-hunting-knives/large-04.jpg" },
  { src: "large-hunting-knives-05.jpg", dest: "large-hunting-knives/large-05.jpg" },
  { src: "razors-01.png", dest: "razors/razor-01.jpg" },
  { src: "razors-02.png", dest: "razors/razor-02.jpg" },
];

for (const file of legacy) {
  try {
    const raw = await readFile(path.join(root, file.src));
    const processed = await processOnDarkBg(raw);
    const dest = path.join(root, file.dest);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, processed);
    console.log("reprocessed legacy", file.dest);
  } catch (err) {
    console.error("legacy failed", file.src, err.message);
  }
}

console.log("done");
