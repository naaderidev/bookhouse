"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Basket from "./Basket";
import EmptyCart from "./EmptyCart";
import { toast } from "react-toastify";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import {
  HiOutlineMapPin,
  HiOutlineIdentification,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import apiRequest from "@/libs/axios/configs";
import { useFormik } from "formik";
import checkDiscountFormSchema from "@/utils/validators/checkDiscountFormSchema";

export default function UserCart({ userInfo }) {
  const router = useRouter();
  const [userCart, setUserCart] = useState([]);
  const [discount, setDiscount] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithDiscount, setTotalPriceWithDiscount] = useState(0);
  const [percent, setPercent] = useState(null);
  const [fastShipping, setFastShipping] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const cartCalc = () => {
    let price = 0;
    if (userCart.length) {
      price = userCart.reduce(
        (prev, current) =>
          prev +
          (current.price -
            Math.floor((current.price * current.discount) / 100)) *
            current.count,
        0
      );
    }
    setTotalPrice(price);
  };

  const checkDiscountForm = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: checkDiscountFormSchema,
    onSubmit: async (values) => {
      const response = await apiRequest.put("/discounts/use", values);
      if (response.status === 200) {
        const mainPercent = response.data.percent;
        setPercent(mainPercent);
        const newPrice = Math.floor(
          totalPrice - (totalPrice * mainPercent) / 100
        );
        setTotalPriceWithDiscount(newPrice);
      }
    },
  });

  const verifyOrder = async () => {
    const orderDetails = {
      totalPrice,
      shipping: fastShipping ? 75000 : 35000,
      discountCode: discount,
      basket: userCart,
      userId: userInfo._id,
    };
    const res = await apiRequest.post("/orders", orderDetails);
    if (res.status === 201) {
      setCurrentModal(null);
      localStorage.removeItem("cart");
      userInfo.role === "ADMIN"
        ? router.replace("/admin-panel/orders")
        : router.replace("/user-panel/orders");
    }
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setUserCart(localCart);
  }, []);

  useEffect(cartCalc, [userCart]);

  return (
    <>
      {userCart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex justify-start flex-col">
          <div className="flex flex-wrap gap-10">
            <Basket userCart={userCart} />
            <div className="border-b border-b-gray-300 pb-2">
              <h3 className="text-title-morabba pb-3 border-b border-b-gray-300">
                جدول هزینه
              </h3>
              <div className="flex items-center gap-5 mt-3">
                <span className="text-link text-gray-400">
                  مبلغ قابل پرداخت بدون احتساب هزینه حمل و نقل
                </span>
                <div className="text-xl tracking-tight font-DanaMedium">
                  <span
                    className={
                      percent ? "line-through decoration-rose-800" : ""
                    }
                  >
                    {totalPrice.toLocaleString()}
                  </span>
                  <span className="font-Dana text-sm mr-1">تومان</span>
                </div>
              </div>
              <div
                className={
                  percent
                    ? "flex items-center justify-between gap-5 mt-3"
                    : "hidden"
                }
              >
                <span className="text-link text-gray-400">
                  مبلغ قابل پرداخت با کد تخفیف
                </span>
                <div className="text-xl tracking-tight font-DanaMedium">
                  {totalPriceWithDiscount.toLocaleString()}
                  <span className="text-sm mr-1">تومان</span>
                </div>
              </div>
              <div
                className={
                  percent
                    ? "flex items-center justify-between gap-5 mt-3"
                    : "hidden"
                }
              >
                <span className="text-link text-rose-800">
                  سود شما از این کد تخفیف
                </span>
                <div className="font-Dana text-base">
                  {Math.floor((totalPrice * percent) / 100).toLocaleString()}
                  <span className="text-sm mr-1">تومان</span>
                </div>
              </div>
              <form
                action=""
                className="flex items-center gap-2 mt-3"
                onSubmit={checkDiscountForm.handleSubmit}
              >
                <input
                  type="text"
                  name="code"
                  value={checkDiscountForm.values.code}
                  onChange={checkDiscountForm.handleChange}
                  onBlur={checkDiscountForm.handleBlur}
                  placeholder="کد تخفیف را وارد کنید"
                  className="form-input"
                />
                {checkDiscountForm.errors.code &&
                  checkDiscountForm.touched.code && (
                    <span className="text-xs font-Dana text-rose-800">
                      {checkDiscountForm.errors.code}
                    </span>
                  )}
                <button
                  type="submit"
                  className="btn-gradient"
                  disabled={checkDiscountForm.isSubmitting}
                >
                  <span>
                    {checkDiscountForm.isSubmitting
                      ? "درحال پردازش..."
                      : "بررسی کد"}
                  </span>
                </button>
              </form>
              <div className="my-4">
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <label className="text-base font-MorabbaMedium">
                      پست سفارشی{" "}
                      <span className="hidden sm:inline-block text-link">
                        (اولویت ارسال بالاتر)
                      </span>
                    </label>
                    <input
                      type="radio"
                      className="accent-catalan-600 cursor-pointer"
                      name="post"
                      checked={fastShipping}
                      onChange={() => setFastShipping((prev) => !prev)}
                    />
                  </div>
                  <span className="text-link">75000 تومان</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <label className="text-base font-MorabbaMedium">
                      پست پیشتاز
                    </label>
                    <input
                      type="radio"
                      className="accent-catalan-600 cursor-pointer"
                      name="post"
                      checked={!fastShipping}
                      onChange={() => setFastShipping((prev) => !prev)}
                    />
                  </div>
                  <span className="text-link">35000 تومان</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h4 className="text-lg font-MorabbaMedium">هزینه نهایی</h4>
                <h5 className="text-xl tracking-tight font-DanaMedium">
                  {percent
                    ? fastShipping
                      ? (totalPriceWithDiscount + 75000).toLocaleString()
                      : (totalPriceWithDiscount + 35000).toLocaleString()
                    : fastShipping
                    ? (totalPrice + 75000).toLocaleString()
                    : (totalPrice + 35000).toLocaleString()}
                  <span className="font-Dana text-sm mr-1">تومان</span>
                </h5>
              </div>
            </div>
            <div className="border-b border-b-gray-300 child:mb-3 font-DanaMedium">
              <h3 className="text-title-morabba pb-3 border-b border-b-gray-300">
                نشانی دریافت بسته
              </h3>
              <div className="flex items-center gap-3">
                <HiOutlineMapPin className="icon-md" />
                <p className="text-sm">نشانی :{userInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineIdentification className="icon-md" />
                <p className="text-sm">کد پستی:{userInfo.zip}</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineDevicePhoneMobile className="icon-md" />
                <p className="text-sm">تلفن همراه:{userInfo.phone}</p>
              </div>
              <button className="btn-gradient text-sm-morabba">
                <Link
                  href={
                    userInfo.role === "ADMIN" ? "/admin-panel" : "/user-panel"
                  }
                >
                  ویرایش اطلاعات
                </Link>
              </button>
            </div>
          </div>
          <button
            className="btn-gradient btn-plus-icon my-6"
            onClick={() => {
              setCurrentModal("verify-order");
            }}
          >
            ثبت سفارش
          </button>
        </div>
      )}
      {currentModal && (
        <Modal>
          {currentModal === "verify-order" ? (
            <ConfirmModal
              confirmModal={verifyOrder}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
