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
        <p className="mb-3 flex items-center gap-3 font-display text-xs tracking-[0.28em] text-gold uppercase">
          <span className="hidden h-px w-8 bg-gold sm:block" aria-hidden />
          {eyebrow}
          <span className="hidden h-px w-8 bg-gold sm:block" aria-hidden />
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight tracking-[0.06em] text-text uppercase sm:text-4xl text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
