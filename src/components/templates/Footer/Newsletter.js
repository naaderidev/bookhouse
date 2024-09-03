"use client";
import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import newsletterFormSchema from "@/utils/validators/newsletterFormSchema";
import { FaBullhorn } from "react-icons/fa6";
import apiRequest from "@/libs/axios/configs";

export default function Newsletter() {
  const newsletterForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: newsletterFormSchema,
    onSubmit: async (values, { resetForm }) => {
      await apiRequest.post("/newsletter", values);
      resetForm();
    },
  });

  return (
    <div className="max-w-[378px] lg:w-auto">
      <h5 className="text-subtitle mt-5 md:mb-[28px]">عضویت در خبرنامه</h5>
      <h6 className="text-regular my-5">اطلاع از جدیدترین کتابها و تخفیف ها</h6>
      <form
        className="flex flex-col gap-4"
        onSubmit={newsletterForm.handleSubmit}
      >
        <input
          id="email"
          type="text"
          name="email"
          className="form-input text-brown-100"
          placeholder="ایمل خود را وارد کنید"
          value={newsletterForm.values.email}
          onChange={newsletterForm.handleChange}
          onBlur={newsletterForm.handleBlur}
        />
        {newsletterForm.errors.email && newsletterForm.touched.email && (
          <span className="text-xs font-Dana text-rose-800">
            {newsletterForm.errors.email}
          </span>
        )}
        <button
          type="submit"
          disabled={newsletterForm.isSubmitting}
          className="btn-gradient btn-plus-icon text-brown-100"
        >
          <span>
            {newsletterForm.isSubmitting
              ? "درحال پردازش..."
              : "عضویت در خبرنامه"}
          </span>
          <FaBullhorn className="icon-sm" />
        </button>
      </form>
    </div>
  );
}
