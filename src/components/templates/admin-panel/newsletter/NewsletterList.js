"use client";
import React, { useState } from "react";
import apiRequest from "@/libs/axios/configs";
import Pagination from "@/components/modules/Pagination";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import { HiOutlineTrash } from "react-icons/hi2";

export default function NewsletterList({ newsletterList }) {
  const [shownMembers, setShownMembers] = useState(newsletterList);
  const [currentModal, setCurrentModal] = useState(null);
  const [memberID, setMemberID] = useState(null);
  const removeMember = async (ID) => {
    await apiRequest.delete("/newsletter", { data: { id: ID } });
    setCurrentModal(null);
    location.reload();
  };
  return (
    <>
      {shownMembers.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>ایمیل</th>
                <th className="hidden sm:table-cell">تاریخ</th>
                <th className="hidden sm:table-cell">ساعت</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownMembers.map((member, index) => (
                <tr key={member._id}>
                  <td>{index + 1}</td>
                  <td>{member.email}</td>
                  <td className="hidden sm:table-cell">
                    {new Date(member.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="hidden sm:table-cell">
                    {new Date(member.createdAt).toLocaleTimeString("fa-IR")}
                  </td>
                  <td className="flex-center gap-1">
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setMemberID(member._id);
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
            items={newsletterList}
            setShownItems={setShownMembers}
            count={6}
            type="cms"
          />
        </>
      )}

      {currentModal && (
        <Modal>
          {currentModal === "delete" && (
            <ConfirmModal
              confirmModal={() => removeMember(memberID)}
              closeModal={() => setCurrentModal(null)}
            />
          )}
        </Modal>
      )}
    </>
  );
}
