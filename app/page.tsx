"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CTABanner } from "@/components/CTABanner";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueBar } from "@/components/ValueBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { homeBenefits, partnerProgram, services, stats } from "@/lib/site";

const benefitIcons = [
  "M12 2l2.2 6.6H21l-5.4 3.9 2.1 6.5L12 15.8 6.3 19l2.1-6.5L3 8.6h6.8L12 2z",
  "M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z",
  "M12 2a9 9 0 0 0-9 9c0 6 9 11 9 11s9-5 9-11a9 9 0 0 0-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
];

const serviceIcons = [
  "M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM9 12h6v2H9v-2zm0 4h6v2H9v-2z",
  "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
  "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
];

const pathFeatures = [
  {
    ...services[0],
    image: heroImages.launch.background,
    highlights: ["Idea to first sale", "Brand + packaging", "Launch assets"],
  },
  {
    ...services[1],
    image: heroImages.oem.background,
    highlights: ["Private label", "Bulk capacity", "Global shipping"],
  },
  {
    ...services[2],
    image: heroImages.grow.background,
    highlights: ["Sales diagnosis", "Product fixes", "Growth roadmap"],
  },
] as const;

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <FullBleedHero
        eyebrow="Premium Knife Manufacturing & Brand Growth Partner"
        title={
          <>
            We don&apos;t just make knives.
            <br />
            <span className="text-gold">We build knife brands.</span>
          </>
        }
        description="From first sketch to scaling sales — NORDBLADE is your manufacturing and brand growth partner. Launch a new brand, fulfill bulk OEM orders, or revive a line that isn't selling."
        backgroundSrc={heroImages.home.background}
        knifeSrc={heroImages.home.knife}
      >
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {homeBenefits.map((benefit, i) => (
              <div key={benefit.title} className="flex gap-3">
                <span className="mt-0.5 text-gold" aria-hidden>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={benefitIcons[i]} />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.65rem] font-medium tracking-[0.16em] text-gold uppercase">
                    {benefit.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              variant="solid"
              size="lg"
              label="Start Your Project"
              message="Hi NORDBLADE, I want to start a knife brand project."
            />
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-gold/50 px-7 py-4 text-sm text-text transition-colors hover:border-gold hover:bg-gold/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </FullBleedHero>

      {/* Three paths overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Three Paths"
          title="One Partner. Every Stage."
          description="Whether you are starting from scratch, manufacturing at scale, or fighting for traction — we have a clear path forward."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              className="group rounded-2xl border border-gold/15 bg-surface/50 p-7 transition-colors hover:border-gold/35"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 text-gold">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d={serviceIcons[index]} />
                </svg>
              </div>
              <p className="font-display text-sm text-gold">
                {service.number}
              </p>
              <h3 className="mt-2 font-display text-xl text-text">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>
              <Link
                href={service.href}
                className="mt-6 inline-flex text-sm text-gold transition-colors group-hover:text-gold-soft"
              >
                Learn more →
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm text-gold underline-offset-4 hover:underline"
          >
            View all services →
          </Link>
        </div>
      </section>

      <ValueBar />

      {/* Partner Program highlight */}
      <section className="relative overflow-hidden border-y border-crimson/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(158,74,74,0.1),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:px-6">
          <div>
            <p className="text-xs tracking-[0.18em] text-crimson-soft">🤝 Partner Program</p>
            <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
              Invest With Us. <span className="text-gold">Share the Profits.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Bring investment — we build and grow the business together. Manufacturing,
              branding, and sales on our side; transparent profit sharing on both sides.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={partnerProgram.href}
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-gold-soft"
              >
                Learn About Partnership
              </Link>
              <WhatsAppButton
                size="sm"
                label="Discuss on WhatsApp"
                message={partnerProgram.message}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {partnerProgram.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gold/15 bg-surface/40 p-5"
              >
                <p className="font-display text-2xl text-crimson-soft">{step.number}</p>
                <p className="mt-2 font-display text-lg text-gold">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured path deep-dives */}
      {pathFeatures.map((path, index) => {
        const imageLeft = index % 2 === 1;
        return (
          <section
            key={path.slug}
            className="border-b border-white/5 bg-bg"
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:px-6 ${
                imageLeft ? "" : ""
              }`}
            >
              <motion.div
                className={`relative aspect-[16/11] overflow-hidden ${
                  imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
                initial={reduceMotion ? false : { opacity: 0, x: imageLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
              >
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/55 to-transparent" />
                <span className="absolute bottom-4 left-4 font-display text-sm text-gold">
                  {path.number} {path.title}
                </span>
              </motion.div>

              <motion.div
                className={imageLeft ? "lg:order-2" : "lg:order-1"}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-sm text-gold">
                  {path.tagline}
                </p>
                <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
                  {path.title}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                  {path.short}
                </p>
                <ul className="mt-6 space-y-2">
                  {path.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text/90">
                      <span className="text-gold" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={path.href}
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-gold-soft"
                  >
                    Explore {path.title.split(" ").slice(0, 2).join(" ")}
                  </Link>
                  <WhatsAppButton size="sm" label={path.cta} message={path.message} />
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Stats → About */}
      <section className="relative overflow-hidden border-y border-gold/15">
        <div className="absolute inset-0">
          <Image
            src={heroImages.about.background}
            alt=""
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bg/65" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Why Brands Trust Us"
              title="Results Built On Craft And Partnership."
              description="A decade of manufacturing discipline. Hundreds of brands. One promise: premium quality that sells."
            />
            <Link
              href="/about"
              className="shrink-0 text-sm text-gold transition-colors hover:text-gold-soft"
            >
              About NORDBLADE →
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <p className="font-display text-4xl tracking-wide text-gold sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Contact split */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold/15"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src={heroImages.about.background}
              alt="About NORDBLADE"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/45 to-bg/15" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="text-sm text-gold">
                Our Story
              </p>
              <h2 className="mt-2 font-display text-2xl text-text sm:text-3xl">
                Passion. Precision. Partnership.
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted">
                From Sialkot workshops to brands worldwide — meet the team behind the blade.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex w-fit text-sm text-gold hover:text-gold-soft"
              >
                Read about us →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold/15"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <Image
              src={heroImages.contact.background}
              alt="Contact NORDBLADE"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/45 to-bg/15" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="text-sm text-gold">
                Get In Touch
              </p>
              <h2 className="mt-2 font-display text-2xl text-text sm:text-3xl">
                Let&apos;s Build Something Extraordinary.
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted">
                Project idea, bulk quote, or growth question — we reply on WhatsApp.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex text-sm text-gold hover:text-gold-soft"
                >
                  Contact page →
                </Link>
                <WhatsAppButton size="sm" message="Hi NORDBLADE, I'd like to talk." />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick links strip */}
      <section className="border-y border-white/8 bg-surface/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-8 lg:px-6">
          {[
            { href: "/launch-your-brand", label: "Launch" },
            { href: "/oem-manufacturing", label: "OEM" },
            { href: "/grow-your-brand", label: "Grow" },
            { href: "/partner-program", label: "Partner" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Journey?"
        description="Tell us where you are — idea, bulk order, growth plateau, or partnership — and we'll take the next step with you."
        message="Hi NORDBLADE, I'm ready to start."
      />
    </>
  );
}
