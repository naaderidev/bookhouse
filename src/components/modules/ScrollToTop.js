"use client";
import React, { useState, useEffect } from "react";
import { HiChevronUp } from "react-icons/hi2";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };
  return (
    <svg
      className={isVisible ? "buttonVisible" : "button"}
      onClick={scrollToTop}
    >
      <HiChevronUp className="icon-sm" />
    </svg>
  );
}
