import React from "react";
import UsersList from "./UsersList";
import { HiOutlineXMark, HiFaceFrown } from "react-icons/hi2";

export default function SearchModal(props) {
  return (
    <div className="modal-wrapper w-2/3">
      <button
        className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
        onClick={props.closeModal}
      >
        <HiOutlineXMark className="icon-md" />
      </button>
      {props.content.length ? (
        <UsersList users={props.content} />
      ) : (
        <div className="flex-center flex-col gap-4">
          <h2 className="text-title-morabba text-catalan-800">
            کاربری با این مشخصات یافت نشد
          </h2>
          <HiFaceFrown className="icon text-rose-800"/>
        </div>
      )}
    </div>
  );
}
