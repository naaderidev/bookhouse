import React, { useState } from "react";
import { useFormik } from "formik";
import Modal from "@/components/modules/modals/Modal";
import FailedModal from "@/components/modules/modals/FailedModal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import editProductTranscriptFormSchema from "@/utils/validators/editProductTranscriptFormSchema";
import { HiOutlineXMark } from "react-icons/hi2";
import apiRequest from "@/libs/axios/configs";

export default function EditProductTranscript(props) {
  const [currentModal, setCurrentModal] = useState(null);
  const edtiProductTranscriptForm = useFormik({
    initialValues: {
      details: props.content.details,
      introduction: props.content.introduction,
      description: props.content.description,
      tags: props.content.tags,
    },
    validationSchema: editProductTranscriptFormSchema,
    onSubmit: async (values) => {
      const res = await apiRequest.post("/products/transcript", {
        id: props.content._id,
        ...values,
      });
      if (res.status === 200) {
        setCurrentModal("verify-edit");
      } else if (res.status === 500) {
        setCurrentModal("fail-edit");
      }
    },
  });

  return (
    <>
      <div className="modal-wrapper w-1/2">
        <button
          className="absolute right-4 top-4 cursor-pointer hover:text-rose-800"
          onClick={props.closeModal}
        >
          <HiOutlineXMark className="icon-md" />
        </button>
        <form action="" onSubmit={edtiProductTranscriptForm.handleSubmit}>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-details">جزئیات عنوان کتاب</label>
              <input
                name="details"
                type="text"
                id="product-details"
                placeholder=" جزئیات عنوان کتاب در صورت وجود وارد شود"
                value={edtiProductTranscriptForm.values.details}
                onChange={edtiProductTranscriptForm.handleChange}
                onBlur={edtiProductTranscriptForm.handleBlur}
              />
              {edtiProductTranscriptForm.errors.details &&
                edtiProductTranscriptForm.touched.details && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductTranscriptForm.errors.details}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-tags" className="flex items-center">
                برچسب های کتاب
              </label>
              <input
                name="tags"
                type="text"
                id="product-tags"
                placeholder="حداکثر 3 برچسب بنویسید و با کاما جداسازی را انجام دهید"
                value={edtiProductTranscriptForm.values.tags}
                onChange={edtiProductTranscriptForm.handleChange}
                onBlur={edtiProductTranscriptForm.handleBlur}
              />
              {edtiProductTranscriptForm.errors.tags &&
                edtiProductTranscriptForm.touched.tags && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductTranscriptForm.errors.tags}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-intro" className="flex items-center">
                معرفی کتاب
              </label>
              <textarea
                name="introduction"
                type="text"
                id="product-intro"
                rows={7}
                placeholder="حداکثر در یک پاراگراف کتاب را معرفی کنید"
                value={edtiProductTranscriptForm.values.introduction}
                onChange={edtiProductTranscriptForm.handleChange}
                onBlur={edtiProductTranscriptForm.handleBlur}
              />
              {edtiProductTranscriptForm.errors.introduction &&
                edtiProductTranscriptForm.touched.introduction && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductTranscriptForm.errors.introduction}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-desc" className="flex items-center">
                توضیحات کتاب
              </label>
              <textarea
                name="description"
                type="text"
                id="product-desc"
                rows={7}
                placeholder="حداکثر در یک الی دو پاراگراف توضیحاتی درخصوص کتاب بنویسید"
                value={edtiProductTranscriptForm.values.description}
                onChange={edtiProductTranscriptForm.handleChange}
                onBlur={edtiProductTranscriptForm.handleBlur}
              />
              {edtiProductTranscriptForm.errors.description &&
                edtiProductTranscriptForm.touched.description && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductTranscriptForm.errors.description}
                  </span>
                )}
            </div>
          </div>
          <button
            type="submit"
            disabled={edtiProductTranscriptForm.isSubmitting}
            className="btn-catalan my-4"
          >
            <span>
              {edtiProductTranscriptForm.isSubmitting
                ? "درحال پردازش..."
                : "بروزرسانی"}
            </span>
          </button>
        </form>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "verify-edit" ? (
            <VerifiedModal
              closeModal={() => setCurrentModal(null)}
              message="اطلاعات محصول با موفقیت ویرایش شد"
              btn="بروزرسانی"
              verifyModal={() => location.reload()}
            />
          ) : (
            <FailedModal closeModal={() => setCurrentModal(null)} />
          )}
        </Modal>
      )}
    </>
  );
}
