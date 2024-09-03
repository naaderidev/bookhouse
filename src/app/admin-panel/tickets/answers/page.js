import React from "react";
import connectToDB from "@/configs/db";
import ticketModel from "@/models/Ticket";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import AnswerTicketsList from "@/components/templates/admin-panel/tickets/AnswerTicketsList";
import { HiOutlineTicket } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const answers = await ticketModel
    .find({ isAnswer: true })
    .populate("user", "name")
    .populate("department", "title")
    .populate("subDepartment", "title")
    .sort({ _id: -1 })
    .lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="تیک های ارسالی ادمین"
            btn="مشاهده تمام تیکت ها"
            link="/admin-panel/tickets"
            icon={<HiOutlineTicket className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <AnswerTicketsList answers={JSON.parse(JSON.stringify(answers))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
