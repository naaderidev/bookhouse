"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "./modals/Modal";
import ConfirmModal from "./modals/ConfirmModal";
import apiRequest from "@/libs/axios/configs";
import {
  HiOutlineHome,
  HiOutlinePower,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

export default function Topbar({ name, phone, role }) {
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState(null);
  const logoutHandler = async () => {
    const response = await apiRequest.post("/auth/signout");
    if (response.status === 201) {
      setCurrentModal(null);
      localStorage.removeItem("userInfo");
      localStorage.removeItem("cart");
      router.replace("/");
    }
  };
  return (
    <>
      <header className="bg-brown-100">
        <div className="flex items-center justify-between p-4">
          <div className="hidden md:flex items-center gap-2 text-title-morabba">
            <span className="text-base">{name}</span>
            <span className="text-sm">
              ({role === "USER" ? "کاربر عادی" : "ادمین"})
            </span>
            <span className="text-sm">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="btn-icon">
              <HiOutlineHome className="icon-md" />
            </Link>
            <span className="block w-1 h-8 bg-catalan-600"></span>
            <Link href="/cart" className="btn-icon">
              <HiOutlineShoppingCart className="icon-md" />
            </Link>
            <span className="block w-1 h-8 bg-catalan-600"></span>
            <button
              className="btn-icon"
              onClick={() => setCurrentModal("logout")}
            >
              <HiOutlinePower className="icon-md" />
            </button>
          </div>
        </div>
      </header>
      {currentModal && (
        <Modal>
          {currentModal === "logout" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={logoutHandler}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
