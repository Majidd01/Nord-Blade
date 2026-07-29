const foldingKnifeCatalog = [
  {
    slug: "damascus-folding-knife-sf-fk-01",
    name: "Damascus Folding Knife SF-FK-01",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4538542484/handcrafted-damascus-camping-tool",
    image: "/images/products/folding-knives/folder-01.jpg",
    images: ["/images/products/folding-knives/folder-01.jpg"],
    description:
      "Handcrafted Damascus camping folder with natural wood handle, polished bolsters, and genuine leather pouch — available with custom engraving.",
  },
  {
    slug: "titan-edc-folder-td-101",
    name: "Titan EDC Folder TD-101",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4340842889/damascus-steel-viking-knifw-custom-hand",
    image: "/images/products/folding-knives/folder-02.jpg",
    images: ["/images/products/folding-knives/folder-02.jpg"],
    description:
      "Custom hand-forged Viking-style folding knife in Damascus steel with wood handle and leather sheath — built for EDC and outdoor carry.",
  },
  {
    slug: "carbon-steel-pocket-knife-tc-22",
    name: "Carbon Steel Pocket Knife TC-22",
    material: "Damascus Steel",
    sourceUrl: "https://www.pinterest.com/pin/1041598220079853120/",
    image: "/images/products/folding-knives/folder-03.jpg",
    images: ["/images/products/folding-knives/folder-03.jpg"],
    description:
      "Handmade Damascus leaf-profile pocket folder with leather sheath — compact EDC design with distinctive blade pattern.",
  },
  {
    slug: "damascus-liner-lock-sf-fk-02",
    name: "Damascus Liner Lock SF-FK-02",
    material: "Damascus Steel",
    sourceUrl: "https://www.pinterest.com/pin/873698396455406809/",
    image: "/images/products/folding-knives/folder-04.jpg",
    images: ["/images/products/folding-knives/folder-04.jpg"],
    description:
      "Professional handmade Damascus folding knife with leather sheath — liner-lock folder suited for collectors and everyday carry.",
  },
  {
    slug: "custom-hand-forged-folder-td-102",
    name: "Custom Hand-Forged Folder TD-102",
    material: "Hand-Forged Steel",
    sourceUrl: "https://www.pinterest.com/pin/4596416137978279552/",
    image: "/images/products/folding-knives/folder-05.jpg",
    images: ["/images/products/folding-knives/folder-05.jpg"],
    description:
      "Men's EDC Damascus pocket folder with tooled leather sheath — hand-forged for camping, hunting, and survival use.",
  },
  {
    slug: "meteoredge-damascus-pocket-folder",
    name: "MeteorEdge Damascus Pocket Folder",
    material: "Damascus Steel",
    sourceUrl: "https://georgianblades.com/products/damascus-pocket-knife-edc-meteoredge",
    image: "/images/products/folding-knives/folder-06.jpg",
    images: ["/images/products/folding-knives/folder-06.jpg"],
    description:
      "MeteorEdge Damascus steel pocket folder with leather sheath — premium EDC knife with layered steel pattern and compact profile.",
  },
  {
    slug: "damascus-resin-handle-folder-wh-3821",
    name: "Damascus Resin Handle Folder WH-3821",
    material: "Damascus Steel",
    sourceUrl: "https://whitehillsknives.com/products/custom-handmade-damascus-steel-pocket-knife-folding-blade-with-resin-handle-wh-3821",
    image: "/images/products/folding-knives/folder-07.jpg",
    images: ["/images/products/folding-knives/folder-07.jpg"],
    description:
      "Custom handmade Damascus folder with resin handle scales — bold colours and pattern-welded blade for display and carry.",
  },
  {
    slug: "handmade-damascus-pocket-knife-edc",
    name: "Handmade Damascus Pocket Knife EDC",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/ca/listing/1871630083/folding-knife-handmade-damascus-pocket",
    image: "/images/products/folding-knives/folder-08.jpg",
    images: ["/images/products/folding-knives/folder-08.jpg"],
    description:
      "Handmade Damascus pocket knife with bone or wood handle — classic back-lock folder for camping, hunting, and gifting.",
  },
  {
    slug: "gentlemans-ram-horn-pocket-folder",
    name: "Gentleman's Ram Horn Pocket Folder",
    material: "Damascus Steel",
    sourceUrl: "https://www.shokuninusa.com/collections/pocket-knives",
    image: "/images/products/folding-knives/folder-09.jpg",
    images: ["/images/products/folding-knives/folder-09.jpg"],
    description:
      "Gentleman's pocket folder with ram horn handle and Damascus blade — refined EDC piece for collectors and formal carry.",
  },
  {
    slug: "olive-wood-damascus-camping-folder",
    name: "Olive Wood Damascus Camping Folder",
    material: "Damascus Steel",
    sourceUrl: "https://whitehillsknives.com/products/damascus-steel-folding-pocket-knife-7-5-handmade-gift-knife-with-olive-rose-wood-handle-camping-pocket-knife",
    image: "/images/products/folding-knives/folder-10.jpg",
    images: ["/images/products/folding-knives/folder-10.jpg"],
    description:
      "7.5-inch handmade Damascus camping folder with olive and rosewood handle — outdoor-ready pocket knife with warm wood tones.",
  },
];

export const foldingKnifeProducts = foldingKnifeCatalog.map((item) => ({
  slug: item.slug,
  name: item.name,
  description: item.description,
  image: item.image,
  images: item.images,
  material: item.material,
  sourceUrl: item.sourceUrl,
}));

export const foldingKnifeCategoryCover =
  foldingKnifeProducts[0]?.image ?? "/images/products/folding-knives/folder-01.jpg";
