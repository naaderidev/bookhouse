import React, { useState } from "react";
import { useFormik } from "formik";
import Modal from "@/components/modules/modals/Modal";
import FailedModal from "@/components/modules/modals/FailedModal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import editProductInfoFormSchema from "@/utils/validators/editProductInfoFormSchema";
import { HiOutlineXMark } from "react-icons/hi2";

export default function EditProductInfoModal(props) {
  const [currentModal, setCurrentModal] = useState(null);
  const edtiProductInfoForm = useFormik({
    initialValues: {
      id: props.content._id,
      title: props.content.title,
      author: props.content.author,
      translator: props.content.translator,
      category: props.content.category,
      editor: props.content.editor,
      publisher: props.content.publisher,
      publishDate: props.content.publishDate,
      printPrice: props.content.printPrice,
      salePrice: props.content.salePrice,
      qty: props.content.qty,
      discount: props.content.discount,
      secondHand: props.content.secondHand,
      highlight: props.content.highlight,
      rupture: props.content.rupture,
    },
    validationSchema: editProductInfoFormSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("translator", values.translator);
      formData.append("editor", values.editor);
      formData.append("category", values.category);
      formData.append("publisher", values.publisher);
      formData.append("publishDate", values.publishDate);
      formData.append("printPrice", values.printPrice);
      formData.append("salePrice", values.salePrice);
      formData.append("secondHand", values.secondHand);
      formData.append("rupture", values.rupture);
      formData.append("highlight", values.highlight);
      formData.append("qty", values.qty);
      formData.append("discount", values.discount);

      const res = await fetch("/api/products/information", {
        method: "POST",
        body: formData,
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
        <form action="" onSubmit={edtiProductInfoForm.handleSubmit}>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-title">عنوان کتاب</label>
              <input
                name="title"
                type="text"
                id="product-title"
                placeholder="عنوان کتاب را وارد کنید"
                value={edtiProductInfoForm.values.title}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.title &&
                edtiProductInfoForm.touched.title && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.title}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-author">نویسنده</label>
              <input
                name="author"
                type="text"
                id="product-author"
                placeholder="نام نویسنده را وارد کنید"
                value={edtiProductInfoForm.values.author}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.author &&
                edtiProductInfoForm.touched.author && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.author}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-translator">مترجم</label>
              <input
                name="translator"
                type="text"
                id="product-translator"
                placeholder="درصورت وجود نام مترجم را وارد کنید"
                value={edtiProductInfoForm.values.translator}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.translator &&
                edtiProductInfoForm.touched.translator && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.translator}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-editor">ویراستار</label>
              <input
                name="editor"
                type="text"
                id="product-editor"
                placeholder="درصورت وجود نام ویراستار را وارد کنید"
                value={edtiProductInfoForm.values.editor}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.editor &&
                edtiProductInfoForm.touched.editor && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.editor}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-publisher">انتشارات</label>
              <input
                name="publisher"
                type="text"
                id="product-publisher"
                placeholder="نام انتشارات ار وارد کنید"
                value={edtiProductInfoForm.values.publisher}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.publisher &&
                edtiProductInfoForm.touched.publisher && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.publisher}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-publish-date">سال چاپ</label>
              <input
                name="publishDate"
                type="text"
                id="product-publish-date"
                placeholder="سال چاپ کتاب را وارد کنید"
                value={edtiProductInfoForm.values.publishDate}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.publishDate &&
                edtiProductInfoForm.touched.publishDate && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.publishDate}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-print-price">قیمت جلد</label>
              <input
                name="printPrice"
                type="text"
                id="product-print-price"
                placeholder="قیمت پشت جلد کتاب را وارد کنید"
                value={edtiProductInfoForm.values.printPrice}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.printPrice &&
                edtiProductInfoForm.touched.printPrice && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.printPrice}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-sale-price">قیمت فروش</label>
              <input
                name="salePrice"
                type="text"
                id="product-sale-price"
                placeholder="قیمت پیشنهادی برای فروش را وارد کنید"
                value={edtiProductInfoForm.values.salePrice}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.salePrice &&
                edtiProductInfoForm.touched.salePrice && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.salePrice}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-discount" className="flex items-center">
                درصد تخفیف
              </label>
              <input
                name="discount"
                type="text"
                id="product-discount"
                placeholder="درصورت وجود درصد تخفیف را وارد کنید"
                value={edtiProductInfoForm.values.discount}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.discount &&
                edtiProductInfoForm.touched.discount && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.discount}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label
                htmlFor="product-second-hand"
                className="flex items-center"
              >
                کتاب دست دوم
              </label>
              <select
                name="secondHand"
                id="product-second-hand"
                value={edtiProductInfoForm.values.secondHand}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              >
                <option value={false}>خیر</option>
                <option value={true}>بله</option>
              </select>
              {edtiProductInfoForm.errors.secondHand &&
                edtiProductInfoForm.touched.secondHand && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.secondHand}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-highlight" className="flex items-center">
                خط خوردگی
              </label>
              <select
                name="highlight"
                id="product-highlight"
                value={edtiProductInfoForm.values.highlight}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              >
                <option value={false}>خیر</option>
                <option value={true}>بله</option>
              </select>
              {edtiProductInfoForm.errors.highlight &&
                edtiProductInfoForm.touched.highlight && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.highlight}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-rupture" className="flex items-center">
                پارگی
              </label>
              <select
                name="rupture"
                id="product-rupture"
                value={edtiProductInfoForm.values.rupture}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              >
                <option value={false}>خیر</option>
                <option value={true}>بله</option>
              </select>
              {edtiProductInfoForm.errors.rupture &&
                edtiProductInfoForm.touched.rupture && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.rupture}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-category">دسته بندی موضوعی</label>
              <input
                name="category"
                type="text"
                id="product-category"
                placeholder="دسته بندی موضوعی کتاب را وارد کنید"
                value={edtiProductInfoForm.values.category}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.category &&
                edtiProductInfoForm.touched.category && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.category}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-qty" className="flex items-center">
                موجودی کتاب
              </label>
              <input
                name="qty"
                type="text"
                id="product-qty"
                placeholder="موجودی کتاب را وارد کنید"
                value={edtiProductInfoForm.values.qty}
                onChange={edtiProductInfoForm.handleChange}
                onBlur={edtiProductInfoForm.handleBlur}
              />
              {edtiProductInfoForm.errors.qty &&
                edtiProductInfoForm.touched.qty && (
                  <span className="text-xs font-Dana text-rose-800">
                    {edtiProductInfoForm.errors.qty}
                  </span>
                )}
            </div>
          </div>
          <button
            type="submit"
            disabled={edtiProductInfoForm.isSubmitting}
            className="btn-catalan my-4"
          >
            <span>
              {edtiProductInfoForm.isSubmitting
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
