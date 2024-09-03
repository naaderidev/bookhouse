"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineTrash } from "react-icons/hi2";
import clsx from "clsx";

export default function CartCard({
  id,
  image,
  title,
  price,
  count,
  discount,
  type,
}) {
  const removeItemFromCart = (itemId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    location.reload();
  };

  return (
    <figure className="flex items-center gap-2.5 py-4">
      <Link href={`/product/${id}`}>
        <img
          className="w-40 h-36"
          src={image}
          alt="product"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/500x300")
          }
        />
      </Link>
      <figcaption
        className={clsx("flex flex-col items-start py-2 w-full", {
          "": type === "cart",
          "text-catalan-800": type === "order",
        })}
      >
        <h4 className="text-regular mb-4">{title}</h4>
        <div className="flex flex-col gap-2 xs:flex-row xs:items-end xs:justify-between">
          <div className="space-y-1">
            <p className="text-link">{discount} % تخفیف</p>
            <p className="text-link">تعداد: {count}</p>
            <div className="text-regular">
              <span
                className={discount && "line-through decoration-rose-800 ml-2"}
              >
                {price.toLocaleString()}
              </span>
              <span className={discount ? "inline-block" : "hidden"}>
                {price - Math.floor(price * discount) / 100}
              </span>
              <span className="text-link mr-1">تومان</span>
            </div>
          </div>
          <div className={type === "cart" ? "block" : "hidden p-0.5"}>
            <button
              className={`btn-gradient-red btn-plus-icon text-sm-morabba`}
              onClick={() => removeItemFromCart(id)}
            >
              <span className="hidden sm:block">حذف از سبد خرید</span>
              <HiOutlineTrash className="icon-sm" />
            </button>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
