"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Modal from "@/components/modules/modals/Modal";
import EditCommentModal from "./EditCommentModal";
import AnswerCommentModal from "./AnswerCommentModal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import ContentModal from "@/components/modules/modals/ContentModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import Pagination from "@/components/modules/Pagination";
import {
  HiOutlineCheck,
  HiOutlinePencilSquare,
  HiOutlineXMark,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiEye,
  HiOutlineTrash,
} from "react-icons/hi2";
import apiRequest from "@/libs/axios/configs";

export default function UsersList({ comments }) {
  const [shownComments, setShownComments] = useState(comments);
  const [currentModal, setCurrentModal] = useState(null);
  const [mainComment, setMainComment] = useState(null);

  const rejectComment = async (commentID) => {
    await apiRequest.put("/comments/reject", { id: commentID });
    location.reload();
  };
  const acceptComment = async (commentID) => {
    await apiRequest.put("/comments/accept", { id: commentID });
    location.reload();
  };

  const removeComment = async (commentID) => {
    await apiRequest.delete("/comments", { data: { id: commentID } });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      {shownComments.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>شناسه</th>
                <th className="hidden lg:table-cell">نام کاربر</th>
                <th className="hidden sm:table-cell">نام محصول</th>
                <th className="hidden lg:table-cell">امتیاز</th>
                <th className="hidden lg:table-cell">تاریخ</th>
                <th>وضعیت نمایش</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownComments.map((comment, index) => (
                <tr key={comment._id}>
                  <td>{index + 1}</td>
                  <td className="hidden lg:table-cell">{comment.username}</td>
                  <td className="hidden sm:table-cell">
                    {comment.productId.title}
                  </td>
                  <td className="hidden lg:table-cell">{comment.score} از 5</td>
                  <td className="hidden lg:table-cell">
                    {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td>
                    <div
                      className={clsx("badge", {
                        "bg-catalan-600": comment.isAccept === true,
                        "bg-amber-600": comment.isAccept === false,
                      })}
                    >
                      <span className="hidden lg:inline-flex">
                        {comment.isAccept ? "تایید شد" : "درانتظار تایید"}
                      </span>
                      {comment.isAccept ? (
                        <HiOutlineCheckCircle className="icon-sm inline-flex lg:hidden" />
                      ) : (
                        <HiOutlineClock className="icon-sm inline-flex lg:hidden" />
                      )}
                    </div>
                  </td>
                  <td className="flex-center gap-1">
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setMainComment(comment);
                        setCurrentModal("content");
                      }}
                    >
                      <span className="hidden md:inline-flex">مشاهده</span>
                      <HiEye className="icon-sm" />
                    </button>
                    {comment.isAccept ? (
                      <button
                        className="cms-btn delete"
                        onClick={() => rejectComment(comment._id)}
                      >
                        <span className="hidden md:inline-flex">رد</span>
                        <HiOutlineXMark className="icon-sm" />
                      </button>
                    ) : (
                      <button
                        className="cms-btn"
                        onClick={() => acceptComment(comment._id)}
                      >
                        <span className="hidden md:inline-flex">تایید</span>
                        <HiOutlineCheck className="icon-sm" />
                      </button>
                    )}
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("edit");
                        setMainComment(comment);
                      }}
                    >
                      <span className="hidden md:inline-flex">ویرایش</span>
                      <HiOutlinePencilSquare className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("answer");
                        setMainComment(comment);
                      }}
                    >
                      <span className="hidden md:inline-flex">پاسخ</span>
                      <HiOutlinePencilSquare className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("delete");
                        setMainComment(comment);
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
            items={comments}
            setShownItems={setShownComments}
            count={6}
            type="cms"
          />
        </>
      )}
      {currentModal && (
        <Modal>
          {currentModal === "content" ? (
            <ContentModal
              content={mainComment.body}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "delete" ? (
            <ConfirmModal
              confirmModal={() => removeComment(mainComment._id)}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "edit" ? (
            <EditCommentModal
              content={mainComment}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "answer" ? (
            <AnswerCommentModal
              content={mainComment}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
