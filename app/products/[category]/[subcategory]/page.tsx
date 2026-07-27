import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailView } from "@/components/ProductDetailView";
import { SectionHeading } from "@/components/SectionHeading";
import {
  findProduct,
  findSubcategory,
  getAllProductParams,
  productQuoteMessage,
} from "@/lib/products";

type PageProps = {
  params: Promise<{ category: string; subcategory: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subcategory } = await params;

  const productCtx = findProduct(category, subcategory);
  if (productCtx) {
    return {
      title: productCtx.product.name,
      description: productCtx.product.description,
    };
  }

  const sub = findSubcategory(category, subcategory);
  if (!sub) return { title: "Products" };
  return {
    title: `${sub.category.title} — ${sub.parent.title}`,
    description: sub.category.description,
  };
}

export function generateStaticParams() {
  return getAllProductParams().map((p) => ({
    category: p.category,
    subcategory: p.subcategory,
  }));
}

export default async function CategoryOrProductPage({ params }: PageProps) {
  const { category: categorySlug, subcategory: slug } = await params;

  const productCtx = findProduct(categorySlug, slug);
  if (productCtx) {
    return (
      <>
        <ProductDetailView ctx={productCtx} />
        <CTABanner
          title={`Need a quote for ${productCtx.product.name}?`}
          description="Tell us quantity, custom specs, or bulk requirements — we'll reply on WhatsApp."
          message={productQuoteMessage(productCtx.product.name, productCtx.category.title)}
        />
      </>
    );
  }

  const result = findSubcategory(categorySlug, slug);
  if (!result) notFound();

  const { parent, category } = result;

  return (
    <>
      <section className="border-b border-white/5 bg-atmosphere">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
          <nav className="mb-4 text-xs tracking-[0.12em] text-muted uppercase" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span className="mx-2 text-gold/40">/</span>
            <Link href="/products" className="hover:text-gold">
              Products
            </Link>
            <span className="mx-2 text-gold/40">/</span>
            <Link href={`/products/${parent.slug}`} className="hover:text-gold">
              {parent.title}
            </Link>
            <span className="mx-2 text-gold/40">/</span>
            <span className="text-gold">{category.title}</span>
          </nav>
          <h1 className="font-display text-4xl text-text sm:text-5xl">{category.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <SectionHeading
          align="left"
          eyebrow="Products"
          title={`${category.title} Collection`}
          description="Select a product to view details and request a quote on WhatsApp."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products?.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              categorySlug={category.slug}
              parentSlug={parent.slug}
              index={index}
            />
          ))}
        </div>
      </section>

      <CTABanner
        title={`Quote for ${category.title}?`}
        description="Tell us quantity and any custom requirements — we'll respond on WhatsApp with pricing."
        message={`Hi NORDBLADE, I'm interested in ${category.title} products. Could you send me a quote?`}
      />
    </>
  );
}
