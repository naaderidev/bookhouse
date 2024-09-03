import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import apiRequest from "@/libs/axios/configs";
import PhoneLogin from "./PhoneLogin";
import Modal from "@/components/modules/modals/Modal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import emailLoginFormSchema from "@/utils/validators/emailLoginFormSchema";

export default function EmailLogin({ showRegisterForm }) {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const router = useRouter();

  const emailLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: emailLoginFormSchema,
    onSubmit: async (values, { resetForm }) => {
      const res = await apiRequest.post("/auth/signin", values);
      if (res.status === 200) {
        setCurrentModal("verify");
      }
      resetForm();
    },
  });

  const verifyLogin = async () => {
    const userData = await apiRequest("/auth/me");
    userData.data.role === "ADMIN"
      ? router.replace("/admin-panel")
      : router.replace("/user-panel");
  };

  return (
    <>
      <div className="max-w-[600px] pb-24 z-0">
        <h1 className="text-title text-catalan-800 text-center mb-4">ورود</h1>
        <div className="text-link text-catalan-800 flex-center gap-2">
          <h5>حساب کاربری ندارید؟</h5>
          <button
            onClick={showRegisterForm}
            className="text-catalan-600 hover:text-rose-800 cursor-pointer"
          >
            ثبت نام
          </button>
        </div>
        {!isLoginWithOtp ? (
          <div className="flex flex-col gap-4 mt-4">
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={emailLoginForm.handleSubmit}
            >
              <input
                type="email"
                className="form-input placeholder:text-gray-500"
                placeholder="ایمیل"
                name="email"
                value={emailLoginForm.values.email}
                onChange={emailLoginForm.handleChange}
                onBlur={emailLoginForm.handleBlur}
              />
              {emailLoginForm.errors.email && emailLoginForm.touched.email && (
                <span className="text-xs font-Dana text-rose-800">
                  {emailLoginForm.errors.email}
                </span>
              )}
              <input
                type="password"
                className="form-input placeholder:text-gray-500"
                placeholder="رمز عبور"
                name="password"
                value={emailLoginForm.values.password}
                onChange={emailLoginForm.handleChange}
                onBlur={emailLoginForm.handleBlur}
              />
              {emailLoginForm.errors.password &&
                emailLoginForm.touched.password && (
                  <span className="text-xs font-Dana text-rose-800">
                    {emailLoginForm.errors.password}
                  </span>
                )}
              <button
                type="submit"
                disabled={emailLoginForm.isSubmitting}
                className="btn-gradient"
              >
                <span>
                  {emailLoginForm.isSubmitting ? "درحال پردازش..." : "ورود"}
                </span>
              </button>
            </form>
            <h5 className="text-link text-catalan-600 cursor-pointer text-center">
              رمز عبور را فراموش کرده اید؟!
            </h5>
            <button
              onClick={() => setIsLoginWithOtp(true)}
              type="submit"
              className="btn-catalan"
            >
              ورود با رمز یکبار مصرف
            </button>
            <Link
              href="/"
              className="text-link text-catalan-600 hover:text-rose-800 cursor-pointer text-center"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        ) : (
          <>
            <PhoneLogin hidePhoneLogin={() => setIsLoginWithOtp(false)} />
          </>
        )}
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "verify" && (
            <VerifiedModal
              message="خوش آمدید"
              btn="ورود به پنل کاربری"
              verifyModal={verifyLogin}
              closeModal={() => setCurrentModal(null)}
            />
          )}
        </Modal>
      )}
    </>
  );
}
