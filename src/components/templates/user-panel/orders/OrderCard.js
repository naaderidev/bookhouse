import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  HiOutlineBanknotes,
  HiOutlineTruck,
  HiOutlineShoppingCart,
  HiCursorArrowRays,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function OrderCard({
  _id,
  finalPrice,
  shipping,
  isAccept,
  createdAt,
}) {
  return (
    <Link href={`/user-panel/orders/order-detail/${_id}`}>
      <div className="user-panel-card">
        <div className="flex items-center gap-2">
          <HiCursorArrowRays className="icon-md text-catalan-400" />
          <div className="badge btn-plus-icon bg-catalan-400 font-Dana hidden md:inline-flex">
            <HiOutlineBanknotes className="icon-sm" />
            <span>{finalPrice.toLocaleString()} تومان</span>
          </div>
          <div className="badge btn-plus-icon bg-catalan-400 font-Dana hidden md:inline-flex">
            <HiOutlineTruck className="icon-sm" />
            <span>{shipping.toLocaleString()} تومان</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm-morabba text-catalan-800">
          <span>
            {new Date(createdAt).toLocaleDateString("fa-IR")}
          </span>
          <span className="hidden lg:inline-flex">
            {new Date(createdAt).toLocaleTimeString("fa-IR")}
          </span>
          <div className="badge btn-plus-icon bg-catalan-600">
            <span className="hidden lg:inline-flex">مشاهده</span>
            <HiOutlineShoppingCart className="icon-sm" />
          </div>
          <div
            className={clsx("badge btn-plus-icon", {
              "bg-catalan-800": isAccept === "accept",
              "bg-amber-600": isAccept === "",
              "bg-rose-800": isAccept === "reject",
            })}
          >
            <span className="hidden lg:inline-flex">{isAccept ? "تایید شده" : "درحال بررسی"}</span>
            {isAccept ? (
              <HiOutlineCheckCircle className="icon-sm" />
            ) : (
              <HiOutlineClock className="icon-sm" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
