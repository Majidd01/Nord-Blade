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
  backgroundSrc = "/images/hero-mountains-rocks.png",
  knifeSrc = "/images/hero-knife.png",
  knifeAlt = "Damascus steel knife",
  backgroundStyle = {
    left: -50,
    transform: "scale(1.5)",
    transformOrigin: "center center",
  },
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
          : "min-h-0 md:min-h-[88vh]"
      }`}
    >
      <div className="absolute inset-0 hidden overflow-hidden md:block" aria-hidden>
        <div className="absolute inset-0" style={backgroundStyle}>
          <Image
            src={backgroundSrc}
            alt=""
            fill
            priority
            quality={90}
            className="object-cover object-[center_55%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/55 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/75 via-transparent to-bg/15" />
      </div>

      <div className="absolute inset-0 bg-bg md:hidden" aria-hidden />

      <div
        className={`relative z-20 mx-auto grid w-full max-w-7xl flex-1 items-center gap-4 px-4 py-8 md:grid-cols-[1fr_0.95fr] md:gap-6 md:px-6 ${
          compact ? "md:py-4 lg:py-5" : "md:min-h-[88vh] md:py-16 lg:py-20"
        }`}
      >
        <div className={`max-w-xl ${compact ? "md:max-w-lg lg:max-w-xl" : ""}`}>
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
            className={`font-display leading-[1.05] text-text text-balance ${
              compact
                ? "text-[2.1rem] sm:text-4xl lg:text-[2.75rem]"
                : "text-[2.4rem] sm:text-5xl lg:text-[3.4rem]"
            }`}
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className={`mt-3 leading-relaxed text-muted ${
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
              className={compact ? "mt-4 md:mt-5" : "mt-8"}
              initial={animate ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              {children}
            </motion.div>
          ) : null}
        </div>

        <div
          className={`relative mx-auto hidden w-full max-w-lg overflow-visible md:block lg:max-w-none ${
            compact ? "h-[280px] lg:h-[360px] xl:h-[400px]" : "h-[540px] sm:h-[620px] lg:h-[760px]"
          }`}
        >
          <motion.div
            className="absolute inset-0 flex items-end justify-center lg:justify-end"
            style={{ transformOrigin: "50% 90%" }}
            initial={
              animate
                ? { y: "-110%", x: 24, rotate: -22, scale: 1.08, opacity: 0 }
                : false
            }
            animate={
              animate
                ? {
                    y: ["-110%", "6%", "-1%", "0%"],
                    x: [24, -4, 1, 0],
                    rotate: [-22, -5, -9, -7],
                    scale: [1.08, 1.02, 1.01, 1],
                    opacity: [0, 1, 1, 1],
                  }
                : { y: "0%", rotate: -7, opacity: 1, scale: 1 }
            }
            transition={
              animate
                ? {
                    duration: 1.2,
                    delay: 0.1,
                    times: [0, 0.62, 0.8, 1],
                    ease: [0.16, 0.84, 0.28, 1],
                  }
                : { duration: 0 }
            }
          >
            <div className="relative h-[115%] w-[100%] lg:mr-[-2%] lg:w-[95%]">
              <Image
                src={knifeSrc}
                alt={knifeAlt}
                fill
                priority
                quality={100}
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 95vw, 720px"
              />
            </div>
          </motion.div>
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
