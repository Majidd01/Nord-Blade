import type { Metadata } from "next";
import Image from "next/image";
import { HeroBannerCards } from "@/components/HeroBannerCards";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImages } from "@/lib/heroes";
import { pageBannerCards, partnerProgram, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Become a NORDBLADE partner. Invest from $5,000 — we manage everything. Profits shared 50/50.",
};

function GoldIcon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function PartnerProgramPage() {
  const p = partnerProgram;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0">
          <Image
            src={heroImages.partner.background}
            alt=""
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-3 md:pt-12 md:pb-2 lg:px-6">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="text-[0.65rem] font-medium tracking-[0.26em] text-gold uppercase">
              {p.heroEyebrow}
            </p>
            <h1 className="mt-2.5 font-display text-[2.15rem] leading-[1.05] tracking-[0.04em] text-text uppercase [text-shadow:0_2px_20px_rgba(0,0,0,0.65)] sm:text-4xl lg:text-[2.85rem]">
              {p.heroTitleWhite}
              <br />
              <span className="text-gold">{p.heroTitleGold}</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#e5e5e5] [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              {p.heroDescription}
            </p>

            {/* Hero highlight blocks — always visible */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
              {p.heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-gold/35 bg-black/45 p-3 backdrop-blur-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <GoldIcon d={item.icon} className="h-4 w-4" />
                  </span>
                  <p className="mt-2 text-[0.58rem] font-semibold tracking-[0.12em] text-gold uppercase">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[0.68rem] leading-snug text-[#cfcfcf]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                variant="solid"
                size="md"
                label="Discuss on WhatsApp"
                message={p.message}
                className="!rounded-md tracking-[0.08em] uppercase"
              />
              <div className="inline-flex h-[42px] items-center gap-2.5 rounded-md bg-gold px-4 text-bg shadow-sm">
                <span className="text-[0.58rem] font-semibold leading-tight tracking-[0.12em] uppercase opacity-85">
                  Min.
                  <br />
                  Investment
                </span>
                <span className="h-6 w-px bg-bg/25" aria-hidden />
                <span className="font-display text-xl leading-none tracking-wide">
                  {p.minInvestment}
                </span>
              </div>
            </div>
            <p className="mt-2 text-[0.68rem] text-[#bdbdbd]">
              All details &amp; next steps will be discussed on WhatsApp.
            </p>
          </div>

          {/* Bottom banner blocks */}
          <div className="mt-4 md:mt-5">
            <HeroBannerCards cards={pageBannerCards.partner} />
          </div>
        </div>
      </section>

      {/* PROCESS — 8 STEPS */}
      <section className="border-b border-gold/15 bg-bg px-4 py-8 lg:px-6 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px flex-1 bg-gold/40 sm:block" aria-hidden />
            <h2 className="text-center text-[0.72rem] font-semibold tracking-[0.24em] text-gold uppercase sm:text-[0.78rem]">
              How Our Partner Program Works
            </h2>
            <span className="hidden h-px flex-1 bg-gold/40 sm:block" aria-hidden />
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-8 lg:gap-1 lg:overflow-visible">
            {p.processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex min-w-[130px] flex-1 flex-col items-center px-1 text-center lg:min-w-0"
              >
                <span className="text-gold">
                  <GoldIcon d={step.icon} className="h-6 w-6" />
                </span>
                <p className="mt-2 font-display text-lg text-gold">{step.number}</p>
                <p className="mt-0.5 text-[0.62rem] font-semibold tracking-[0.1em] text-gold uppercase">
                  {step.title}
                </p>
                <p className="mt-1.5 text-[0.65rem] leading-snug text-[#cfcfcf]">
                  {step.description}
                </p>
                {index < p.processSteps.length - 1 ? (
                  <span className="absolute top-2 -right-1 hidden text-gold/70 lg:block" aria-hidden>
                    ›
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT + TERMS */}
      <section className="border-b border-gold/15 bg-bg px-4 py-8 lg:px-6 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-2 lg:gap-4">
          <article className="rounded-md border border-gold/30 bg-surface/40 p-5 sm:p-6">
            <h3 className="text-center text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Payment Schedule
            </h3>
            <div className="mt-5 space-y-5">
              {p.payments.map((pay) => (
                <div
                  key={pay.label}
                  className="grid grid-cols-[auto_1fr] items-start gap-3 sm:grid-cols-[auto_auto_1fr] sm:items-center sm:gap-4"
                >
                  <div>
                    <p className="font-display text-3xl leading-none text-gold sm:text-4xl">
                      {pay.percent}
                    </p>
                    <p className="mt-1 text-[0.62rem] font-semibold tracking-[0.12em] text-gold uppercase">
                      {pay.label}
                    </p>
                  </div>
                  <span className="hidden text-gold sm:block">
                    <GoldIcon d={pay.icon} className="h-7 w-7" />
                  </span>
                  <p className="col-span-2 text-sm leading-relaxed text-[#d4d4d4] sm:col-span-1">
                    {pay.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-md border border-gold/30 bg-surface/40 p-5 sm:p-6">
            <h3 className="text-center text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Important Terms
            </h3>
            <ul className="mt-5 space-y-3.5">
              {p.terms.map((term) => (
                <li key={term.title} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-gold">
                    <GoldIcon d={term.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.1em] text-gold uppercase">
                      {term.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#d4d4d4]">
                      {term.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* WHAT WE DO / WHERE WE SELL / PROFIT */}
      <section className="border-b border-gold/15 bg-bg px-4 py-8 lg:px-6 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-3 lg:gap-4">
          <article className="flex flex-col rounded-md border border-gold/30 bg-surface/40 p-5">
            <h3 className="text-center text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              What We Do
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-4">
              {p.whatWeDo.map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <span className="text-gold">
                    <GoldIcon d={item.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-1.5 text-[0.58rem] font-semibold tracking-[0.08em] text-gold uppercase">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-5 text-center text-[0.62rem] font-semibold tracking-[0.1em] text-gold uppercase">
              We take care of everything — you just invest and earn.
            </p>
          </article>

          <article className="flex flex-col items-center rounded-md border border-gold/30 bg-surface/40 p-5 text-center">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Where We Sell
            </h3>
            <p className="mt-6 font-display text-xl tracking-[0.18em] text-gold uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-[0.5rem] tracking-[0.2em] text-muted uppercase">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[#d4d4d4]">
              {p.whereWeSell}
            </p>
          </article>

          <article className="flex flex-col items-center rounded-md border border-gold/30 bg-surface/40 p-5 text-center">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Profit Sharing 50/50
            </h3>
            <div className="relative mt-5 h-32 w-32">
              <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
                <circle cx="60" cy="60" r="46" fill="none" stroke="#2a2a2a" strokeWidth="16" />
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  fill="none"
                  stroke="#c5a059"
                  strokeWidth="16"
                  strokeDasharray={`${Math.PI * 46} ${Math.PI * 46}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-xl text-gold">50/50</p>
              </div>
            </div>
            <div className="mt-3 space-y-0.5">
              <p className="text-xs font-semibold tracking-[0.1em] text-gold uppercase">
                50% For You
              </p>
              <p className="text-xs font-semibold tracking-[0.1em] text-[#9a9a9a] uppercase">
                50% For Us
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#d4d4d4]">
              {p.profitNote}
            </p>
          </article>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative overflow-hidden border-b border-gold/15">
        <div className="absolute inset-0">
          <Image
            src={heroImages.partner.background}
            alt=""
            fill
            className="object-cover object-center opacity-70 brightness-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-10 text-center lg:px-6 lg:py-10">
          <h2 className="font-display text-2xl tracking-[0.06em] text-text uppercase sm:text-3xl">
            Ready To Build Your Brand?
          </h2>
          <p className="mt-2 text-sm text-[#d4d4d4]">
            Let&apos;s build something exceptional together.
          </p>
          <div className="mt-5">
            <WhatsAppButton
              variant="solid"
              size="md"
              label="Discuss on WhatsApp"
              message={p.message}
              className="!rounded-md tracking-[0.08em] uppercase"
            />
          </div>
          <p className="mt-3 text-[0.68rem] text-[#b0b0b0]">
            All details, plans and next steps will be discussed on WhatsApp.
          </p>
        </div>
      </section>
    </>
  );
}
