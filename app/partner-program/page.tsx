import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { partnerProgram } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Invest in a knife brand with NORDBLADE. We build the business together — manufacturing, growth, and shared profits.",
};

export default function PartnerProgramPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="🤝 NordBlade Partner Program"
        title={
          <>
            Invest With Us.{" "}
            <span className="text-gold">Grow Together.</span>
          </>
        }
        description="Bring your investment — we bring manufacturing, brand expertise, and growth. Build a profitable knife business with transparent profit sharing between both partners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner Program" },
        ]}
        backgroundSrc={heroImages.partner.background}
        knifeSrc={heroImages.partner.knife}
      >
        <WhatsAppButton
          variant="solid"
          size="lg"
          label="Discuss Partnership"
          sublabel="Chat on WhatsApp"
          message={partnerProgram.message}
        />
      </FullBleedHero>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="A Clear Path From Investment to Shared Returns"
          description="No guesswork — we structure the partnership upfront so you know how capital, effort, and profits align."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {partnerProgram.steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-gold/15 bg-surface/40 p-8 transition-colors hover:border-crimson/30"
            >
              <span className="font-display text-3xl text-crimson-soft">{step.number}</span>
              <h3 className="mt-3 font-display text-2xl text-gold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-6">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What You Get"
              title="More Than Manufacturing — A True Business Partner"
            />
            <ul className="mt-8 space-y-3">
              {partnerProgram.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text/90">
                  <span className="mt-0.5 text-crimson-soft" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-crimson/20 bg-crimson-muted p-8">
            <h3 className="font-display text-2xl text-text">Profit Sharing</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Profits from the business are shared between you and NORDBLADE based on a
              structure we define together — investment level, responsibilities, and
              growth targets. Everything is discussed openly before we start.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              You are not buying a one-off order. You are entering a partnership where
              both sides are invested in long-term success.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                label="Start the Conversation"
                message={partnerProgram.message}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Ideal Partners"
          title="Who This Program Is For"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {partnerProgram.idealFor.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/5 bg-surface/30 px-6 py-5 text-sm text-muted"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to Build Something Together?"
        description="Share your investment range and vision — we'll outline how a NordBlade partnership could work for you."
        label="Discuss Partnership"
        message={partnerProgram.message}
      />
    </>
  );
}
