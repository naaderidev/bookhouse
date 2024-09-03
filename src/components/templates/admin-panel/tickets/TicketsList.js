"use client";
import React, { useState } from "react";
import clsx from "clsx";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import AnswerTicketModal from "./AnswerTicketModal";
import Pagination from "@/components/modules/Pagination";
import ContentModal from "@/components/modules/modals/ContentModal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import {
  HiOutlineTrash,
  HiOutlinePencilSquare,
  HiEye,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function UsersList({ tickets }) {
  const [shownTickets, setShownTickets] = useState(tickets);
  const [currentModal, setCurrentModal] = useState(null);
  const [mainTicket, setMainTicket] = useState(null);

  const removeTicket = async (ID) => {
    await apiRequest.delete("tickets", { data: { id: ID } });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      {shownTickets.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>شناسه</th>
                <th className="hidden lg:table-cell">نام کاربر</th>
                <th className="hidden lg:table-cell">عنوان</th>
                <th>دپارتمان</th>
                <th>زیرمجموعه</th>
                <th>اولویت</th>
                <th>وضعیت پاسخ</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownTickets.map((ticket, index) => (
                <tr key={ticket._id}>
                  <td>{index + 1}</td>
                  <td className="hidden lg:table-cell">{ticket.user.name}</td>
                  <td className="hidden lg:table-cell">{ticket.title}</td>
                  <td>{ticket.department.title}</td>
                  <td>{ticket.subDepartment.title}</td>
                  <td>
                    {ticket.priority === 3
                      ? "بالا"
                      : ticket.priority === 2
                      ? "متوسط"
                      : "کم"}
                  </td>
                  <td className="mx-auto">
                    <div
                      className={clsx("badge", {
                        "bg-catalan-600": ticket.hasAnswer === true,
                        "bg-amber-600": ticket.hasAnswer === false,
                      })}
                    >
                      <span className="hidden lg:inline-flex">
                        {ticket.hasAnswer ? "پاسخ داده شد" : "درانتظار پاسخ"}
                      </span>
                      {ticket.hasAnswer ? (
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
                        setCurrentModal("content");
                        setMainTicket(ticket);
                      }}
                    >
                      <span className="hidden lg:inline-flex">مشاهده</span>
                      <HiEye className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("answer");
                        setMainTicket(ticket);
                      }}
                    >
                      <span className="hidden lg:inline-flex">پاسخ</span>
                      <HiOutlinePencilSquare className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("delete");
                        setMainTicket(ticket);
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
            items={tickets}
            setShownItems={setShownTickets}
            count={6}
            type="cms"
          />
        </>
      )}

      {currentModal && (
        <Modal>
          {currentModal === "content" ? (
            <ContentModal
              content={mainTicket.body}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "answer" ? (
            <AnswerTicketModal
              content={mainTicket}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "delete" ? (
            <ConfirmModal
              confirmModal={() => removeTicket(mainTicket._id)}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
