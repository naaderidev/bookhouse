"use client";
import React, { useState } from "react";
import SearchModal from "./SearchModal";
import Modal from "@/components/modules/modals/Modal";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function UserSearch({ users }) {
  const [searchInput, setSearchInput] = useState("");
  const [mainUser, setMainUser] = useState({});
  const [currentModal, setCurrentModal] = useState(null);
  const searchHandler = () => {
    setCurrentModal("search");
    const searchUser = users.filter(
      (user) => user.email === searchInput || user.phone === searchInput
    );
    setMainUser(searchUser);
  };
  return (
    <>
      <div className="flex items-center gap-1 p-4 mx-8">
        <h3 className="text-title-morabba">جستجوی کاربر:</h3>
        <div className="hidden md:flex-center gap-2 px-3 py-1 rounded-md">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="جستجوی ایمیل یا شماره کاربر"
            className="form-input"
          />
          <button className="btn-icon" onClick={searchHandler}>
            <HiOutlineMagnifyingGlass className="icon-md rotate-90" />
          </button>
        </div>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "search" && (
            <SearchModal
              content={mainUser}
              closeModal={() => setCurrentModal(null)}
            />
          )}
        </Modal>
      )}
    </>
  );
}
