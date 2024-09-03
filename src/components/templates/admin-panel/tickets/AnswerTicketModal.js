import React from "react";
import { useFormik } from "formik";
import apiRequest from "@/libs/axios/configs";
import answerToTicketFormSchema from "@/utils/validators/answerToTicketFormSchema";
import { HiOutlineXMark } from "react-icons/hi2";

export default function AnswerTicketModal(props) {
  const answerTicketForm = useFormik({
    initialValues: { body: "" },
    validationSchema: answerToTicketFormSchema,
    onSubmit: async (values) => {
      const mainAnswer = {
        ...props.content,
        body: values.body,
        ticketID: props.content._id,
      };
      await apiRequest.post("/tickets/answer", mainAnswer);
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
      <form action="" onSubmit={answerTicketForm.handleSubmit}>
        <div className="custom-row">
          <label htmlFor="answer-to-ticket">{`پاسخ برای تیکت "${props.content.user.name}" با موضوع "${props.content.title}"`}</label>
          <textarea
            type="text"
            name="body"
            cols={85}
            rows={5}
            placeholder="پاسخ مورد نظر را بنویسید..."
            id="answer-to-ticket"
            value={answerTicketForm.values.body}
            onChange={answerTicketForm.handleChange}
            onBlur={answerTicketForm.handleBlur}
          />
          {answerTicketForm.errors.body && answerTicketForm.touched.body && (
            <span className="text-xs font-Dana text-rose-800">
              {answerTicketForm.errors.body}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={answerTicketForm.isSubmitting}
          className="btn-catalan"
        >
          <span>
            {answerTicketForm.isSubmitting ? "درحال پردازش..." : " ارسال پاسخ"}
          </span>
        </button>
      </form>
    </div>
  );
}
