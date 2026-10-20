import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/space-grotesk";
import { SiteHeader, SiteFooter, SiteSkipLink } from "@/components/SiteChrome";
import { SitePreferences } from "@/components/SitePreferences";

const siteUrl = "https://khan.io.vn";
const siteTitle = "Khan Trần (Kevin) | Product Designer & Developer";
const siteDescription =
  "Explore Khan Trần's product design and development work across web and mobile. Based in Cần Thơ, Vietnam and open to opportunities and collaborations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Khan Trần",
  },
  description: siteDescription,
  applicationName: "Khan Trần Portfolio",
  authors: [{ name: "Khan Trần", url: siteUrl }],
  creator: "Khan Trần",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Khan Trần Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: "/images/avatars/kevin-khan-3d.png",
      width: 1024,
      height: 1536,
      alt: "3D portrait of Khan Trần",
    }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/avatars/kevin-khan-3d.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Khan Trần",
      alternateName: "Kevin",
      url: siteUrl,
      image: `${siteUrl}/images/avatars/kevin-khan-3d.png`,
      jobTitle: "Product Designer and Developer",
      homeLocation: { "@type": "Place", name: "Cần Thơ, Vietnam" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Khan Trần Portfolio",
      url: siteUrl,
      description: siteDescription,
      creator: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var l=localStorage.getItem('portfolio-locale');if(l==='vi')document.documentElement.lang='vi'}catch(e){}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </head>
      <body>
        <SitePreferences>
          <SiteSkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
        </SitePreferences>
      </body>
    </html>
  );
}
