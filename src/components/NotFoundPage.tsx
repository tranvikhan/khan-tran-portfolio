import Link from "next/link";
import type { Locale } from "@/components/SitePreferences";
import { localePath } from "@/constants/site";
import { copy } from "@/data/siteCopy";

export function NotFoundPage({ locale }: { locale: Locale }) {
  return (
    <main id="main-content" className="missing-project page-gutter">
      <h1>{locale === "vi" ? "Không tìm thấy trang" : "Page not found"}</h1>
      <Link href={`${localePath(locale, "/")}#work`}>{copy[locale].detail.back}</Link>
    </main>
  );
}
