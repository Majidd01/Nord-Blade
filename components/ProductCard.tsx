"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getProductHref, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  categorySlug: string;
  parentSlug?: string;
  index?: number;
};

export function ProductCard({
  product,
  categorySlug,
  parentSlug,
  index = 0,
}: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const href = getProductHref(product.slug, categorySlug, parentSlug);

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-surface/80 transition-colors hover:border-gold/40"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-[#121212]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-bg/80 px-2.5 py-1 text-[0.6rem] font-medium tracking-[0.1em] text-gold uppercase backdrop-blur-sm">
          {product.material}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={href}>
          <h3 className="font-display text-lg leading-tight text-text transition-colors group-hover:text-gold">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{product.description}</p>

        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center rounded-full border border-gold px-5 py-3 text-sm font-medium tracking-wide text-[#e0e0e0] transition-all duration-300 hover:border-gold-soft hover:bg-gold/10 hover:text-gold"
          >
            View Product →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
