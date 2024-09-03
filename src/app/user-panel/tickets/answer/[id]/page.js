import React from "react";
import connectToDB from "@/configs/db";
import ticketModel from "@/models/Ticket";
import MiniTopbar from "@/components/modules/MiniTopbar";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import AnswerCard from "@/components/modules/user-panel/AnswerCard";
import NoAnswerCard from "@/components/modules/user-panel/NoAnswerCard";
import { HiOutlineTicket } from "react-icons/hi2";

export default async function page({ params }) {
  connectToDB();
  const ticketID = params.id;
  const ticket = await ticketModel
    .findOne({ _id: ticketID })
    .populate("user")
    .lean();
  const answerTicket = await ticketModel
    .findOne({ mainTicket: ticket._id })
    .lean();

  return (
    <UserPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده پاسخ تیکت"
            btn="همه تیکت ها"
            link="/user-panel/tickets"
            icon={<HiOutlineTicket className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-5 mx-4 p-8 md:pt-8">
          <div className="container">
            <AnswerCard type="user" {...ticket} />
            {answerTicket ? (
              <AnswerCard type="admin" {...answerTicket} />
            ) : (
              <NoAnswerCard />
            )}
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}
