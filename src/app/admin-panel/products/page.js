import React from "react";
import connectToDB from "@/configs/db";
import productModel from "@/models/Product";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import ProductList from "@/components/templates/admin-panel/products/ProductList";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const products = await productModel.find({}).sort({ _id: -1 }).lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="مشاهده تمام محصولات"
            btn="افزودن محصول جدید"
            link="/admin-panel/products/insert"
            icon={<HiOutlineArchiveBoxArrowDown className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <ProductList products={JSON.parse(JSON.stringify(products))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
