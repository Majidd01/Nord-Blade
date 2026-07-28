const huntingKnifeCatalog = [
  {
    slug: "damascus-hunting-knife-td-710",
    name: "Damascus Hunting Knife TD-710",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/market/handmade_hunting_knife",
    image: "/images/products/hunting-knives/hunting-01.jpg",
    images: ["/images/products/hunting-knives/hunting-01.jpg"],
    description:
      "Handmade Damascus hunting knife with full-tang construction and leather sheath — built for field use and collector display.",
  },
  {
    slug: "titan-drop-point-hunter-td-706",
    name: "Titan Drop Point Hunter TD-706",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/listing/1717813270/damascus-steel-hunting-knife-stag-antler",
    image: "/images/products/hunting-knives/hunting-02.jpg",
    images: ["/images/products/hunting-knives/hunting-02.jpg"],
    description:
      "Drop-point Damascus hunter with natural handle and patterned blade — reliable outdoor knife for camping and hunting.",
  },
  {
    slug: "custom-titan-hunter-x-td-078",
    name: "Custom Titan Hunter X TD-078",
    material: "Full Tang Damascus",
    sourceUrl: "https://www.etsy.com/ca/listing/4324803757/handmade-damascus-steel-hunting-knife",
    image: "/images/products/hunting-knives/hunting-03.jpg",
    images: ["/images/products/hunting-knives/hunting-03.jpg"],
    description:
      "Custom full-tang Damascus hunting knife with hand-finished edge and leather carry — made for serious outdoor use.",
  },
  {
    slug: "carbon-skinning-knife-tc-59",
    name: "Carbon Skinning Knife TC-59",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/ca/listing/4319150429/handmade-damascus-hunting-knife-damascus",
    image: "/images/products/hunting-knives/hunting-04.jpg",
    images: ["/images/products/hunting-knives/hunting-04.jpg"],
    description:
      "Compact Damascus skinning knife with precise blade profile and ergonomic handle — ideal for field dressing and EDC.",
  },
  {
    slug: "damascus-skinner-td-225",
    name: "Damascus Skinner TD-225",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/nz/listing/1902848055/handmade-damascus-steel-bowie-knife-high",
    image: "/images/products/hunting-knives/hunting-05.jpg",
    images: ["/images/products/hunting-knives/hunting-05.jpg"],
    description:
      "High-carbon Damascus Bowie-style hunter with layered steel pattern — bold camp knife with leather sheath included.",
  },
  {
    slug: "custom-handmade-damascus-bowie-hunter",
    name: "Custom Handmade Damascus Bowie Hunter",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/ca/listing/1355000441/beautiful-custom-handmade-damascus-steel",
    image: "/images/products/hunting-knives/hunting-06.jpg",
    images: ["/images/products/hunting-knives/hunting-06.jpg"],
    description:
      "Beautiful custom handmade Damascus Bowie with premium handle materials — a standout piece for collectors and outdoorsmen.",
  },
  {
    slug: "bowie-messer-custom-damascus",
    name: "Bowie Messer — Custom Handmade Damascus",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/ca/listing/1851477301/bowie-messer-custom-handmade-damascus",
    image: "/images/products/hunting-knives/hunting-07.jpg",
    images: ["/images/products/hunting-knives/hunting-07.jpg"],
    description:
      "European-style custom Bowie in pattern-welded Damascus — hand-forged with leather sheath for hunting and display.",
  },
  {
    slug: "damascus-bowie-hunting-knife-deer-horn",
    name: "Damascus Bowie Hunting Knife — Deer Horn",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/listing/4368758232/damascus-bowie-hunting-knife-deer-horn",
    image: "/images/products/hunting-knives/hunting-08.jpg",
    images: ["/images/products/hunting-knives/hunting-08.jpg"],
    description:
      "Damascus Bowie hunter with deer horn handle and brass accents — rustic outdoor knife with distinctive natural grip.",
  },
  {
    slug: "handmade-damascus-stag-hunting-knife",
    name: "Handmade Damascus Stag Hunting Knife",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/ca/listing/4311304529/handmade-damascus-steel-stag-hunting",
    image: "/images/products/hunting-knives/hunting-09.jpg",
    images: ["/images/products/hunting-knives/hunting-09.jpg"],
    description:
      "Handmade Damascus hunting knife with stag antler handle — traditional fixed blade with leather sheath.",
  },
  {
    slug: "damascus-hunting-knife-stag-antler",
    name: "Damascus Hunting Knife — Stag Antler",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/listing/1717813270/damascus-steel-hunting-knife-stag-antler",
    image: "/images/products/hunting-knives/hunting-10.jpg",
    images: ["/images/products/hunting-knives/hunting-10.jpg"],
    description:
      "Damascus steel hunting knife with stag antler scales — classic wilderness profile for hunting, camping, and gifting.",
  },
];

export const huntingKnifeProducts = huntingKnifeCatalog.map((item) => ({
  slug: item.slug,
  name: item.name,
  description: item.description,
  image: item.image,
  images: item.images,
  material: item.material,
  sourceUrl: item.sourceUrl,
}));

export const huntingKnifeCategoryCover =
  huntingKnifeProducts[0]?.image ?? "/images/products/hunting-knives/hunting-01.jpg";
