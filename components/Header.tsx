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
      <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center gap-4 px-4 lg:gap-5 lg:px-6 xl:px-8">
        <Logo className="shrink-0" />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap px-1.5 py-2 text-[0.58rem] font-medium tracking-[0.08em] uppercase transition-colors xl:px-2 xl:text-[0.62rem] xl:tracking-[0.1em] ${
                  active ? "text-gold" : "text-[#e0e0e0] hover:text-gold"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-1.5 -bottom-0.5 h-px bg-gold xl:inset-x-2" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <WhatsAppButton
            size="sm"
            variant="outline"
            className="!px-3.5 !py-2 !text-[0.65rem] whitespace-nowrap tracking-[0.06em]"
            message="Hi NORDBLADE, I'd like to chat about my project."
          />
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold lg:hidden"
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
        <div className="border-t border-white/5 bg-bg lg:hidden">
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
                  className={`border-b border-white/5 py-3.5 text-[0.7rem] font-medium tracking-[0.14em] uppercase ${
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
