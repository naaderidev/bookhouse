// "use client";
import Link from "next/link";
import React from "react";

export default function MiniTopbar({ title, btn, icon, link }) {
  return (
    <div id="mini-topbar" className="flex items-center w-[90%] text-catalan-800">
      <div className="text-title-morabba w-64">{title}</div>
      <span className="block w-full h-1 bg-gradient-to-r from-catalan-300 to-catalan-800 my-6"></span>
      <Link href={link}>
        <button className="btn-gradient btn-plus-icon text-sm md:text-base sm:w-48">
          <span className="hidden sm:flex">{btn}</span>
          {icon}
        </button>
      </Link>
    </div>
  );
}
