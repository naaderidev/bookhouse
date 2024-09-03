import React from "react";

export default function ConfirmModal(props) {
  return (
    <div className="modal-wrapper">
      <p className="text-sm font-MorabbaMedium text-catalan-800">
        آیا از انجام عملیات اطمینان دارید؟
      </p>
      <div className="flex-center gap-3">
        <button
          className="modal-btn accept-btn my-4"
          onClick={props.confirmModal}
        >
          بله
        </button>
        <button
          className="modal-btn reject-btn my-4"
          onClick={props.closeModal}
        >
          خیر
        </button>
      </div>
    </div>
  );
}
