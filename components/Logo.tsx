import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  showTagline?: boolean;
  className?: string;
};

export function Logo({ showTagline = true, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col no-underline ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="font-display text-[1.55rem] font-semibold leading-none tracking-[0.32em] text-gold transition-colors duration-300 group-hover:text-gold-soft sm:text-[1.75rem]">
        NORDBLADE
      </span>
      {showTagline ? (
        <span className="mt-1.5 text-[0.55rem] font-medium tracking-[0.24em] text-muted uppercase sm:text-[0.58rem]">
          {siteConfig.tagline}
        </span>
      ) : null}
    </Link>
  );
}
