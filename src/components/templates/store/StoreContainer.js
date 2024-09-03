"use client";
import React, { useState, useEffect } from "react";
import EmptySearch from "../search/EmptySearch";
import BookCard from "@/components/modules/cards/BookCard";
import { categories } from "@/utils/arrayData/categories";
import Pagination from "@/components/modules/Pagination";
import { HiOutlineBookOpen } from "react-icons/hi2";

export default function StoreContainer({ products }) {
  const [allProducts, setAllProducts] = useState([...products]);
  const [sort, setSort] = useState("-1");
  const [count, setCount] = useState(9);
  const [shownItems, setShownItems] = useState([]);

  const fetchCategory = async (cat) => {
    const res = await fetch(`/api/store?cat=${cat}`);
    const data = await res.json();
    setAllProducts(data);
  };

  useEffect(() => {
    switch (sort) {
      case "descending": {
        const newProducts = [...allProducts].sort(
          (x, y) => x.salePrice - y.salePrice
        );
        setAllProducts(newProducts);
        break;
      }
      case "ascending": {
        const newProducts = [...allProducts]
          .sort((x, y) => x.salePrice - y.salePrice)
          .reverse();
        setAllProducts(newProducts);
        break;
      }
      case "old":
        const newProducts = [...allProducts].filter(
          (product) => product.secondHand === true
        );
        setAllProducts(newProducts);
        break;
      default: {
        setAllProducts([...products]);
      }
    }
  }, [sort]);

  return (
    <div className="grid grid-cols-6 mt-8 md:mt-36 ">
      <div className="col-span-1">
        <div className="h-screen">
          <div className="text-title-morabba pb-8">
            <span> دسته بندی</span>
            <span className="hidden sm:inline-block">موضوعی</span>
          </div>
          <ul className="child:flex child:items-center child:gap-3 child:mb-5 child:cursor-pointer child:text-base-morabba">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => fetchCategory(category.value)}
                className="hover:text-catalan-400"
              >
                <HiOutlineBookOpen className="icon-md" />
                <span className="hidden md:inline-block ">
                  {category.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-5">
        <div className="flex items-center gap-1 flex-wrap justify-around mb-5">
          <div className="flex items-center gap-2">
            <span className="text-title-morabba">جستجو بر اساس</span>
            <select
              defaultValue={sort}
              onChange={(e) => {
                setSort(e.target.value);
              }}
              className="text-regular text-catalan-800 px-5 py-1 rounded-lg outline-none"
            >
              <option value="-1">انتخاب کنید</option>
              <option value="descending">قیمت-ارزانترین</option>
              <option value="ascending">قیمت-گرانترین</option>
              <option value="old">کتاب دست دوم</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-title-morabba">
              تعداد نمایش داده شده در هر صفحه
            </span>
            <select
              defaultValue={count}
              onChange={(e) => setCount(e.target.value)}
              className="text-regular text-catalan-800 px-5 py-1 rounded-lg outline-none"
            >
              <option value={3}>3</option>
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={18}>18</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>
        <div className="py-8 flex-center gap-x-3 gap-y-5 flex-wrap">
          {shownItems.length === 0 ? (
            <EmptySearch />
          ) : (
            <>
              {shownItems.map((product) => (
                <BookCard type="detail" key={product._id} {...product} />
              ))}
            </>
          )}
        </div>
        <Pagination
          items={allProducts}
          setShownItems={setShownItems}
          count={count}
          type="market"
        />
      </div>
    </div>
  );
}
