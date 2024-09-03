import React from "react";
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import SubTitle from "@/components/modules/SubTitle";
import Product from "@/components/templates/product/Product";
import RelatedProducts from "@/components/templates/product/RelatedProducts";
import ProductComments from "@/components/templates/product/ProductComments";
import { authUser } from "@/utils/authentication/serverHelpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function page({ params }) {
  const user = await authUser();
  const productId = params.id;
  return (
    <>
      <Header isLogin={user ? true : false} />
      <div className="pt-12 md:pt-36 px-8">
        <div className="p-4 md:pt-8">
          <Product productId={productId} />
        </div>
        <div className="p-2 sm:px-8">
          <SubTitle
            title="دیدگاه ها"
            subTitle="با ارسال دیدگاه های ارزشمند خود ما را در ارائه بهتر خدمات یاری کنید"
          />
          <ProductComments
            productId={productId}
            isLogin={user ? true : false}
          />
        </div>
        <div className="p-2 sm:p-8">
          <SubTitle
            title="کتابهایی که شاید دوست داشته باشید"
            subTitle="این کتابها طبق سلیقه شما پیشنهاد می شوند"
          />
          <RelatedProducts productId={productId} />
        </div>
      </div>
      <ToastContainer position="bottom-left" rtl={true} theme="dark" />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "خانه کتاب | کتاب موردنظر",
  description:
    "خانه کتاب محلی برای به اشتراک گذاری کتابهای شما... اینجا کتابها بین کتابخانه ی من و شما درحال پروازند چون می توانیم کتابهای دست دوم خود را با یکدیگر تعویض کنیم",
};
