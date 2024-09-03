"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeSetting({ screen }) {
  // //   const localTheme = JSON.parse(localStorage.getItem("theme"));
  // const [theme, setTheme] = useState("light");
  // const colorTheme = theme === "dark" ? "light" : "dark";
  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.classList.remove(colorTheme);
  //   root.classList.add(theme);

  //   localStorage.setItem("theme", theme);
  // }, [theme, colorTheme]);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.body.className =
      newTheme === "dark"
        ? "bg-catalan-900 text-brown-100"
        : "bg-brown-100 text-catalan-900";
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.className =
      savedTheme === "dark"
        ? "bg-catalan-900 text-brown-100"
        : "bg-brown-100 text-catalan-900";
  }, []);

  return (
    <>
      {screen === "desktop" ? (
        <div onClick={toggleTheme}>
          {/* <HiOutlineMoon
            className={theme === "light" ? "icon-md" : "hidden"}
            onClick={() => setTheme("dark")}
          />
          <HiOutlineSun
            className={theme === "dark" ? "icon-md" : "hidden"}
            onClick={() => setTheme("light")}
          /> */}
          {theme == "dark" ? (
            <HiOutlineSun className="icon-md" />
          ) : (
            <HiOutlineMoon className="icon-md" />
          )}
        </div>
      ) : (
        <div className="child:py-1 child:px-3 text-lg text-catalan-800 dark:text-brown-100 flex flex-col items-end gap-y-3">
          <button className="flex-center gap-2" onClick={toggleTheme}>
            <span className="font-MorabbaMedium">
              {theme === "dark" ? "تم تیره" : "تم روشن"}
            </span>
            {theme == "dark" ? (
              <HiOutlineSun className="icon-md" />
            ) : (
              <HiOutlineMoon className="icon-md" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
