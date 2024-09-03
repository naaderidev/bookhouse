"use client";
import React, { useState } from "react";
import Pagination from "@/components/modules/Pagination";
import BookCard from "@/components/modules/cards/BookCard";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";

export default function WishList({ wishlist }) {
  const [shownWishlist, setShownWishlist] = useState(wishlist);
  return (
    <div className="container mx-8">
      {wishlist.length === 0 ? (
        <EmptyContainer message="هنوز کتابی به لیست دلخواهت اضافه نکردی" />
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-8">
            {shownWishlist.map((wishItem) => {
              if (wishItem.productId) {
                return (
                  <BookCard
                    type="wish"
                    key={wishItem._id}
                    {...wishItem.productId}
                  />
                );
              }
            })}
          </div>
          <Pagination
            items={wishlist}
            setShownItems={setShownWishlist}
            count={3}
            type="cms"
          />
        </>
      )}
    </div>
  );
}
