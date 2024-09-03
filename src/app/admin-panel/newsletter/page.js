import React from "react";
import connectToDB from "@/configs/db";
import newsletterModel from "@/models/Newsletter";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import NewsletterList from "@/components/templates/admin-panel/newsletter/NewsletterList";
import { HiOutlineHome } from "react-icons/hi2";


export default async function page() {
  connectToDB();
  const newsletterList = await newsletterModel.find({}).lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده اعضای خبرنامه"
            btn="خانه"
            link="/"
            icon={<HiOutlineHome className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <NewsletterList
            newsletterList={JSON.parse(JSON.stringify(newsletterList))}
          />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
