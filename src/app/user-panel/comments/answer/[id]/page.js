import React from "react";
import connectToDB from "@/configs/db";
import commentModel from "@/models/Comment";
import MiniTopbar from "@/components/modules/MiniTopbar";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import AnswerCard from "@/components/modules/user-panel/AnswerCard";
import { HiOutlineTicket } from "react-icons/hi2";

export default async function page({ params }) {
  connectToDB();
  const commentID = params.id;
  const comment = await commentModel
    .findOne({ _id: commentID })
    .populate("productId")
    .lean();
  const answerComment = await commentModel
    .findOne({ mainComment: comment._id })
    .lean();

  return (
    <UserPanelLayout>
      <section className="flex-center flex-wrap gap-5 p-8 md:pt-8">
        <MiniTopbar
          title="مشاهده پاسخ دیدگاه"
          btn="همه دیدگاه ها"
          link="/user-panel/comments"
          icon={<HiOutlineTicket className="icon-sm" />}
        />
        <div className="container mx-8 p-8">
          <AnswerCard type="user" {...comment} />
          {answerComment && <AnswerCard type="admin" {...answerComment} />}
          {!answerComment && (
            <div className="text-lg font-MorabbaMedium text-center text-rose-800 py-4 mt-12 border-rose-800 border-s-2 border-e-2 border-t-4 rounded-2xl">
              هنوز پاسخی دریافت نکرده اید!
            </div>
          )}
        </div>
      </section>
    </UserPanelLayout>
  );
}
