import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import apiRequest from "@/libs/axios/configs";
import Modal from "@/components/modules/modals/Modal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import registerFormSchema from "@/utils/validators/registerFormSchema";

export default function Register({ showLoginForm }) {
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState(null);
  const registerForm = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      province: "",
      city: "",
      address: "",
      zip: "",
    },
    validationSchema: registerFormSchema,
    onSubmit: async (values) => {
      const res = await apiRequest.post("/auth/signup", values);
      if (res.status === 201) {
        setCurrentModal("verify-register");
      }
    },
  });

  return (
    <>
      <div className="max-w-[600px] pt-12 z-0">
        <h1 className="text-title text-catalan-800 text-center mb-4">
          ثبت نام
        </h1>
        <div className="text-link text-catalan-800 flex-center gap-2 mb-4">
          <h5>قبلا ثبت نام کرده اید؟</h5>
          <button
            onClick={showLoginForm}
            className="text-catalan-600 hover:text-rose-800 cursor-pointer"
          >
            ورود
          </button>
        </div>
        <form action="" onSubmit={registerForm.handleSubmit}>
          <div className="form-row">
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="text"
                placeholder="نام و نام خانوداگی"
                name="name"
                value={registerForm.values.name}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.name && registerForm.touched.name && (
                <span className="text-xs font-Dana text-rose-800">
                  {registerForm.errors.name}
                </span>
              )}
            </div>
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="text"
                placeholder="نام کاربری"
                name="username"
                value={registerForm.values.username}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.username &&
                registerForm.touched.username && (
                  <span className="text-xs font-Dana text-rose-800">
                    {registerForm.errors.username}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="text"
                placeholder="تلفن همراه"
                name="phone"
                value={registerForm.values.phone}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.phone && registerForm.touched.phone && (
                <span className="text-xs font-Dana text-rose-800">
                  {registerForm.errors.phone}
                </span>
              )}
            </div>
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="email"
                placeholder="ایمیل معتبر"
                name="email"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.email && registerForm.touched.email && (
                <span className="text-xs font-Dana text-rose-800">
                  {registerForm.errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="password"
                placeholder="رمز عبور"
                name="password"
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.password &&
                registerForm.touched.password && (
                  <span className="text-xs font-Dana text-rose-800">
                    {registerForm.errors.password}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="text"
                placeholder="استان"
                name="province"
                value={registerForm.values.province}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.province &&
                registerForm.touched.province && (
                  <span className="text-xs font-Dana text-rose-800">
                    {registerForm.errors.province}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="text"
                placeholder="شهر"
                name="city"
                value={registerForm.values.city}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.city && registerForm.touched.city && (
                <span className="text-xs font-Dana text-rose-800">
                  {registerForm.errors.city}
                </span>
              )}
            </div>
            <div className="form-col-50">
              <input
                className="placeholder:text-gray-500"
                type="text"
                placeholder="کد پستی"
                name="zip"
                value={registerForm.values.zip}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.zip && registerForm.touched.zip && (
                <span className="text-xs font-Dana text-rose-800">
                  {registerForm.errors.zip}
                </span>
              )}
            </div>
          </div>
          <div className="custom-row">
            <textarea
              placeholder="آدرس محل دریافت بسته"
              className="w-full placeholder:text-gray-500"
              cols={10}
              rows={3}
              name="address"
              value={registerForm.values.address}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            />
            {registerForm.errors.address && registerForm.touched.address && (
              <span className="text-xs font-Dana text-rose-800">
                {registerForm.errors.address}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={registerForm.isSubmitting}
            className="btn-catalan w-fit my-3"
          >
            <span>
              {registerForm.isSubmitting ? "درحال پردازش..." : "ثبت نام"}
            </span>
          </button>
        </form>
        <Link
          href="/"
          className="text-link text-catalan-600 hover:text-rose-800 cursor-pointer text-center mt-4"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "verify-register" && (
            <VerifiedModal
              message="خوش آمدید"
              btn="ورود به پنل کاربری"
              verifyModal={() => router.replace("/user-panel")}
              closeModal={() => setCurrentModal(null)}
            />
          )}
        </Modal>
      )}
    </>
  );
}
