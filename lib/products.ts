export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  material: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  children?: ProductCategory[];
  products?: Product[];
};

const categoryImageFiles: Record<string, string[]> = {
  axe: [
    "/images/products/axe-01.jpg",
    "/images/products/axe-02.jpg",
    "/images/products/axe-03.jpg",
    "/images/products/axe-04.jpg",
    "/images/products/axe-05.jpg",
  ],
  daggers: [
    "/images/products/daggers-01.png",
    "/images/products/daggers-02.png",
    "/images/products/daggers-03.png",
    "/images/products/daggers-04.png",
    "/images/products/daggers-05.png",
  ],
  "folding-knives": [
    "/images/products/folding-knives-01.jpg",
    "/images/products/folding-knives-02.jpg",
    "/images/products/folding-knives-03.png",
    "/images/products/folding-knives-04.png",
    "/images/products/folding-knives-05.jpg",
  ],
  "hunting-knives": [
    "/images/products/hunting-knives-01.jpg",
    "/images/products/hunting-knives-02.jpg",
    "/images/products/hunting-knives-03.jpg",
    "/images/products/hunting-knives-04.jpg",
    "/images/products/hunting-knives-05.jpg",
  ],
  "kitchen-knives": [
    "/images/products/kitchen-knives-01.jpg",
    "/images/products/kitchen-knives-02.jpg",
    "/images/products/kitchen-knives-03.jpg",
    "/images/products/kitchen-knives-04.jpg",
    "/images/products/kitchen-knives-05.jpg",
  ],
  "large-hunting-knives": [
    "/images/products/large-hunting-knives-01.png",
    "/images/products/large-hunting-knives-02.jpg",
    "/images/products/large-hunting-knives-03.jpg",
    "/images/products/large-hunting-knives-04.jpg",
    "/images/products/large-hunting-knives-05.jpg",
  ],
  razors: [
    "/images/products/razors-01.png",
    "/images/products/razors-02.png",
    "/images/products/razors-01.png",
    "/images/products/razors-02.png",
    "/images/products/razors-01.png",
  ],
};

const imageSourceBySlug: Record<string, keyof typeof categoryImageFiles> = {
  arburese: "daggers",
  mozzetta: "daggers",
  pattadese: "daggers",
  "medieval-armours": "large-hunting-knives",
  "medieval-knives": "hunting-knives",
  "medieval-swords": "large-hunting-knives",
  "viking-axes": "axe",
  "viking-cutlery": "kitchen-knives",
  "viking-drinking-horns": "axe",
  "viking-seax-knives": "hunting-knives",
  "viking-forged-accessories": "daggers",
};

function imagesForCategory(slug: string): string[] {
  const source = categoryImageFiles[slug] ?? categoryImageFiles[imageSourceBySlug[slug] ?? "hunting-knives"];
  return source.slice(0, 5);
}

function categoryCover(slug: string): string {
  return imagesForCategory(slug)[0];
}

function productPool(
  categorySlug: string,
  names: string[],
  descriptions: string[],
  materials: string[],
): Product[] {
  const imagePool = imagesForCategory(categorySlug);
  return names.slice(0, 5).map((name, i) => ({
    slug: `${categorySlug}-${String(i + 1).padStart(2, "0")}`,
    name,
    description: descriptions[i] ?? descriptions[0],
    material: materials[i] ?? materials[0],
    image: imagePool[i] ?? imagePool[0],
  }));
}

function leaf(
  slug: string,
  title: string,
  description: string,
  names: string[],
  materials: string[],
): ProductCategory {
  const descriptions = names.map(
    (n) => `Hand-forged ${title.toLowerCase()} — ${n}. Custom specs and bulk orders available.`,
  );
  return {
    slug,
    title,
    description,
    image: categoryCover(slug),
    products: productPool(slug, names, descriptions, materials),
  };
}

export const productCategories: ProductCategory[] = [
  leaf(
    "axe",
    "Axe",
    "Hand-forged axes for outdoor, tactical, and display use.",
    [
      "Axe SF-A-01",
      "Axe SF-A-02",
      "Axe SF-A-03",
      "Axe SF-A-04",
      "Cherokee Style Damascus Peace Pipe",
    ],
    ["Damascus Steel", "Carbon Steel", "Hand-Forged Steel", "Damascus Steel", "Damascus & Wood"],
  ),
  leaf(
    "daggers",
    "Daggers",
    "Push daggers and EDC blades with premium handles.",
    [
      "Carbon Steel Push Dagger TC-50",
      "Damascus Push Dagger TD-243",
      "Damascus EDC Push Dagger TD-209",
      "Titan Shark Tooth EDC Knife",
      "TD-008 Push Dagger",
    ],
    ["Carbon Steel", "Rain Drop Damascus", "Rain Drop Damascus", "High Carbon Steel", "Damascus Steel"],
  ),
  leaf(
    "folding-knives",
    "Folding Knives",
    "Pocket folders and everyday carry knives.",
    [
      "Damascus Folding Knife SF-FK-01",
      "Titan EDC Folder TD-101",
      "Carbon Steel Pocket Knife TC-22",
      "Damascus Liner Lock SF-FK-02",
      "Custom Hand-Forged Folder TD-102",
    ],
    ["Damascus Steel", "Stainless Steel", "Carbon Steel", "Damascus Steel", "Hand-Forged Steel"],
  ),
  leaf(
    "hunting-knives",
    "Hunting Knives",
    "Fixed-blade hunting and skinning knives with leather sheaths.",
    [
      "Damascus Hunting Knife TD-710",
      "Titan Drop Point Hunter TD-706",
      "Custom Titan Hunter X TD-078",
      "Carbon Skinning Knife TC-59",
      "Damascus Skinner TD-225",
    ],
    ["Damascus Steel", "Damascus Steel", "Full Tang Damascus", "Carbon Steel", "Damascus Steel"],
  ),
  leaf(
    "kitchen-knives",
    "Kitchen Knives",
    "Chef knives, cleavers, santoku, and kitchen sets.",
    [
      "Damascus Chef Knife",
      "Damascus Kitchen Knife TD-211",
      "Santoku Kitchen Knife Titan 302",
      "Handmade Carbon Steel Cleaver TC-038",
      "Damascus Kitchen Set — Chef & Paring",
    ],
    ["Damascus Steel", "Damascus Steel", "Damascus Steel", "Carbon Steel", "Hand-Forged Set"],
  ),
  leaf(
    "large-hunting-knives",
    "Large Hunting Knives",
    "Oversized hunting and camp knives for heavy-duty use.",
    [
      "Large Hunting Knife SF-LH-01",
      "Titan Camp Hunter TD-206",
      "Custom 8″ Tactical Tanto TD-75",
      "Custom 9″ Tactical Tanto",
      "Damascus Camp Knife TD-212",
    ],
    ["Damascus Steel", "Damascus Steel", "Twist Damascus", "Twist Damascus", "Full Tang Steel"],
  ),
  leaf(
    "razors",
    "Razors",
    "Straight razors and shaving blades with custom scales.",
    [
      "Damascus Straight Razor SF-R-01",
      "Hand-Forged Shaving Razor TD-301",
      "Carbon Steel Straight Razor TC-40",
      "Custom Scales Razor SF-R-02",
      "Titan Barber Razor TD-302",
    ],
    ["Damascus Steel", "Hand-Forged Steel", "Carbon Steel", "Damascus & Horn", "Stainless Damascus"],
  ),
  {
    slug: "italian-knives",
    title: "Italian Knives",
    description: "Traditional Italian regional knife styles — Arburese, Mozzetta, and Pattadese.",
    image: categoryCover("arburese"),
    children: [
      leaf(
        "arburese",
        "Arburese",
        "Classic Sardinian Arburese folding knives.",
        [
          "Arburese Folder SF-AR-01",
          "Hand-Forged Arburese TC-AR-02",
          "Damascus Arburese TD-AR-03",
          "Traditional Arburese SF-AR-04",
          "Custom Scales Arburese TD-AR-05",
        ],
        ["Carbon Steel", "Hand-Forged Steel", "Damascus Steel", "Stainless Steel", "Damascus Steel"],
      ),
      leaf(
        "mozzetta",
        "Mozzetta",
        "Mozzetta-style Italian knives with distinctive profiles.",
        [
          "Mozzetta Knife SF-MZ-01",
          "Hand-Forged Mozzetta TC-MZ-02",
          "Damascus Mozzetta TD-MZ-03",
          "Traditional Mozzetta SF-MZ-04",
          "Custom Mozzetta TD-MZ-05",
        ],
        ["Carbon Steel", "Hand-Forged Steel", "Damascus Steel", "Stainless Steel", "Damascus Steel"],
      ),
      leaf(
        "pattadese",
        "Pattadese",
        "Pattadese resolza knives from Sardinian tradition.",
        [
          "Pattadese Resolza SF-PT-01",
          "Hand-Forged Pattadese TC-PT-02",
          "Damascus Pattadese TD-PT-03",
          "Traditional Pattadese SF-PT-04",
          "Custom Pattadese TD-PT-05",
        ],
        ["Carbon Steel", "Hand-Forged Steel", "Damascus Steel", "Stainless Steel", "Damascus Steel"],
      ),
    ],
  },
  {
    slug: "medieval",
    title: "Medieval",
    description: "Medieval armours, knives, and swords for collectors and reenactors.",
    image: categoryCover("medieval-knives"),
    children: [
      leaf(
        "medieval-armours",
        "Medieval Armours",
        "Chainmail, helmets, and armour pieces.",
        [
          "Chainmail Coif SF-MA-01",
          "Medieval Helmet SF-MA-02",
          "Plate Armour Set SF-MA-03",
          "Brass Medieval Gauntlets SF-MA-04",
          "Knight Armour Display SF-MA-05",
        ],
        ["Steel Chainmail", "Hand-Forged Steel", "Carbon Steel", "Brass & Steel", "Display Grade Steel"],
      ),
      leaf(
        "medieval-knives",
        "Medieval Knives",
        "Period-accurate medieval utility and combat knives.",
        [
          "Medieval Dagger SF-MK-01",
          "Hand-Forged Seax SF-MK-02",
          "Damascus Medieval Knife TD-MK-03",
          "Crusader Style Knife SF-MK-04",
          "Custom Medieval Utility TD-MK-05",
        ],
        ["Carbon Steel", "Hand-Forged Steel", "Damascus Steel", "High Carbon Steel", "Damascus Steel"],
      ),
      leaf(
        "medieval-swords",
        "Medieval Swords",
        "Longswords, arming swords, and display blades.",
        [
          "Medieval Longsword SF-MS-01",
          "Arming Sword SF-MS-02",
          "Damascus Medieval Sword TD-MS-03",
          "Crusader Sword SF-MS-04",
          "Custom Battle Sword TD-MS-05",
        ],
        ["High Carbon Steel", "Hand-Forged Steel", "Damascus Steel", "Carbon Steel", "Damascus Steel"],
      ),
    ],
  },
  {
    slug: "viking",
    title: "Viking",
    description: "Viking axes, seax knives, cutlery, drinking horns, and forged accessories.",
    image: categoryCover("viking-axes"),
    children: [
      leaf(
        "viking-axes",
        "Viking Axes",
        "Hand-forged Viking throwing and battle axes.",
        [
          "Viking Battle Axe SF-VA-01",
          "Hand-Forged Bearded Axe SF-VA-02",
          "Damascus Viking Axe TD-VA-03",
          "Throwing Viking Axe SF-VA-04",
          "Custom Engraved Viking Axe TD-VA-05",
        ],
        ["Hand-Forged Steel", "Carbon Steel", "Damascus Steel", "High Carbon Steel", "Damascus & Wood"],
      ),
      leaf(
        "viking-cutlery",
        "Viking Cutlery",
        "Viking-style eating knives and table sets.",
        [
          "Viking Eating Knife SF-VC-01",
          "Hand-Forged Cutlery Set SF-VC-02",
          "Damascus Viking Knife TD-VC-03",
          "Feast Cutlery Set SF-VC-04",
          "Custom Viking Table Knife TD-VC-05",
        ],
        ["Carbon Steel", "Hand-Forged Set", "Damascus Steel", "Stainless Steel", "Damascus Steel"],
      ),
      leaf(
        "viking-drinking-horns",
        "Viking Drinking Horns",
        "Authentic drinking horns with stands and fittings.",
        [
          "Polished Drinking Horn SF-VH-01",
          "Horn with Iron Stand SF-VH-02",
          "Engraved Drinking Horn SF-VH-03",
          "Large Feast Horn SF-VH-04",
          "Custom Viking Horn Set SF-VH-05",
        ],
        ["Natural Horn", "Horn & Iron", "Engraved Horn", "Natural Horn", "Horn Set"],
      ),
      leaf(
        "viking-seax-knives",
        "Viking Seax Knives",
        "Traditional Viking seax with leather sheaths.",
        [
          "Viking Seax SF-VS-01",
          "Hand-Forged Seax SF-VS-02",
          "Damascus Seax TD-VS-03",
          "Broken-Back Seax SF-VS-04",
          "Custom Engraved Seax TD-VS-05",
        ],
        ["Carbon Steel", "Hand-Forged Steel", "Damascus Steel", "High Carbon Steel", "Damascus Steel"],
      ),
      leaf(
        "viking-forged-accessories",
        "Viking Forged Accessories",
        "Brooches, fire strikers, and forged Viking gear.",
        [
          "Viking Brooch SF-VF-01",
          "Hand-Forged Fire Striker SF-VF-02",
          "Damascus Pendant TD-VF-03",
          "Iron Belt Buckle SF-VF-04",
          "Custom Forged Accessory TD-VF-05",
        ],
        ["Hand-Forged Iron", "Carbon Steel", "Damascus Steel", "Wrought Iron", "Hand-Forged Steel"],
      ),
    ],
  },
];

export function productQuoteMessage(productName: string, categoryTitle: string) {
  return `Hi NORDBLADE, I'm interested in the ${productName} (${categoryTitle}). Could you send me a quote?`;
}

export type ProductContext = {
  product: Product;
  category: ProductCategory;
  parent?: ProductCategory;
};

export function getProductHref(
  productSlug: string,
  categorySlug: string,
  parentSlug?: string,
): string {
  if (parentSlug) {
    return `/products/${parentSlug}/${categorySlug}/${productSlug}`;
  }
  return `/products/${categorySlug}/${productSlug}`;
}

export function findProduct(
  categorySlug: string,
  productSlug: string,
  parentSlug?: string,
): ProductContext | undefined {
  if (parentSlug) {
    const sub = findSubcategory(parentSlug, categorySlug);
    if (!sub) return undefined;
    const product = sub.category.products?.find((p) => p.slug === productSlug);
    if (!product) return undefined;
    return { product, category: sub.category, parent: sub.parent };
  }

  const category = findCategory(categorySlug);
  if (!category?.products || category.children) return undefined;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { product, category };
}

export function getProductFeatures(product: Product, categoryTitle: string): string[] {
  return [
    `Material: ${product.material}`,
    `Category: ${categoryTitle}`,
    "Hand-forged with premium craftsmanship",
    "Custom blade specs and handle options",
    "Bulk, OEM, and private label available",
    "Worldwide shipping from Sialkot, Pakistan",
  ];
}

export function getAllProductParams(): Array<
  | { category: string; subcategory: string }
  | { category: string; subcategory: string; product: string }
> {
  const params: Array<
    | { category: string; subcategory: string }
    | { category: string; subcategory: string; product: string }
  > = [];

  for (const cat of productCategories) {
    if (cat.children) {
      for (const child of cat.children) {
        params.push({ category: cat.slug, subcategory: child.slug });
        for (const product of child.products ?? []) {
          params.push({
            category: cat.slug,
            subcategory: child.slug,
            product: product.slug,
          });
        }
      }
    } else {
      for (const product of cat.products ?? []) {
        params.push({ category: cat.slug, subcategory: product.slug });
      }
    }
  }

  return params;
}

export function getCategoryHref(category: ProductCategory, parent?: ProductCategory) {
  if (parent) return `/products/${parent.slug}/${category.slug}`;
  return `/products/${category.slug}`;
}

export function findCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function findSubcategory(
  parentSlug: string,
  subSlug: string,
): { parent: ProductCategory; category: ProductCategory } | undefined {
  const parent = findCategory(parentSlug);
  if (!parent?.children) return undefined;
  const category = parent.children.find((c) => c.slug === subSlug);
  if (!category) return undefined;
  return { parent, category };
}

export function getAllLeafCategories(): ProductCategory[] {
  const leaves: ProductCategory[] = [];
  for (const cat of productCategories) {
    if (cat.children) {
      leaves.push(...cat.children);
    } else {
      leaves.push(cat);
    }
  }
  return leaves;
}

export function getNavItems(): Array<{
  slug: string;
  title: string;
  href: string;
  children?: Array<{ slug: string; title: string; href: string }>;
}> {
  return productCategories.map((cat) => ({
    slug: cat.slug,
    title: cat.title,
    href: `/products/${cat.slug}`,
    children: cat.children?.map((child) => ({
      slug: child.slug,
      title: child.title,
      href: `/products/${cat.slug}/${child.slug}`,
    })),
  }));
}
