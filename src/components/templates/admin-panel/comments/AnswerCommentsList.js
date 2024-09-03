"use client";
import React, { useState } from "react";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import Pagination from "@/components/modules/Pagination";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import ContentModal from "@/components/modules/modals/ContentModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import { HiOutlineTrash, HiEye } from "react-icons/hi2";

export default function AnswerCommentsList({ answers }) {
  const [shownAnswers, setShownAnswers] = useState(answers);
  const [currentModal, setCurrentModal] = useState(null);
  const [mainAnswer, setMainAnswer] = useState(null);

  const deleteAnswer = async (ID) => {
    await apiRequest.delete("/comments/answer", { data: { id: ID } });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      {shownAnswers.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>شناسه</th>
                <th className="hidden sm:table-cell">ادمین پاسخگو</th>
                <th>نام کتاب</th>
                <th>امتیاز</th>
                <th>تاریخ</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownAnswers.map((answer, index) => (
                <tr key={answer._id}>
                  <td>{index + 1}</td>
                  <td className="hidden sm:table-cell">{answer.username}</td>
                  <td>{answer.productId.title}</td>
                  <td>{answer.score} از 5</td>
                  <td>
                    {" "}
                    {new Date(answer.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="flex-center gap-1">
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("content");
                        setMainAnswer(answer);
                      }}
                    >
                      <span className="hidden sm:inline-flex">
                        مشاهده پاسخ ادمین
                      </span>
                      <HiEye className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("delete");
                        setMainAnswer(answer);
                      }}
                    >
                      <span className="hidden sm:inline-flex">حذف</span>
                      <HiOutlineTrash className="icon-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            items={answers}
            setShownItems={setShownAnswers}
            count={4}
            type="cms"
          />
        </>
      )}
      {currentModal && (
        <Modal>
          {currentModal === "content" ? (
            <ContentModal
              content={mainAnswer.body}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "delete" ? (
            <ConfirmModal
              confirmModal={() => deleteAnswer(mainAnswer._id)}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
