"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EmptySearch from "./EmptySearch";
import Pagination from "@/components/modules/Pagination";
import BookCard from "@/components/modules/cards/BookCard";

export default function SearchContainer() {
  const searchParams = useSearchParams();
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState(searchedProducts);

  useEffect(() => {
    const getSearch = async () => {
      const res = await fetch(`/api/products?${searchParams}`);
      if (res.status === 200) {
        const data = await res.json();
        setSearchedProducts(data);
      }
    };
    getSearch();
  }, []);

  return (
    <>
      <div>
        {searchedProducts.length === 0 ? (
          <EmptySearch />
        ) : (
          <div className="p-8 flex-center gap-5 flex-wrap">
            {shownProducts.map((product) => (
              <BookCard key={product._id} {...product} type="detail" />
            ))}
          </div>
        )}
      </div>
      <Pagination
        items={searchedProducts}
        setShownItems={setShownProducts}
        count={6}
        type="market"
      />
    </>
  );
}
