"use client";
import React, { useState } from "react";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import ContentModal from "@/components/modules/modals/ContentModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import Pagination from "@/components/modules/Pagination";
import { HiOutlineTrash, HiOutlineCursorArrowRays } from "react-icons/hi2";

export default function ExchangeList({ exchangeList }) {
  const [shownRequests, setShownRequests] = useState(exchangeList);
  const [currentModal, setCurrentModal] = useState(null);
  const [applicant, setApplicant] = useState(null);

  const removeApplicant = async (ID) => {
    await apiRequest.delete("/exchange", { data: { id: ID } });
    setCurrentModal(null);
    location.reload();
  };
  return (
    <>
      {shownRequests.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>شناسه</th>
                <th className="hidden md:table-cell">نام</th>
                <th>تلفن</th>
                <th>کتاب درخواستی</th>
                <th>کتاب پیشنهادی</th>
                <th className="hidden md:table-cell">تاریخ</th>
                <th className="hidden md:table-cell">ساعت</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownRequests.map((message, index) => (
                <tr key={message._id}>
                  <td>{index + 1}</td>
                  <td className="hidden md:table-cell">{message.name}</td>
                  <td>{message.phone}</td>
                  <td>
                    <button
                      className="cms-btn m-auto"
                      onClick={() => {
                        setApplicant(message);
                        setCurrentModal("content-request");
                      }}
                    >
                      <span className="hidden md:inline-flex">درخواست</span>
                      <HiOutlineCursorArrowRays className="icon-sm" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="cms-btn m-auto"
                      onClick={() => {
                        setApplicant(message);
                        setCurrentModal("content-suggest");
                      }}
                    >
                      <span className="hidden md:inline-flex">پیشنهاد</span>
                      <HiOutlineCursorArrowRays className="icon-sm" />
                    </button>
                  </td>
                  <td className="hidden md:table-cell">
                    {new Date(message.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="hidden md:table-cell">
                    {new Date(message.createdAt).toLocaleTimeString("fa-IR")}
                  </td>
                  <td className="flex-center gap-1">
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setApplicant(message);
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
            items={exchangeList}
            setShownItems={setShownRequests}
            count={4}
            type="cms"
          />
        </>
      )}

      {currentModal && (
        <Modal>
          {currentModal === "delete" ? (
            <ConfirmModal
              confirmModal={() => removeApplicant(applicant._id)}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "content-request" ? (
            <ContentModal
              content={applicant.request}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "content-suggest" ? (
            <ContentModal
              content={applicant.suggest}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
