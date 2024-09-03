import React from "react";
import connectToDB from "@/configs/db";
import ticketModel from "@/models/Ticket";
import MiniTopbar from "@/components/modules/MiniTopbar";
import { authUser } from "@/utils/authentication/serverHelpers";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import TicketsList from "@/components/templates/user-panel/tickets/TicketsList";
import { HiOutlineTicket } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const user = await authUser();
  const tickets = await ticketModel
    .find({ user: user?._id, isAnswer: false })
    .populate("department", "title")
    .sort({ _id: -1 })
    .lean();
  return (
    <UserPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده همه تیکت ها"
            btn="ارسال تیکت"
            link="/user-panel/tickets/send-ticket"
            icon={<HiOutlineTicket className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-5 p-4 md:pt-8">
          <TicketsList tickets={JSON.parse(JSON.stringify(tickets))} />
        </div>
      </div>
    </UserPanelLayout>
  );
}
