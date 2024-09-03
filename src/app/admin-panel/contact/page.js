import React from "react";
import connectToDB from "@/configs/db";
import contactModel from "@/models/Contact";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import Messages from "@/components/templates/admin-panel/contact/Messages";
import { HiOutlineHome } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const messages = await contactModel.find({}).lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده پیام ها"
            btn="خانه"
            link="/"
            icon={<HiOutlineHome className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <Messages messages={JSON.parse(JSON.stringify(messages))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
