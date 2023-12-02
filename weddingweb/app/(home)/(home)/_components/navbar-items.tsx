"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface NavbarItemsProps {
  label: string;
  href: string;
}

export const NavbarItems = ({ label, href }: NavbarItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

    //setting up is active to check

  const onClick = () => {
    router.push(href)
  }


  return <button
  onClick={onClick}
  type="button">
    {label}
  </button>;
};
