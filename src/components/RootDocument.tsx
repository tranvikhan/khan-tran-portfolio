import "@/app/globals.css";
import "@fontsource-variable/space-grotesk";
import { SiteHeader, SiteFooter, SiteSkipLink } from "@/components/SiteChrome";
import { Locale, SitePreferences } from "@/components/SitePreferences";
import { toJsonLd } from "@/constants/site";
import { siteStructuredData } from "@/utils/seo";

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(siteStructuredData(locale)) }} />
      </head>
      <body>
        <SitePreferences locale={locale}>
          <SiteSkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
        </SitePreferences>
      </body>
    </html>
  );
}
