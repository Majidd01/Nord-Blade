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
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage:
            "url(/images/hero-mountains-rocks.png)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/75 via-bg/55 to-bg/35" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 md:flex-row md:items-center lg:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-text sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-muted">{description}</p>
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
