import React from "react";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import InsertProduct from "@/components/templates/admin-panel/products/InsertProduct";
import { HiOutlineCircleStack } from "react-icons/hi2";

export default async function page() {
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="افزودن محصول جدید"
            btn="مشاهده محصولات"
            link="/admin-panel/products"
            icon={<HiOutlineCircleStack className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <InsertProduct />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
