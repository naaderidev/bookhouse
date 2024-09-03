import React from "react";
import connectToDB from "@/configs/db";
import orderModel from "@/models/Order";
import MiniTopbar from "@/components/modules/MiniTopbar";
import { authUser } from "@/utils/authentication/serverHelpers";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import OrdersList from "@/components/templates/user-panel/orders/OrdersList";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const user = await authUser();
  const ordersList = await orderModel.find({ userId: user?._id }).lean();
  return (
    <UserPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="لیست سفارش های شما"
            btn="مشاهده فروشگاه"
            link="/store"
            icon={<HiOutlineBuildingStorefront className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-5 p-4 md:pt-8">
          <OrdersList orders={JSON.parse(JSON.stringify(ordersList))} />
        </div>
      </div>
    </UserPanelLayout>
  );
}
