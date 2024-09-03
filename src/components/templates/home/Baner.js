"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { HiOutlineBookOpen } from "react-icons/hi2";

export default function Baner({ sloganTitle, sloganSubTitle }) {
  return (
    <section className="baner bg-secondary-baner">
      <div className="text-brown-100 hidden md:block absolute top-1/3 right-20">
        <h2 className="text-title italic mb-0.5 md:mb-6">{sloganTitle}</h2>
        <span className="text-title italic">{sloganSubTitle}</span>
        <div className="flex items-start">
          <HiOutlineBookOpen className="icon text-brown-100" />
          <span className="block w-60 h-1 bg-brown-100 my-6"></span>
          <HiOutlineBookOpen className="icon text-brown-100" />
        </div>
        <div className="text-subtitle italic mt-8 max-w-[520px]">
          <h3 className="mb-4"> به کتابخانه و کتابفروشی من خوش آمدید</h3>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "من عاشق کتاب ها هستم؛ چون آرامم می کنند و به زندگی و مرگم جلوه ای دیگر می‌بخشند... مایکل دمانتین"
                )
                .start()
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  "من دریافته‌ام کتاب‌ها چنان قدرتی دارند که می‌توانند زمان را متوقف کنند، آن را به عقب بکشند و حتی به سوی آینده ببرند... جیم بایشاب"
                )
                .start()
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  "کتاب‌ها مانند زنبورهایی هستند که گرده‌ی گل‌ ها را از ذهنی به ذهن دیگر منتقل می‌کنند... جیمز راسل"
                )
                .start()
                .pauseFor(2500)
                .deleteAll();
            }}
            options={{
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}
