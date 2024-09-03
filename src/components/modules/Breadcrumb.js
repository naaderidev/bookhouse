import React from 'react'
import Link from 'next/link';
import { HiChevronLeft } from "react-icons/hi2";

export default function Breadcrumb() {
  return (
    <div className="container flex items-center mt-36 p-0 bg-catalan-600">
        <div className='breadcrumb__item'>
            <Link href="/">خانه</Link>
        </div>
        {/* <HiChevronLeft className='icon'/> */}
        <div className='breadcrumb__item'>
            <Link href="/">ارتباط با ما</Link>
        </div>
    </div>
  )
}
