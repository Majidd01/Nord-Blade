import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/lib/products";
import { getCategoryHref } from "@/lib/products";

type CategoryCardProps = {
  category: ProductCategory;
  parent?: ProductCategory;
};

export function CategoryCard({ category, parent }: CategoryCardProps) {
  const href = getCategoryHref(category, parent);
  const count = category.products?.length ?? category.children?.length ?? 0;
  const countLabel = category.products
    ? `${count} products`
    : category.children
      ? `${count} subcategories`
      : "";

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-surface/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-text">{category.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {category.description}
        </p>
        {countLabel ? (
          <p className="mt-3 text-xs font-medium tracking-[0.12em] text-gold uppercase">
            {countLabel} →
          </p>
        ) : null}
      </div>
    </Link>
  );
}
