"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  HiMiniChevronDoubleRight,
  HiMiniChevronDoubleLeft,
} from "react-icons/hi2";

export default function Pagination({ items, setShownItems, count, type }) {
  // const count = 4
  const numOfPages = Math.ceil(items.length / count)
  const [page, setPage] = useState(1);
  const paginationHandler = (pageNum) => {
    setPage(pageNum);
    let endIndex = count * pageNum;
    let startIndex = endIndex - count;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShownItems(paginatedItems);
  };

  useEffect(() => {
    paginationHandler(page);
  }, [page, items, count]);
  
  return (
    <div className={clsx("flex-center gap-x-4 my-2 font-Dana", {
      "text-catalan-800": type === "cms",
      "": type === "market",
    })}>
      <div className="flex gap-x-2">
        <button
          onClick={() => setPage(1)}
          className={numOfPages === 1 ? "hidden" : "btn-gradient"}
          disabled={page === 1 ? true : false}
        >
          صفحه اول
        </button>
        <button
          onClick={() => paginationHandler(page - 1)}
          className={numOfPages === 1 ? "hidden" : "btn-gradient"}
          disabled={page === 1 ? true : false}
        >
          <HiMiniChevronDoubleRight />
        </button>
        <button className="btn-form">
          صفحه {page} از {numOfPages}
        </button>
        <button
          onClick={() => paginationHandler(page + 1)}
          className={numOfPages === 1 ? "hidden" : "btn-gradient"}
          disabled={page === numOfPages ? true : false}
        >
          <HiMiniChevronDoubleLeft />
        </button>
        <button
          onClick={() => setPage(numOfPages)}
          className={numOfPages === 1 ? "hidden" : "btn-gradient"}
          disabled={page === 1 ? true : false}
        >
          صفحه آخر
        </button>
      </div>
    </div>
  );
}
