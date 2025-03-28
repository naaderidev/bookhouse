import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { marketNavbar } from "@/utils/navigation/marketNavbar";
import { HiMiniXMark } from "react-icons/hi2";
import { usePathname } from "next/navigation";

export default function MobileNavbar({ navbarMenu, setNavbarMenu }) {
  const pathname = usePathname();
  return (
    <div
      className={
        navbarMenu
          ? "fixed top-0 right-0 px-4 pt-3 bg-brown-100 dark:bg-catalan-900 w-64 min-h-screen z-20 overflow-auto shadow-2xl"
          : "hidden"
      }
    >
      <div className="flex items-end justify-between pb-5 mb-6 border-b border-b-catalan-600 dark:border-b-brown-100">
        <figure className="flex items-end gap-2">
          <img
            src="/images/icons/tastybooks-9.png"
            alt="logo"
            className="icon-md"
          />
          <figcaption className="text-catalan-600 dark:text-brown-100 font-DanaMedium text-base tracking-tight">
            خوش آمدید
          </figcaption>
        </figure>
        <HiMiniXMark
          className="icon-md text-catalan-600 dark:text-brown-100 cursor-pointer"
          onClick={() => setNavbarMenu((prev) => !prev)}
        />
      </div>
      <nav className="text-base text-catalan-600 dark:text-brown-100 transition-colors">
        {marketNavbar.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={clsx("header-link", {
              "active-link": pathname === link.href,
            })}
          >
            {link.icon}
            <span>{link.title}</span>
          </Link>
        ))}
        <Link href="/about" className="flex items-center gap-2 header-link">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-catalan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-catalan-500"></span>
          </span>
          <span>راهنما</span>
        </Link>
      </nav>
    </div>
  );
}
