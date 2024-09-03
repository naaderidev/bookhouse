"use client";
import React from "react";
import { useFormik } from "formik";
import apiRequest from "@/libs/axios/configs";
import contactFormSchema from "@/utils/validators/contactFormSchema";
import { HiOutlineBookOpen } from "react-icons/hi2";

export default function ContactForm() {
  const contactForm = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: async (values, { resetForm }) => {
      await apiRequest.post("/contact", values);
      resetForm();
    },
  });

  return (
    <div>
      <div className="max-w-[600px]" data-aos="fade-right">
        <h2 className="text-justify text-regular leading-7 md:text-subtitle md:leading-9 my-6">
          فرم تماس
        </h2>
        <form
          action=""
          className="flex flex-col gap-4 my-8"
          onSubmit={contactForm.handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={contactForm.values.name}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            placeholder="نام و نام خانوداگی"
            className="form-input"
          />
          {contactForm.errors.name && contactForm.touched.name && (
            <span className="text-xs font-Dana text-rose-800">
              {contactForm.errors.name}
            </span>
          )}
          <input
            type="text"
            name="phone"
            value={contactForm.values.phone}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            placeholder="شماره تلفن همراه"
            className="form-input"
          />
          {contactForm.errors.phone && contactForm.touched.phone && (
            <span className="text-xs font-Dana text-rose-800">
              {contactForm.errors.phone}
            </span>
          )}
          <input
            type="text"
            name="email"
            value={contactForm.values.email}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            placeholder="ایمیل معتبر"
            className="form-input"
          />
          {contactForm.errors.email && contactForm.touched.email && (
            <span className="text-xs font-Dana text-rose-800">
              {contactForm.errors.email}
            </span>
          )}
          <textarea
            placeholder="پیام و درخواست شما..."
            className="form-input"
            rows={6}
            cols={30}
            name="message"
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
          />
          {contactForm.errors.message && contactForm.touched.message && (
            <span className="text-xs font-Dana text-rose-800">
              {contactForm.errors.message}
            </span>
          )}
          <button
            type="submit"
            disabled={contactForm.isSubmitting}
            className="btn-gradient btn-plus-icon"
          >
            <span>
              {contactForm.isSubmitting ? "درحال پردازش..." : "ارسال"}
            </span>
            <HiOutlineBookOpen className="icon-sm" />
          </button>
        </form>
      </div>
    </div>
  );
}
