import React from "react";
import connectToDB from "@/configs/db";
import orderModel from "@/models/Order";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import OrdersList from "@/components/templates/admin-panel/orders/OrdersList";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const orders = await orderModel
    .find({})
    .populate("userId", "name")
    .sort({ _id: -1 })
    .lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده تمام سفارش ها"
            btn="مشاهده فروشگاه"
            link="/store"
            icon={<HiOutlineBuildingStorefront className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <OrdersList orders={JSON.parse(JSON.stringify(orders))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
