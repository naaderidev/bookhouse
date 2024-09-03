import React from "react";
import Label from "./Label";
import ProductImage from "./ProductImage";

export default function ProductInfo({ product }) {
  return (
    <div className="lg:col-span-9 flex flex-col gap-6 p-2 sm:p-8">
      <div className="w-full flex flex-col sm:flex-row gap-6">
        <ProductImage image={product.image} />
        <div>
          <div className="pb-2 space-y-3 mb-8">
            <h3 className="text-subtitle md:text-title mb-8">
              {product.title}
            </h3>
            <h4 className="text-regular md:text-subtitle">{product.details}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <Label
              icon="/images/icons/blog.png"
              title="نویسنده"
              value={product.author}
            />
            <Label
              icon="/images/icons/blog.png"
              title="مترجم"
              value={product.translator}
            />
            <Label
              icon="/images/icons/blog.png"
              title="ویراستار"
              value={product.editor !== "" ? product.editor : "نامشخص"}
            />
            <Label
              icon="/images/icons/blog.png"
              title="موضوع"
              value={product.category}
            />
            <Label
              icon="/images/icons/blog.png"
              title="انتشارات"
              value={product.publisher}
            />
            <Label
              icon="/images/icons/blog.png"
              title="سال چاپ"
              value={product.publishDate}
            />
            <Label
              icon="/images/icons/blog.png"
              title="قیمت پشت جلد"
              value={product.printPrice.toLocaleString()}
            />
            <Label
              icon="/images/icons/blog.png"
              title="قیمت فروش"
              value={product.salePrice.toLocaleString()}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 w-full">
        <div className="text-title-morabba my-6">
          <h3 className="text-subtitle mb-4">معرفی کتاب</h3>
          <p className="text-link leading-7 md:text-regular md:leading-9 text-justify">
            {product.introduction}
          </p>
        </div>
        <div className="text-title-morabba my-6">
          <h3 className="text-subtitle mb-4">درباره کتاب</h3>
          <p className="text-link leading-7 md:text-regular md:leading-9 text-justify">
            {product.description}
          </p>
        </div>
        <div className="flex items-start my-6 child:ml-2">
          <h3 className="text-regular md:text-subtitle">برچسب ها</h3>
          <div className="flex gap-2">
            {product.tags
              .toString()
              .split(",")
              .map((tag, index) => (
                <div key={index} className="badge bg-catalan-600">
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
