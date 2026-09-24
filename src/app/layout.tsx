import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { site } from "@/lib/site";
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

const description =
  "MB Associates, Sambalpur: bulk transportation, material supply and hazardous waste transportation for aluminium, cement, steel and power plants across Odisha.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Bulk Transport & Material Supply, Sambalpur`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "transport company Sambalpur",
    "bulk transportation Odisha",
    "hazardous waste transportation",
    "material supply",
    "fly ash transportation",
    "logistics Rengali",
  ],
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#121214",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  slogan: site.tagline,
  description,
  telephone: `+91${site.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Rengali, Sambalpur",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  areaServed: "Odisha",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
