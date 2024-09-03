import Link from "next/link";
import React from "react";

export default function EmptyComments() {
  return (
    <div className="px-2  mb-4 rounded-2xl bg-gradient-to-t from-catalan-50 to-catalan-200/50 text-catalan-800 dark:bg-catalan-600">
      <p className="flex-center text-title-morabba p-4">
        هنوز دیدگاهی برای این کتاب ثبت نشده است...
      </p>
      <p className="flex-center text-link p-4">
        اولین کسی باشید که برای این کتاب دیدگاه ارسال می کنید
      </p>
      <Link className="text-link flex-center py-4 hover:text-rose-600" href="/login-register">ورود | عضویت</Link>
    </div>
  );
}
