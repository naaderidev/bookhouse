"use client";
import React, { useState } from "react";
import clsx from "clsx";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import Pagination from "@/components/modules/Pagination";
import ShowOrderDetailsModal from "./ShowOrderDetailsModal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import {
  HiOutlineShoppingCart,
  HiOutlineCheckCircle,
  HiOutlineNoSymbol,
} from "react-icons/hi2";

export default function OrdersList({ orders }) {
  const [shownOrders, setShownOrders] = useState(orders);
  const [mainOrder, setMainOrder] = useState(null);
  const [currentModal, setCurrentModal] = useState(null);

  const verifyOrder = async (orderID) => {
    await apiRequest.put("/orders/accept", { id: orderID });
    setCurrentModal(null);
    location.reload();
  };

  const rejectOrder = async (orderID) => {
    await apiRequest.put("/orders/reject", { id: orderID });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      {shownOrders.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>ردیف</th>
                <th>نام کاربر</th>
                <th className="hidden lg:table-cell">هزینه سفارش</th>
                <th className="hidden lg:table-cell">هزینه پست</th>
                <th>پرداخت نهایی</th>
                <th className="hidden md:table-cell">کد تخفیف</th>
                <th className="hidden md:table-cell">تاریخ</th>
                <th>وضعیت</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownOrders.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.userId.name}</td>
                  <td className="hidden lg:table-cell">
                    {item.totalPrice.toLocaleString()} تومان
                  </td>
                  <td className="hidden lg:table-cell">
                    {item.shipping.toLocaleString()} تومان
                  </td>
                  <td>{item.finalPrice.toLocaleString()} تومان</td>
                  <td className="hidden md:table-cell">
                    {item.discountCode === "" ? "ندارد" : item.discountCode}
                  </td>
                  <td className="hidden md:table-cell">
                    {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td>
                    <div
                      className={clsx("badge", {
                        "bg-catalan-800": item.isAccept === "accept",
                        "bg-rose-800": item.isAccept === "reject",
                        "bg-amber-600": item.isAccept === "",
                      })}
                    >
                      {item.isAccept === ""
                        ? "بررسی"
                        : item.isAccept === "accept"
                        ? "تاییدشده"
                        : "ردشده"}
                    </div>
                  </td>
                  <td className="flex-center gap-1 mt-1">
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("cart");
                        setMainOrder(item);
                      }}
                    >
                      <span className="hidden md:inline-flex">سبد</span>
                      <HiOutlineShoppingCart className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("reject");
                        setMainOrder(item);
                      }}
                    >
                      <span className="hidden md:inline-flex">لغو</span>
                      <HiOutlineNoSymbol className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("accept");
                        setMainOrder(item);
                      }}
                    >
                      <span className="hidden md:inline-flex">تایید</span>
                      <HiOutlineCheckCircle className="icon-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            items={orders}
            setShownItems={setShownOrders}
            count={5}
            type="cms"
          />
        </>
      )}

      {currentModal && (
        <Modal>
          {currentModal === "cart" ? (
            <ShowOrderDetailsModal
              content={mainOrder.basket}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "accept" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => verifyOrder(mainOrder._id)}
            />
          ) : currentModal === "reject" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => rejectOrder(mainOrder._id)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
