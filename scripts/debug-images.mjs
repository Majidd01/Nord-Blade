const base = "https://surgiforgeindustries.com/product-category/viking-axes/";
const html = await (await fetch(base)).text();
const imgs = [...html.matchAll(/wp-content\/uploads\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi)].map((m) => m[0]);
const links = [...new Set([...html.matchAll(/href="(https:\/\/surgiforgeindustries\.com\/product\/[^"]+)"/gi)].map((m) => m[1]))];
console.log("imgs", imgs.slice(0, 8));
console.log("links", links.slice(0, 5));
if (links[0]) {
  const phtml = await (await fetch(links[0])).text();
  const pimgs = [...phtml.matchAll(/wp-content\/uploads\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi)].map((m) => m[0]);
  console.log("product imgs", pimgs.slice(0, 5));
}
