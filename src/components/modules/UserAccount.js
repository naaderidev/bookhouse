"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import Modal from "./modals/Modal";
import editUserAddressFormSchema from "@/utils/validators/editUserAddressFormSchema";
import editUserInfoFormSchema from "@/utils/validators/editUserInfoFormSchema";
import VerifiedModal from "./modals/VerifiedModal";
import apiRequest from "@/libs/axios/configs";

export default function UserAccount({ user }) {
  const [currentModal, setCurrentModal] = useState(null);
  const userInfoForm = useFormik({
    initialValues: {
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    },
    validationSchema: editUserInfoFormSchema,
    onSubmit: async (values) => {
      const res = await apiRequest.put("/user/change-info", {
        ...values,
        id: user._id,
      });
      if (res.status === 200) {
        setCurrentModal("edit-info");
      }
    },
  });

  const userAddressForm = useFormik({
    initialValues: {
      province: user.province,
      city: user.city,
      address: user.address,
      zip: user.zip,
    },
    validationSchema: editUserAddressFormSchema,
    onSubmit: async (values) => {
      const res = await apiRequest.put("/user/change-address", {
        ...values,
        id: user._id,
      });
      if (res.status === 200) {
        setCurrentModal("edit-address");
      }
    },
  });

  return (
    <>
      <div className="flex gap-10 flex-wrap lg:mx-8">
        <form action="" onSubmit={userInfoForm.handleSubmit}>
          <h1 className="mb-10 text-lg text-rose-800 font-MorabbaMedium">
            اطلاعات فردی
          </h1>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="">نام و نام خانوداگی</label>
              <input
                className="text-catalan-800"
                type="text"
                name="name"
                value={userInfoForm.values.name}
                onChange={userInfoForm.handleChange}
                onBlur={userInfoForm.handleBlur}
              />
              {userInfoForm.errors.name && userInfoForm.touched.name && (
                <span className="text-xs font-Dana text-rose-800">
                  {userInfoForm.errors.name}
                </span>
              )}
            </div>
            <div className="form-col-50">
              <label htmlFor="">نام کاربری</label>
              <input
                className="text-catalan-800"
                type="text"
                name="username"
                value={userInfoForm.values.username}
                onChange={userInfoForm.handleChange}
                onBlur={userInfoForm.handleBlur}
              />
              {userInfoForm.errors.username &&
                userInfoForm.touched.username && (
                  <span className="text-xs font-Dana text-rose-800">
                    {userInfoForm.errors.username}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="">تلفن همراه</label>
              <input
                className="text-catalan-800"
                type="text"
                name="phone"
                value={userInfoForm.values.phone}
                onChange={userInfoForm.handleChange}
                onBlur={userInfoForm.handleBlur}
              />
              {userInfoForm.errors.phone && userInfoForm.touched.phone && (
                <span className="text-xs font-Dana text-rose-800">
                  {userInfoForm.errors.phone}
                </span>
              )}
            </div>
            <div className="form-col-50">
              <label htmlFor="">ایمیل معتبر</label>
              <input
                className="text-catalan-800"
                type="email"
                name="email"
                value={userInfoForm.values.email}
                onChange={userInfoForm.handleChange}
                onBlur={userInfoForm.handleBlur}
              />
              {userInfoForm.errors.email && userInfoForm.touched.email && (
                <span className="text-xs font-Dana text-rose-800">
                  {userInfoForm.errors.email}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={userInfoForm.isSubmitting}
            className="btn-catalan"
          >
            <span>
              {userInfoForm.isSubmitting ? "درحال پردازش" : "ویرایش اطلاعات"}
            </span>
          </button>
        </form>
        <form action="" onSubmit={userAddressForm.handleSubmit}>
          <h1 className="mb-10 text-lg text-rose-800 font-MorabbaMedium">
            آدرس دریافت بسته های پستی{" "}
          </h1>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="">استان</label>
              <input
                className="text-catalan-800"
                type="text"
                name="province"
                value={userAddressForm.values.province}
                onChange={userAddressForm.handleChange}
                onBlur={userAddressForm.handleBlur}
              />
              {userAddressForm.errors.province &&
                userAddressForm.touched.province && (
                  <span className="text-xs font-Dana text-rose-800">
                    {userAddressForm.errors.province}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="">شهر</label>
              <input
                className="text-catalan-800"
                type="text"
                name="city"
                value={userAddressForm.values.city}
                onChange={userAddressForm.handleChange}
                onBlur={userAddressForm.handleBlur}
              />
              {userAddressForm.errors.city && userAddressForm.touched.city && (
                <span className="text-xs font-Dana text-rose-800">
                  {userAddressForm.errors.city}
                </span>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="">آدرس پستی</label>
              <input
                className="text-catalan-800"
                type="text"
                name="address"
                value={userAddressForm.values.address}
                onChange={userAddressForm.handleChange}
                onBlur={userAddressForm.handleBlur}
              />
              {userAddressForm.errors.address &&
                userAddressForm.touched.address && (
                  <span className="text-xs font-Dana text-rose-800">
                    {userAddressForm.errors.address}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="">کد پستی</label>
              <input
                className="text-catalan-800"
                type="text"
                name="zip"
                value={userAddressForm.values.zip}
                onChange={userAddressForm.handleChange}
                onBlur={userAddressForm.handleBlur}
              />
              {userAddressForm.errors.zip && userAddressForm.touched.zip && (
                <span className="text-xs font-Dana text-rose-800">
                  {userAddressForm.errors.zip}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={userAddressForm.isSubmitting}
            className="btn-catalan"
          >
            <span>
              {userAddressForm.isSubmitting ? "درحال پردازش" : "ویرایش آدرس"}
            </span>
          </button>
        </form>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "edit-info" ? (
            <VerifiedModal
              closeModal={() => setCurrentModal(null)}
              message="اطلاعات با موفقیت ویرایش شد"
              btn="بروزرسانی"
              verifyModal={() => location.reload()}
            />
          ) : currentModal === "edit-address" ? (
            <VerifiedModal
              closeModal={() => setCurrentModal(null)}
              message="اطلاعات با موفقیت ویرایش شد"
              btn="بروزرسانی"
              verifyModal={() => location.reload()}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
