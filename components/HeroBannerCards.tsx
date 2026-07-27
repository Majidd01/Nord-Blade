import Link from "next/link";

export type BannerCard = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  icon: string;
};

type HeroBannerCardsProps = {
  cards: readonly BannerCard[];
};

export function HeroBannerCards({ cards }: HeroBannerCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2.5">
      {cards.map((card) => {
        const content = (
          <>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/35 bg-gold/5 text-gold transition-colors group-hover:border-gold/70 group-hover:bg-gold/10"
              aria-hidden
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d={card.icon} />
              </svg>
            </span>
            <h3 className="mt-2.5 text-[0.62rem] font-semibold leading-snug tracking-[0.12em] text-gold uppercase lg:text-[0.68rem]">
              {card.title}
            </h3>
            <p className="mt-1.5 line-clamp-3 flex-1 text-[0.68rem] leading-relaxed text-[#cfcfcf]">
              {card.description}
            </p>
            {card.cta ? (
              <span className="mt-2.5 inline-flex items-center gap-1 text-[0.62rem] font-medium tracking-[0.08em] text-text/80 uppercase transition-colors group-hover:text-gold">
                {card.cta}
                <span aria-hidden>→</span>
              </span>
            ) : null}
          </>
        );

        const className =
          "group flex h-full flex-col rounded-lg border border-gold/25 bg-gradient-to-b from-surface/90 to-bg/80 p-3 shadow-[inset_0_1px_0_rgba(197,160,89,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/55 hover:from-surface hover:to-bg/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] lg:p-3.5";

        if (card.href) {
          return (
            <Link key={card.title} href={card.href} className={className}>
              {content}
            </Link>
          );
        }

        return (
          <div key={card.title} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
