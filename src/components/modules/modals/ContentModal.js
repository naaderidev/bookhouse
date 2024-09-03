import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

export default function ContentModal(props) {
  return (
    <div className="modal-wrapper w-1/2">
      <button
        className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
        onClick={props.closeModal}
      >
        <HiOutlineXMark className="icon-md" />
      </button>
      <p className="text-center">{props.content}</p>
    </div>
  );
}
