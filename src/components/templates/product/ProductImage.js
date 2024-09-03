"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageLoader from "@/components/modules/ImageLoader";

export default function ProductImage({ image }) {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const handleLoad = () => {
    setIsImgLoaded(false);
  };
  return (
    <div>
      {isImgLoaded && <ImageLoader style="w-[400px] h-[400px]" />}
      <Image
        src={image}
        alt="product-image"
        width={800}
        height={800}
        onLoad={handleLoad}
        className={`${
          isImgLoaded ? "opacity-0" : "opacity-100"
        } w-[400px] max-h-[500px]`}
      />
    </div>
  );
}
