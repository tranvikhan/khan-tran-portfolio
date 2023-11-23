import "./globals.css";
import { Roboto } from "next/font/google";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ViKhan.",
  description:
    "Welcome to the online portfolio of Khan Tran, a multifaceted creative force at the intersection of design and development. With a passion for crafting seamless user experiences, Khan brings a unique blend of artistic flair and technical expertise to the digital realm.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${roboto.className} bg-white dark:bg-gray-900`}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
