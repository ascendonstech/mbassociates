export const site = {
  name: "MB Associates",
  tagline: "Built for Bulk & Trusted to deliver every load",
  contactPerson: "Piyush Bansal",
  phone: "9709283664",
  phoneDisplay: "+91 97092 83664",
  address: {
    line1: "Ward No. 5, Marwari Para",
    line2: "Rengali, Sambalpur",
    region: "Odisha, India",
  },
  // Origin only (no path); the Pages workflow sets this and the basePath.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  description:
    "MB Associates, Sambalpur: bulk transportation, material supply and hazardous waste transportation for aluminium, cement, steel and power plants across Odisha.",
};

/** Absolute URL of the site root, including the basePath (e.g. https://x.github.io/mbassociates). */
export const siteUrl = `${site.url}${site.basePath}`;

export const tel = `tel:+91${site.phone}`;
export const whatsapp = (text?: string) =>
  `https://wa.me/91${site.phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapQuery = "Marwari Para, Rengali, Sambalpur, Odisha";

export type Service = {
  code: string;
  title: string;
  body: string;
  cargo: string[];
};

export const services: Service[] = [
  {
    code: "01",
    title: "Bulk Transportation",
    body: "Tippers, trailers and bulkers for plant-to-plant, mine-to-plant and plant-to-market movement. Single trips or a dedicated fleet on contract.",
    cargo: ["Coal", "Clinker", "Cement", "Alumina", "Iron ore"],
  },
  {
    code: "02",
    title: "Material Supply",
    body: "We source and deliver the raw material your plant runs on, weighed, documented and dropped where your stores team wants it.",
    cargo: ["Fly ash", "Gypsum", "Limestone", "Sand", "Aggregates"],
  },
  {
    code: "03",
    title: "Hazardous Waste Transportation",
    body: "Industrial hazardous waste moved from your plant to authorised treatment and disposal facilities, with the paperwork done alongside the load.",
    cargo: ["Spent pot lining", "Dross", "Sludge", "Used oil", "Contaminated scrap"],
  },
  {
    code: "04",
    title: "Fly Ash & By-product Evacuation",
    body: "Steady lifting of ash and process by-products from power and metal plants, so your silos and yards never become a bottleneck.",
    cargo: ["Dry fly ash", "Pond ash", "Bottom ash", "Slag"],
  },
  {
    code: "05",
    title: "Scrap & Plant Material Removal",
    body: "Clearing of scrap, refractory debris and redundant plant material. Loading, weighment and disposal handled end to end.",
    cargo: ["Metal scrap", "Refractory", "Shutdown debris"],
  },
  {
    code: "06",
    title: "In-plant Logistics & Loading",
    body: "Shifting material inside the plant boundary between yards, sheds and silos, with manpower for loading and unloading.",
    cargo: ["Internal shifting", "Loading crews", "Yard management"],
  },
];

export type ClientGroup = { sector: string; names: string[] };

export const clientGroups: ClientGroup[] = [
  { sector: "Aluminium", names: ["Aditya Birla FRP, Hirakud", "Hindalco (Aditya Birla)", "Vedanta"] },
  { sector: "Cement", names: ["UltraTech Cement", "Ambuja Cement", "Shiva Cement"] },
  { sector: "Steel & DRI", names: ["JSW", "Shyam DRI"] },
  { sector: "Power", names: ["NTPC", "NSPCL"] },
];

export const allClients = clientGroups.flatMap((g) => g.names);
