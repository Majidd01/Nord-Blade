const listings = [
  {
    id: "4412093847",
    slug: "ragnar-viking-axe-forged-camping-axe",
    name: "Ragnar Viking Axe — Forged Camping Axe",
    material: "Hand-Forged Steel",
    url: "https://www.etsy.com/uk/listing/4412093847/ragnar-viking-axe-forged-camping-axe",
  },
  {
    id: "4387609085",
    slug: "viking-axe-carbon-steel-01",
    name: "Viking Axe — Carbon Steel",
    material: "Carbon Steel",
    url: "https://www.etsy.com/uk/listing/4387609085/viking-axe-carbon-steel-viking-axe",
  },
  {
    id: "4536789095",
    slug: "viking-raven-axe-handmade-medieval",
    name: "Viking Raven Axe — Handmade Medieval Axe",
    material: "Hand-Forged Steel",
    url: "https://www.etsy.com/uk/listing/4536789095/viking-raven-axe-handmade-medieval-axe",
  },
  {
    id: "4345566579",
    slug: "viking-axe-carbon-steel-02",
    name: "Viking Axe — Carbon Steel Bearded",
    material: "Carbon Steel",
    url: "https://www.etsy.com/uk/listing/4345566579/viking-axe-carbon-steel-viking-axe",
  },
  {
    id: "1858897806",
    slug: "double-headed-viking-bearded-axe",
    name: "Double Headed Viking Axe — Bearded Axe",
    material: "Carbon Steel",
    url: "https://www.etsy.com/uk/listing/1858897806/double-headed-viking-axe-bearded-axe",
  },
  {
    id: "4528609220",
    slug: "handmade-norse-carbon-steel-axe-hammer",
    name: "Handmade Norse Carbon Steel Axe Hammer",
    material: "Carbon Steel",
    url: "https://www.etsy.com/uk/listing/4528609220/handmade-norse-carbon-steel-axe-hammer",
  },
  {
    id: "4540608363",
    slug: "handmade-replica-gimli-walking-axe",
    name: "Handmade Replica Gimli Walking Axe",
    material: "Hand-Forged Steel",
    url: "https://www.etsy.com/uk/listing/4540608363/handmade-replica-axe-gimli-walking-axe",
  },
  {
    id: "4385592602",
    slug: "viking-axe-carbon-steel-03",
    name: "Viking Axe — Carbon Steel Classic",
    material: "Carbon Steel",
    url: "https://www.etsy.com/uk/listing/4385592602/viking-axe-carbon-steel-viking-axe",
  },
  {
    id: "4497720455",
    slug: "leviathan-kratos-axe-god-of-war",
    name: "Leviathan Kratos Axe Replica — God of War",
    material: "Hand-Forged Steel",
    url: "https://www.etsy.com/uk/listing/4497720455/leviathan-kartos-axe-replica-god-of-war",
  },
  {
    id: "4387486994",
    slug: "custom-handmade-carbon-steel-axe",
    name: "Custom Handmade Carbon Steel Axe",
    material: "Carbon Steel",
    url: "https://www.etsy.com/uk/listing/4387486994/custom-handmade-carbon-steel-axe-hand",
  },
];

async function fetchListingImages(listingUrl) {
  const res = await fetch(listingUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-GB,en;q=0.9",
    },
  });
  const html = await res.text();
  const matches = [
    ...html.matchAll(/https:\/\/i\.etsystatic\.com\/[^"'\s\\]+/g),
  ].map((m) => m[0].replace(/\\u002F/g, "/").split("?")[0]);

  const full = [...new Set(matches)].filter(
    (u) =>
      u.includes("/il/") &&
      !u.includes("75x75") &&
      !u.includes("100x100") &&
      !u.includes("170x135") &&
      !u.includes("224xN") &&
      !u.includes("340x270"),
  );

  full.sort((a, b) => b.length - a.length);
  return { status: res.status, images: full.slice(0, 3) };
}

const results = [];
for (const listing of listings) {
  try {
    const { status, images } = await fetchListingImages(listing.url);
    results.push({ ...listing, status, images });
    console.log(listing.slug, status, images[0] ?? "NO IMAGE");
  } catch (err) {
    console.log(listing.slug, "ERR", err.message);
    results.push({ ...listing, status: 0, images: [] });
  }
  await new Promise((r) => setTimeout(r, 800));
}

console.log("\n--- JSON ---");
console.log(JSON.stringify(results, null, 2));
