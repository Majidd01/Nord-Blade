import { WhatsAppButton } from "@/components/WhatsAppButton";

type CTABannerProps = {
  title: string;
  description?: string;
  note?: string;
  message?: string;
  label?: string;
};

export function CTABanner({
  title,
  description,
  note = "One click. Real people. Real solutions.",
  message,
  label = "Chat on WhatsApp",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden border-y border-gold/20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85"
        style={{
          backgroundImage:
            "url(/images/hero-mountains-rocks.png)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/45 via-bg/20 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-10 md:flex-row md:items-center lg:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-[1.05] text-text sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm text-muted sm:text-base">{description}</p>
          ) : null}
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-center">
          <WhatsAppButton variant="solid" size="lg" label={label} message={message} />
          <p className="text-sm italic text-gold-soft">{note}</p>
        </div>
      </div>
    </section>
  );
}
