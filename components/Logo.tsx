import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  showTagline?: boolean;
  className?: string;
};

/** Stacked Nord / blade — folding knife forms the N */
export function Logo({ showTagline = true, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col no-underline ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <svg
        className="h-11 w-auto transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-12"
        viewBox="0 0 200 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="nbMetal" x1="0" y1="0" x2="200" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8D09A" />
            <stop offset="0.35" stopColor="#C5A059" />
            <stop offset="0.7" stopColor="#A8843F" />
            <stop offset="1" stopColor="#D4B87A" />
          </linearGradient>
        </defs>

        <g transform="translate(4,2) skewX(-9)">
          {/* Folding knife as N */}
          <g>
            {/* Handle (top of left stem) */}
            <path
              fill="url(#nbMetal)"
              d="M2 2h20c3 0 5.5 2.5 5.5 5.5V34c0 2-1 3.8-2.6 4.8L14 46v8H2V2z"
            />
            {/* Opened blade pointing down */}
            <path
              fill="url(#nbMetal)"
              d="M4 46h12.5L13 78.5c-.4 2.8-3.1 4.7-5.9 4.2C4.2 82.1 2 79 2 75.5V50c0-2.2.9-4 2-4z"
            />
            {/* N diagonal */}
            <path fill="url(#nbMetal)" d="M18 44 46 6h16L22 54z" />
            {/* N right stem */}
            <path fill="url(#nbMetal)" d="M46 6h15v42H46z" />
            {/* Soft inner cut on blade */}
            <path
              fill="#050505"
              opacity="0.3"
              d="M6 48h7L11.5 76c0 1.2-.9 2-1.8 1.8-.9-.1-2.2-1.2-2.2-2.8V50c0-1 .4-2 1.5-2z"
            />
            {/* Pivot screws */}
            <circle cx="12.5" cy="14" r="2.6" fill="#050505" />
            <circle cx="12.5" cy="26" r="2.6" fill="#050505" />
            <circle cx="12.5" cy="14" r="1" fill="#E8D09A" opacity="0.55" />
            <circle cx="12.5" cy="26" r="1" fill="#E8D09A" opacity="0.55" />
          </g>

          <text
            x="70"
            y="44"
            fill="url(#nbMetal)"
            style={{
              fontFamily: "var(--font-oswald), Arial Black, sans-serif",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            ord
          </text>

          <text
            x="14"
            y="82"
            fill="url(#nbMetal)"
            style={{
              fontFamily: "var(--font-oswald), Arial Black, sans-serif",
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            blade
          </text>
        </g>
      </svg>

      {showTagline ? (
        <span className="mt-0.5 text-[0.52rem] tracking-[0.3em] text-muted uppercase sm:text-[0.55rem]">
          {siteConfig.tagline}
        </span>
      ) : null}
    </Link>
  );
}
