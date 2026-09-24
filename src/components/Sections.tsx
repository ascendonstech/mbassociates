import { allClients, clientGroups, services, site } from "@/lib/site";

function Eyebrow({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] ${
        dark ? "text-gold" : "text-gold-deep"
      }`}
    >
      <span className={`h-px w-10 ${dark ? "bg-gold" : "bg-gold-deep"}`} />
      {children}
    </p>
  );
}

export function ClientTicker() {
  const row = [...allClients, ...allClients];
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-ink py-5" aria-label="Clients">
      <div className="flex w-max animate-ticker items-center">
        {row.map((name, i) => (
          <span
            key={i}
            aria-hidden={i >= allClients.length}
            className="flex items-center font-display text-xl font-bold uppercase tracking-[0.12em] whitespace-nowrap text-smoke sm:text-2xl"
          >
            {name}
            <span className="mx-8 inline-block h-2 w-2 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Eyebrow dark={false}>What we do</Eyebrow>
            <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl lg:text-7xl">
              Six ways we
              <br />
              keep plants moving
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-ink/70 lg:justify-self-end">
            We work directly with plant logistics and stores teams, on single trips or long-term
            contracts, and quote per trip, per tonne or per month to suit the material and volume.
          </p>
        </div>

        <ol className="mt-14 border-t-2 border-ink">
          {services.map((s) => (
            <li
              key={s.code}
              className="group grid gap-3 border-b border-ink/15 py-8 transition-colors sm:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_1.1fr_1.4fr_1fr] lg:gap-8 lg:hover:bg-paper-dark/60"
            >
              <span className="font-display text-4xl font-extrabold text-gold-deep lg:pl-2 lg:text-5xl">{s.code}</span>
              <h3 className="font-display text-3xl leading-none font-bold uppercase lg:text-[2.1rem]">{s.title}</h3>
              <p className="leading-relaxed text-ink/75 sm:col-start-2 lg:col-start-auto">{s.body}</p>
              <ul className="flex flex-wrap gap-2 sm:col-start-2 lg:col-start-auto lg:content-start">
                {s.cargo.map((c) => (
                  <li
                    key={c}
                    className="rounded-sm border border-ink/25 px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-wider text-ink/70"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-ink/60">
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
    <section id="hazardous" className="relative bg-ink">
      <div className="hazard h-3" aria-hidden />
      <div className="pinstripe py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Hazardous waste</Eyebrow>
            <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl">
              The loads other
              <br />
              transporters <span className="gold-text">turn down</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-smoke">
              Metal and cement plants generate waste that has to leave the site safely and on paper. We
              run that movement as a routine part of plant operations, so it does not pile up in your yard.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 rounded-sm border border-hazard/40 bg-hazard/5 p-4">
              <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden className="shrink-0 text-hazard">
                <path d="M12 2 1 21h22L12 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 9v5M12 17.5v.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <p className="text-sm leading-snug text-smoke">
                Tell us the waste category and quantity, and we will plan the vehicle and paperwork around it.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2">
            {hazmatPoints.map((p, i) => (
              <div key={p.title} className="bg-coal p-7 sm:p-8">
                <span className="font-display text-sm font-bold tracking-[0.3em] text-hazard">
                  CHECK {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-smoke">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hazard h-3" aria-hidden />
    </section>
  );
}

export function Clients() {
  return (
    <section id="clients" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow>Who we move for</Eyebrow>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl">
            Trusted at the gates
            <br />
            of <span className="gold-text">India&apos;s biggest</span> plants
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-smoke lg:justify-self-end">
            Heavy industry around Sambalpur, Jharsuguda and beyond runs on schedules that cannot slip.
            These are the plants that rely on us to keep to them.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {clientGroups.map((g) => (
            <div key={g.sector} className="flex flex-col bg-coal">
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.3em] text-gold">{g.sector}</h3>
                <span className="font-display text-sm text-smoke">{String(g.names.length).padStart(2, "0")}</span>
              </div>
              <ul className="flex-1 px-6 py-3">
                {g.names.map((n) => (
                  <li
                    key={n}
                    className="border-b border-line/70 py-4 font-display text-2xl leading-tight font-semibold uppercase last:border-0"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
    <section id="process" className="pinstripe py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl">
          From enquiry to <span className="gold-text">unloading</span>
        </h2>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* route line */}
          <span
            className="absolute top-2 bottom-2 left-[11px] w-0.5 border-l-2 border-dashed border-gold/40 lg:top-[11px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-auto lg:border-t-2 lg:border-l-0"
            aria-hidden
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative pl-12 lg:pt-12 lg:pl-0">
              <span className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-coal">
                <span className={`h-2 w-2 rounded-full ${i === steps.length - 1 ? "bg-gold" : "bg-gold/50"}`} />
              </span>
              <span className="font-display text-sm font-bold tracking-[0.3em] text-gold">STOP {i + 1}</span>
              <h3 className="mt-2 font-display text-2xl leading-tight font-bold uppercase">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-smoke">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pt-12 pb-28 lg:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-wide">
            MB <span className="text-gold">Associates</span>
          </p>
          <p className="mt-1 text-sm text-smoke">{site.tagline}</p>
        </div>
        <p className="text-sm text-smoke">
          © {new Date().getFullYear()} {site.name} · {site.address.line2}, {site.address.region}
        </p>
      </div>
    </footer>
  );
}
