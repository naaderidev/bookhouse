import React from "react";
import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import UserCart from "@/components/templates/cart/UserCart";
import { authUser } from "@/utils/authentication/serverHelpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function page() {
  const user = await authUser();
  return (
    <>
      <Header isLogin={user ? true : false} />
      <div className="container">
        <div className="px-8 md:pt-48 flex">
          <UserCart userInfo={JSON.parse(JSON.stringify(user))} />
        </div>
      </div>
      <ToastContainer position="bottom-left" rtl={true} theme="dark"/>
      <Footer />
    </>
  );
}
