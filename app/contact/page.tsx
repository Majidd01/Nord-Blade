import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { contactReasons, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NORDBLADE. Chat on WhatsApp for launch, OEM, or brand growth projects.",
};

export default function ContactPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="Get in Touch"
        title="Let's Build Something Extraordinary Together."
        description="Have a question, project idea, or bulk order? One click connects you with the NORDBLADE team — ready to take your knife brand to the next level."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        backgroundSrc={heroImages.contact.background}
        knifeSrc={heroImages.contact.knife}
      >
        <div className="space-y-3">
          <WhatsAppButton
            variant="solid"
            size="lg"
            message="Hi NORDBLADE, I'd like to get in touch about a project."
          />
          <p className="text-sm italic text-gold-soft">One click. Direct connection.</p>
        </div>
      </FullBleedHero>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-4">
          <article className="rounded-lg border border-gold/25 bg-surface p-6">
            <p className="font-display text-xs tracking-[0.18em] text-gold uppercase">
              Our Office
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.address}</p>
            <p className="mt-4 text-xs tracking-[0.14em] text-text/70 uppercase">
              Export-ready manufacturing hub
            </p>
          </article>

          <article className="rounded-lg border border-gold/25 bg-surface p-6">
            <p className="font-display text-xs tracking-[0.18em] text-gold uppercase">
              Call Us
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-3 block text-sm text-text hover:text-gold"
            >
              {siteConfig.phone}
            </a>
            <p className="mt-4 text-sm text-muted">{siteConfig.hours}</p>
          </article>

          <article className="rounded-lg border border-gold/25 bg-surface p-6">
            <p className="font-display text-xs tracking-[0.18em] text-gold uppercase">
              Email & Shipping
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 block text-sm text-text hover:text-gold"
            >
              {siteConfig.email}
            </a>
            <a
              href={`mailto:${siteConfig.emailShipping}`}
              className="mt-1 block text-sm text-muted hover:text-gold"
            >
              {siteConfig.emailShipping}
            </a>
            <p className="mt-4 font-display text-xs tracking-[0.16em] text-gold uppercase">
              We Ship Worldwide
            </p>
          </article>

          <article className="rounded-lg border border-gold/25 bg-surface p-6">
            <ContactForm />
          </article>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <SectionHeading eyebrow="Why Contact Nordblade?" title="Clear Answers. Real Momentum." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {contactReasons.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xs tracking-[0.16em] text-gold uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Project?"
        description="Skip the back-and-forth — message us on WhatsApp and start today."
        message="Hi NORDBLADE, I'm ready to start my project."
      />
    </>
  );
}
