import { whatsappUrl } from "@/lib/site";

type WhatsAppButtonProps = {
  label?: string;
  sublabel?: string;
  message?: string;
  variant?: "solid" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
};

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.82c0 2.08.55 4.11 1.6 5.9L0 24l6.45-1.69a11.8 11.8 0 0 0 5.59 1.42h.01c6.54 0 11.84-5.3 11.84-11.82 0-3.16-1.23-6.13-3.37-8.43ZM12.05 21.15h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.77 9.77 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.82-9.8a9.75 9.75 0 0 1 6.94 2.87 9.72 9.72 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.72 9.8Zm5.37-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.17-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.34Z" />
    </svg>
  );
}

const sizeClasses = {
  sm: "px-4 py-2.5 text-xs gap-2",
  md: "px-5 py-3 text-sm gap-2.5",
  lg: "px-7 py-4 text-sm gap-3 sm:text-base",
};

export function WhatsAppButton({
  label = "Chat on WhatsApp",
  sublabel,
  message,
  variant = "outline",
  className = "",
  size = "md",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gold text-bg hover:bg-gold-soft shadow-sm"
      : "border border-gold/50 text-text hover:border-gold hover:bg-gold/8";

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${sizeClasses[size]} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      <span className="flex flex-col items-start leading-tight">
        <span>{label}</span>
        {sublabel ? (
          <span className="mt-0.5 text-[0.65rem] font-normal tracking-normal opacity-75">
            {sublabel}
          </span>
        ) : null}
      </span>
    </a>
  );
}
