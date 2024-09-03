import React from "react";
import connectToDB from "@/configs/db";
import discountModel from "@/models/Discount";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import DiscountsList from "@/components/templates/admin-panel/discounts/DiscountsList";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const discounts = await discountModel.find({}).sort({ _id: -1 }).lean();

  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده تمام تخفیف ها"
            btn="افزودن تخفیف جدید"
            link="/admin-panel/discounts/insert"
            icon={<HiOutlineReceiptPercent className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <DiscountsList discounts={JSON.parse(JSON.stringify(discounts))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
