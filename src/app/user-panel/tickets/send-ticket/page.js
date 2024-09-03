import React from "react";
import MiniTopbar from "@/components/modules/MiniTopbar";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import SendTicket from "@/components/templates/user-panel/tickets/send-ticket/SendTicket";
import { HiOutlineTicket } from "react-icons/hi2";

export default function page() {
  return (
    <UserPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="ارسال تیکت جدید"
            btn="همه تیکت ها"
            link="/user-panel/tickets"
            icon={<HiOutlineTicket className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-5 p-4 md:pt-8">
          <SendTicket />
        </div>
      </div>
    </UserPanelLayout>
  );
}
