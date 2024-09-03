"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import createDiscountFormSchema from "@/utils/validators/createDiscountFormSchema";
import Modal from "@/components/modules/modals/Modal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import FailedModal from "@/components/modules/modals/FailedModal";
import apiRequest from "@/libs/axios/configs";

export default function InsertDiscount() {
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState(null);
  const createDiscountForm = useFormik({
    initialValues: {
      code: "",
      percent: "",
      maxUse: "",
      desc: "",
    },
    validationSchema: createDiscountFormSchema,
    onSubmit: async (values) => {
      await apiRequest.post("/discounts", values);
      setCurrentModal(null);
      location.replace("/admin-panel/discounts");
    },
  });

  return (
    <>
      <div className="container mx-8">
        <form action="" onSubmit={createDiscountForm.handleSubmit}>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="code">کد تخفیف</label>
              <input
                type="text"
                id="code"
                placeholder="لطفا عبارت انگلیسی کوتاه و مناسبی برای کد انتخاب کنید مثلا NR-403"
                className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md  text-link md:text-regular text-catalan-600 dark:text-brown-100"
                value={createDiscountForm.values.code}
                onChange={createDiscountForm.handleChange}
                onBlur={createDiscountForm.handleBlur}
              />
              {createDiscountForm.errors.code &&
                createDiscountForm.touched.code && (
                  <span className="text-xs font-Dana text-rose-800">
                    {createDiscountForm.errors.code}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="percent">درصد تخفیف</label>
              <input
                type="text"
                id="percent"
                placeholder="لطفا درصد تخفیف را به صورت عدد وارد کنید مثلا: 20"
                className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md  text-link md:text-regular text-catalan-600 dark:text-brown-100"
                value={createDiscountForm.values.percent}
                onChange={createDiscountForm.handleChange}
                onBlur={createDiscountForm.handleBlur}
              />
              {createDiscountForm.errors.percent &&
                createDiscountForm.touched.percent && (
                  <span className="text-xs font-Dana text-rose-800">
                    {createDiscountForm.errors.percent}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="maxUse">حداکثر استفاده</label>
              <input
                type="text"
                id="maxUse"
                placeholder="لطفا حداکثر دفعات استفاده را به صورت عدد وارد کنید مثلا: 20"
                className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md  text-link md:text-regular text-catalan-600 dark:text-brown-100"
                value={createDiscountForm.values.maxUse}
                onChange={createDiscountForm.handleChange}
                onBlur={createDiscountForm.handleBlur}
              />
              {createDiscountForm.errors.maxUse &&
                createDiscountForm.touched.maxUse && (
                  <span className="text-xs font-Dana text-rose-800">
                    {createDiscountForm.errors.maxUse}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="desc">توضیحات</label>
              <input
                type="text"
                id="desc"
                placeholder="یک جمله در مورد کد تعریف شده بنویسید"
                className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md  text-link md:text-regular text-catalan-600 dark:text-brown-100"
                value={createDiscountForm.values.desc}
                onChange={createDiscountForm.handleChange}
                onBlur={createDiscountForm.handleBlur}
              />
              {createDiscountForm.errors.desc &&
                createDiscountForm.touched.desc && (
                  <span className="text-xs font-Dana text-rose-800">
                    {createDiscountForm.errors.desc}
                  </span>
                )}
            </div>
          </div>
          <button
            type="submit"
            disabled={createDiscountForm.isSubmitting}
            className="btn-catalan"
          >
            <span>
              {createDiscountForm.isSubmitting ? "درحال پردازش" : "ثبت تخفیف"}
            </span>
          </button>
        </form>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "verify-insert" ? (
            <VerifiedModal
              verifyModal={() => router.replace("/admin-panel/discounts")}
              message="کد تخفیف با موفقیت ثبت شد"
              btn="بروزرسانی"
              closeModal={() => setCurrentModal(null)}
            />
          ) : (
            <FailedModal closeModal={() => setCurrentModal(null)} />
          )}
        </Modal>
      )}
    </>
  );
}
