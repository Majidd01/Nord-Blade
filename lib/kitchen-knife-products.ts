const kitchenKnifeCatalog = [
  {
    slug: "damascus-chef-knife",
    name: "Damascus Chef Knife",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/listing/1770295428/hand-forged-damascus-chef-set-handmade",
    image: "/images/products/kitchen-knives/kitchen-01.jpg",
    images: ["/images/products/kitchen-knives/kitchen-01.jpg"],
    description:
      "Hand-forged Damascus chef knife set with layered steel blades and premium handles — professional kitchen performance.",
  },
  {
    slug: "damascus-kitchen-knife-td-211",
    name: "Damascus Kitchen Knife TD-211",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/listing/4347715445/personalized-handmade-damascus-steel",
    image: "/images/products/kitchen-knives/kitchen-02.jpg",
    images: ["/images/products/kitchen-knives/kitchen-02.jpg"],
    description:
      "Personalised handmade Damascus kitchen knife with custom engraving available — ideal for chefs and home cooks.",
  },
  {
    slug: "santoku-kitchen-knife-titan-302",
    name: "Santoku Kitchen Knife Titan 302",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/ca/listing/1877932022/handmade-damascus-steel-chef-knife-set",
    image: "/images/products/kitchen-knives/kitchen-03.jpg",
    images: ["/images/products/kitchen-knives/kitchen-03.jpg"],
    description:
      "Handmade Damascus chef knife set with santoku profile — balanced blades for slicing, dicing, and daily prep.",
  },
  {
    slug: "handmade-carbon-steel-cleaver-tc-038",
    name: "Handmade Carbon Steel Cleaver TC-038",
    material: "D2 Steel",
    sourceUrl: "https://www.etsy.com/listing/1757858623/handmade-forged-d2-steel-chef-knife-chef",
    image: "/images/products/kitchen-knives/kitchen-04.jpg",
    images: ["/images/products/kitchen-knives/kitchen-04.jpg"],
    description:
      "Hand-forged D2 steel chef cleaver with heavy-duty edge — built for chopping, breaking down proteins, and camp cooking.",
  },
  {
    slug: "damascus-kitchen-set-chef-paring",
    name: "Damascus Kitchen Set — Chef & Paring",
    material: "Hand-Forged Set",
    sourceUrl: "https://www.etsy.com/listing/4302770689/hand-forged-damascus-steel-chef-knife",
    image: "/images/products/kitchen-knives/kitchen-05.jpg",
    images: ["/images/products/kitchen-knives/kitchen-05.jpg"],
    description:
      "Hand-forged Damascus chef and paring knife set — matched steel pattern across two essential kitchen blades.",
  },
  {
    slug: "handmade-forged-chef-knife",
    name: "Handmade Forged Chef Knife",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/market/handmade_chef_knife",
    image: "/images/products/kitchen-knives/kitchen-06.jpg",
    images: ["/images/products/kitchen-knives/kitchen-06.jpg"],
    description:
      "Artisan forged chef knife with Damascus pattern and ergonomic handle — everyday workhorse for the home kitchen.",
  },
  {
    slug: "custom-handmade-chef-knife",
    name: "Custom Handmade Chef Knife",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/market/handmade_chef_knife",
    image: "/images/products/kitchen-knives/kitchen-07.jpg",
    images: ["/images/products/kitchen-knives/kitchen-07.jpg"],
    description:
      "Custom handmade Damascus chef knife with distinctive handle finish — available for personalised kitchen orders.",
  },
  {
    slug: "chef-knife-8-inch-damascus-kitchen",
    name: "Chef Knife 8″ — Damascus Kitchen",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/nz/listing/1724358379/chef-knife-8-inch-damascus-steel-kitchen",
    image: "/images/products/kitchen-knives/kitchen-08.jpg",
    images: ["/images/products/kitchen-knives/kitchen-08.jpg"],
    description:
      "8-inch Damascus steel kitchen chef knife with full bolster — classic profile for professional and home cooking.",
  },
];

export const kitchenKnifeProducts = kitchenKnifeCatalog.map((item) => ({
  slug: item.slug,
  name: item.name,
  description: item.description,
  image: item.image,
  images: item.images,
  material: item.material,
  sourceUrl: item.sourceUrl,
}));

export const kitchenKnifeCategoryCover =
  kitchenKnifeProducts[0]?.image ?? "/images/products/kitchen-knives/kitchen-01.jpg";
