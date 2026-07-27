"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getNavItems } from "@/lib/products";

type ProductsDropdownProps = {
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function ProductsDropdown({ onNavigate, variant = "desktop" }: ProductsDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const items = getNavItems();
  const isActive = pathname.startsWith("/products");

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setActiveChild(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleLinkClick() {
    setOpen(false);
    setActiveChild(null);
    onNavigate?.();
  }

  if (variant === "mobile") {
    return (
      <div className="border-b border-white/5">
        <button
          type="button"
          className={`flex w-full items-center justify-between py-3.5 text-[0.7rem] font-medium tracking-[0.14em] uppercase ${
            isActive ? "text-gold" : "text-[#e0e0e0]"
          }`}
          onClick={() => setMobileExpanded((v) => (v === "products" ? null : "products"))}
          aria-expanded={mobileExpanded === "products"}
        >
          Products
          <span className={`text-xs transition-transform ${mobileExpanded === "products" ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>
        {mobileExpanded === "products" ? (
          <div className="pb-3 pl-3">
            <Link
              href="/products"
              onClick={handleLinkClick}
              className="block py-2 text-sm text-muted hover:text-gold"
            >
              All Categories
            </Link>
            {items.map((item) => (
              <div key={item.slug}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 text-sm text-text/90"
                      onClick={() =>
                        setActiveChild((v) => (v === item.slug ? null : item.slug))
                      }
                    >
                      {item.title}
                      <span className="text-xs text-muted">▸</span>
                    </button>
                    {activeChild === item.slug ? (
                      <div className="pb-1 pl-3">
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block py-1.5 text-xs text-muted hover:text-gold"
                        >
                          View all {item.title}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.slug}
                            href={child.href}
                            onClick={handleLinkClick}
                            className="block py-1.5 text-xs text-muted hover:text-gold"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block py-2 text-sm text-text/90 hover:text-gold"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setActiveChild(null)}>
      <button
        type="button"
        className={`relative flex items-center gap-1 whitespace-nowrap px-1.5 py-2 text-[0.58rem] font-medium tracking-[0.08em] uppercase transition-colors xl:px-2 xl:text-[0.62rem] xl:tracking-[0.1em] ${
          isActive ? "text-gold" : "text-[#e0e0e0] hover:text-gold"
        }`}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Products
        <span className={`text-[0.5rem] transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
        {isActive ? (
          <span className="absolute inset-x-1.5 -bottom-0.5 h-px bg-gold xl:inset-x-2" />
        ) : null}
      </button>

      {open ? (
        <div
          className="absolute left-1/2 top-full z-50 mt-1 min-w-[220px] -translate-x-1/2 rounded-lg border border-gold/25 bg-surface-elevated py-2 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          onMouseEnter={() => setOpen(true)}
        >
          <Link
            href="/products"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-xs font-medium tracking-[0.1em] text-gold uppercase hover:bg-gold/10"
          >
            All Categories
          </Link>
          <div className="my-1 h-px bg-white/5" />
          {items.map((item) => (
            <div
              key={item.slug}
              className="relative"
              onMouseEnter={() => {
                setActiveChild(item.children ? item.slug : null);
              }}
            >
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-text transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {item.title}
                {item.children ? (
                  <span className="ml-3 text-xs text-muted" aria-hidden>
                    ▸
                  </span>
                ) : null}
              </Link>

              {item.children && activeChild === item.slug ? (
                <div className="absolute left-full top-0 ml-0.5 min-w-[200px] rounded-lg border border-gold/25 bg-surface-elevated py-2 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  {item.children.map((child) => (
                    <Link
                      key={child.slug}
                      href={child.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2.5 text-sm text-text transition-colors hover:bg-gold/10 hover:text-gold"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
