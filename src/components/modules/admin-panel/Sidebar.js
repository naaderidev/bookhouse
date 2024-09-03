"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLeaf } from "react-icons/fa6";
import { adminSidebarItems } from "@/utils/navigation/adminPanelSidebar";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-catalan-800 h-screen border-l-2 border-brown-100">
      <div className="flex-center border-b-2 border-brown-100 h-16 p-4">
        <FaLeaf className="icon-sm sm:icon-lg text-brown-100" />
        <h1 className="hidden md:block text-lg text-center text-brown-100 py-3 font-MorabbaMedium">
          خانه کتاب
        </h1>
        <FaLeaf className="icon-sm sm:icon-lg text-brown-100 rotate-180" />
      </div>
      {adminSidebarItems.map((link) => {
        const isActive = pathname === link.href ? true : false;
        return (
          <Link
            className={isActive ? "nav-link active" : "nav-link"}
            href={link.href}
            key={link.id}
          >
            {link.icon}
            <span className="hidden md:inline-flex">{link.title}</span>
          </Link>
        );
      })}
    </aside>
  );
}
