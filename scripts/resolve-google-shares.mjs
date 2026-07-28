const huntingLinks = [
  "https://share.google/zeWrWUoabn8u7Njkj",
  "https://share.google/Yuwm7M4AOMmQASSIn",
  "https://share.google/Pt54qSmiDqRrxMKML",
  "https://share.google/XvHPp8gKLvx8EXkDn",
  "https://share.google/gEfcVnHm8DYyUyPVJ",
  "https://share.google/9r31sjXUDFcoT1lWR",
  "https://share.google/71przaAq8F5dilsLA",
  "https://share.google/g3EQwdblaQiFxOwmM",
  "https://share.google/CCrBGVbOgXks2Ki83",
  "https://share.google/Xa3oV1LYpIVm6bJ4Y",
];

const kitchenLinks = [
  "https://share.google/wctsG4QmoxfYNwnzA",
  "https://share.google/E4lwtrS9gframSCEc",
  "https://share.google/CNPAUGvFGI4BTTrPq",
  "https://share.google/hqBtlNfFFyjSng5jm",
  "https://share.google/tdwT7NkObvtUhua69",
  "https://share.google/BNxPDrG445lAIsEFP",
  "https://share.google/bMvoP0dJ3pyQhj4yx",
  "https://share.google/tUeBrT4cx7Xr4hpVb",
];

function parseImgRes(url) {
  const u = new URL(url);
  const imgurl = u.searchParams.get("imgurl");
  const ref = u.searchParams.get("imgrefurl");
  const title = u.searchParams.get("tbnid");
  return { imgurl: imgurl ? decodeURIComponent(imgurl) : null, ref: ref ? decodeURIComponent(ref) : null };
}

async function resolve(link) {
  const res = await fetch(link, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0" } });
  const final = res.url;
  if (final.includes("google.com/imgres")) {
    const { imgurl, ref } = parseImgRes(final);
    return { link, final, imgurl, ref };
  }
  return { link, final, imgurl: null, ref: final };
}

console.log("=== HUNTING ===");
for (const link of huntingLinks) {
  const r = await resolve(link);
  console.log(JSON.stringify(r));
}

console.log("\n=== KITCHEN ===");
for (const link of kitchenLinks) {
  const r = await resolve(link);
  console.log(JSON.stringify(r));
}
