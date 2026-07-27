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
      className={`group inline-flex shrink-0 items-center no-underline ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
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
