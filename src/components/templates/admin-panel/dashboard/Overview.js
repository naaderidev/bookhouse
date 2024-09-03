import React from "react";
import connectToDB from "@/configs/db";
import orderModel from "@/models/Order";
import ticketModel from "@/models/Ticket";
import commentModel from "@/models/Comment";
import discountModel from "@/models/Discount";
import contactModel from "@/models/Contact";
import userModel from "@/models/User";
import productModel from "@/models/Product";
import newsletterModel from "@/models/Newsletter";
import applicantExchangeModel from "@/models/ApplicantExchange";
import DashCard from "@/components/modules/cards/DashCard";

import {
  HiOutlineTicket,
  HiOutlineHeart,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingStorefront,
  HiOutlineUserGroup,
  HiOutlineAtSymbol,
  HiOutlineArrowsUpDown,
  HiOutlineEnvelope,
  HiOutlineSwatch,
} from "react-icons/hi2";

export default async function Overview() {
  connectToDB();
  const orders = await orderModel.find({}).lean();
  const tickets = await ticketModel.find({}).lean();
  const comments = await commentModel.find({}).lean();
  const users = await userModel.find({}).lean();
  const products = await productModel.find({}).lean();
  const newsletterMembers = await newsletterModel.find({}).lean();
  const contactMsg = await contactModel.find({}).lean();
  const exchangeMsg = await applicantExchangeModel.find({}).lean();
  const discounts = await discountModel.find({}).lean();

  return (
    <div className="flex-center flex-wrap gap-4 my-4 lg:mx-36">
      <DashCard
        title="مجموع محصولات"
        count={products.length}
        icon={<HiOutlineBuildingStorefront className="icon-md" />}
      />
      <DashCard
        title="مجموع کاربران"
        count={users.length}
        icon={<HiOutlineUserGroup className="icon-md" />}
      />
      <DashCard
        title="مجموع سفارش ها"
        count={orders.length}
        icon={<HiOutlineClipboardDocumentList className="icon-md" />}
      />
      <DashCard
        title="مجموع تیکت ها"
        count={tickets.length}
        icon={<HiOutlineTicket className="icon-md" />}
      />
      <DashCard
        title="مجموع دیدگاه ها"
        count={comments.length}
        icon={<HiOutlineChatBubbleLeftRight className="icon-md" />}
      />
      <DashCard
        title="مجموع تخفیف ها"
        count={discounts.length}
        icon={<HiOutlineSwatch className="icon-md" />}
      />
      <DashCard
        title="اعضای خبرنامه"
        count={newsletterMembers.length}
        icon={<HiOutlineAtSymbol className="icon-md" />}
      />
      <DashCard
        title="درخواست های مبادله"
        count={exchangeMsg.length}
        icon={<HiOutlineArrowsUpDown className="icon-md" />}
      />
      <DashCard
        title="مجموع پیام ها"
        count={contactMsg.length}
        icon={<HiOutlineEnvelope className="icon-md" />}
      />
    </div>
  );
}
