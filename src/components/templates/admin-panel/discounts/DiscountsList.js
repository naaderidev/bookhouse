"use client";
import React, { useState } from "react";
import clsx from "clsx";
import apiRequest from "@/libs/axios/configs";
import EditDiscountModal from "./EditDiscountModal";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import Pagination from "@/components/modules/Pagination";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

export default function UsersList({ discounts }) {
  const [shownDiscounts, setShownDiscounts] = useState(discounts);
  const [mainDiscount, setMainDiscount] = useState(null);
  const [currentModal, setCurrentModal] = useState(null);

  const deleteDiscount = async (ID) => {
    await apiRequest.delete("/discounts", { data: { id: ID } });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      {shownDiscounts.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>کد تخفیف</th>
                <th>درصد تخفیف</th>
                <th className="hidden lg:table-cell">ماکزیمم استفاده</th>
                <th className="hidden lg:table-cell">دفعات استفاده</th>
                <th className="hidden xl:table-cell">توضیحات</th>
                <th>وضعیت</th>
                <th className="hidden lg:table-cell">تاریخ ایجاد</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownDiscounts.map((discount, index) => (
                <tr key={discount._id}>
                  <td>{index + 1}</td>
                  <td>{discount.code}</td>
                  <td>{discount.percent} %</td>
                  <td className="hidden lg:table-cell">{discount.maxUse}</td>
                  <td className="hidden lg:table-cell">{discount.countUse}</td>
                  <td className="hidden xl:table-cell">{discount.desc}</td>
                  <td>
                    <div
                      className={clsx("badge", {
                        "bg-catalan-800": discount.maxUse !== discount.countUse,
                        "bg-rose-800": discount.maxUse <= discount.countUse,
                      })}
                    >
                      {discount.countUse >= discount.maxUse ? "منقضی" : "فعال"}
                    </div>
                  </td>
                  <td className="hidden lg:table-cell">
                    {new Date(discount.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="flex-center gap-1">
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("edit");
                        setMainDiscount(discount);
                      }}
                    >
                      <span className="hidden lg:inline-flex">ویرایش</span>
                      <HiOutlinePencilSquare className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("delete");
                        setMainDiscount(discount);
                      }}
                    >
                      <span className="hidden lg:inline-flex">حذف</span>
                      <HiOutlineTrash className="icon-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            items={discounts}
            setShownItems={setShownDiscounts}
            count={6}
            type="cms"
          />
        </>
      )}
      {currentModal && (
        <Modal>
          {currentModal === "delete" ? (
            <ConfirmModal
              confirmModal={() => deleteDiscount(mainDiscount._id)}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "edit" ? (
            <EditDiscountModal
              content={mainDiscount}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
