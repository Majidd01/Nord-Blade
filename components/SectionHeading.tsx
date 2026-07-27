type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-2 flex items-center gap-3 text-[0.65rem] font-medium tracking-[0.2em] text-gold uppercase">
          <span className="hidden h-px w-8 bg-gold/40 sm:block" aria-hidden />
          {eyebrow}
          <span className="hidden h-px w-8 bg-gold/40 sm:block" aria-hidden />
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-[1.05] text-text sm:text-4xl text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
