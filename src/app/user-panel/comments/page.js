import React from "react";
import connectToDB from "@/configs/db";
import commentModel from "@/models/Comment";
import MiniTopbar from "@/components/modules/MiniTopbar";
import { authUser } from "@/utils/authentication/serverHelpers";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import CommentsList from "@/components/templates/user-panel/comments/CommentsList";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const user = await authUser();
  const comments = await commentModel
    .find({ email: user?.email }, "-__v")
    .populate("productId", "title");

  return (
    <UserPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده همه دیدگاه ها"
            btn="برو به فروشگاه"
            link="/store"
            icon={<HiOutlineBuildingStorefront className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-5 p-4 md:pt-8">
          <CommentsList comments={JSON.parse(JSON.stringify(comments))} />
        </div>
      </div>
    </UserPanelLayout>
  );
}
