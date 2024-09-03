import React from "react";
import connectToDB from "@/configs/db";
import productModel from "@/models/Product";
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import { authUser } from "@/utils/authentication/serverHelpers";
import StoreContainer from "@/components/templates/store/StoreContainer";

export default async function page() {
  connectToDB();
  const user = await authUser();
  const products = await productModel.find({}).sort({ _id: -1 }).lean();
  return (
    <>
      <Header isLogin={user ? true : false} />
      <section className="p-4 lg:p-12">
        <StoreContainer products={JSON.parse(JSON.stringify(products))} />
      </section>
      <Footer />
    </>
  );
}
