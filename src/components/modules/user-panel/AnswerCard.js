import React from "react";
import clsx from "clsx";

export default function AnswerCard({ type, body, createdAt }) {
  return (
    <div
      className={`flex ${type === "user" ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`px-4 py-3 w-full md:w-1/2 ${
          type === "user"
            ? "border-catalan-800 border-s-2 border-t-4 rounded-ss-2xl"
            : "border-catalan-300 border-t-4 border-e-2 rounded-se-2xl"
        }`}
      >
        <div
          className={`flex flex-col text-brown-100 font-MorabbaLight ${
            type === "user" ? "items-start" : "items-end"
          }`}
        >
          <h2
            className={clsx("badge mb-2", {
              "bg-catalan-800": type === "user",
              "bg-rose-800": type === "admin",
            })}
          >
            {type === "user" ? "کاربر" : "ادمین"}
          </h2>
          <h3 className="badge mb-2 bg-catalan-400">
            <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
            <span className="px-2">|</span>
            <span>{new Date(createdAt).toLocaleTimeString("fa-IR")}</span>
          </h3>
        </div>
        <p className="text-regular text-catalan-800 mt-4">{body}</p>
      </div>
    </div>
  );
}
