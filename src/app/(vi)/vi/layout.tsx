import { RootDocument } from "@/components/RootDocument";
import { siteMetadata } from "@/utils/seo";

export const metadata = siteMetadata("vi");

export default function VietnameseLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="vi">{children}</RootDocument>;
}
