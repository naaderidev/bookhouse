import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

export default function VerifiedModal(props) {
  return (
    <div className="modal-wrapper">
      <button
        className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
        onClick={props.closeModal}
      >
        <HiOutlineXMark className="icon-md" />
      </button>
      <div className="flex-center flex-col gap-4">
        <h2 className="text-title-morabba text-catalan-800">{props.message}</h2>
        <button className="btn-gradient mt-3" onClick={props.verifyModal}>
          {props.btn}
        </button>
      </div>
    </div>
  );
}
