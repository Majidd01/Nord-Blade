import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { ProductDetailView } from "@/components/ProductDetailView";
import { findProduct, getAllProductParams, productQuoteMessage } from "@/lib/products";

type PageProps = {
  params: Promise<{ category: string; subcategory: string; product: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subcategory, product: productSlug } = await params;
  const ctx = findProduct(subcategory, productSlug, category);
  if (!ctx) return { title: "Products" };
  return {
    title: ctx.product.name,
    description: ctx.product.description,
  };
}

export function generateStaticParams() {
  return getAllProductParams().filter(
    (p): p is { category: string; subcategory: string; product: string } => "product" in p,
  );
}

export default async function NestedProductPage({ params }: PageProps) {
  const { category: parentSlug, subcategory: categorySlug, product: productSlug } = await params;
  const ctx = findProduct(categorySlug, productSlug, parentSlug);
  if (!ctx) notFound();

  return (
    <>
      <ProductDetailView ctx={ctx} />
      <CTABanner
        title={`Need a quote for ${ctx.product.name}?`}
        description="Tell us quantity, custom specs, or bulk requirements — we'll reply on WhatsApp."
        message={productQuoteMessage(ctx.product.name, ctx.category.title)}
      />
    </>
  );
}
