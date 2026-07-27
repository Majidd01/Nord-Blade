import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = "https://surgiforgeindustries.com";
const outDir = path.join(process.cwd(), "public", "images", "products");

const categoryPages = [
  ["axe", "/product-category/axe/"],
  ["daggers", "/product-category/daggers/"],
  ["folding-knives", "/product-category/folding-knives/"],
  ["hunting-knives", "/product-category/hunting-knives/"],
  ["kitchen-knives", "/product-category/kitchen-knives/"],
  ["large-hunting-knives", "/product-category/large-hunting-knives/"],
  ["razors", "/product-category/razors/"],
  ["arburese", "/product-category/arburese/"],
  ["mozzetta", "/product-category/mozzetta/"],
  ["pattadese", "/product-category/pattadese/"],
  ["medieval-armours", "/product-category/medieval-armours/"],
  ["medieval-knives", "/product-category/medieval-knives/"],
  ["medieval-swords", "/product-category/medieval-swords/"],
  ["viking-axes", "/product-category/viking-axes/"],
  ["viking-cutlery", "/product-category/viking-cutlery/"],
  ["viking-drinking-horns", "/product-category/viking-drinking-horns/"],
  ["viking-seax-knives", "/product-category/viking-seax-knives/"],
  ["viking-forged-accessories", "/product-category/viking-forged-accessories/"],
];

function extractImages(html) {
  const re = /wp-content\/uploads\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi;
  const matches = [...html.matchAll(re)];
  return [...new Set(matches.map((m) => m[0]))].filter(
    (p) =>
      !p.includes("logo") &&
      !p.includes("cropped-Final") &&
      !p.includes("-150x150") &&
      !p.includes("-300x300") &&
      !p.includes("-100x100"),
  );
}

function extractProductLinks(html) {
  const re = /href="(https:\/\/surgiforgeindustries\.com\/product\/[^"]+)"/gi;
  const links = [...html.matchAll(re)].map((m) => m[1]);
  return [...new Set(links)].slice(0, 8);
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

async function downloadImage(relativePath, destName) {
  const url = `${base}/${relativePath}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`image ${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = path.extname(relativePath.split("?")[0]) || ".jpg";
  const file = path.join(outDir, `${destName}${ext}`);
  await writeFile(file, buf);
  return `/images/products/${destName}${ext}`;
}

await mkdir(outDir, { recursive: true });

const manifest = {};

for (const [cat, pagePath] of categoryPages) {
  const html = await fetchText(`${base}${pagePath}`);
  const links = extractProductLinks(html);
  const pageImages = extractImages(html);
  const images = [];

  for (let i = 0; i < 5; i++) {
    let relative = pageImages[i];
    if (!relative && links[i]) {
      const productHtml = await fetchText(links[i]);
      relative = extractImages(productHtml)[0];
    }
    if (!relative) continue;
    const local = await downloadImage(relative, `${cat}-${String(i + 1).padStart(2, "0")}`);
    images.push(local);
    console.log(`saved ${local}`);
  }

  manifest[cat] = images;
}

await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("done");
