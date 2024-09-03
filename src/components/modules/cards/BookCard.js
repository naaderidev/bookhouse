"use client";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "../modals/Modal";
import apiRequest from "@/libs/axios/configs";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import {
  HiMiniLink,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from "react-icons/hi2";

export default function BookCard({
  _id,
  title,
  author,
  translator,
  publisher,
  category,
  image,
  type,
}) {
  const [currentModal, setCurrentModal] = useState(null);
  const removeWishItem = async () => {
    await apiRequest.delete(`/wishlist/${_id}`);
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      <article className="flex justify-evenly gap-2 p-6 w-[360px] h-[230px] bg-catalan-100 dark:bg-catalan-800 shadow-card">
        <img
          src={image}
          alt="product-img"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/500x300")
          }
          className="max-w-[120px]"
        />
        <div className="flex flex-col justify-between font-DanaMedium">
          <div className="relative text-catalan-800 dark:text-brown-100 child:mb-1 child:max-w-[100px]">
            <h3 className="text-sm">عنوان: {title}</h3>
            <h4 className="text-xs">نویسنده: {author}</h4>
            <h4 className="text-xs">مترجم: {translator}</h4>
            <h5 className="text-xs">نشر: {publisher}</h5>
            <div className="shape">
              <span className="flex-center text-center">{category}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href={`/product/${_id}`}>
              <button className="btn-plus-icon text-sm text-catalan-600 dark:text-catalan-300 hover:text-catalan-300">
                <span>{type === "detail" ? "مشاهده جزئیات" : "خرید"}</span>
                {type === "detail" ? (
                  <HiMiniLink className="icon-sm" />
                ) : (
                  <HiOutlineShoppingCart className="icon-sm" />
                )}
              </button>
            </Link>
            {type === "wish" ? (
              <button
                className="btn-plus-icon text-sm text-catalan-600 dark:text-catalan-300 hover:text-rose-800"
                onClick={() => setCurrentModal("delete")}
              >
                <span>حذف</span>
                <HiOutlineTrash className="icon-sm" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </article>
      {currentModal && (
        <Modal>
          {currentModal === "delete" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={removeWishItem}
            />
          ) : currentModal === "verify" ? (
            <VerifiedModal
              message="محصول با موفقیت از لیست دلخواه حذف شد"
              btn="به روز رسانی"
              verifyModal={() => location.reload()}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
