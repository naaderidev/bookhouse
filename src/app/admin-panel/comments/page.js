import React from "react";
import connectToDB from "@/configs/db";
import commentModel from "@/models/Comment";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import CommentsList from "@/components/templates/admin-panel/comments/CommentsList";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const comments = await commentModel
    .find({ isAnswer: false })
    .populate("productId")
    .sort({ _id: -1 })
    .lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده تمام دیدگاه ها"
            btn="پاسخ های ارسالی"
            link="/admin-panel/comments/answers"
            icon={<HiOutlinePencilSquare className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <CommentsList comments={JSON.parse(JSON.stringify(comments))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
