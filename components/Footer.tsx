import Link from "next/link";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr] lg:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Premium knife manufacturing and brand growth partner. Launch, manufacture,
            and scale with confidence.
          </p>
          <div className="mt-6">
            <WhatsAppButton size="sm" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-wide text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-wide text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{siteConfig.address}</li>
            <li>
              <a className="hover:text-gold" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs tracking-wide text-muted">
        © {2026} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
