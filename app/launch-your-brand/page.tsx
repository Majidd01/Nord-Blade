import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Launch Your Brand",
  description:
    "Turn your idea into a profitable knife brand. Strategy, manufacturing, packaging, marketing assets, and first-sale support.",
};

const launch = services[0];

export default function LaunchBrandPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="Launch Your Knife Brand"
        title={
          <>
            Turn Your Idea Into a{" "}
            <span className="text-gold">Profitable Knife Brand.</span>
          </>
        }
        description="You don't need years of experience — just a clear vision. We guide you from concept to first sale with manufacturing, branding, and launch support."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Launch Your Brand" },
        ]}
        backgroundSrc={heroImages.launch.background}
        knifeSrc={heroImages.launch.knife}
      >
        <div className="space-y-3">
          <p className="font-display text-sm tracking-[0.16em] text-text uppercase">
            We guide you. You build your legacy.
          </p>
          <WhatsAppButton
            size="lg"
            label="Start Your Brand Journey"
            sublabel="Chat on WhatsApp"
            message={launch.message}
          />
        </div>
      </FullBleedHero>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Our Proven Process"
          title="From Idea to First Sale — We're With You Every Step."
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </section>

      <section className="border-y border-gold/15 bg-surface/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 lg:px-6">
          {[
            {
              title: "Focused on Your Success",
              text: "Strategy built around your niche, not a generic template.",
            },
            {
              title: "Low Minimums",
              text: `Start with an investment from about ${siteConfig.investmentNote}.`,
            },
            {
              title: "First Sale Support",
              text: "Assets and guidance aimed at getting real orders.",
            },
            {
              title: "Ready to Start?",
              text: "Let's discuss your idea on WhatsApp today.",
              cta: true,
            },
          ].map((item) => (
            <div key={item.title} className="border-gold/20 md:border-r md:pr-6 md:last:border-r-0">
              <h3 className="font-display text-sm tracking-[0.16em] text-gold uppercase">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
              {"cta" in item && item.cta ? (
                <div className="mt-4">
                  <WhatsAppButton size="sm" label="Chat on WhatsApp" message={launch.message} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Your Brand Starts With One Conversation"
        description="Share your idea. We'll map the path from sketch to sale."
        label="Start Your Brand Journey"
        message={launch.message}
      />
    </>
  );
}
