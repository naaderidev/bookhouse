import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

export default function ShowOrderDetailsModal(props) {
  return (
    <div className="modal-wrapper w-1/2 h-1/2 overflow-auto">
      <button
        className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
        onClick={props.closeModal}
      >
        <HiOutlineXMark className="icon-md" />
      </button>
      <table className="cms-table">
        <thead>
          <tr>
            <th>تصویر</th>
            <th>عنوان</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>تخفیف</th>
          </tr>
        </thead>
        <tbody>
          {props.content.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt="" className="w-12 h-16 m-auto" />
              </td>
              <td>{item.title}</td>
              <td>{item.price.toLocaleString()}</td>
              <td>{item.count}</td>
              <td>{item.discount} %</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
