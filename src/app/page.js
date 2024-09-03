import React from "react";
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import Baner from "@/components/templates/home/Baner";
import Exchange from "@/components/templates/home/Exchange";
import HomeSliders from "@/components/templates/home/HomeSliders";
import { authUser } from "@/utils/authentication/serverHelpers";
import connectToDB from "@/configs/db";
import productModel from "@/models/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Home() {
  connectToDB();
  const user = await authUser();
  const products = await productModel.find({}).lean();
  return (
    <>
      <Header isLogin={user ? true : false} />
      <Baner
        sloganTitle="کمی بمان، کمی استراحت کن"
        sloganSubTitle="و لحظه را زندگی کن!"
      />
      <div className="container">
        <HomeSliders products={JSON.parse(JSON.stringify(products))} />
        <Exchange />
      </div>
      <Footer />
      <ToastContainer position="bottom-left" rtl={true} theme="dark" />
    </>
  );
}
