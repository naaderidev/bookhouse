import React, { useState } from "react";
import clsx from "clsx";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import otpSchema from "@/utils/validators/otpSchema";
import Modal from "@/components/modules/modals/Modal";
import VerifiedModal from "@/components/modules/modals/VerifiedModal";
import phoneLoginFormSchema from "@/utils/validators/phoneLoginFormSchema";
import apiRequest from "@/libs/axios/configs";

export default function PhoneLogin({ hidePhoneLogin }) {
  const router = useRouter();
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentModal, setCurrentModal] = useState(null);

  const phoneLoginForm = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: phoneLoginFormSchema,
    onSubmit: async (values) => {
      const res = await apiRequest.post("/auth/sms/send", values);
      if (res.status === 201) {
        setPhoneNumber(values.phone);
        setIsOtpSend(true);
      }
    },
  });

  const otpForm = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: otpSchema,
    onSubmit: async (values, { resetForm }) => {
      const res = await apiRequest.post("/auth/sms/verify", {
        ...values,
        phone: phoneNumber,
      });
      if (res.status === 200) {
        setCurrentModal("verify-code");
      }
      resetForm();
    },
  });

  const verifyCode = async () => {
    setCurrentModal(null);
    setIsOtpSend(false);
    const userData = await apiRequest("/auth/me");
    userData.role === "ADMIN"
      ? router.replace("/admin-panel")
      : router.replace("/user-panel");
  };

  return (
    <>
      <form
        className={clsx("mt-4", {
          "flex flex-col gap-4": isOtpSend === false,
          "hidden text-catalan-800": isOtpSend === true,
        })}
        onSubmit={phoneLoginForm.handleSubmit}
      >
        <input
          name="phone"
          className="form-input placeholder:text-gray-500"
          type="text"
          value={phoneLoginForm.values.phone}
          onChange={phoneLoginForm.handleChange}
          onBlur={phoneLoginForm.handleBlur}
          placeholder="شماره تلفن همراه"
        />
        {phoneLoginForm.errors.phone && phoneLoginForm.touched.phone && (
          <span className="text-xs font-Dana text-rose-800">
            {phoneLoginForm.errors.phone}
          </span>
        )}
        <button
          type="submit"
          disabled={phoneLoginForm.isSubmitting}
          className="btn-gradient"
        >
          <span>
            {phoneLoginForm.isSubmitting ? "درحال پردازش..." : "تایید شماره"}
          </span>
        </button>
      </form>
      <form
        className={clsx("mt-4", {
          "flex flex-col gap-4": isOtpSend === true,
          "hidden text-catalan-800": isOtpSend === false,
        })}
        onSubmit={otpForm.handleSubmit}
      >
        <input
          name="code"
          className="form-input placeholder:text-gray-500"
          type="text"
          placeholder="کد 5 رقمی دریافتی"
          value={otpForm.values.code}
          onChange={otpForm.handleChange}
          onBlur={otpForm.handleBlur}
        />
        {otpForm.errors.code && otpForm.touched.code && (
          <span className="text-xs font-Dana text-rose-800">
            {otpForm.errors.code}
          </span>
        )}
        <button type="submit" className="btn-gradient">
          تایید کد
        </button>
      </form>
      <button
        onClick={hidePhoneLogin}
        className="text-link text-catalan-600 hover:text-rose-800 cursor-pointer text-center"
      >
        لغو عملیات
      </button>
      {currentModal && (
        <Modal>
          {currentModal === "verify-code" && (
            <VerifiedModal
              message="خوش آمدید"
              btn="ورود به پنل کاربری"
              verifyModal={verifyCode}
              closeModal={() => setCurrentModal(null)}
            />
          )}
        </Modal>
      )}
    </>
  );
}
