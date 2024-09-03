import React from "react";
import Link from "next/link";
import Newsletter from "../templates/Footer/Newsletter";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-catalan-800 py-4 lg:pb-11 lg:pt-[62px] px-12 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-28 text-brown-100 lg:w-[90%] px-4 lg:px-0 mx-auto pb-11">
        <div className="about-us">
          <figure className="flex items-end gap-2 mb-6 md:mb-[18px]">
            <Image
              src="/images/icons/tastybooks-9.png"
              alt="logo"
              width={80}
              height={80}
              className="icon"
            />
            <figcaption className="text-subtitle text-catalan-300">
              خانه کتاب
            </figcaption>
          </figure>
          <p className="text-regular leading-9 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="text-subtitle my-5 md:mb-[28px]">
            دسترسی آسان و سریع
          </h5>
          <div className="flex flex-col justify-start gap-y-5 md:gap-x-3 text-regular">
            <Link
              href="/store"
              className="flex items-center gap-2 hover:text-catalan-300"
            >
              <HiOutlineBookOpen className="icon-sm" />
              <span>جدیدترین کتابها</span>
            </Link>
            <Link
              href="/store"
              className="flex items-center gap-2 hover:text-catalan-300"
            >
              <HiOutlineBookOpen className="icon-sm" />
              <span>کتابهای دست دوم</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-catalan-300"
            >
              <HiOutlineBookOpen className="icon-sm" />
              <span>همکاری با خانه کتاب</span>
            </Link>
            <div className="flex flex-wrap gap-y-1.5 gap-x-1.5 lg:gap-x-6 font-DanaMedium text-base text-catalan-300">
              <Link
                href="/"
                className="btn-gradient btn-plus-icon text-brown-100"
              >
                <FaInstagram className="icon-sm" />
                <span>Book_House</span>
              </Link>
              <Link
                href="/"
                className="btn-gradient btn-plus-icon text-brown-100"
              >
                <FaTelegramPlane className="icon-sm" />
                <span>Book_House</span>
              </Link>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-regular text-brown-100 lg:w-[90%] px-4 lg:px-0 mx-auto pt-11 border-t border-brown-200">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brown-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brown-100"></span>
          </span>
          <p>
            تمام حقوق این پروژه متعلق به{" "}
            <span className="text-catalan-300">خانه کتاب</span> می باشد و
            استفاده از آن پیگرد قانونی دارد.
          </p>
        </div>
        <p className="text-left">
          Copyright © 2023{" "}
          <span className="text-catalan-300">Book House</span>. All rights
          reserved
        </p>
      </div>{" "}
    </footer>
  );
}
