import React from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";

export default function EmptySearch() {
  return (
    <div className="px-2 m-auto w-full rounded-2xl bg-gradient-to-t from-catalan-100 to-catalan-200/50 text-catalan-800 dark:bg-catalan-600">
      <p className="flex-center text-xl font-MorabbaMedium p-4 leading-8 indent-4">
        کتابی متناسب با جستجوی شما یافت نشد...
      </p>
      <Link className="flex-center py-4 hover:text-rose-800" href="/">
        <h5 className="font-MorabbaMedium">صفحه اصلی</h5>
        <HiOutlineHome className="icon-md" />
      </Link>
    </div>
  );
}
