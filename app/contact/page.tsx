import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { contactReasons, pageBannerCards, siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NORDBLADE. UK business line, WhatsApp for projects & manufacturing, and business hours.",
};

export default function ContactPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="Get in Touch"
        title="Let's Build Something Extraordinary Together."
        description="Have a question, project idea, or bulk order? Reach us on the UK line or WhatsApp — the NORDBLADE team is ready to take your knife brand to the next level."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        backgroundSrc={heroImages.contact.background}
        knifeSrc={heroImages.contact.knife}
        cards={pageBannerCards.contact}
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

      {/* Trust strip */}
      <section className="border-b border-gold/15 bg-surface/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-center sm:gap-10 lg:px-6">
          <p className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-text/85 uppercase">
            <span aria-hidden>📍</span>
            {siteConfig.registration}
          </p>
          <span className="hidden h-3 w-px bg-gold/30 sm:block" aria-hidden />
          <p className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-text/85 uppercase">
            <span aria-hidden>🏭</span>
            Manufacturing Facilities: {siteConfig.manufacturing}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Contact Details"
          title="How To Reach Us"
          description="UK business line for general enquiries. WhatsApp for projects and manufacturing."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border border-gold/25 bg-surface p-7">
            <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">
              📞 UK Business Line
            </p>
            <a
              href={`tel:${siteConfig.phoneUK.replace(/\s/g, "")}`}
              className="mt-4 block font-display text-2xl tracking-wide text-text transition-colors hover:text-gold"
            >
              {siteConfig.phoneUK}
            </a>
            <p className="mt-3 text-sm text-muted">Calls & general business enquiries</p>
          </article>

          <article className="rounded-lg border border-gold/25 bg-surface p-7">
            <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">
              💬 WhatsApp
            </p>
            <p className="mt-2 text-[0.65rem] font-medium tracking-[0.18em] text-muted uppercase">
              Projects & Manufacturing
            </p>
            <a
              href={whatsappUrl("Hi NORDBLADE, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-display text-2xl tracking-wide text-text transition-colors hover:text-gold"
            >
              {siteConfig.whatsappDisplay}
            </a>
            <div className="mt-5">
              <WhatsAppButton
                size="sm"
                label="Chat on WhatsApp"
                message="Hi NORDBLADE, I'd like to discuss a project."
              />
            </div>
          </article>

          <article className="rounded-lg border border-gold/25 bg-surface p-7 sm:col-span-2 lg:col-span-1">
            <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">
              🕒 Business Hours
            </p>
            <p className="mt-4 font-display text-xl tracking-wide text-text">
              {siteConfig.hoursDays}
            </p>
            <p className="mt-2 text-sm text-muted">{siteConfig.hoursTime}</p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-gold/25 bg-surface p-7">
            <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">
              Email & Shipping
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-text hover:text-gold"
            >
              {siteConfig.email}
            </a>
            <a
              href={`mailto:${siteConfig.emailShipping}`}
              className="mt-1 block text-sm text-muted hover:text-gold"
            >
              {siteConfig.emailShipping}
            </a>
            <p className="mt-4 text-[0.65rem] font-medium tracking-[0.16em] text-gold uppercase">
              We Ship Worldwide
            </p>
          </article>

          <article className="rounded-lg border border-gold/25 bg-surface p-7">
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
        title="Ready to Start Your Project?"
        description="Skip the back-and-forth — message us on WhatsApp and start today."
        message="Hi NORDBLADE, I'm ready to start my project."
      />
    </>
  );
}
