const daggerCatalog = [
  {
    slug: "carbon-steel-push-dagger-tc-50",
    name: "Carbon Steel Push Dagger TC-50",
    material: "Carbon Steel",
    sourceUrl: "https://www.etsy.com/listing/1299579692/dagger-knife-handmade-damascus-double",
    image: "/images/products/daggers/dagger-01.jpg",
    images: ["/images/products/daggers/dagger-01.jpg"],
    description:
      "Compact T-handle push dagger in carbon steel with brass grip scales and leather sheath — built for EDC carry and custom orders.",
  },
  {
    slug: "damascus-push-dagger-td-243",
    name: "Damascus Push Dagger TD-243",
    material: "Rain Drop Damascus",
    sourceUrl: "https://www.etsy.com/listing/1299579693/double-edge-throwing-knife-handmade-damascus",
    image: "/images/products/daggers/dagger-02.jpg",
    images: ["/images/products/daggers/dagger-02.jpg"],
    description:
      "Rain-drop Damascus push dagger with double-edge profile and premium handle — a collector-grade EDC piece.",
  },
  {
    slug: "damascus-edc-push-dagger-td-209",
    name: "Damascus EDC Push Dagger TD-209",
    material: "Rain Drop Damascus",
    sourceUrl: "https://www.etsy.com/market/damascus_push_knife",
    image: "/images/products/daggers/dagger-03.jpg",
    images: ["/images/products/daggers/dagger-03.jpg"],
    description:
      "Hand-forged Damascus push dagger with bone handle scales and spear-point blade — ideal for everyday carry and gifting.",
  },
  {
    slug: "titan-shark-tooth-edc-knife",
    name: "Titan Shark Tooth EDC Knife",
    material: "High Carbon Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4427479206/j2-steel-viking-tool-custom-hand-forged",
    image: "/images/products/daggers/dagger-04.jpg",
    images: ["/images/products/daggers/dagger-04.jpg"],
    description:
      "Viking-inspired EDC blade in high-carbon steel with distinctive profile — hand-forged for collectors and outdoor enthusiasts.",
  },
  {
    slug: "td-008-push-dagger",
    name: "TD-008 Push Dagger",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4528613072/handmade-steel-viking-tool-custom-hand",
    image: "/images/products/daggers/dagger-05.jpg",
    images: ["/images/products/daggers/dagger-05.jpg"],
    description:
      "Handmade Damascus push dagger with custom-forged blade and leather sheath — available for personalised Viking-style orders.",
  },
  {
    slug: "damascus-steel-viking-knife-custom-hand",
    name: "Damascus Steel Viking Knife — Custom Hand Forged",
    material: "Damascus Steel",
    sourceUrl: "https://www.etsy.com/uk/listing/4536804906/damascus-steel-viking-knifw-custom-hand",
    image: "/images/products/daggers/dagger-06.jpg",
    images: ["/images/products/daggers/dagger-06.jpg"],
    description:
      "Custom hand-forged Damascus Viking knife with layered steel pattern and premium handle — made to order for collectors.",
  },
];

export const daggerProducts = daggerCatalog.map((item) => ({
  slug: item.slug,
  name: item.name,
  description: item.description,
  image: item.image,
  images: item.images,
  material: item.material,
  sourceUrl: item.sourceUrl,
}));

export const daggerCategoryCover = daggerProducts[0]?.image ?? "/images/products/daggers/dagger-01.jpg";
