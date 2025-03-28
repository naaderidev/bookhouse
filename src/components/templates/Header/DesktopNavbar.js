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
        <Link href="/about" className="flex items-center gap-2 header-link">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-catalan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-catalan-500"></span>
          </span>
          <span>راهنما</span>
        </Link>
      </div>
    </nav>
  );
}
