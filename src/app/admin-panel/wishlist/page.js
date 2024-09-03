import React from "react";
import connectToDB from "@/configs/db";
import wishlistModel from "@/models/Wishlist";
import MiniTopbar from "@/components/modules/MiniTopbar";
import { authUser } from "@/utils/authentication/serverHelpers";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import WishList from "@/components/templates/wishlist/WishList";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";


export default async function page() {
  connectToDB();
  const user = await authUser();
  const wishlist = await wishlistModel
    .find({ userId: user?._id })
    .populate(
      "productId",
      "id title author translator publisher category image"
    )
    .lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="لیست کتابهای دلخواه"
            btn="مشاهده فروشگاه"
            link="/store"
            icon={<HiOutlineBuildingStorefront className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-5 p-2 md:pt-4">
          <WishList wishlist={JSON.parse(JSON.stringify(wishlist))} />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
