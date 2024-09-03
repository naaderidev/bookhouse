"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import Todo from "./Todo";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import Pagination from "@/components/modules/Pagination";
import todoFormSchema from "@/utils/validators/todoFormSchema";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import { HiOutlinePlusCircle } from "react-icons/hi2";

export default function TodoList({ todos }) {
  const [currentModal, setCurrentModal] = useState(null);
  const [shownTodos, setShownTodos] = useState([...todos]);
  const todoForm = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: todoFormSchema,
    onSubmit: async (values, { resetForm }) => {
      const res = await apiRequest.post("/todos", values);
      if (res.status === 201) {
        setCurrentModal("verify-insert");
      }
      setCurrentModal(null);
      resetForm();
    },
  });
  return (
    <>
      <div className="container mx-8">
        <form action="" onSubmit={todoForm.handleSubmit}>
          <div className="custom-row">
            <label htmlFor="todo" className="mr-1">
              افزودن برنامه جدید
            </label>
            <input
              type="text"
              name="title"
              className="text-catalan-800"
              placeholder="برنامه مورد نظر را با عنوان مناسب حداکثر با 200 کاراکتر بنویسید"
              id="todo"
              value={todoForm.values.title}
              onChange={todoForm.handleChange}
              onBlur={todoForm.handleBlur}
            />
            {todoForm.errors.title && todoForm.touched.title && (
              <span className="text-xs font-Dana text-rose-800">
                {todoForm.errors.title}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={todoForm.isSubmitting}
            className="btn-catalan btn-plus-icon"
          >
            <span>{todoForm.isSubmitting ? "درحال پردازش..." : "ثبت"}</span>
            <HiOutlinePlusCircle className="icon-md" />
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-title-morabba">لیست برنامه ها</h2>
          {todos.length === 0 ? (
            <EmptyContainer message="هنوز برنامه ای برای انجام ثبت نکرده اید" />
          ) : (
            shownTodos.map((todo) => <Todo key={todo._id} {...todo} />)
          )}
        </div>
      </div>
      <Pagination items={todos} setShownItems={setShownTodos} count={4} type="cms"/>
      {currentModal && (
        <Modal>
          {currentModal === "verify-insert" ? (
            <VerifiedModal
              closeModal={() => setCurrentModal(null)}
              message="برنامه با موفقیت به لیست افزوده شد"
              btn="بروزرسانی"
              verifyModal={() => location.reload()}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
