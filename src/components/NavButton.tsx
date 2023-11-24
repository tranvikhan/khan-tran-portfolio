"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export interface NavButtonProps {
  path?: string;
  children?: ReactNode;
  onClick?: () => void;
}
export const NavButton = ({ path, children, onClick }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <a
      href={path ?? "#"}
      onClick={onClick}
      className={`transition text-lg hover:text-primary ${
        isActive ? "text-primary" : "text-gray-800 dark:text-gray-300"
      }`}
    >
      <span>{children}</span>
    </a>
  );
};
