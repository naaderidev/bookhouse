"use client";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import apiRequest from "@/libs/axios/configs";
import exchangeFormSchema from "@/utils/validators/exchangeFormSchema";
import { HiOutlineBookOpen } from "react-icons/hi2";

export default function Exchange() {
  const exchangeForm = useFormik({
    initialValues: {
      name: "",
      phone: "",
      suggest: "",
      request: "",
    },
    validationSchema: exchangeFormSchema,
    onSubmit: async (values, { resetForm }) => {
      await apiRequest.post("/exchange", values);
      resetForm();
    },
  });
  return (
    <div className="pt-4">
      <div className="container">
        <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-5 p-8">
          <div className="max-w-[600px]" data-aos="fade-left">
            <h3 className="section-title">مبادله کتاب</h3>
            <h4 className="section-subtitle">
              اجازه دهیم کتابها به پرواز درآیند و توسط افراد بیشتری خوانده شوند
            </h4>
            <p className="text-justify text-link leading-7 md:text-regular md:leading-9 my-6">
              برای فروش کتابهای خوانده شده‌ی خود می‌توانید از طریق فرم زیر با ما
              در ارتباط باشید فراموش نکنید که حتما سال چاپ کتاب و قیمت پیشنهادی
              برای فروش را ارسال کنید. همچنین می‌توانید از قسمت کتابفروشی
              کتابهای دست دوم با قیمت ارزان خریداری کنید. بی صبرانه منتظر پیام
              های شما هستیم.
            </p>
            <form
              action=""
              className="flex flex-col gap-4 my-8"
              onSubmit={exchangeForm.handleSubmit}
            >
              <input
                type="text"
                name="name"
                value={exchangeForm.values.name}
                onChange={exchangeForm.handleChange}
                onBlur={exchangeForm.handleBlur}
                placeholder="نام و نام خانوداگی"
                className="form-input"
              />
              {exchangeForm.errors.name && exchangeForm.touched.name && (
                <span className="text-xs font-Dana text-red-500">
                  {exchangeForm.errors.name}
                </span>
              )}
              <input
                type="text"
                name="phone"
                placeholder="شماره تلفن همراه"
                value={exchangeForm.values.phone}
                onChange={exchangeForm.handleChange}
                onBlur={exchangeForm.handleBlur}
                className="form-input"
              />
              {exchangeForm.errors.phone && exchangeForm.touched.phone && (
                <span className="text-xs font-Dana text-red-500">
                  {exchangeForm.errors.phone}
                </span>
              )}
              <input
                type="text"
                name="suggest"
                placeholder="کتاب پیشنهادی"
                value={exchangeForm.values.suggest}
                onChange={exchangeForm.handleChange}
                onBlur={exchangeForm.handleBlur}
                className="form-input"
              />
              {exchangeForm.errors.suggest && exchangeForm.touched.suggest && (
                <span className="text-xs font-Dana text-red-500">
                  {exchangeForm.errors.suggest}
                </span>
              )}
              <input
                type="text"
                name="request"
                placeholder="کتاب درخواستی"
                value={exchangeForm.values.request}
                onChange={exchangeForm.handleChange}
                onBlur={exchangeForm.handleBlur}
                className="form-input"
              />
              {exchangeForm.errors.request && exchangeForm.touched.request && (
                <span className="text-xs font-Dana text-red-500">
                  {exchangeForm.errors.request}
                </span>
              )}
              <button
                type="submit"
                disabled={exchangeForm.isSubmitting}
                className="btn-gradient btn-plus-icon"
              >
                <span>
                  {exchangeForm.isSubmitting ? "درحال پردازش..." : "ارسال"}
                </span>
                <HiOutlineBookOpen className="icon-sm" />
              </button>
            </form>
          </div>
          <Image
            width={500}
            height={500}
            data-aos="fade-right"
            className="w-[560px] h-[500px] min-w-[500px] rounded-xl hidden lg:block"
            src="/images/suggestion-transformed.png"
            alt="contact-img"
          />
        </div>
      </div>
    </div>
  );
}
