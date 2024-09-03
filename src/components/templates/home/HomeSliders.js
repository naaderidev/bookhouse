import React from "react";
import Title from "@/components/modules/Title";
import ProductSlider from "@/components/modules/ProductSlider";

export default function HomeSliders({ products }) {
  const secondHand = products.filter((item) => item.secondHand === true);
  const psychPhilo = products.filter(
    (item) => item.category === "فلسفه" || item.category === "روان شناسی"
  );
  const fiction = products.filter((item) => item.category === "داستان");
  return (
    <div className="pt-8 md:pt-16 lg:px-8">
      <Title
        title="تازه ها"
        subTitle="آخرین کتابهای اضافه شده به کتابفروشی"
        link="/store"
        linkTitle="مشاهده کتابفروشی"
      />
      <ProductSlider products={products.reverse().slice(0, 10)} />
      <Title
        title="کتابهای دست دوم"
        subTitle="آخرین کتابهای دست دوم اضافه شده به کتابفروشی"
        link="/store"
        linkTitle="مشاهده کتابفروشی"
      />
      <ProductSlider products={secondHand.reverse().slice(0, 10)} />
      <Title
        title="تازه های دنیای داستان"
        subTitle="آخرین کتابهای اضافه شده به کتابفروشی"
        link="/store"
        linkTitle="مشاهده کتابفروشی"
      />
      <ProductSlider products={fiction.reverse().slice(0, 10)} />
      <Title
        title="تازه های دنیای فلسفه و روان شناسی"
        subTitle="آخرین کتابهای اضافه شده به کتابفروشی"
        link="/store"
        linkTitle="مشاهده کتابفروشی"
      />
      <ProductSlider products={psychPhilo.reverse().slice(0, 10)} />
    </div>
  );
}
