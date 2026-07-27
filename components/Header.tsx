"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2.5 py-2 text-[0.65rem] font-medium tracking-[0.16em] uppercase transition-colors ${
                  active ? "text-gold" : "text-[#e0e0e0] hover:text-gold"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <WhatsAppButton
            size="sm"
            variant="outline"
            message="Hi NORDBLADE, I'd like to chat about my project."
          />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-bg xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-white/5 py-3.5 text-[0.7rem] font-medium tracking-[0.16em] uppercase ${
                    active ? "text-gold" : "text-[#e0e0e0]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-5">
              <WhatsAppButton
                className="w-full"
                variant="outline"
                message="Hi NORDBLADE, I'd like to chat about my project."
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
