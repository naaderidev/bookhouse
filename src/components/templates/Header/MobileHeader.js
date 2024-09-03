"use client";
import React, { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import ThemeSetting from "./ThemeSetting";
import {
  HiOutlineUserCircle,
  HiBars3,
  HiOutlineCog8Tooth,
  HiMiniXMark,
  HiOutlineShoppingCart,
  HiArrowRightEndOnRectangle,
} from "react-icons/hi2";

export default function MobileHeader({ isLogin, isAdmin }) {
  const [navbarMenu, setNavbarMenu] = useState(false);
  const [settingMenu, setSettingMenu] = useState(false);
  return (
    <>
      <HiBars3
        className="icon-lg"
        onClick={() => setNavbarMenu((prev) => !prev)}
      />
      <figure>
        <img src="/images/icons/tastybooks-9.png" alt="logo" className="icon" />
      </figure>
      <HiOutlineCog8Tooth
        className="icon-lg"
        onClick={() => setSettingMenu((prev) => !prev)}
      />
      <MobileNavbar navbarMenu={navbarMenu} setNavbarMenu={setNavbarMenu} />
      <div
        className={
          settingMenu
            ? "fixed top-0 left-0 px-4 pt-3 bg-brown-100 dark:bg-catalan-900 w-64 h-full z-30 overflow-scroll shadow-2xl"
            : "hidden"
        }
      >
        <div className="flex items-end justify-between pb-5 mb-6 border-b border-b-catalan-600 dark:border-b-brown-100">
          <HiMiniXMark
            className="icon-md text-catalan-600 dark:text-brown-100 cursor-pointer"
            onClick={() => setSettingMenu((prev) => !prev)}
          />
          <figure className="flex items-end gap-2">
            <figcaption className="text-catalan-600 dark:text-brown-100 font-DanaMedium text-base tracking-tight">
              پنل تنظیمات
            </figcaption>
            <img
              src="/images/icons/tastybooks-9.png"
              alt="logo"
              className="icon-md"
            />
          </figure>
        </div>
        <nav className="child:py-1 text-base text-catalan-800 dark:text-brown-100 flex flex-col items-end">
          <button>
            {
              <Link
                className="mobile-navlink"
                href={
                  isLogin
                    ? isAdmin
                      ? "/admin-panel"
                      : "/user-panel"
                    : "/login-register"
                }
              >
                <span>{isLogin ? "پروفایل" : "ورود|عضویت"}</span>
                {isLogin ? (
                  <HiOutlineUserCircle className="icon-md" />
                ) : (
                  <HiArrowRightEndOnRectangle className="icon-md" />
                )}
              </Link>
            }
          </button>
          <Link href="/cart" className="mobile-navlink">
            <span>سبد خرید</span>
            <HiOutlineShoppingCart className="icon-md" />
          </Link>
        </nav>
        <div className="border-b border-b-catalan-600 dark:border-b-brown-100 mb-2"></div>
        <ThemeSetting screen="mobile" />
      </div>
    </>
  );
}
