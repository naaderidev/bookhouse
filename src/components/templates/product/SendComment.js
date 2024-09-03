"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import apiRequest from "@/libs/axios/configs";
import sendCommentFormSchema from "@/utils/validators/sendCommentFormSchema";
import { HiOutlineBookOpen, HiOutlineStar } from "react-icons/hi2";

export default function SendComment({ productId, isLogin }) {
  const [score, setScore] = useState(5);
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const sendCommentForm = useFormik({
    initialValues: {
      username: userInfo.username || "",
      email: userInfo.email || "",
      body: "",
      isUserSave: false,
    },
    validationSchema: sendCommentFormSchema,
    onSubmit: async (values, { resetForm }) => {
      const newComment = {
        username: values.username,
        email: values.email,
        body: values.body,
        score,
        productId,
      };
      if (values.isUserSave) {
        const userInfo = { username: values.username, email: values.email };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      }
      await apiRequest.post("/comments", newComment);
      resetForm();
    },
  });

  return (
    <div className={isLogin ? "lg:col-span-5" : "hidden"}>
      <div className="text-justify">
        <h3 className="text-title-morabba">دیدگاه خود را برای ما ارسال کنید</h3>
        <p className="text-link my-4">
          نشانی ایمیل شما منتشر نخواهد شد. لطفا تمامی فیلدها را تکمیل کنید
        </p>
        <div className="flex items-center gap-1">
          <h4 className="text-title-morabba ml-2">امتیاز شما</h4>
          <div className="rate">
            <HiOutlineStar onClick={() => setScore(5)} />
            <HiOutlineStar onClick={() => setScore(4)} />
            <HiOutlineStar onClick={() => setScore(3)} />
            <HiOutlineStar onClick={() => setScore(2)} />
            <HiOutlineStar onClick={() => setScore(1)} />
          </div>
          <span className="text-title-morabba text-amber-600 px-2">
            {score} ستاره
          </span>
        </div>
        <form
          action=""
          className="flex flex-col gap-4 my-6"
          onSubmit={sendCommentForm.handleSubmit}
        >
          <input
            type="text"
            name="username"
            value={sendCommentForm.values.username}
            onChange={sendCommentForm.handleChange}
            onBlur={sendCommentForm.handleBlur}
            placeholder="نام و نام خانوداگی"
            className="form-input"
          />
          {sendCommentForm.errors.username &&
            sendCommentForm.touched.username && (
              <span className="text-xs font-Dana text-rose-800">
                {sendCommentForm.errors.username}
              </span>
            )}
          <input
            type="email"
            name="email"
            value={sendCommentForm.values.email}
            onChange={sendCommentForm.handleChange}
            onBlur={sendCommentForm.handleBlur}
            placeholder="ایمیل معتبر"
            className="form-input"
          />
          {sendCommentForm.errors.email && sendCommentForm.touched.email && (
            <span className="text-xs font-Dana text-rose-800">
              {sendCommentForm.errors.email}
            </span>
          )}
          <textarea
            placeholder="پیام شما..."
            className="form-input"
            rows={5}
            cols={30}
            name="body"
            value={sendCommentForm.values.body}
            onChange={sendCommentForm.handleChange}
            onBlur={sendCommentForm.handleBlur}
          />
          {sendCommentForm.errors.body && sendCommentForm.touched.body && (
            <span className="text-xs font-Dana text-rose-800">
              {sendCommentForm.errors.body}
            </span>
          )}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              className="accent-catalan-600"
              name="isUserSave"
              checked={sendCommentForm.values.isUserSave}
              onChange={sendCommentForm.handleChange}
            />
            <p className="text-link">
              ذخیره نام و ایمیل من در مرورگر برای ارسال دیدگاه
            </p>
          </div>
          <button
            type="submit"
            disabled={sendCommentForm.isSubmitting}
            className="btn-gradient btn-plus-icon"
          >
            <span>
              {sendCommentForm.isSubmitting ? "درحال پردازش..." : "ارسال پیام"}
            </span>
            <HiOutlineBookOpen className="icon-sm" />
          </button>
        </form>
      </div>
    </div>
  );
}
