"use client";
import apiRequest from "@/libs/axios/configs";
import React, { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { toast } from "react-toastify";

export default function AddToWishlist({ productID }) {
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

  const addToWishlistHandler = async () => {
    if (!user?._id) {
      return toast.error(
        <p className="toast">ابتدا وارد حساب کاربری خود شوید!</p>
      );
    }
    const wishItem = {
      userId: user._id,
      productId: productID,
    };
    await apiRequest.post("/wishlist", wishItem);
  };

  return (
    <button
      type="submit"
      className="btn-gradient-red btn-plus-icon w-12 xs:w-36"
      onClick={addToWishlistHandler}
    >
      <span className="hidden xs:block">افزودن به دلخواه</span>
      <HiOutlineHeart className="icon-sm" />
    </button>
  );
}
