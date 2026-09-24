"use client";

import { useState } from "react";
import { mapQuery, services, site, tel, whatsapp } from "@/lib/site";

const field =
  "w-full rounded-sm border border-line bg-ink px-4 py-3.5 text-base text-white placeholder:text-smoke/60 focus:border-gold focus:outline-none";
const label = "mb-2 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-smoke";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    service: services[0].title,
    from: "",
    to: "",
    details: "",
  });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Enquiry for ${site.name}`,
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      `Service: ${form.service}`,
      form.from && `From: ${form.from}`,
      form.to && `To: ${form.to}`,
      form.details && `Details: ${form.details}`,
    ].filter(Boolean);
    window.open(whatsapp(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-4 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Contact
          </p>
          <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl">
            Got a load?
            <br />
            <span className="gold-text">Call Piyush.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-smoke">
            You talk to the person who runs the fleet, not a call centre. Share the material and route and
            you&apos;ll get a rate back quickly.
          </p>

          <div className="mt-10 space-y-px overflow-hidden rounded-sm bg-line">
            <a href={tel} className="group flex items-center justify-between gap-4 bg-coal p-6 transition-colors hover:bg-slate">
              <div>
                <p className={label}>{site.contactPerson} · Phone</p>
                <p className="font-display text-3xl font-bold tracking-wide sm:text-4xl">{site.phoneDisplay}</p>
              </div>
              <span className="font-display text-3xl text-gold transition-transform group-hover:translate-x-1">→</span>
            </a>
            <div className="bg-coal p-6">
              <p className={label}>Office</p>
              <address className="text-lg leading-relaxed not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.region}
              </address>
            </div>
            <iframe
              title="MB Associates location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=14&output=embed`}
              className="block h-60 w-full bg-coal grayscale invert-[0.9] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={submit} className="self-start rounded-sm border border-line bg-coal p-6 sm:p-9">
          <div className="mb-7 flex items-center justify-between border-b border-line pb-5">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide">Request a quote</h3>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-smoke">via WhatsApp</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>Your name</label>
              <input id="name" required autoComplete="name" className={field} value={form.name} onChange={set("name")} />
            </div>
            <div>
              <label htmlFor="company" className={label}>Company / plant</label>
              <input id="company" autoComplete="organization" className={field} value={form.company} onChange={set("company")} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className={label}>Service</label>
              <select id="service" className={field} value={form.service} onChange={set("service")}>
                {services.map((s) => (
                  <option key={s.code}>{s.title}</option>
                ))}
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="from" className={label}>Pickup</label>
              <input id="from" placeholder="e.g. Hirakud" className={field} value={form.from} onChange={set("from")} />
            </div>
            <div>
              <label htmlFor="to" className={label}>Drop</label>
              <input id="to" placeholder="e.g. Jharsuguda" className={field} value={form.to} onChange={set("to")} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="details" className={label}>Material &amp; quantity</label>
              <textarea
                id="details"
                rows={4}
                placeholder="What are we carrying, how much, and by when?"
                className={field}
                value={form.details}
                onChange={set("details")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-7 w-full rounded-sm bg-gold px-6 py-4 font-display text-lg font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-pale"
          >
            Send enquiry on WhatsApp
          </button>
          <p className="mt-4 text-center text-sm text-smoke">
            Prefer to talk?{" "}
            <a href={tel} className="text-gold underline underline-offset-4">
              Call {site.phoneDisplay}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
