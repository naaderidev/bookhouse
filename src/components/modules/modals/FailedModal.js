import React from "react";
import { HiOutlineXMark, HiFaceFrown } from "react-icons/hi2";

export default function FailedModal(props) {
  return (
    <div className="modal-wrapper">
      <button
        className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
        onClick={props.closeModal}
      >
        <HiOutlineXMark className="icon-md" />
      </button>
      <div className="flex-center flex-col gap-4">
        <h2 className="text-title-morabba text-catalan-800">
          خطای سرور! متاسفیم...لطفا دقایقی دیگر تلاش کنید
        </h2>
        <HiFaceFrown className="icon text-rose-800" />
      </div>
    </div>
  );
}
