import React from "react";
import connectToDB from "@/configs/db";
import productModel from "@/models/Product";
import CommentsContainer from "./CommentsContainer";
import SendComment from "./SendComment";

export default async function ProductComments({ productId, isLogin }) {
  connectToDB();
  const mainProduct = await productModel
    .findOne({ _id: productId })
    .lean()
    .populate("comments");

  await productModel.find({
    category: mainProduct.category,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <CommentsContainer
        comments={JSON.parse(JSON.stringify(mainProduct.comments))}
      />
      <SendComment productId={productId} isLogin={isLogin} />
    </div>
  );
}
