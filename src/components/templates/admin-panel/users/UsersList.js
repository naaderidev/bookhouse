"use client";
import React, { useState } from "react";
import clsx from "clsx";
import DetailsModal from "./DetailsModal";
import Pagination from "@/components/modules/Pagination";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import {
  HiOutlineTrash,
  HiMiniNoSymbol,
  HiOutlineWrench,
  HiOutlineDocument,
} from "react-icons/hi2";
import apiRequest from "@/libs/axios/configs";

export default function UsersList({ users }) {
  const [shownUsers, setShownUsers] = useState(users);
  const [mainUser, setMainUser] = useState(null);
  const [currentModal, setCurrentModal] = useState(null);

  const updateUserRole = async (userID) => {
    await apiRequest.put("/user/role", { id: userID });
    setCurrentModal(null);
    location.reload();
  };

  const removeUser = async (userID) => {
    await apiRequest.delete("/user", { data: { id: userID } });
    setCurrentModal(null);
    location.reload();
  };

  const banUser = async (email, phone) => {
    await apiRequest.post("/user/ban", { email, phone });
    setCurrentModal(null);
  };

  return (
    <>
      {shownUsers.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th className="hidden xl:table-cell">ردیف</th>
                <th>نام</th>
                <th>نام کاربری</th>
                <th>تلفن</th>
                <th className="hidden lg:table-cell">ایمیل</th>
                <th className="hidden lg:table-cell">نقش</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownUsers.map((user, index) => (
                <tr key={user._id}>
                  <td className="hidden xl:table-cell">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td className="hidden lg:table-cell">{user.email}</td>
                  <td className="hidden lg:table-cell">
                    <div
                      className={clsx("badge", {
                        "bg-catalan-600": user.role === "ADMIN",
                        "bg-catalan-400": user.role === "USER",
                      })}
                    >
                      {user.role === "ADMIN" ? "ادمین" : "کاربر عادی"}
                    </div>
                  </td>
                  <td className="flex-center gap-1">
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("details");
                        setMainUser(user);
                      }}
                    >
                      <span className="hidden md:inline-flex">جزئیات</span>
                      <HiOutlineDocument className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("delete");
                        setMainUser(user);
                      }}
                    >
                      <span className="hidden md:inline-flex">حذف</span>
                      <HiOutlineTrash className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn ban"
                      onClick={() => {
                        setCurrentModal("ban");
                        setMainUser(user);
                      }}
                    >
                      <span className="hidden md:inline-flex">بن</span>
                      <HiMiniNoSymbol className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("change-role");
                        setMainUser(user);
                      }}
                    >
                      <span className="hidden md:inline-flex">دسترسی</span>
                      <HiOutlineWrench className="icon-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            items={users}
            setShownItems={setShownUsers}
            count={5}
            type="cms"
          />
        </>
      )}

      {currentModal && (
        <Modal>
          {currentModal === "details" ? (
            <DetailsModal
              content={mainUser}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "change-role" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => updateUserRole(mainUser._id)}
            />
          ) : currentModal === "delete" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => removeUser(mainUser._id)}
            />
          ) : currentModal === "ban" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => banUser(mainUser.email, mainUser.phone)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
