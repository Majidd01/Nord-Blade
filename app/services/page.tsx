import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FullBleedHero } from "@/components/hero/FullBleedHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ValueBar } from "@/components/ValueBar";
import { heroImages } from "@/lib/heroes";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Three paths. One partner. Launch your knife brand, manufacture at scale, or grow sales with NORDBLADE.",
};

export default function ServicesPage() {
  return (
    <>
      <FullBleedHero
        eyebrow="Our Services"
        title="Our Services"
        description="No matter where you are in your knife business journey, we have the expertise to take you to the next level."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
        ]}
        backgroundSrc={heroImages.services.background}
        knifeSrc={heroImages.services.knife}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Three Paths. One Partner."
          title="Choose the Path That Fits Your Stage"
          description="Each path ends in the same place: a stronger brand, sharper product, and a team that sticks with you."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <ValueBar />

      <CTABanner
        title="Not Sure Which Path Fits?"
        description="Message us on WhatsApp — we'll help you pick the right starting point."
        message="Hi NORDBLADE, I'm not sure which service I need. Can you guide me?"
      />
    </>
  );
}
