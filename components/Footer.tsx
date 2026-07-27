import Link from "next/link";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { navLinks, siteConfig, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/8 bg-surface/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1.1fr] lg:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Premium knife manufacturing and brand growth partner. Launch, manufacture,
            and scale with confidence.
          </p>
          <div className="mt-5 space-y-2 text-xs font-medium tracking-[0.12em] text-muted uppercase">
            <p>📍 {siteConfig.registration}</p>
            <p>🏭 Manufacturing: {siteConfig.manufacturing}</p>
          </div>
          <div className="mt-6">
            <WhatsAppButton size="sm" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.18em] text-gold uppercase">
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
          <h2 className="font-display text-sm tracking-[0.18em] text-gold uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-4 text-sm text-muted">
            <li>
              <p className="text-[0.65rem] font-medium tracking-[0.16em] text-gold uppercase">
                UK Business Line
              </p>
              <a
                className="mt-1 block text-text hover:text-gold"
                href={`tel:${siteConfig.phoneUK.replace(/\s/g, "")}`}
              >
                {siteConfig.phoneUK}
              </a>
            </li>
            <li>
              <p className="text-[0.65rem] font-medium tracking-[0.16em] text-gold uppercase">
                WhatsApp · Projects & Manufacturing
              </p>
              <a
                className="mt-1 block text-text hover:text-gold"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <p className="text-[0.65rem] font-medium tracking-[0.16em] text-gold uppercase">
                Business Hours
              </p>
              <p className="mt-1 text-text">{siteConfig.hoursDays}</p>
              <p>{siteConfig.hoursTime}</p>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs tracking-wide text-muted">
        © {2026} {siteConfig.name}. {siteConfig.registration}. All rights reserved.
      </div>
    </footer>
  );
}
