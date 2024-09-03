import React from 'react'
import { HiBugAnt } from "react-icons/hi2";

export default function ServerError() {
  return (
    <div className="flex-center flex-col gap-5 my-8">
      <HiBugAnt className="icon text-rose-800"/>
      <h1 className="section-subtitle text-catalan-800 dark:text-brown-100">
        دریافت اطلاعات با خطا مواجه شد! لطفا دقایقی دیگر تلاش کنید
      </h1>
    </div>
  )
}
