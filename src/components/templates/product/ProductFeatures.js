import React from "react";
import Feature from "./Feature";

export default function ProductFeatures({ product }) {
  return (
    <div className="grid grid-cols-1 child:mb-2">
      <Feature title="موجودی کتاب" value={product.qty} />
      <Feature
        title="کتاب دست دوم"
        value={product.secondHand ? "بله" : "خیر"}
      />
      <Feature title="پارگی" value={product.rupture ? "دارد" : "ندارد"} />
      <Feature title="هایلایت" value={product.highlight ? "دارد" : "ندارد"} />
    </div>
  );
}
