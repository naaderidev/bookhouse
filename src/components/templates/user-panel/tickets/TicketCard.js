import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  HiCursorArrowRays,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function TicketCard({
  _id,
  title,
  department,
  hasAnswer,
  createdAt,
}) {
  return (
    <Link href={`/user-panel/tickets/answer/${_id}`}>
      <div className="user-panel-card">
        <div className="flex items-center gap-2">
          <HiCursorArrowRays className="icon-md text-catalan-400" />
          <h3 className="text-link md:text-regular text-catalan-800">{title}</h3>
        </div>
        <div className="flex items-center gap-2 text-sm font-MorabbaLight text-catalan-800">
          <span className="hidden lg:inline-flex">
            {new Date(createdAt).toLocaleDateString("fa-IR")}
          </span>
          <span className="hidden lg:inline-flex">
            {new Date(createdAt).toLocaleTimeString("fa-IR")}
          </span>
          <span className="badge hidden md:inline-flex bg-catalan-600">
            {department.title}
          </span>
          <div
            className={clsx("badge btn-plus-icon", {
              "bg-catalan-400": hasAnswer === true,
              "bg-amber-600": hasAnswer === false,
            })}
          >
            <span className="hidden lg:inline-flex">
              {hasAnswer ? "پاسخ داده شده" : "در انتظار بررسی"}
            </span>
            {hasAnswer ? (
              <HiOutlineCheckCircle className="icon-sm" />
            ) : (
              <HiOutlineClock className="icon-sm" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
