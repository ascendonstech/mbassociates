"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, tel } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#hazardous", label: "Hazardous Waste" },
  { href: "#clients", label: "Clients" },
  { href: "#process", label: "How We Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur transition-colors duration-300 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <a href="#top" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Image src={`${site.basePath}/logo.png`} alt={site.name} width={670} height={316} priority className="h-10 w-auto lg:h-12" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-smoke transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={tel}
            className="rounded-sm bg-gold px-4 py-2 font-display text-[15px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-pale"
          >
            Call {site.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="relative -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-0.5 w-6 bg-gold transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span className={`absolute h-0.5 w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`absolute h-0.5 w-6 bg-gold transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`pinstripe fixed inset-x-0 top-16 bottom-0 flex flex-col px-6 pt-6 pb-28 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-4 border-b border-line py-5 font-display text-3xl font-bold uppercase tracking-wide"
          >
            <span className="text-sm text-gold">0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <p className="mt-auto text-sm text-smoke">
          {site.contactPerson} · {site.phoneDisplay}
        </p>
      </nav>
    </header>
  );
}
