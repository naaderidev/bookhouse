import React from "react";
import connectToDB from "@/configs/db";
import orderModel from "@/models/Order";
import ticketModel from "@/models/Ticket";
import commentModel from "@/models/Comment";
import wishlistModel from "@/models/Wishlist";
import DashCard from "@/components/modules/cards/DashCard";
import { authUser } from "@/utils/authentication/serverHelpers";
import {
  HiOutlineTicket,
  HiOutlineHeart,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

export default async function DashboardCards() {
  connectToDB();
  const user = await authUser();
  const tickets = await ticketModel.find({ user: user._id }).lean();
  const comments = await commentModel.find({ email: user.email }).lean();
  const wishlist = await wishlistModel.find({ userId: user._id }).lean();
  const orders = await orderModel.find({ userId: user._id }).lean();
  return (
    <div className="flex-center flex-wrap gap-4 my-4">
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
        title="مجموع علاقه مندی ها"
        count={wishlist.length}
        icon={<HiOutlineHeart className="icon-md" />}
      />
      <DashCard
        title="مجموع دیدگاه ها"
        count={comments.length}
        icon={<HiOutlineChatBubbleLeftRight className="icon-md" />}
      />
    </div>
  );
}
