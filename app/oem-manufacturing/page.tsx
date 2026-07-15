import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "OEM Manufacturing",
  description:
    "Private label and bulk knife manufacturing with premium materials, quality control, and worldwide shipping via WhatsApp quote.",
};

const oem = services[1];

const capabilities = [
  {
    title: "Private Label",
    description: "Your brand on precision-built blades — consistent specs every batch.",
  },
  {
    title: "Bulk Orders",
    description: "Reliable production capacity for growing catalogs and seasonal demand.",
  },
  {
    title: "Premium Materials",
    description: "Damascus, stainless, and handle materials matched to your market.",
  },
  {
    title: "Custom Designs",
    description: "Work from your drawings or refine existing lines with our makers.",
  },
  {
    title: "Quality Control",
    description: "Inspection at key stages so units ship sharp, stable, and on-spec.",
  },
  {
    title: "Worldwide Shipping",
    description: "Export-ready packing and logistics support for global destinations.",
  },
];

export default function OemPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="OEM Manufacturing"
        title={
          <>
            Reliable Manufacturing.{" "}
            <span className="text-gold">Consistent Quality.</span>
          </>
        }
        description="Already have a knife brand? Partner with NORDBLADE for private label and bulk manufacturing — discussed and quoted directly on WhatsApp."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "OEM Manufacturing" },
        ]}
        backgroundSrc={heroImages.oem.background}
        knifeSrc={heroImages.oem.knife}
      >
        <WhatsAppButton
          size="lg"
          label="Discuss OEM Project"
          sublabel="Chat on WhatsApp"
          message={oem.message}
        />
      </FullBleedHero>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80"
              alt="Blacksmith forging steel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Built for Brands That Ship"
              title="Bulk & Private Label Without the Guesswork"
              description="Share your specs, volumes, and timeline. We respond on WhatsApp with clear next steps — materials, sampling, and production windows."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {oem.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text/90">
                  <span className="text-gold" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="What You Can Expect From Our Floor"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gold/20 bg-bg/40 p-6"
              >
                <h3 className="font-display text-sm tracking-[0.16em] text-gold uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Quote a Bulk Order?"
        description="Send quantities, models, and destination — we'll take it from there on WhatsApp."
        label="Discuss OEM Project"
        message={oem.message}
      />
    </>
  );
}
