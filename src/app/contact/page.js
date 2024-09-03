import React from "react";
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import { authUser } from "@/utils/authentication/serverHelpers";
import ContactForm from "@/components/templates/contact/ContactForm";
import ContactInfo from "@/components/templates/contact/ContactInfo";
// import Map from "@/components/templates/contact/Map";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function page() {
  const user = await authUser();
  return (
    <>
      <Header isLogin={user ? true : false} />
      <div className="p-4 md:pt-28">
        <div className="container">
          <h1 className="flex-center text-title pt-12">
            راه های ارتباطی با ما
          </h1>
          {/* <Map
            position={[35.701216, 51.391224]}
            center={[35.701216, 51.391224]}
          /> */}
          <div className="flex flex-col justify-center sm:flex-row sm:items-start gap-2 sm:gap-10 p-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-left" rtl={true} theme="dark"/>
      <Footer />
    </>
  );
}
