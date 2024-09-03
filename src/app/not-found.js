import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-primary-baner baner flex-center flex-col gap-4 h-screen">
      <h1 className="font-MorabbaBold text-5xl text-red-800">404</h1>
      <h2 className="text-title text-catalan-800">صفحه مورد نظر یافت نشد</h2>
      <Link href="/">
        <span className="text-link mt-4 border-b-2 border-catalan-600">
          بازگشت به صفحه اصلی
        </span>
      </Link>
    </div>
  );
}
