"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
  path: string;
  children: ReactNode;
}
export function MenuLink({ path, children }: MenuLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link
      href={path}
      className={cn(
        {
          "bg-indigo-500": isActive,
          "hover:bg-indigo-500": !isActive,
          "text-white": isActive,
          "text-slate-300": !isActive,
          "hover:text-white": !isActive,
        },
        "relative flex justify-start gap-2 rounded p-3 items-center transition-colors",
      )}
    >
      {children}
    </Link>
  );
}
