import React from "react";
import connectToDB from "@/configs/db";
import commentModel from "@/models/Comment";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import AnswerCommentsList from "@/components/templates/admin-panel/comments/AnswerCommentsList";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const answers = await commentModel
    .find({ isAnswer: true })
    .populate("productId")
    .sort({ _id: -1 })
    .lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="پاسخ های ارسالی ادمین"
            btn="مشاهده تمام دیدگاه ها"
            link="/admin-panel/comments"
            icon={<HiOutlineChatBubbleLeftRight className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <AnswerCommentsList answers={JSON.parse(JSON.stringify(answers))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
