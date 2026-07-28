import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { findCategory, productCategories } from "@/lib/products";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return { title: "Products" };
  return {
    title: category.title,
    description: category.description,
  };
}

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  const hasChildren = Boolean(category.children?.length);
  const hasProducts = Boolean(category.products?.length);

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
            <span className="text-gold">{category.title}</span>
          </nav>
          <h1 className="font-display text-4xl text-text sm:text-5xl">{category.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        {hasChildren ? (
          <>
            <SectionHeading
              align="left"
              eyebrow="Subcategories"
              title={`Browse ${category.title}`}
              description="Select a subcategory to view products and request a quote on WhatsApp."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.children!.map((child) => (
                <CategoryCard key={child.slug} category={child} parent={category} />
              ))}
            </div>
          </>
        ) : null}

        {hasProducts ? (
          <>
            <SectionHeading
              align="left"
              eyebrow="Products"
              title={`${category.title} Collection`}
              description="Each item is available for custom orders. Tap Get a Quote to chat on WhatsApp."
              className={hasChildren ? "mt-14" : ""}
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.products!.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              categorySlug={category.slug}
              index={index}
            />
              ))}
            </div>
          </>
        ) : null}
      </section>

      <CTABanner
        title={`Interested in ${category.title}?`}
        description="Send us your requirements — quantity, custom specs, or bulk orders — and we'll reply with a quote."
        message={`Hi NORDBLADE, I'm interested in products from the ${category.title} category. Could you send me a quote?`}
      />
    </>
  );
}
