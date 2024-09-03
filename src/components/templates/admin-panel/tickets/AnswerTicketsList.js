"use client";
import React, { useState } from "react";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import Pagination from "@/components/modules/Pagination";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import ContentModal from "@/components/modules/modals/ContentModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import { HiOutlineTrash, HiEye } from "react-icons/hi2";

export default function AnswerTicketsList({ answers }) {
  const [shownAnswers, setShownAnswers] = useState(answers);
  const [currentModal, setCurrentModal] = useState(null);
  const [mainAnswer, setMainAnswer] = useState(null);

  const removeAnswer = async (ID) => {
    await apiRequest.delete("/tickets", { data: { id: ID } });
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
                <th className="hidden sm:table-cell">عنوان تیکت دریافتی</th>
                <th>دپارتمان</th>
                <th>زیرمجموعه</th>
                <th>اولویت</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownAnswers.map((answer, index) => (
                <tr key={answer._id}>
                  <td>{index + 1}</td>
                  <td className="hidden sm:table-cell">{answer.user.name}</td>
                  <td className="hidden sm:table-cell">{answer.title}</td>
                  <td>{answer.department.title}</td>
                  <td>{answer.subDepartment.title}</td>
                  <td>
                    {answer.priority === 3
                      ? "بالا"
                      : answer.priority === 2
                      ? "متوسط"
                      : "کم"}
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
              confirmModal={() => removeAnswer(mainAnswer._id)}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
