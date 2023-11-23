"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export interface FooterNavButtonProps {
  path?: string;
  children?: ReactNode;
}
export const FooterNavButton = ({ path, children }: FooterNavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <a
      href={path ?? "#"}
      className={`transition text-lg hover:text-primary ${
        isActive ? "text-primary" : "text-gray-300"
      }`}
    >
      <span>{children}</span>
    </a>
  );
};
