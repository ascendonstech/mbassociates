import { allClients, clientGroups, services, site } from "@/lib/site";

function Eyebrow({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
      <span className="h-px w-10 bg-amber-500" />
      {children}
    </p>
  );
}

export function ClientTicker() {
  const row = [...allClients, ...allClients];
  return (
    <div className="overflow-hidden border-y border-amber-200 bg-amber-50/60 py-5" aria-label="Clients">
      <div className="flex w-max animate-ticker items-center">
        {row.map((name, i) => (
          <span
            key={i}
            aria-hidden={i >= allClients.length}
            className="flex items-center font-display text-xl font-bold uppercase tracking-[0.12em] whitespace-nowrap text-slate-700 sm:text-2xl"
          >
            {name}
            <span className="mx-8 inline-block h-2 w-2 rotate-45 bg-amber-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

const tagColors = [
  "border-amber-200 bg-amber-50 text-amber-900",
  "border-blue-200 bg-blue-50 text-blue-900",
  "border-emerald-200 bg-emerald-50 text-emerald-900",
  "border-purple-200 bg-purple-50 text-purple-900",
  "border-cyan-200 bg-cyan-50 text-cyan-900",
  "border-rose-200 bg-rose-50 text-rose-900",
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 text-slate-900 sm:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Eyebrow dark={false}>What we do</Eyebrow>
            <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl lg:text-7xl text-slate-900">
              Six ways we
              <br />
              keep plants moving
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-slate-600 lg:justify-self-end">
            We work directly with plant logistics and stores teams, on single trips or long-term
            contracts, and quote per trip, per tonne or per month to suit the material and volume.
          </p>
        </div>

        <ol className="mt-14 border-t-2 border-slate-900">
          {services.map((s, idx) => (
            <li
              key={s.code}
              className="group grid gap-3 border-b border-slate-200 py-8 transition-colors sm:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_1.1fr_1.4fr_1fr] lg:gap-8 lg:hover:bg-slate-50"
            >
              <span className="font-display text-4xl font-extrabold text-amber-600 lg:pl-2 lg:text-5xl">{s.code}</span>
              <h3 className="font-display text-3xl leading-none font-bold uppercase text-slate-900 lg:text-[2.1rem]">{s.title}</h3>
              <p className="leading-relaxed text-slate-600 sm:col-start-2 lg:col-start-auto">{s.body}</p>
              <ul className="flex flex-wrap gap-2 sm:col-start-2 lg:col-start-auto lg:content-start">
                {s.cargo.map((c, cIdx) => (
                  <li
                    key={c}
                    className={`rounded-md border px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-wider ${tagColors[(idx + cIdx) % tagColors.length]}`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-slate-500">
          Something else to move or source? If it goes on a truck and belongs in a plant, ask us.
        </p>
      </div>
    </section>
  );
}

const hazmatPoints = [
  {
    title: "Manifest with every load",
    body: "Pickup, quantity and destination recorded against each trip, so your compliance file stays complete.",
  },
  {
    title: "Only to authorised facilities",
    body: "Waste goes from your gate to the treatment, storage or disposal facility you have been cleared to use.",
  },
  {
    title: "Covered, suitable vehicles",
    body: "Vehicles matched to the waste category: covered, leak-proof bodies and proper marking.",
  },
  {
    title: "Drivers who know the load",
    body: "Crews briefed on what they are carrying, how to handle it, and what to do if something goes wrong.",
  },
];

export function Hazardous() {
  return (
    <section id="hazardous" className="relative bg-slate-900 text-white">
      <div className="hazard h-3" aria-hidden />
      <div className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              <span className="h-px w-10 bg-amber-400" />
              Hazardous waste
            </p>
            <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl text-white">
              The loads other
              <br />
              transporters <span className="gold-text">turn down</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
              Metal and cement plants generate waste that has to leave the site safely and on paper. We
              run that movement as a routine part of plant operations, so it does not pile up in your yard.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 shadow-sm">
              <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden className="shrink-0 text-amber-400">
                <path d="M12 2 1 21h22L12 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 9v5M12 17.5v.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <p className="text-sm leading-snug text-amber-100">
                Tell us the waste category and quantity, and we will plan the vehicle and paperwork around it.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {hazmatPoints.map((p, i) => (
              <div key={p.title} className="rounded-lg border border-slate-700/80 bg-slate-800/90 p-7 sm:p-8 transition-colors hover:border-amber-400/50 hover:bg-slate-800 shadow-md">
                <span className="font-display text-sm font-bold tracking-[0.3em] text-amber-400">
                  CHECK {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hazard h-3" aria-hidden />
    </section>
  );
}

const sectorBadgeStyles: Record<string, { header: string; badge: string; border: string }> = {
  Aluminium: { header: "bg-blue-50 text-blue-950", badge: "bg-blue-100 text-blue-800", border: "border-blue-200" },
  Cement: { header: "bg-amber-50 text-amber-950", badge: "bg-amber-100 text-amber-800", border: "border-amber-200" },
  "Steel & DRI": { header: "bg-red-50 text-red-950", badge: "bg-red-100 text-red-800", border: "border-red-200" },
  Power: { header: "bg-emerald-50 text-emerald-950", badge: "bg-emerald-100 text-emerald-800", border: "border-emerald-200" },
};

export function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow>Who we move for</Eyebrow>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl text-slate-900">
            Trusted at the gates
            <br />
            of <span className="gold-text">India&apos;s biggest</span> plants
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-slate-600 lg:justify-self-end">
            Heavy industry around Sambalpur, Jharsuguda and beyond runs on schedules that cannot slip.
            These are the plants that rely on us to keep to them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clientGroups.map((g) => {
            const style = sectorBadgeStyles[g.sector] ?? { header: "bg-slate-100 text-slate-900", badge: "bg-slate-200 text-slate-800", border: "border-slate-200" };
            return (
              <div key={g.sector} className={`flex flex-col rounded-xl border ${style.border} bg-white shadow-sm transition-all hover:shadow-md`}>
                <div className={`flex items-center justify-between border-b ${style.border} ${style.header} rounded-t-xl px-6 py-4`}>
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.3em]">{g.sector}</h3>
                  <span className={`font-display text-xs font-bold rounded-full ${style.badge} px-2.5 py-0.5`}>{String(g.names.length).padStart(2, "0")}</span>
                </div>
                <ul className="flex-1 px-6 py-4">
                  {g.names.map((n) => (
                    <li
                      key={n}
                      className="border-b border-slate-100 py-3.5 font-display text-xl leading-snug font-bold uppercase text-slate-800 last:border-0"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Tell us the load", body: "Material, quantity, pickup and drop point, timelines." },
  { title: "We plan the fleet", body: "Right vehicle type and trip count, with a clear rate." },
  { title: "Loading & weighment", body: "Our crew at your gate, weighbridge slips recorded." },
  { title: "On the road", body: "Driver and dispatch reachable on the phone throughout." },
  { title: "Delivered & documented", body: "Challans and receipts handed over for billing." },
];

export function Process() {
  return (
    <section id="process" className="pinstripe py-20 sm:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl text-slate-900">
          From enquiry to <span className="gold-text">unloading</span>
        </h2>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* route line */}
          <span
            className="absolute top-2 bottom-2 left-[11px] w-0.5 border-l-2 border-dashed border-amber-400 lg:top-[11px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-auto lg:border-t-2 lg:border-l-0"
            aria-hidden
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative pl-12 lg:pt-12 lg:pl-0">
              <span className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-amber-500 bg-white shadow-xs">
                <span className={`h-2 w-2 rounded-full ${i === steps.length - 1 ? "bg-amber-600" : "bg-amber-400"}`} />
              </span>
              <span className="font-display text-sm font-bold tracking-[0.3em] text-amber-700">STOP {i + 1}</span>
              <h3 className="mt-2 font-display text-2xl leading-tight font-bold uppercase text-slate-900">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-12 pb-28 lg:pb-12 text-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-wide text-slate-900">
            MB <span className="text-amber-600">Associates</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">{site.tagline}</p>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name} · {site.address.line2}, {site.address.region}
        </p>
      </div>
    </footer>
  );
}
