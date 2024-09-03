import React from "react";

export default function OrderCost({ order, discount }) {
  return (
    <div className="lg:w-1/3">
      <div className="border-b border-b-gray-300 dark:border-b-white/10">
        <h3 className="text-title-morabba pb-3 border-b border-b-gray-300 dark:border-b-white/10">
          جدول هزینه
        </h3>
        <div className="flex items-center justify-between gap-10 mt-3">
          <span className="text-link text-gray-400">
            مبلغ قابل پرداخت بدون هزینه پست
          </span>
          <div className="text-catalan-800 dark:text-brown-100">
            <span className="text-xl tracking-tight font-DanaMedium">
              {order.totalPrice.toLocaleString()}
            </span>
            <span className="text-link mr-1">تومان</span>
          </div>
        </div>
        <div
          className={
            discount
              ? "flex items-center justify-between gap-10 mt-3"
              : "hidden"
          }
        >
          <span className="text-link text-rose-800">
            مبلغ کسرشده به دلیل کد تخفیف {order.discountCode}
          </span>
          <div className="text-catalan-700 dark:text-brown-100">
            <span className="text-regular">
              {Math.floor(
                (order.totalPrice * discount?.percent) / 100
              ).toLocaleString()}
            </span>
            <span className="text-link mr-1">تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10 mt-3">
          <span className="text-link text-gray-400">هزینه پست</span>
          <div className="text-catalan-700 dark:text-brown-100">
            <span className="text-regular">
              {order.shipping.toLocaleString()}
            </span>
            <span className="text-link mr-1">تومان</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 mt-3">
        <span className="text-link text-catalan-800">پرداخت نهایی</span>
        <div className=" text-catalan-800 dark:text-brown-100">
          <span className="text-xl tracking-tight font-DanaMedium">
            {order.finalPrice.toLocaleString()}
          </span>
          <span className="text-link mr-1">تومان</span>
        </div>
      </div>
    </div>
  );
}
