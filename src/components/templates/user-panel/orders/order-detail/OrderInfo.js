import React from "react";
import CartCard from "@/components/templates/cart/CartCard";

export default function OrderInfo({ order }) {
  return (
    <div className="lg:w-2/3">
      <div className="border-b border-b-gray-300 dark:border-b-white/10">
        <h3 className="text-title-morabba pb-3 border-b border-b-gray-300 dark:border-b-white/10">
          جدول اقلام خریداری شده
        </h3>
        <div className="flex flex-wrap">
          {order.basket.map((product) => (
            <CartCard type="order" key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
