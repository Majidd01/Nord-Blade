import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grow Your Brand",
  description:
    "Struggling knife brand sales? NORDBLADE analyzes products, packaging, and go-to-market — then helps you grow.",
};

const grow = services[2];

const growthSteps = [
  {
    title: "Diagnose",
    description:
      "We review product, photos, packaging, pricing position, and channel performance.",
  },
  {
    title: "Fix the Product Story",
    description:
      "Refine blade models, materials, and packaging so the brand looks premium and competitive.",
  },
  {
    title: "Rebuild Demand Assets",
    description:
      "Listings, photography direction, and messaging that convert browsers into buyers.",
  },
  {
    title: "Execute & Scale",
    description:
      "A practical growth roadmap — what to launch next, what to kill, and where to push volume.",
  },
];

export default function GrowBrandPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="Grow Your Brand"
        title={
          <>
            Low Sales? <span className="text-gold">We Fix It. We Grow It.</span>
          </>
        }
        description="Already have a knife brand but traction is stuck? We partner with struggling small brands to analyze, optimize, and grow — without fluff."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Grow Your Brand" },
        ]}
        backgroundSrc={heroImages.grow.background}
        knifeSrc={heroImages.grow.knife}
      >
        <WhatsAppButton
          size="lg"
          label="Improve My Brand"
          sublabel="Chat on WhatsApp"
          message={grow.message}
        />
      </FullBleedHero>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For Brands With Potential — And Plateau"
              title="We Don't Guess. We Rebuild Momentum."
              description="Most struggling brands don't need more random SKUs. They need sharper positioning, better presentation, and a manufacturing partner who understands retail reality."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {grow.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text/90">
                  <span className="text-gold" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20">
            <Image
              src="/images/hero-scene-clean.png"
              alt="Premium knife brand craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <SectionHeading eyebrow="How Growth Works" title="A Clear Path Out of Stagnation" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {growthSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-gold/20 bg-bg/40 p-6"
              >
                <p className="font-display text-xs tracking-[0.2em] text-gold uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-lg tracking-[0.08em] text-text uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Find What's Holding Your Brand Back"
        description="Send your catalog or store link — we'll start the growth conversation on WhatsApp."
        label="Improve My Brand"
        message={grow.message}
      />
    </>
  );
}
