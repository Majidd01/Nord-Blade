import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  getProductFeatures,
  getProductHref,
  productQuoteMessage,
  type ProductContext,
} from "@/lib/products";

type ProductDetailViewProps = {
  ctx: ProductContext;
};

export function ProductDetailView({ ctx }: ProductDetailViewProps) {
  const { product, category, parent } = ctx;
  const features = getProductFeatures(product, category.title);
  const categoryHref = parent
    ? `/products/${parent.slug}/${category.slug}`
    : `/products/${category.slug}`;

  const related = category.products?.filter((p) => p.slug !== product.slug).slice(0, 3) ?? [];

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
            {parent ? (
              <>
                <Link href={`/products/${parent.slug}`} className="hover:text-gold">
                  {parent.title}
                </Link>
                <span className="mx-2 text-gold/40">/</span>
                <Link href={categoryHref} className="hover:text-gold">
                  {category.title}
                </Link>
                <span className="mx-2 text-gold/40">/</span>
              </>
            ) : (
              <>
                <Link href={categoryHref} className="hover:text-gold">
                  {category.title}
                </Link>
                <span className="mx-2 text-gold/40">/</span>
              </>
            )}
            <span className="text-gold">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gold/20 bg-[#121212]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {product.images && product.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((src) => (
                  <div
                    key={src}
                    className="relative aspect-square overflow-hidden rounded-xl border border-gold/15 bg-[#121212]"
                  >
                    <Image
                      src={src}
                      alt={`${product.name} alternate view`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <span className="inline-flex w-fit rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.65rem] font-medium tracking-[0.12em] text-gold uppercase">
              {product.material}
            </span>
            <h1 className="mt-4 font-display text-3xl leading-tight text-text sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm font-medium tracking-[0.1em] text-muted uppercase">
              {category.title}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">{product.description}</p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text/90">
                  <span className="mt-0.5 text-gold" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              <WhatsAppButton
                size="lg"
                className="w-full sm:w-auto"
                label="Get a Quote"
                sublabel="Chat on WhatsApp"
                message={productQuoteMessage(product.name, category.title)}
              />
              <p className="text-xs leading-relaxed text-muted">
                No cart or checkout — message us directly for pricing, custom specs, and bulk orders.
              </p>
            </div>

            <Link
              href={categoryHref}
              className="mt-6 inline-flex text-sm text-gold transition-colors hover:text-gold-soft"
            >
              ← Back to {category.title}
            </Link>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-16 border-t border-white/5 pt-12">
            <h2 className="font-display text-2xl text-text">More in {category.title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={getProductHref(item.slug, category.slug, parent?.slug)}
                  className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-surface/60 p-4 transition-colors hover:border-gold/40"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#121212]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                      sizes="64px"
                    />
                  </div>
                  <span className="text-sm font-medium text-text transition-colors group-hover:text-gold">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
