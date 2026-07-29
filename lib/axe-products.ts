const axeCatalog = [
  {
    slug: "ragnar-viking-axe-forged-camping-axe",
    name: "Ragnar Viking Axe — Forged Camping Axe",
    material: "Hand-Forged Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4412093847/ragnar-viking-axe-forged-camping-axe",
    image: "/images/products/axes/ragnar-viking-axe-01.jpg",
    images: [
      "/images/products/axes/ragnar-viking-axe-01.jpg",
      "/images/products/axes/ragnar-viking-axe-02.jpg",
    ],
    description:
      "Forged camping axe inspired by Viking design, with wooden presentation box and optional personalised engraving — ideal as a premium gift.",
  },
  {
    slug: "viking-axe-carbon-steel-personalized",
    name: "Viking Axe — Carbon Steel Personalized",
    material: "Carbon Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4387609085/viking-axe-carbon-steel-viking-axe",
    image: "/images/products/axes/viking-axe-carbon-steel-01.jpg",
    images: ["/images/products/axes/viking-axe-carbon-steel-01.jpg"],
    description:
      "Carbon steel Viking axe with collectable wall-display appeal. Custom engraving available for camping, décor, or gifting.",
  },
  {
    slug: "viking-raven-axe-handmade-medieval",
    name: "Viking Raven Axe — Handmade Medieval",
    material: "Hand-Forged Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4536789095/viking-raven-axe-handmade-medieval-axe",
    image: "/images/products/axes/viking-raven-axe-01.jpg",
    images: ["/images/products/axes/viking-raven-axe-01.jpg"],
    description:
      "Handmade medieval Viking raven axe with Norse mythology styling — a standout decorative and gift piece.",
  },
  {
    slug: "viking-axe-hand-forged-camping",
    name: "Viking Axe — Hand Forged Camping Axe",
    material: "Carbon Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4345566579/viking-axe-carbon-steel-viking-axe",
    image: "/images/products/axes/viking-hand-forged-camping-axe-01.jpg",
    images: ["/images/products/axes/viking-hand-forged-camping-axe-01.jpg"],
    description:
      "Hand-forged carbon steel Viking axe built for wall display and outdoor presentation. Personalisation available on request.",
  },
  {
    slug: "double-headed-viking-bearded-axe",
    name: "Double Headed Viking Bearded Axe",
    material: "Carbon Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/1858897806/double-headed-viking-axe-bearded-axe",
    image: "/images/products/axes/double-headed-viking-bearded-axe-01.jpg",
    images: ["/images/products/axes/double-headed-viking-bearded-axe-01.jpg"],
    description:
      "Double-headed bearded Viking axe with bold Norse profile — a dramatic decorative piece for collectors and groomsmen gifts.",
  },
  {
    slug: "handmade-norse-carbon-steel-axe-hammer",
    name: "Handmade Norse Carbon Steel Axe Hammer",
    material: "Carbon Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4528609220/handmade-norse-carbon-steel-axe-hammer",
    image: "/images/products/axes/handmade-norse-axe-hammer-01.jpg",
    images: ["/images/products/axes/handmade-norse-axe-hammer-01.jpg"],
    description:
      "Handmade Norse axe-hammer hybrid with ash wood handle — carbon steel head finished for wall display.",
  },
  {
    slug: "handmade-replica-gimli-walking-axe",
    name: "Handmade Replica Gimli Walking Axe",
    material: "Hand-Forged Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4540608363/handmade-replica-axe-gimli-walking-axe",
    image: "/images/products/axes/handmade-gimli-walking-axe-01.jpg",
    images: ["/images/products/axes/handmade-gimli-walking-axe-01.jpg"],
    description:
      "Collector's replica of Gimli's walking axe — hand-forged steel with fantasy-inspired detailing for display.",
  },
  {
    slug: "viking-axe-carbon-steel-collectable",
    name: "Viking Axe — Carbon Steel Collectable",
    material: "Carbon Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4385592602/viking-axe-carbon-steel-viking-axe",
    image: "/images/products/axes/viking-axe-collectable-01.jpg",
    images: ["/images/products/axes/viking-axe-collectable-01.jpg"],
    description:
      "Collectable carbon steel Viking axe with custom-made finish — suited for camping décor and personalised gifting.",
  },
  {
    slug: "leviathan-kratos-axe-god-of-war",
    name: "Leviathan Kratos Axe — God of War Replica",
    material: "Hand-Forged Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4497720455/leviathan-kartos-axe-replica-god-of-war",
    image: "/images/products/axes/leviathan-kratos-axe-01.jpg",
    images: ["/images/products/axes/leviathan-kratos-axe-01.jpg"],
    description:
      "Handcrafted Leviathan axe replica inspired by God of War — premium prop-quality piece for collectors and fans.",
  },
  {
    slug: "custom-handmade-carbon-steel-axe",
    name: "Custom Handmade Carbon Steel Viking Axe",
    material: "Carbon Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4387486994/custom-handmade-carbon-steel-axe-hand",
    image: "/images/products/axes/custom-handmade-carbon-steel-axe-01.jpg",
    images: ["/images/products/axes/custom-handmade-carbon-steel-axe-01.jpg"],
    description:
      "Unique forged carbon steel Viking axe with ash wood handle — handmade for Father's Day, birthdays, and custom orders.",
  },
];

export const axeProducts = axeCatalog.map((item) => ({
  slug: item.slug,
  name: item.name,
  description: item.description,
  image: item.image,
  images: item.images,
  material: item.material,
  sourceUrl: item.sourceUrl,
}));

export const axeCategoryCover = axeProducts[0]?.image ?? "/images/products/axes/ragnar-viking-axe-01.jpg";
