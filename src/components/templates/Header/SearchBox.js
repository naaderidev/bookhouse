"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchIconHandler = () => {
    if (search.trim()) {
      router.replace(`/search?q=${search}`);
    }
  };
  return (
    <div className="flex-center rounded-full border border-catalan-300 px-2 py-1">
      <input
        type="text"
        className="outline-none bg-transparent px-2 text-catalan-600 dark:text-brown-100 text-link"
        placeholder="دنبال چه کتابی می گردی؟"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <HiOutlineMagnifyingGlass
        className="icon-md"
        onClick={searchIconHandler}
      />
    </div>
  );
}
