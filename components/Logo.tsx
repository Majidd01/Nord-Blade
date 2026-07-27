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
      className={`group inline-flex shrink-0 flex-col no-underline ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="font-logo text-[1.2rem] font-medium leading-none tracking-[0.3em] text-gold transition-colors duration-300 group-hover:text-gold-soft sm:text-[1.35rem]">
        NORDBLADE
      </span>
      {showTagline ? (
        <span className="mt-1.5 text-[0.5rem] font-medium tracking-[0.28em] text-[#8e8e8e] uppercase sm:text-[0.55rem]">
          {siteConfig.tagline}
        </span>
      ) : null}
    </Link>
  );
}
