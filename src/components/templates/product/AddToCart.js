"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function AddToCart({ product }) {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const userAuthentication = async () => {
      const res = await fetch("/api/auth/me");
      if (res.status === 200) {
        const data = await res.json();
        setUser(data);
      }
    };
    userAuthentication();
  }, []);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = {
      id: product._id,
      title: product.title,
      image: product.image,
      price: product.salePrice,
      discount: product.discount,
      count,
    };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(
      <p className="toast">محصول با موفقیت به سبد خرید افزوده شد</p>
    );
  };

  const insertItemToCart = () => {
    if (!user?._id) {
      return toast.error(
        <p className="toast">ابتدا وارد حساب کاربری خود شوید!</p>
      );
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length) {
      const isItemInCart = cart.some((item) => item.id === product._id);
      if (isItemInCart) {
        const target = cart.find((item) => item.id === product._id);
        if (target.count < product.qty) {
          cart.forEach((item) => {
            if (item.id === product._id) {
              item.count = item.count + count;
            }
          });
          localStorage.setItem("cart", JSON.stringify(cart));
          toast.success(
            <p className="toast">تعداد محصول با موفقیت افزایش یافت</p>
          );
        } else {
          toast.warning(<p className="toast">موجودی محصول تمام شد</p>);
        }
      } else {
        addToCart();
      }
    } else {
      addToCart();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl xl:text-3xl tracking-normal font-DanaDemiBold text-start">
          {product.discount
            ? Math.floor(
                product.salePrice - (product.salePrice * product.discount) / 100
              ).toLocaleString()
            : product.salePrice.toLocaleString()}
          <span className="text-regular mr-1">تومان</span>
        </h2>
        <div className={product.discount ? "flex" : "hidden"}>
          <div className="flex-center gap-1 text-regular text-gray-400 line-through decoration-red-600">
            <h4 className="text-regular">
              {product.salePrice.toLocaleString()}
            </h4>
            <span>تومان</span>
          </div>
          <div className="text-xl font-DanaMedium text-rose-800 dark:text-brown-100 mr-2">
            {product.discount ? `${product.discount} %` : ""}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 w-fit rounded-lg px-2 py-1 border border-catalan-600">
        <FaPlus
          className="icon-sm cursor-pointer"
          onClick={() => {
            count >= product.qty ? count === product.qty : setCount(count + 1);
          }}
        />
        <span className="text-base lg:text-lg font-DanaMedium">{count}</span>
        <FaMinus
          className="icon-sm cursor-pointer"
          onClick={() => {
            count <= 1 ? count === 0 : setCount(count - 1);
          }}
        />
      </div>
      <button
        type="submit"
        className="btn-gradient btn-plus-icon w-12 xs:w-36"
        disabled={!product.qty}
        onClick={insertItemToCart}
      >
        <span className="hidden xs:block">افزودن به سبد خرید</span>
        <HiOutlineShoppingCart className="icon-sm" />
      </button>
    </>
  );
}
