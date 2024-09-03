import React from "react";

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="container flex items-end justify-between mb-5 lg:mb-8 pt-4">
      <div className="pb-2">
        <h3 className="text-2xl font-MorabbaBold">{title}</h3>
        <h4 className="text-lg font-MorabbaLight hidden sm:block">{subTitle}</h4>
      </div>
    </div>
  );
}
