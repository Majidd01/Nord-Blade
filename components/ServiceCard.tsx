"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/lib/site";

const images = [
  "/images/hero-scene-clean.png",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
];

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
  index: number;
  showImage?: boolean;
};

export function ServiceCard({ service, index, showImage = true }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gold/25 bg-surface transition-colors hover:border-gold/50"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      {showImage ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={images[index] ?? images[0]}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 font-display text-xs text-gold">
            {service.number}
          </span>
          <h3 className="font-display text-xl tracking-[0.1em] text-text uppercase">
            {service.title}
          </h3>
        </div>
        <p className="text-sm font-medium text-gold">{service.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>

        <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {service.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-text/90">
              <span className="mt-1 text-gold" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <WhatsAppButton
            className="w-full"
            label={service.cta}
            sublabel="Chat on WhatsApp"
            message={service.message}
          />
          <Link
            href={service.href}
            className="text-center font-display text-xs tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold-soft"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
