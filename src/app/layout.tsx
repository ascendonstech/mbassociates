import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { services, site, siteUrl } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const { description } = site;
const title = `${site.name} | Bulk Transport & Material Supply, Sambalpur`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Logistics",
  keywords: [
    "MB Associates",
    "transport company in Sambalpur",
    "transporter in Rengali",
    "bulk transportation Odisha",
    "material supply Sambalpur",
    "hazardous waste transportation Odisha",
    "fly ash transportation",
    "industrial logistics Odisha",
    "cement transport",
    "aluminium plant logistics",
    "Hirakud transporter",
    "Jharsuguda transport",
  ],
  // Absolute, basePath-aware URL: Next does not prefix basePath onto canonical links.
  alternates: { canonical: `${siteUrl}/` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/`,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: { telephone: true, address: true, email: false },
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Rengali, Sambalpur, Odisha",
  },
};

export const viewport: Viewport = {
  themeColor: "#121214",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: site.name,
      slogan: site.tagline,
      description,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/opengraph-image.jpg`,
      telephone: `+91${site.phone}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: "Rengali, Sambalpur",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      areaServed: { "@type": "State", name: "Odisha" },
      founder: { "@type": "Person", name: site.contactPerson },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+91${site.phone}`,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "or"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Logistics services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${barlow.variable} ${barlowCondensed.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
