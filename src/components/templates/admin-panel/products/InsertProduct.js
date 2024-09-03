"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Modal from "@/components/modules/modals/Modal";
import FailedModal from "@/components/modules/modals/FailedModal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import insertProductFormSchema from "@/utils/validators/insertProductFormSchema";

export default function InsertProduct() {
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState(null);
  const insertProductForm = useFormik({
    initialValues: {
      title: "",
      details: "",
      author: "",
      translator: "",
      category: "",
      editor: "",
      publisher: "",
      publishDate: "",
      printPrice: "",
      salePrice: "",
      qty: "",
      discount: "",
      introduction: "",
      description: "",
      tags: "",
      secondHand: false,
      highlight: false,
      rupture: false,
      image: null,
    },
    validationSchema: insertProductFormSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("translator", values.translator);
      formData.append("editor", values.editor);
      formData.append("category", values.category);
      formData.append("publisher", values.publisher);
      formData.append("publishDate", values.publishDate);
      formData.append("image", values.image);
      formData.append("printPrice", values.printPrice);
      formData.append("salePrice", values.salePrice);
      formData.append("details", values.details);
      formData.append("introduction", values.introduction);
      formData.append("description", values.description);
      formData.append("secondHand", values.secondHand);
      formData.append("rupture", values.rupture);
      formData.append("highlight", values.highlight);
      formData.append("qty", values.qty);
      formData.append("discount", values.discount);
      formData.append("tags", values.tags.split("،"));

      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });
      if (res.status === 201) {
        setCurrentModal("verify-insert");
        resetForm();
      } else if (res.status === 500) {
        setCurrentModal("fail-insert");
      }
    },
  });

  return (
    <>
      <div className="container mx-8">
        <form action="" onSubmit={insertProductForm.handleSubmit}>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-title">عنوان کتاب</label>
              <input
                className="text-catalan-800"
                name="title"
                type="text"
                id="product-title"
                placeholder="عنوان کتاب را وارد کنید"
                value={insertProductForm.values.title}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.title &&
                insertProductForm.touched.title && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.title}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-details">جزئیات عنوان</label>
              <input
                className="text-catalan-800"
                name="details"
                type="text"
                id="product-details"
                placeholder=" جزئیات عنوان کتاب در صورت وجود وارد شود"
                value={insertProductForm.values.details}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.details &&
                insertProductForm.touched.details && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.details}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-author">نویسنده</label>
              <input
                className="text-catalan-800"
                name="author"
                type="text"
                id="product-author"
                placeholder="نام نویسنده را وارد کنید"
                value={insertProductForm.values.author}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.author &&
                insertProductForm.touched.author && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.author}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-translator">مترجم</label>
              <input
                className="text-catalan-800"
                name="translator"
                type="text"
                id="product-translator"
                placeholder="درصورت وجود نام مترجم را وارد کنید"
                value={insertProductForm.values.translator}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.translator &&
                insertProductForm.touched.translator && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.translator}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-editor">ویراستار</label>
              <input
                className="text-catalan-800"
                name="editor"
                type="text"
                id="product-editor"
                placeholder="درصورت وجود نام ویراستار را وارد کنید"
                value={insertProductForm.values.editor}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.editor &&
                insertProductForm.touched.editor && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.editor}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-category">موضوع</label>
              <input
                className="text-catalan-800"
                name="category"
                type="text"
                id="product-category"
                placeholder="دسته بندی موضوعی کتاب را وارد کنید"
                value={insertProductForm.values.category}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.category &&
                insertProductForm.touched.category && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.category}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-publisher">انتشارات</label>
              <input
                className="text-catalan-800"
                name="publisher"
                type="text"
                id="product-publisher"
                placeholder="نام انتشارات ار وارد کنید"
                value={insertProductForm.values.publisher}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.publisher &&
                insertProductForm.touched.publisher && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.publisher}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-publish-date">سال چاپ</label>
              <input
                className="text-catalan-800"
                name="publishDate"
                type="text"
                id="product-publish-date"
                placeholder="سال چاپ کتاب را وارد کنید"
                value={insertProductForm.values.publishDate}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.publishDate &&
                insertProductForm.touched.publishDate && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.publishDate}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-print-price">قیمت جلد</label>
              <input
                className="text-catalan-800"
                name="printPrice"
                type="text"
                id="product-print-price"
                placeholder="قیمت پشت جلد کتاب را وارد کنید"
                value={insertProductForm.values.printPrice}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.printPrice &&
                insertProductForm.touched.printPrice && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.printPrice}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-sale-price">قیمت فروش</label>
              <input
                className="text-catalan-800"
                name="salePrice"
                type="text"
                id="product-sale-price"
                placeholder="قیمت پیشنهادی برای فروش را وارد کنید"
                value={insertProductForm.values.salePrice}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.salePrice &&
                insertProductForm.touched.salePrice && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.salePrice}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-qty" className="flex items-center">
                موجودی کتاب
              </label>
              <input
                className="text-catalan-800"
                name="qty"
                type="text"
                id="product-qty"
                placeholder="موجودی کتاب را وارد کنید"
                value={insertProductForm.values.qty}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.qty &&
                insertProductForm.touched.qty && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.qty}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-discount" className="flex items-center">
                درصد تخفیف
              </label>
              <input
                className="text-catalan-800"
                name="discount"
                type="text"
                id="product-discount"
                placeholder="درصورت وجود درصد تخفیف را وارد کنید"
                value={insertProductForm.values.discount}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.discount &&
                insertProductForm.touched.discount && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.discount}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-tags" className="flex items-center">
                برچسب ها
              </label>
              <input
                className="text-catalan-800"
                name="tags"
                type="text"
                id="product-tags"
                placeholder="حداکثر 3 برچسب بنویسید و با کاما جداسازی را انجام دهید"
                value={insertProductForm.values.tags}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.tags &&
                insertProductForm.touched.tags && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.tags}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label
                htmlFor="product-second-hand"
                className="flex items-center"
              >
                کتاب دست دوم
              </label>
              <select
                name="secondHand"
                className="text-catalan-800"
                id="product-second-hand"
                value={insertProductForm.values.secondHand}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              >
                <option value={false}>خیر</option>
                <option value={true}>بله</option>
              </select>
              {insertProductForm.errors.secondHand &&
                insertProductForm.touched.secondHand && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.secondHand}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-highlight" className="flex items-center">
                خط خوردگی
              </label>
              <select
                name="highlight"
                className="text-catalan-800"
                id="product-highlight"
                value={insertProductForm.values.highlight}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              >
                <option value={false}>خیر</option>
                <option value={true}>بله</option>
              </select>
              {insertProductForm.errors.highlight &&
                insertProductForm.touched.highlight && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.highlight}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-rupture" className="flex items-center">
                پارگی
              </label>
              <select
                name="rupture"
                className="text-catalan-800"
                id="product-rupture"
                value={insertProductForm.values.rupture}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              >
                <option value={false}>خیر</option>
                <option value={true}>بله</option>
              </select>
              {insertProductForm.errors.rupture &&
                insertProductForm.touched.rupture && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.rupture}
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
                className="text-catalan-800"
                name="introduction"
                type="text"
                id="product-intro"
                placeholder="حداکثر در یک پاراگراف کتاب را معرفی کنید"
                value={insertProductForm.values.introduction}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.introduction &&
                insertProductForm.touched.introduction && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.introduction}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-desc" className="flex items-center">
                توضیحات کتاب
              </label>
              <textarea
                name="description"
                className="text-catalan-800"
                type="text"
                id="product-desc"
                placeholder="حداکثر در یک الی دو پاراگراف توضیحاتی درخصوص کتاب بنویسید"
                value={insertProductForm.values.description}
                onChange={insertProductForm.handleChange}
                onBlur={insertProductForm.handleBlur}
              />
              {insertProductForm.errors.description &&
                insertProductForm.touched.description && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.description}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-img">آپلود کاور</label>
              <input
                className="text-catalan-800"
                name="image"
                type="file"
                id="product-img"
                onChange={(event) => {
                  insertProductForm.setFieldValue(
                    "image",
                    event.currentTarget.files[0]
                  );
                }}
              />
              {insertProductForm.errors.image &&
                insertProductForm.touched.image && (
                  <span className="text-xs font-Dana text-rose-800">
                    {insertProductForm.errors.image}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <button className="btn-catalan mt-6 py-2" type="submit">
                افزودن کتاب
              </button>
            </div>
          </div>
        </form>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "verify-insert" ? (
            <VerifiedModal
              closeModal={() => setCurrentModal(null)}
              message="محصول با موفقیت به دیتابیس افزوده شد"
              btn="بروزرسانی"
              verifyModal={() => router.replace("/admin-panel/products")}
            />
          ) : (
            <FailedModal closeModal={() => setCurrentModal(null)} />
          )}
        </Modal>
      )}
    </>
  );
}
