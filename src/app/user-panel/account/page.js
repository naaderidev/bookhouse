import React from "react";
import connectToDB from "@/configs/db";
import MiniTopbar from "@/components/modules/MiniTopbar";
import UserAccount from "@/components/modules/UserAccount";
import { authUser } from "@/utils/authentication/serverHelpers";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import { HiOutlineHome } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const userInfo = await authUser();
  return (
    <UserPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="ویرایش اطلاعات"
            btn="برو به خانه"
            link="/"
            icon={<HiOutlineHome className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-5 p-4 md:pt-8">
          <UserAccount user={JSON.parse(JSON.stringify(userInfo))} />
        </div>
      </div>
    </UserPanelLayout>
  );
}
