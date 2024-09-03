"use client";
import React, { useState } from "react";
import OrderCard from "./OrderCard";
import Pagination from "@/components/modules/Pagination";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";

export default function OrdersList({ orders }) {
  const [shownOrders, setShownOrders] = useState(orders);
  return (
    <div className="container mx-8">
      {orders.length === 0 ? (
        <EmptyContainer message="هنوز سفارشی ثبت نکردی! یه سری به فروشگاه بزن!" />
      ) : (
        <>
          {shownOrders.map((order) => (
            <OrderCard key={order._id} {...order} />
          ))}
          <Pagination items={orders} setShownItems={setShownOrders} count={6} type="cms"/>
        </>
      )}
    </div>
  );
}
