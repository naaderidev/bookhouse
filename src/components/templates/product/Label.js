import React from "react";

export default function Label({ icon, title, value }) {
  return (
    <div className="flex items-center w-52 text-link bg-gray-100 rounded-ss-xl rounded-ee-xl px-3 py-2 border-y border-catalan-600 dark:border-brown-100">
      <img src={icon} alt="" className="icon-md" />
      <span className="text-xs text-catalan-800 sm:text-sm">{title} : </span>
      <span className="text-xs text-catalan-800 sm:text-sm"> {value}</span>
    </div>
  );
}
