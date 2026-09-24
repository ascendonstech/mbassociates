import { site, tel, whatsapp } from "@/lib/site";

const docket = [
  ["Operating from", "Rengali, Sambalpur, Odisha"],
  ["We carry", "Bulk · Industrial · Hazardous"],
  ["Plants served", "Aluminium, Cement, Steel, Power"],
  ["Dispatch desk", site.phoneDisplay],
];

export default function Hero() {
  return (
    <section id="top" className="pinstripe relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-5 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Transport · Supply · Hazmat
          </p>
          <h1 className="font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.88] font-extrabold uppercase">
            Built for <span className="gold-text">bulk.</span>
            <br />
            Trusted with
            <br />
            every load.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-smoke">
            MB Associates keeps Odisha&apos;s plants fed and cleared. We move raw material in, carry
            by-products and hazardous waste out, and supply the material in between, for some of the
            biggest names in aluminium, cement, steel and power.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 font-display text-lg font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-pale"
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
              className="inline-flex items-center justify-center rounded-sm border border-gold/50 px-7 py-4 font-display text-lg font-bold uppercase tracking-wider text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Freight docket */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div className="rotate-[1.5deg] text-ink drop-shadow-[0_30px_40px_rgb(0_0_0/0.6)]">
            <div className="rounded-t-sm bg-paper">
            <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 px-6 py-4">
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
                Consignment note
              </span>
              <span className="font-display text-xs font-bold tracking-widest text-ink/60">MB/ODI</span>
            </div>
            <dl className="px-6 py-2">
              {docket.map(([k, v]) => (
                <div key={k} className="flex flex-col border-b border-ink/10 py-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">{k}</dt>
                  <dd className="font-display text-lg font-bold sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-end justify-between gap-4 px-6 pt-2 pb-6">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">Proprietor</p>
                <p className="font-display text-2xl font-bold italic">{site.contactPerson}</p>
              </div>
              <div className="-rotate-12 rounded-sm border-[3px] border-gold-deep px-3 py-1 text-center font-display leading-none font-extrabold uppercase text-gold-deep opacity-90">
                <span className="block text-[10px] tracking-[0.3em]">Ready to</span>
                <span className="block text-xl tracking-wider">Dispatch</span>
              </div>
            </div>
            </div>
            <div className="perforated h-3 rotate-180" aria-hidden />
          </div>
          <a
            href={tel}
            className="absolute -bottom-10 -left-2 hidden rounded-sm bg-gold px-4 py-3 font-display text-sm font-bold uppercase tracking-wider text-ink shadow-lg sm:block lg:-left-10"
          >
            Call now → {site.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Highway */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-ink" aria-hidden>
        <div className="lane absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 animate-lane" />
      </div>
    </section>
  );
}
