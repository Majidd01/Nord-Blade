import Image from "next/image";
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
      <Image
        src="/brand/nordblade-wordmark.png"
        alt="NORDBLADE"
        width={280}
        height={48}
        priority
        className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-90 sm:h-9"
      />
      {showTagline ? (
        <span className="mt-1 text-[0.55rem] tracking-[0.22em] text-muted sm:text-[0.58rem]">
          {siteConfig.tagline}
        </span>
      ) : null}
    </Link>
  );
}
