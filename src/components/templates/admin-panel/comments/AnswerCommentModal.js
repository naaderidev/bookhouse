import React from "react";
import { useFormik } from "formik";
import apiRequest from "@/libs/axios/configs";
import answerToTicketFormSchema from "@/utils/validators/answerToTicketFormSchema";
import { HiOutlineXMark } from "react-icons/hi2";

export default function AnswerCommentModal(props) {
  const answerCommentForm = useFormik({
    initialValues: { body: "" },
    validationSchema: answerToTicketFormSchema,
    onSubmit: async (values) => {
      const mainAnswer = {
        ...props.content,
        body: values.body,
        commentID: props.content._id,
      };
      await apiRequest.post("/comments/answer", mainAnswer);
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
      <form action="" onSubmit={answerCommentForm.handleSubmit}>
        <div className="custom-row">
          <label htmlFor="answer-to-ticket">{`پاسخ برای کاربر "${props.content.username}" درباره کتاب "${props.content.productId.title}"`}</label>
          <textarea
            type="text"
            name="body"
            cols={85}
            rows={5}
            placeholder="پاسخ مورد نظر را بنویسید..."
            id="answer-to-ticket"
            value={answerCommentForm.values.body}
            onChange={answerCommentForm.handleChange}
            onBlur={answerCommentForm.handleBlur}
          />
          {answerCommentForm.errors.body && answerCommentForm.touched.body && (
            <span className="text-xs font-Dana text-rose-800">
              {answerCommentForm.errors.body}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={answerCommentForm.isSubmitting}
          className="btn-catalan"
        >
          <span>
            {answerCommentForm.isSubmitting ? "درحال پردازش..." : "ارسال پاسخ"}
          </span>
        </button>
      </form>
    </div>
  );
}
