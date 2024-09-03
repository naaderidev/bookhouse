import React from "react";
import { useFormik } from "formik";
import createDiscountFormSchema from "@/utils/validators/createDiscountFormSchema";
import { HiOutlineXMark } from "react-icons/hi2";
import apiRequest from "@/libs/axios/configs";

export default function EditDiscountModal(props) {
  const createDiscountForm = useFormik({
    initialValues: {
      code: props.content.code,
      percent: props.content.percent,
      maxUse: props.content.maxUse,
      desc: props.content.desc,
    },
    validationSchema: createDiscountFormSchema,
    onSubmit: async (values) => {
      await apiRequest.put("/discounts", { ...values, id: props.content._id });
      location.reload();
    },
  });

  return (
    <div className="modal-wrapper w-1/2">
      <button
        className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
        onClick={props.closeModal}
      >
        <HiOutlineXMark className="icon-md" />
      </button>
      <form action="" onSubmit={createDiscountForm.handleSubmit}>
        <div className="form-row">
          <div className="form-col-50">
            <label htmlFor="code">کد تخفیف</label>
            <input
              type="text"
              id="code"
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
            {createDiscountForm.isSubmitting ? "درحال پردازش" : "ویرایش تخفیف"}
          </span>
        </button>
      </form>
    </div>
  );
}
