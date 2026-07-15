import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { IconGrid } from "@/components/IconGrid";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { aboutPillars, stats, trustReasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Passion. Precision. Partnership. Learn about NORDBLADE — premium knife manufacturing and brand growth from Sialkot, Pakistan.",
};

const storyPillars = [
  {
    title: "Why Pakistan?",
    description:
      "Sialkot's manufacturing heritage gives us deep craft roots and export-ready discipline.",
  },
  {
    title: "Why Handmade?",
    description:
      "Hands still shape the edge of quality — finish, feel, and consistency you can sell.",
  },
  {
    title: "Our Team",
    description:
      "Makers, QC, and brand partners working as one crew for your line.",
  },
];

export default function AboutPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="About Nordblade"
        title={
          <>
            Passion. Precision. Partnership.{" "}
            <span className="text-gold">That&apos;s Nordblade.</span>
          </>
        }
        description="We exist to help knife brands — new and established — manufacture with confidence and grow with clarity. Crafted by passion. Built on trust."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundSrc={heroImages.about.background}
        knifeSrc={heroImages.about.knife}
      >
        <WhatsAppButton
          size="lg"
          message="Hi NORDBLADE, I'd like to learn more about partnering with you."
        />
      </FullBleedHero>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-gold/20">
            <Image
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=80"
              alt="Workshop craftsmanship with sparks"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="From a Simple Belief to a Global Mission."
              description="NORDBLADE started with a belief: great knives deserve great brands behind them. From Sialkot's crafting floors to partners across continents, we combine manufacturing excellence with brand-building systems — so founders don't have to choose between quality and growth."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <SectionHeading eyebrow="Who We Are" title="What Drives Every Project" />
          <div className="mt-12">
            <IconGrid items={[...aboutPillars, ...storyPillars]} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Why Brands Trust Nordblade"
          title="We Don't Just Make Knives. We Build Businesses."
        />
        <div className="mt-12">
          <IconGrid items={trustReasons} />
        </div>
      </section>

      <section className="border-y border-gold/15 bg-surface/70">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 lg:grid-cols-[1fr_1.2fr_0.9fr] lg:px-6">
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-lg border border-gold/20 lg:block">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80"
              alt="Craftsman at work"
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-4xl tracking-wide text-gold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-gold/40 bg-bg/60 p-6">
            <h3 className="font-display text-lg tracking-[0.1em] text-text uppercase">
              Ready to Start Your Journey?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Tell us about your brand or idea — we&apos;ll reply on WhatsApp.
            </p>
            <div className="mt-5">
              <WhatsAppButton
                variant="solid"
                className="w-full"
                message="Hi NORDBLADE, I'm ready to start my journey."
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Build Your Legacy Together"
        description="Your brand. Our expertise. Unlimited possibilities."
        message="Hi NORDBLADE, let's build something extraordinary together."
      />
    </>
  );
}
