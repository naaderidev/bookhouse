import React from "react";
import Link from "next/link";
import ThemeSetting from "./ThemeSetting";
import DesktopNavbar from "./DesktopNavbar";
import SearchBox from "./SearchBox";
import {
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
  HiArrowRightEndOnRectangle,
} from "react-icons/hi2";

export default function DesktopHeader({ isLogin, isAdmin }) {
  return (
    <div className="flex justify-between items-center w-full">
      <DesktopNavbar />
      <div className="flex items-center gap-1 lg:gap-6">
        <SearchBox />
        <span className="block w-px h-14 bg-catalan-300"></span>
        <div className="flex items-center gap-x-1 lg:gap-x-3">
          <ThemeSetting screen="desktop" />
          <Link href="/cart">
            <HiOutlineShoppingCart className="icon-md" />
          </Link>
          <button>
            {
              <Link
                href={
                  isLogin
                    ? isAdmin
                      ? "/admin-panel"
                      : "/user-panel"
                    : "/login-register"
                }
              >
                {isLogin ? (
                  <HiOutlineUserCircle className="icon-md" />
                ) : (
                  <HiArrowRightEndOnRectangle className="icon-md" />
                )}
              </Link>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
