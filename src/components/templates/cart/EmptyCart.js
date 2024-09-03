import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-2 p-12 sm:py-36 m-auto">
      <HiOutlineShoppingCart className="icon text-rose-800" />
      <h3 className="text-regular dark:text-brown-100 bg-transparent mb-10">
        هنوز محصولی به سبد خرید اضافه نشده
      </h3>
      <Link href="/store" className="text-regular dark:text-brown-100 hover:text-catalan-300">
        بازگشت به فروشگاه
      </Link>
    </div>
  );
}
