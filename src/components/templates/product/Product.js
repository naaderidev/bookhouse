import React from "react";
import connectToDB from "@/configs/db";
import productModel from "@/models/Product";
import AddToCart from "./AddToCart";
import ProductInfo from "./ProductInfo";
import AddToWishlist from "./AddToWishlist";
import ProductFeatures from "./ProductFeatures";

export default async function Product({ productId }) {
  connectToDB();
  const product = await productModel
    .findOne({ _id: productId })
    .populate("comments")
    .lean();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
      <ProductInfo product={JSON.parse(JSON.stringify(product))} />
      <div className="lg:col-span-3 p-2 sm:p-8 space-y-4">
        <AddToCart product={JSON.parse(JSON.stringify(product))} />
        <AddToWishlist productID={productId} />
        <ProductFeatures product={JSON.parse(JSON.stringify(product))} />
      </div>
    </div>
  );
}
