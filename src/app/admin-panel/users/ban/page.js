import React from "react";
import banModel from "@/models/Ban";
import connectToDB from "@/configs/db";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import BanList from "@/components/templates/admin-panel/users/BanList";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const banUsers = await banModel.find({}).lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده کاربران بن شده"
            btn="لیست تمام کاربران"
            link="/admin-panel/users"
            icon={<HiOutlineUserGroup className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <BanList users={JSON.parse(JSON.stringify(banUsers))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
