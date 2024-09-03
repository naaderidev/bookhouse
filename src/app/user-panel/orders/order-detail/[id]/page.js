import React from "react";
import connectToDB from "@/configs/db";
import orderModel from "@/models/Order";
import discountModel from "@/models/Discount";
import MiniTopbar from "@/components/modules/MiniTopbar";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import OrderCost from "@/components/templates/user-panel/orders/order-detail/OrderCost";
import OrderInfo from "@/components/templates/user-panel/orders/order-detail/OrderInfo";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default async function page({ params }) {
  connectToDB();
  const mainOrder = await orderModel
    .findOne({ _id: params.id })
    .populate("userId")
    .lean();
  const mainDiscount = await discountModel.findOne({
    code: mainOrder.discountCode,
  });
  return (
    <UserPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="جزئیات سفارش انتخابی"
            btn="لیست تمام سفارش ها"
            link="/user-panel/orders"
            icon={<HiOutlineClipboardDocumentList className="icon-sm" />}
          />
        </div>
        <section className="flex-center flex-col lg:flex-row items-start gap-10 m-8 p-8 md:pt-8">
          <OrderInfo order={JSON.parse(JSON.stringify(mainOrder))} />
          <OrderCost
            order={JSON.parse(JSON.stringify(mainOrder))}
            discount={JSON.parse(JSON.stringify(mainDiscount))}
          />
        </section>
      </div>
    </UserPanelLayout>
  );
}
