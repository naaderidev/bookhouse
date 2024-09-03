import React from "react";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import InsertDiscount from "@/components/templates/admin-panel/discounts/InsertDiscount";
import { HiOutlineSwatch } from "react-icons/hi2";

export default function page() {
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="افزودن تخفیف جدید"
            btn="مشاهده لیست تخفیف ها"
            link="/admin-panel/discounts"
            icon={<HiOutlineSwatch className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <InsertDiscount />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
