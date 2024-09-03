"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { marketNavbar } from "@/utils/navigation/marketNavbar";

export default function DesktopNavbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-x-2 lg:gap-x-9 h-10">
      <figure>
        <img src="/images/icons/tastybooks-9.png" alt="logo" className="icon" />
      </figure>
      <div className="flex items-center gap-x-4 lg:gap-x-9 h-full">
        {marketNavbar.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={clsx("header-link", {
              "active-link": pathname === link.href,
            })}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
