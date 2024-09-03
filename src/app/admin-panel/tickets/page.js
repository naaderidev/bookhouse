import React from "react";
import connectToDB from "@/configs/db";
import ticketModel from "@/models/Ticket";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import TicketsList from "@/components/templates/admin-panel/tickets/TicketsList";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const tickets = await ticketModel
    .find({ isAnswer: false })
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
            title="مشاهده تمام تیکت ها"
            btn="پاسخ های ارسالی"
            link="/admin-panel/tickets/answers"
            icon={<HiOutlinePencilSquare className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <TicketsList tickets={JSON.parse(JSON.stringify(tickets))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
