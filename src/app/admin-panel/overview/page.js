import React from "react";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import Overview from "@/components/templates/admin-panel/dashboard/Overview";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function page() {
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="اطلاعات در یک نگاه"
            btn="دفتر برنامه ریزی روزانه"
            link="/admin-panel/"
            icon={<HiOutlineCalendarDays className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 my-4 relative">
          <Overview />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
