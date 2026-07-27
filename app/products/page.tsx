import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { CategoryCard } from "@/components/CategoryCard";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { heroImages } from "@/lib/heroes";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse NORDBLADE product categories — axes, daggers, hunting knives, kitchen knives, Italian, Medieval, and Viking collections.",
};

export default function ProductsPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="Our Catalog"
        title="Products"
        description="Explore our full range of hand-forged blades and accessories. Chat on WhatsApp for pricing and custom orders."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        backgroundSrc={heroImages.products.background}
        knifeSrc={heroImages.products.knife}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <SectionHeading
          eyebrow="Our Categories"
          title="Knives & Blades"
          description="Every category includes sample products — message us on WhatsApp for quotes, bulk orders, and custom specifications."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Need a Custom Quote?"
        description="Tell us what you're looking for — we'll reply on WhatsApp with pricing and lead times."
        message="Hi NORDBLADE, I'd like a quote for products from your catalog."
      />
    </>
  );
}
