import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

export default function ProductDetailsModal(props) {
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
            <th>دسته بندی</th>
            <th>تخفیف</th>
            <th>مترجم</th>
            <th>ویراستار</th>
            <th>دست دوم</th>
            <th>پارگی</th>
            <th>هایلایت</th>
            <th>تاریخ ثبت</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.content._id}>
            <td>{props.content.category}</td>
            <td>{props.content.discount} %</td>
            <td>
              {props.content.translator === ""
                ? "ندارد"
                : props.content.translator}
            </td>
            <td>
              {props.content.editor === "" ? "ندارد" : props.content.editor}
            </td>
            <td>{props.content.secondHand ? "بله" : "خیر"}</td>
            <td>{props.content.rupture ? "دارد" : "ندارد"}</td>
            <td>{props.content.highlight ? "دارد" : "ندارد"}</td>
            <td>
              {new Date(props.content.createdAt).toLocaleDateString("fa-IR")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
