import Image from "next/image";
import { site, tel, whatsapp } from "@/lib/site";

const docket = [
  ["Operating from", "Rengali, Sambalpur, Odisha"],
  ["We carry", "Bulk · Industrial · Hazardous"],
  ["Plants served", "Aluminium, Cement, Steel, Power"],
  ["Dispatch desk", site.phoneDisplay],
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24 border-b border-line">
      {/* Background Image */}
      <Image
        src={`${site.basePath}/hero-bg.jpg`}
        alt="Industrial Highway Logistics"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Modern gradient overlays for contrast & vibrancy */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60 backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"
        aria-hidden
      />

      {/* Vibrant ambient color glow effects on top of the image */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-amber-500/25 blur-3xl mix-blend-screen"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl mix-blend-screen"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 left-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl mix-blend-screen"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h1 className="font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.88] font-extrabold uppercase text-white drop-shadow-sm">
            Built for <span className="gold-text">bulk.</span>
            <br />
            Trusted with
            <br />
            every load.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200 drop-shadow-xs">
            MB Associates keeps Odisha&apos;s plants fed and cleared. We move raw material in, carry
            by-products and hazardous waste out, and supply the material in between, for some of the
            biggest names in aluminium, cement, steel and power.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 font-display text-lg font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-lg"
            >
              Get a quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={whatsapp("Hello MB Associates, I would like to discuss a transport requirement.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border-2 border-emerald-600 bg-emerald-50 px-7 py-4 font-display text-lg font-bold uppercase tracking-wider text-emerald-800 transition-colors hover:bg-emerald-100"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Freight docket */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div className="rotate-[1.5deg] text-slate-900 drop-shadow-[0_20px_35px_rgb(15_23_42/0.12)]">
            <div className="rounded-t-md bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between border-b-2 border-dashed border-slate-200 bg-slate-50 px-6 py-4 rounded-t-md">
                <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                  Consignment note
                </span>
                <span className="font-display text-xs font-bold tracking-widest text-amber-700 bg-amber-100 px-2 py-0.5 rounded">MB/ODI</span>
              </div>
              <dl className="px-6 py-2">
                {docket.map(([k, v]) => (
                  <div key={k} className="flex flex-col border-b border-slate-100 py-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{k}</dt>
                    <dd className="font-display text-lg font-bold text-slate-800 sm:text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex items-end justify-between gap-4 px-6 pt-2 pb-6 bg-slate-50/50">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Proprietor</p>
                  <p className="font-display text-2xl font-bold italic text-slate-900">{site.contactPerson}</p>
                </div>
                <div className="-rotate-12 rounded-md border-[2.5px] border-amber-600 bg-amber-50 px-3 py-1 text-center font-display leading-none font-extrabold uppercase text-amber-700 shadow-xs">
                  <span className="block text-[10px] tracking-[0.3em]">Ready to</span>
                  <span className="block text-xl tracking-wider">Dispatch</span>
                </div>
              </div>
            </div>
            <div className="perforated h-3 rotate-180" aria-hidden />
          </div>

        </div>
      </div>

      {/* Highway */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-slate-900" aria-hidden>
        <div className="lane absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 animate-lane" />
      </div>
    </section>
  );
}
