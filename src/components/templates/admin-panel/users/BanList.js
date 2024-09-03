"use client";
import React, { useState } from "react";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import Pagination from "@/components/modules/Pagination";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import { HiOutlineTrash } from "react-icons/hi2";

export default function BanList({ users }) {
  const [shownUsers, setShownUsers] = useState(users);
  const [currentModal, setCurrentModal] = useState(null);
  const [mainUserID, setMainUserID] = useState(null);

  const removeUser = async (userID) => {
    await apiRequest.delete("/user/ban", { data: { id: userID } });
    setCurrentModal(null);
    location.reload();
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
                <th>ردیف</th>
                <th>ایمیل</th>
                <th>تلفن</th>
                <th>تاریخ</th>
                <th>ساعت</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownUsers?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    {new Date(user.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td>
                    {new Date(user.createdAt).toLocaleTimeString("fa-IR")}
                  </td>
                  <td className="flex-center gap-1 mt-2">
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("delete");
                        setMainUserID(user._id);
                      }}
                    >
                      <span className="hidden md:inline-flex">حذف</span>
                      <HiOutlineTrash className="icon-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            items={users}
            setShownItems={setShownUsers}
            count={4}
            type="cms"
          />
        </>
      )}

      {currentModal && (
        <Modal>
          {currentModal === "delete" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => removeUser(mainUserID)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
