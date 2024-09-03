import React from "react";
import userModel from "@/models/User";
import connectToDB from "@/configs/db";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import UsersList from "@/components/templates/admin-panel/users/UsersList";
import UserSearch from "@/components/templates/admin-panel/users/UserSearch";
import { HiOutlineUserMinus } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const users = await userModel.find({}).lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده تمام کاربران"
            btn="کاربران بن شده"
            link="/admin-panel/users/ban"
            icon={<HiOutlineUserMinus className="icon-sm" />}
          />
        </div>
        <UserSearch users={JSON.parse(JSON.stringify(users))} />
        <div className="flex-center flex-wrap gap-4 p-4">
          <UsersList users={JSON.parse(JSON.stringify(users))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
