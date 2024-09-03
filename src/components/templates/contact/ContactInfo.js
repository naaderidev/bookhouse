import React from "react";
import {
  HiMapPin,
  HiDevicePhoneMobile,
  HiPhone,
  HiEnvelope,
  HiMiniGlobeAlt,
} from "react-icons/hi2";

export default function ContactInfo() {
  return (
    <div className="max-w-[600px]" data-aos="fade-left">
      <h2 className="text-justify text-regular leading-7 md:text-subtitle md:leading-9 my-6">
        اطلاعات تماس
      </h2>
      <div className="flex flex-col gap-4 my-8 text-sm sm:text-base md:text-subtitle font-MorabbaLight child:mb-3 child:flex child:items-center child:justify-start child:gap-3">
        <div>
          <HiMapPin className="icon-sm md:icon-md" />
          <span>آدرس:</span>
          <span>تهران، انقلاب، خیابان 12 فروردین، کوچه 23، پلاک 132</span>
        </div>
        <div>
          <HiMiniGlobeAlt className="icon-sm md:icon-md" />
          <span>وبسایت:</span>
          <span>www.bookhouse.com</span>
        </div>
        <div>
          <HiEnvelope className="icon-sm md:icon-md" />
          <span>ایمیل:</span>
          <span>bookhouse@gmail.com</span>
        </div>
        <div>
          <HiDevicePhoneMobile className="icon-sm md:icon-md" />
          <span>پیامک:</span>
          <span>09121234567</span>
        </div>
        <div>
          <HiPhone className="icon-sm md:icon-md" />
          <span>تلفن:</span>
          <span>021-666555444</span>
        </div>
      </div>
    </div>
  );
}
