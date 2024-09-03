import React from "react";
import { useFormik } from "formik";
import apiRequest from "@/libs/axios/configs";
import editCommentFormSchema from "@/utils/validators/editCommentFormSchema";
import { HiOutlineXMark } from "react-icons/hi2";

export default function EditCommentModal(props) {
  const EditCommentForm = useFormik({
    initialValues: { body: props.content.body },
    validationSchema: editCommentFormSchema,
    onSubmit: async (values) => {
      await apiRequest.put("/comments", {
        id: props.content._id,
        body: values.body,
      });
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
      <form action="" onSubmit={EditCommentForm.handleSubmit}>
        <div className="custom-row">
          <label htmlFor="answer-to-ticket">اصلاح متن دیدگاه دریافتی</label>
          <textarea
            type="text"
            name="body"
            cols={85}
            rows={5}
            id="answer-to-ticket"
            value={EditCommentForm.values.body}
            onChange={EditCommentForm.handleChange}
          />
          {EditCommentForm.errors.body && EditCommentForm.touched.body && (
            <span className="text-xs font-Dana text-rose-800">
              {EditCommentForm.errors.body}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={EditCommentForm.isSubmitting}
          className="btn-catalan"
        >
          <span>
            {EditCommentForm.isSubmitting ? "درحال پردازش..." : "ویرایش دیدگاه"}
          </span>
        </button>
      </form>
    </div>
  );
}
