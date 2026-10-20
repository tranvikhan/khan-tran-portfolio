import Image from "next/image";

type LensanShowcaseProps = {
  locale: "en" | "vi";
  decorative?: boolean;
  priority?: boolean;
};

export function LensanShowcase({ locale, decorative = false, priority = false }: LensanShowcaseProps) {
  return (
    <div
      className="lensan-showcase"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : locale === "vi" ? "Giao diện web Lensan và bản xem trước ứng dụng tìm sân" : "Lensan website and court-finding app preview"}
    >
      <div className="lensan-showcase__browser">
        <Image src="/images/projects/lensan/web-home.png" alt="" fill priority={priority} sizes="(max-width: 700px) 90vw, 75vw" />
      </div>
      <div className="lensan-showcase__phone">
        <Image src="/images/projects/lensan/02-find-courts.jpg" alt="" fill sizes="(max-width: 700px) 35vw, 25vw" />
      </div>
    </div>
  );
}
