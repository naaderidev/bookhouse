"use client";
import React, { useState } from "react";
import apiRequest from "@/libs/axios/configs";
import Pagination from "@/components/modules/Pagination";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import ContentModal from "@/components/modules/modals/ContentModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import { HiOutlineTrash, HiOutlineEnvelope } from "react-icons/hi2";

export default function Messages({ messages }) {
  const [shownMessages, setShownMessages] = useState(messages);
  const [currentModal, setCurrentModal] = useState(null);
  const [message, setMessage] = useState(null);
  const removeMessage = async (ID) => {
    await apiRequest.delete("/contact", { data: { id: ID } });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      {shownMessages.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>نام</th>
                <th>تلفن</th>
                <th className="hidden md:table-cell">ایمیل</th>
                <th className="hidden md:table-cell">تاریخ</th>
                <th className="hidden md:table-cell">ساعت</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownMessages.map((message, index) => (
                <tr key={message._id}>
                  <td>{index + 1}</td>
                  <td>{message.name}</td>
                  <td>{message.phone}</td>
                  <td className="hidden md:table-cell">{message.email}</td>
                  <td className="hidden md:table-cell">
                    {new Date(message.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="hidden md:table-cell">
                    {new Date(message.createdAt).toLocaleTimeString("fa-IR")}
                  </td>
                  <td className="flex-center gap-1">
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setMessage(message);
                        setCurrentModal("content");
                      }}
                    >
                      <span className="hidden md:inline-flex">مشاهده</span>
                      <HiOutlineEnvelope className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setMessage(message);
                        setCurrentModal("delete");
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
            items={messages}
            setShownItems={setShownMessages}
            count={6}
            type="cms"
          />
        </>
      )}
      {currentModal && (
        <Modal>
          {currentModal === "content" ? (
            <ContentModal
              content={message.message}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "delete" ? (
            <ConfirmModal
              confirmModal={() => removeMessage(message._id)}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
