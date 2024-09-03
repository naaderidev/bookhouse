import React from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

export default function SectionTitle({ title, subTitle, link, linkTitle }) {
  return (
    <div className="container flex items-end justify-between mb-5 lg:mb-8 pt-4">
      <div className="pb-2">
        <h3 className="section-title">{title}</h3>
        <h4 className="section-subtitle hidden sm:block">{subTitle}</h4>
      </div>
      <Link href={link} className="section-link">
        <span className="hidden xs:block">{linkTitle}</span>
        <HiChevronRight className="icon-sm rotate-180" />
      </Link>
    </div>
  );
}
