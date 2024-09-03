import React from "react";
import Title from "@/components/modules/Title";
import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import { authUser } from "@/utils/authentication/serverHelpers";
import SearchContainer from "@/components/templates/search/SearchContainer";


export default async function page() {
  const user = await authUser();
  return (
    <>
      <Header isLogin={user ? true : false} />
      <div className="container">
        <div className="px-8 mb-8 md:pt-48">
          <Title
            title="نتایج جستجو"
            subTitle="حتما یه سری به فروشگاه بزن مطمئنم کتابهای خوبی پیدا می کنی..."
            link="/store"
            linkTitle="مشاهده کتابفروشی"
          />
          <SearchContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}
