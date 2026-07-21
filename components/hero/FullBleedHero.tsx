"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

type FullBleedHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  /** Full-bleed scenic background (no UI text baked in) */
  backgroundSrc?: string;
  /** Knife cutout that drops in from the top */
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

  useEffect(() => {
    setReady(true);
  }, []);

  const animate = ready && !reduceMotionPref;

  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={backgroundStyle}>
          <Image
            src={backgroundSrc}
            alt=""
            fill
            priority
            className="object-cover object-[center_55%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/45 via-transparent to-bg/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(168,90,90,0.06),transparent_50%)]" />
      </div>

      <div className="relative z-20 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-[1fr_1.05fr] lg:px-6 lg:py-20">
        <div className="max-w-xl">
          {breadcrumbs ? (
            <p className="mb-4 text-xs tracking-wide text-muted">
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
            className="mb-3 text-xs tracking-[0.18em] text-crimson-soft"
            initial={animate ? { opacity: 0, y: 12 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            className="font-display text-4xl leading-[1.15] text-text sm:text-5xl text-balance"
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {description}
          </motion.p>

          {children ? (
            <motion.div
              className="mt-8"
              initial={animate ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              {children}
            </motion.div>
          ) : null}
        </div>

        <div className="relative mx-auto h-[540px] w-full max-w-lg overflow-visible sm:h-[620px] lg:max-w-none lg:h-[760px]">
          <div className="pointer-events-none absolute bottom-[6%] left-[52%] h-24 w-[75%] -translate-x-1/2 rounded-[100%] bg-bg/50 blur-3xl" />

          <motion.div
            className="absolute inset-0 flex items-end justify-center lg:justify-end"
            style={{ transformOrigin: "50% 90%" }}
            initial={
              animate
                ? {
                    y: "-130%",
                    x: 40,
                    rotate: -28,
                    scale: 1.15,
                    opacity: 0,
                    filter: "brightness(1.4) blur(4px)",
                  }
                : false
            }
            animate={
              animate
                ? {
                    y: ["-130%", "8%", "-2%", "0%"],
                    x: [40, -6, 2, 0],
                    rotate: [-28, -4, -10, -7],
                    scale: [1.15, 1.05, 1.02, 1],
                    opacity: [0, 1, 1, 1],
                    filter: [
                      "brightness(1.4) blur(4px)",
                      "brightness(1.2) blur(0px)",
                      "brightness(1.05) blur(0px)",
                      "brightness(1) blur(0px)",
                    ],
                  }
                : {
                    y: "0%",
                    rotate: -7,
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={
              animate
                ? {
                    duration: 1.45,
                    delay: 0.15,
                    times: [0, 0.62, 0.78, 1],
                    ease: [0.16, 0.84, 0.28, 1],
                  }
                : { duration: 0 }
            }
          >
            <motion.div
              className="relative h-[120%] w-[100%] lg:mr-[-2%] lg:w-[95%]"
              animate={
                animate
                  ? {
                      y: [0, -12, 0],
                    }
                  : undefined
              }
              transition={
                animate
                  ? {
                      delay: 1.75,
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : undefined
              }
            >
              <Image
                src={knifeSrc}
                alt={knifeAlt}
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_45px_70px_rgba(0,0,0,0.95)]"
                sizes="(max-width: 1024px) 95vw, 720px"
              />

              {/* Steel gleam sweep */}
              {animate ? (
                <motion.div
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.7, delay: 1.05 }}
                >
                  <motion.div
                    className="absolute -inset-y-8 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                    initial={{ left: "-40%" }}
                    animate={{ left: "120%" }}
                    transition={{ duration: 0.65, delay: 1.05, ease: "easeInOut" }}
                  />
                </motion.div>
              ) : null}
            </motion.div>
          </motion.div>

          {/* Impact flash + ground shockwave */}
          {animate ? (
            <>
              <motion.div
                className="pointer-events-none absolute bottom-[12%] left-[55%] h-40 w-40 -translate-x-1/2 rounded-full bg-gold/30 blur-3xl"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: [0, 1, 0], scale: [0.2, 1.6, 2.4] }}
                transition={{ duration: 0.85, delay: 0.95, ease: "easeOut" }}
              />
              <motion.div
                className="pointer-events-none absolute bottom-[10%] left-[55%] h-3 w-[55%] -translate-x-1/2 rounded-full border border-gold/40"
                initial={{ opacity: 0, scaleX: 0.3 }}
                animate={{ opacity: [0, 0.7, 0], scaleX: [0.3, 1.2, 1.5] }}
                transition={{ duration: 0.7, delay: 0.98, ease: "easeOut" }}
              />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
