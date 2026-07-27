import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  showTagline?: boolean;
  className?: string;
};

function NordbladeMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <circle cx="32" cy="32" r="30" fill="#050505" stroke="#c5a059" strokeWidth="2.5" />
      <path fill="#ffffff" d="M32 16 L48 44 H16 Z" />
    </svg>
  );
}

export function Logo({ showTagline = true, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center gap-2.5 no-underline ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <NordbladeMark className="h-9 w-9 shrink-0 transition-opacity duration-300 group-hover:opacity-90 sm:h-10 sm:w-10" />
      <span className="inline-flex flex-col">
        <span className="text-[1.05rem] font-semibold leading-none tracking-[0.22em] text-gold uppercase transition-colors duration-300 group-hover:text-gold-soft sm:text-[1.15rem] xl:text-[1.2rem] xl:tracking-[0.24em]">
          NORDBLADE
        </span>
        {showTagline ? (
          <span className="mt-1 text-[0.45rem] font-medium tracking-[0.2em] text-[#8e8e8e] uppercase sm:text-[0.5rem] xl:tracking-[0.22em]">
            {siteConfig.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
