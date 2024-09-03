import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

export default function DetailsModal(props) {
  return (
    <div className="modal-wrapper w-1/2">
      <button
        className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
        onClick={props.closeModal}
      >
        <HiOutlineXMark className="icon-md" />
      </button>
      <table className="cms-table">
        <thead>
          <tr>
            <th>استان</th>
            <th>شهر</th>
            <th>کد پستی</th>
            <th className="hidden lg:table-cell">آدرس</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.content._id}>
            <td>{props.content.province}</td>
            <td>{props.content.city}</td>
            <td>{props.content.zip}</td>
            <td className="hidden lg:table-cell">{props.content.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
