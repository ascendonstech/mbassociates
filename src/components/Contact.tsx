"use client";

import { useState } from "react";
import { mapQuery, services, site, tel, whatsapp } from "@/lib/site";

const field =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all";
const label = "mb-2 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-600";

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
    <section id="contact" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-4 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            <span className="h-px w-10 bg-amber-500" />
            Contact
          </p>
          <h2 className="font-display text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl text-slate-900">
            Got a load?
            <br />
            <span className="gold-text">Call Pulkit Goel.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
            You talk to the person who runs the fleet, not a call centre. Share the material and route and
            you&apos;ll get a rate back quickly.
          </p>

          <div className="mt-10 space-y-3 overflow-hidden rounded-xl">
            <a href={tel} className="group flex items-center justify-between gap-4 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100/60 p-6 transition-all hover:border-amber-300 hover:shadow-md">
              <div>
                <p className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-amber-900">{site.contactPerson} · Phone</p>
                <p className="font-display text-3xl font-bold tracking-wide text-amber-950 sm:text-4xl">{site.phoneDisplay}</p>
              </div>
              <span className="font-display text-3xl text-amber-700 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <p className={label}>Office</p>
              <address className="text-lg leading-relaxed not-italic text-slate-800">
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
              className="block h-60 w-full rounded-xl border border-slate-200 bg-slate-100 shadow-xs"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={submit} className="self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-9">
          <div className="mb-7 flex items-center justify-between border-b border-slate-100 pb-5">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-slate-900">Request a quote</h3>
            <span className="font-display text-xs font-bold uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 px-3 py-1">via WhatsApp</span>
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
            className="mt-7 w-full rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 font-display text-lg font-bold uppercase tracking-wider text-white shadow-md shadow-emerald-600/20 transition-all hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
          >
            Send enquiry on WhatsApp
          </button>
          <p className="mt-4 text-center text-sm text-slate-500">
            Prefer to talk?{" "}
            <a href={tel} className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">
              Call {site.phoneDisplay}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
