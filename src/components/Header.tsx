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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          open ? "bg-white" : scrolled ? "bg-white/90 shadow-sm" : "bg-white/70"
        } ${scrolled || open ? "border-b border-slate-200" : "border-b border-transparent"}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
          <a href="#top" aria-label={`${site.name} home`} onClick={() => setOpen(false)} className="flex items-center gap-2">
            <span className="rounded bg-gradient-to-tr from-amber-600 to-amber-500 px-2.5 py-1 font-display text-xl font-black uppercase tracking-wider text-white shadow-xs">
              MB
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-tight text-slate-900">
              Associates
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition-colors hover:text-amber-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href={tel}
              className="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 font-display text-[15px] font-bold uppercase tracking-wider text-white shadow-sm shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-md"
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
              className={`absolute h-0.5 w-6 bg-slate-900 transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            <span className={`absolute h-0.5 w-6 bg-slate-900 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute h-0.5 w-6 bg-slate-900 transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </header>

      {/* Kept outside <header>: its backdrop-filter would otherwise become the
          containing block for this fixed panel and collapse it to header height. */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`pinstripe fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-white px-6 pt-6 pb-28 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-4 border-b border-slate-100 py-5 font-display text-3xl font-bold uppercase tracking-wide text-slate-900"
          >
            <span className="text-sm font-semibold text-amber-600">0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <p className="mt-auto text-sm text-slate-500">
          {site.contactPerson} · {site.phoneDisplay}
        </p>
      </nav>
    </>
  );
}
