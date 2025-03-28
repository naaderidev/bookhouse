import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import { authUser } from "@/utils/authentication/serverHelpers";
import React from "react";

export default async function page() {
  const user = await authUser();
  return (
    <>
      <Header isLogin={user ? true : false} />
      <div className="container p-4 lg:p-12">
        <div className="pt-24 m-12" dir="rtl">
          <h1 className="font-MorabbaMedium text-3xl text-teal mb-4">
            درباره سایت
          </h1>
          <p className="font-Dana leading-7 tracking-tight text-sm sm:text-base sm:leading-9 text-justify">
            فروشگاه آنلاین کتابفروشی با متافریمورک <strong>Next.js</strong> و
            تکنولوژی <strong>App-Router</strong>
            پیاده سازی شده است. استایل دهی پروژه با استفاده از فریمورک
            <strong>TailwindCSS</strong> صورت گرفته و از
            <strong>MongoDB</strong> برای ذخیره سازی اطلاعات استفاده شده است. در
            پیاده سازی پروژه سعی بر آن شده است تا دو اصل اولیه SOLID یعنی اصل تک
            مسئولتی و اصل باز/بسته در طراحی کامپوننت ها و نوشتن API ها رعایت
            شود. فروشگاه در حال حاضر شامل سه بخش مارکت، پنل مدیریت و پنل کاربری
            می باشد. مشاهده پنل کاربری از طریق ثبت نام و ورود به وبسایت امکان
            پذیر است. درصورت عدم تمایل به ثبت نام لطفا از ایمیل
            <code className="font-bold bg-slate-300 text-catalan-800 p-1 rounded">
              naaderidev@gmail.com
            </code>{" "}
            و رمزعبور
            <code className="font-bold bg-slate-300 text-catalan-800 p-1 rounded">
              Naderi#1234
            </code>{" "}
            استفاده کنید.
            <span className="text-rose-700 underline">
              توجه کنید که پنل مدیریت تنها با ایمیل و رمز عبور مطرح شده قابل
              مشاهده و بررسی است
            </span>
          </p>
          <h2 className="font-MorabbaMedium text-3xl text-teal my-4">
            مشخصات سایت
          </h2>
          <ul className="font-Dana text-sm sm:text-base text-justify leading-7 sm:leading-9 tracking-tight child:mb-1 list-inside indent-4 list-disc">
            <li>
              طراحی سایت به صورت کاملا <strong>Responsive</strong> بوده و در هر
              سه فرمت دسکتاپ، تبلت و موبایل قابل استفاده می باشد.
            </li>
            <li>
              دو وضعیت تاریک و روشن برای صفحات لحاظ شده تا کاربران به هنگام
              مطالعه حق انتخاب وضعیت داشته باشند.
            </li>
            <li>
              احراز هویت کاربر و ارزیابی صحت اطلاعات به هنگام ثبت نام و ورود به
              سایت با استفاده از پکیج های <strong>jsonwebtoken،</strong>{" "}
              <strong>bcryptjs</strong> و <strong>yup</strong> صورت گرفته است.
            </li>
            <li>
              ورود به پنل کاربری از طریق{" "}
              <strong className="text-rose-700 underline">
                رمز یکبار مصرف
              </strong>{" "}
              امکان پذیر است و از پنل پیامکی{" "}
              <strong className="text-rose-700 underline">فراز اس ام اس</strong>{" "}
              در این پروژه استفاده شده است.
            </li>
            <li>
              تمامی فرم ها با استفاده از پکیج محبوب و کاربردی{" "}
              <strong>Formik</strong> پیاده سازی شده و اعتبارسنجی ورودی های آنها
              قبل از ثبت، با استفاده از پکیج <strong>yup</strong> انجام شده است.
            </li>
            <li>
              در بخش مارکت امکان فیلتر کتابها به طرق مختلف امکان پذیر است از
              جمله دسته بندی موضوعی، ارزانترین و گرانترین قیمت و کتابهای دست
              دوم.
            </li>
            <li>
              در صفحه جزئیات کتاب امکان افزودن کتاب متناسب با موجودی انبار به
              سبد خرید لحاظ شده و سبد خرید پس از ذخیره در
              <strong>local storage</strong> با ثبت سفارش در دیتابیس ذخیره می
              شود.
            </li>
            <li>
              برای بهبود عملکرد و امنیت سایت، افزودن کتاب به لیست علاقه مندی ها،
              افزودن کتاب به سبد خرید و ثبت و ارسال دیدگاه برای هر کتاب،
              <span className="underline">
                فقط درصورت ورود به سایت امکان پذیر است.
              </span>
            </li>
            <li>
              دیدگاه های ارسالی برای هر کتاب تنها پس از تایید مدیریت سایت به
              دیگران نمایش داده می شود.
            </li>
            <li>
              سفارش های ثبت شده، لیست علاقه مندی ها، ویرایش پروفایل، ثبت و
              دریافت تیکت و مشاهده دیدگاه های ارسالی در پنل کاربری پیاده شده
              است.
            </li>
            <li>
              ارتباط کاربر با مدیریت و پشتیبانی سایت از طریق صفحه تماس با ما،
              تیکت های پنل کاربری و فرم مبادله کتاب امکان پذیر است.
            </li>
            <li>
              امکان بررسی و حذف پیام های دریافتی، اعضای خبرنامه و پیام های
              مبادله کتاب در پنل مدیریت فراهم شده است.
            </li>
            <li>
              امکان افزودن، ویرایش و حذف کد تخفیف در پنل مدیریت پیاده شده است.
            </li>
            <li>
              امکان مشاهده، حذف و پاسخ دهی به دیدگاه ها و تیکت ها در پنل مدیریت
              فراهم شده است. همچنین امکان ویرایش، تایید و یا رد دیدگاه ها فراهم
              شده است.
            </li>
            <li>
              امکان مشاهده، حذف، بن و تغییر سطح دسترسی کاربران در پنل مدیریت
              فراهم شده و سفارش های هر کاربر نیز قابل مشاهده و تایید یا رد می
              باشد.
            </li>
            <li>
              امکان افزودن محصولات با قابلیت آپلود عکس، ویرایش اطلاعات و حذف
              آنها نیز در پنل مدیریت پیاده سازی شده است.
            </li>
            <li>
              سبد خرید و سفارش ثبت شده کاربر با جزئیات کامل پرداختی به کاربر
              نمایش داده می شوند.
            </li>
          </ul>
          <h2 className="font-MorabbaMedium text-3xl text-teal my-4">
            تکنولوژی های سایت
          </h2>
          <ul className="font-Dana child:mb-1 list-inside indent-4 list-disc">
            <li>NextJs</li>
            <li>ReactJs</li>
            <li>JWT</li>
            <li>Formik</li>
            <li>Axios</li>
            <li>Mongoose</li>
            <li>Swiper</li>
            <li>Bcryptjs</li>
            <li>Yup</li>
            <li>Aos</li>
            <li>react-toastify</li>
            <li>typewriter-effect</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
