import React from "react";
import CartCard from "./CartCard";

export default function Basket({ userCart }) {
  return (
    <div className="border-b border-b-gray-300">
      <h3 className="text-title-morabba pb-3 border-b border-b-gray-300">
        لیست اقلام خرید
      </h3>
      {userCart.map((product) => (
        <CartCard key={product.id} {...product} type="cart" />
      ))}
    </div>
  );
}
