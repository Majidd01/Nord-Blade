export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  images?: string[];
  material: string;
  sourceUrl?: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  children?: ProductCategory[];
  products?: Product[];
};

import { axeCategoryCover, axeProducts } from "@/lib/axe-products";
import { daggerCategoryCover, daggerProducts } from "@/lib/dagger-products";
import { foldingKnifeCategoryCover, foldingKnifeProducts } from "@/lib/folding-knife-products";
import { huntingKnifeCategoryCover, huntingKnifeProducts } from "@/lib/hunting-knife-products";
import { kitchenKnifeCategoryCover, kitchenKnifeProducts } from "@/lib/kitchen-knife-products";

export const productCategories: ProductCategory[] = [
  {
    slug: "axe",
    title: "Axe",
    description: "Hand-forged Viking and camping axes — carbon steel and collectible designs.",
    image: axeCategoryCover,
    products: axeProducts,
  },
  {
    slug: "daggers",
    title: "Daggers",
    description: "Push daggers and EDC blades with premium handles.",
    image: daggerCategoryCover,
    products: daggerProducts,
  },
  {
    slug: "folding-knives",
    title: "Folding Knives",
    description: "Pocket folders and everyday carry knives.",
    image: foldingKnifeCategoryCover,
    products: foldingKnifeProducts,
  },
  {
    slug: "hunting-knives",
    title: "Hunting Knives",
    description: "Fixed-blade hunting and skinning knives with leather sheaths.",
    image: huntingKnifeCategoryCover,
    products: huntingKnifeProducts,
  },
  {
    slug: "kitchen-knives",
    title: "Kitchen Knives",
    description: "Chef knives, cleavers, santoku, and kitchen sets.",
    image: kitchenKnifeCategoryCover,
    products: kitchenKnifeProducts,
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
