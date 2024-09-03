import React from "react";

import DesktopHeader from "../templates/Header/DesktopHeader";
import MobileHeader from "../templates/Header/MobileHeader";
import { authUser } from "@/utils/authentication/serverHelpers";

export default async function Header({ isLogin }) {
  const user = await authUser();
  const isAdmin = user?.role === "ADMIN" ? true : false;

  return (
    <header>
      <div
        id="desktop-header"
        className="fixed top-9 left-0 right-0 z-50 hidden md:flex items-center w-[95%] h-24 bg-brown-100 dark:bg-catalan-900 border-y border-catalan-600 dark:border-brown-100 text-brown-800 dark:text-brown-100 mx-auto px-10 py-5 rounded-ss-3xl rounded-ee-3xl backdrop-blur"
      >
        <DesktopHeader isLogin={isLogin} isAdmin={isAdmin} />
      </div>
      <div
        id="mobile-header"
        className="flex md:hidden items-center justify-between bg-brown-100 dark:bg-catalan-900 text-brown-800 dark:text-brown-100 h-16 px-4"
      >
        <MobileHeader isLogin={isLogin} isAdmin={isAdmin} />
      </div>
    </header>
  );
}
