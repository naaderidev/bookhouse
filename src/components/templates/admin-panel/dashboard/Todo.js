import React, { useState } from "react";
import clsx from "clsx";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import {
  HiOutlinePuzzlePiece,
  HiOutlineTrash,
  HiOutlineCheckCircle,
  HiOutlineClock,
} from "react-icons/hi2";

export default function Todo({ _id, title, createdAt, isComplete }) {
  const [currentModal, setCurrentModal] = useState(null);
  const changeStauts = async (todoID, todoStatus) => {
    await apiRequest.put("/todos", { id: todoID, isComplete: todoStatus });
    setCurrentModal(null);
    location.reload();
  };
  const removeTodo = async (todoID) => {
    await apiRequest.delete("/todos", { data: { id: todoID } });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      <div className="user-panel-card">
        <div className="flex items-center gap-2">
          <HiOutlinePuzzlePiece className="icon-md text-catalan-400" />
          <h3 className="text-link md:text-regular text-catalan-800">{title}</h3>
        </div>
        <div className="flex items-center gap-2 text-sm font-MorabbaLight text-catalan-800">
          <span className="hidden lg:inline-flex ">
            {new Date(createdAt).toLocaleDateString("fa-IR")}
          </span>
          <span className="hidden lg:inline-flex">
            {new Date(createdAt).toLocaleTimeString("fa-IR")}
          </span>
          <div
            className={clsx("badge btn-plus-icon", {
              "bg-catalan-400": isComplete === true,
              "bg-amber-600": isComplete === false,
            })}
          >
            <span className="hidden lg:inline-flex">
              {isComplete ? "انجام شد" : "در انتظار انجام"}
            </span>
            {isComplete ? (
              <HiOutlineCheckCircle className="icon-sm" />
            ) : (
              <HiOutlineClock className="icon-sm" />
            )}
          </div>
          <button className="cms-btn" onClick={() => setCurrentModal("change")}>
            {isComplete ? (
              <HiOutlineCheckCircle className="icon-sm" />
            ) : (
              <HiOutlineClock className="icon-sm" />
            )}
          </button>
          <button
            className="cms-btn delete"
            onClick={() => setCurrentModal("delete")}
          >
            <HiOutlineTrash className="icon-sm" />
          </button>
        </div>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "delete" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => removeTodo(_id)}
            />
          ) : currentModal === "change" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => changeStauts(_id, isComplete)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
