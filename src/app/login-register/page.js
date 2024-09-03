"use client";
import React, { useState } from "react";
import { authTypes } from "@/utils/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "@/components/templates/login-register/Register";
import EmailLogin from "@/components/templates/login-register/EmailLogin";

export default function page() {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  return (
    <div className="bg-primary-baner baner flex-center h-screen">
      {authType === authTypes.LOGIN ? (
        <EmailLogin showRegisterForm={() => setAuthType(authTypes.REGISTER)} />
      ) : (
        <Register showLoginForm={() => setAuthType(authTypes.LOGIN)} />
      )}
      <ToastContainer position="bottom-left" rtl={true} theme="dark" />
    </div>
  );
}
