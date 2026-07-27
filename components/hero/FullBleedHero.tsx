"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { HeroBannerCards, type BannerCard } from "@/components/HeroBannerCards";

type FullBleedHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  below?: ReactNode;
  cards?: readonly BannerCard[];
  fitViewport?: boolean;
  backgroundSrc?: string;
  /** @deprecated Knife overlay removed — banners include the knife in the photo */
  knifeSrc?: string;
  knifeAlt?: string;
  backgroundStyle?: CSSProperties;
};

export function FullBleedHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  below,
  cards,
  fitViewport = false,
  backgroundSrc = "/images/hero-banner-ornate.png",
  backgroundStyle,
}: FullBleedHeroProps) {
  const reduceMotionPref = useReducedMotion();
  const [ready, setReady] = useState(false);
  const hasBottom = Boolean(below || cards?.length);
  const compact = fitViewport || hasBottom;

  useEffect(() => {
    setReady(true);
  }, []);

  const animate = ready && !reduceMotionPref;

  return (
    <section
      className={`relative overflow-hidden border-b border-white/5 ${
        compact
          ? "md:flex md:min-h-[calc(100dvh-72px)] md:flex-col"
          : "min-h-0 md:min-h-[70vh]"
      }`}
    >
      {/* Full scene banner (knife already in image) — desktop */}
      <div className="absolute inset-0 hidden overflow-hidden md:block" aria-hidden>
        <div className="absolute inset-0" style={backgroundStyle}>
          <Image
            src={backgroundSrc}
            alt=""
            fill
            priority
            quality={100}
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-bg/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/45 via-transparent to-bg/10" />
      </div>

      <div className="absolute inset-0 bg-bg md:hidden" aria-hidden />

      <div
        className={`relative z-20 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-10 md:px-6 ${
          compact ? "md:py-6 lg:py-7" : "md:min-h-[70vh] md:py-14 lg:py-16"
        }`}
      >
        <div className="max-w-xl lg:max-w-2xl">
          {breadcrumbs ? (
            <p className="mb-2 text-xs tracking-wide text-muted">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label}>
                  {i > 0 ? <span className="mx-2 text-gold/50">›</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-gold">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </p>
          ) : null}

          <motion.p
            className="mb-2 text-[0.65rem] font-medium tracking-[0.2em] text-gold uppercase"
            initial={animate ? { opacity: 0, y: 12 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            className={`font-display leading-[1.05] text-text text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.65)] ${
              compact
                ? "text-[2.1rem] sm:text-4xl lg:text-[2.85rem]"
                : "text-[2.4rem] sm:text-5xl lg:text-[3.25rem]"
            }`}
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className={`mt-3 max-w-lg leading-relaxed text-[#e0e0e0] [text-shadow:0_1px_12px_rgba(0,0,0,0.55)] ${
              compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
            }`}
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {description}
          </motion.p>

          {children ? (
            <motion.div
              className={compact ? "mt-4 md:mt-5" : "mt-7"}
              initial={animate ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              {children}
            </motion.div>
          ) : null}
        </div>
      </div>

      {hasBottom ? (
        <div className="relative z-20 mt-auto w-full shrink-0 px-4 pb-4 pt-0 md:px-6 md:pb-5">
          <div className="mx-auto max-w-7xl">
            {below ?? (cards ? <HeroBannerCards cards={cards} /> : null)}
          </div>
        </div>
      ) : null}
    </section>
  );
}
