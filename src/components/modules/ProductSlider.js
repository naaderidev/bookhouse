"use client";
import React from "react";
import BookCard from "@/components/modules/cards/BookCard";
//----------Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function ProductSlider({ products }) {
  return (
    <div className="px-8 my-8">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 120,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 120,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#356169",
          "--swiper-pagination-bullet-inactive-color": "#356169",
          "--swiper-pagination-bullet-size": "20px",
        }}
      >
        {products?.map((book) => {
          return (
            <SwiperSlide key={book._id} className="flex-center pb-16">
              <BookCard {...book} type="detail" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
