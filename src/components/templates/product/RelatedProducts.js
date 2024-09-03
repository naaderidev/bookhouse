import React from "react";
import connectToDB from "@/configs/db";
import productModel from "@/models/Product";
import ProductSlider from "../../modules/ProductSlider";

export default async function RelatedProducts({ productId }) {
  connectToDB();
  const mainProduct = await productModel.findOne({ _id: productId }).lean();
  const relatedProducts = await productModel
    .find({ category: mainProduct.category })
    .limit(10)
    .sort({ _id: -1 })
    .lean();
  return <ProductSlider products={JSON.parse(JSON.stringify(relatedProducts))} />;
}
