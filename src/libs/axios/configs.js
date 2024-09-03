import axios from "axios";
import { toast } from "react-toastify";

const apiRequest = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "content-Type": "application/json",
  },
  //   params: {}
});

apiRequest.interceptors.request.use(
  (config) => {
    // console.log("requset Config::", config);
    return config;
  },
  (error) => {
    // console.log("requset error::", error);
    return Promise.reject(error);
  }
);

apiRequest.interceptors.response.use(
  (response) => {
    // console.log("response int::", response);
    if (response.status === 201) {
      toast.success(<p className="toast">عملیات ثبت با موفقیت انجام شد</p>);
    } else if (response.status === 200) {
      toast.success(<p className="toast">عملیات با موفقیت انجام شد</p>);
    }
    return response;
  },
  (error) => {
    // console.log("response int error::", error);
    const status = error.response.status;
    if (status === 500) {
      return toast.error(
        <p className="toast">خطای سرور! دقایقی دیگر تلاش کنید</p>
      );
    } else if (status === 401) {
      return toast.error(
        <p className="toast">عدم شناسایی! لطفا وارد حساب کاربری خود شوید</p>
      );
    } else if (status === 433) {
      return toast.error(
        <p className="toast">اطلاعات واردشده صحیح نمی باشد</p>
      );
    } else if (status === 422) {
      return toast.error(
        <p className="toast">کاربری با این مشخصات یافت نشد</p>
      );
    } else if (status === 434) {
      return toast.error(
        <p className="toast">قبلا در سایت ثبت نام کرده اید</p>
      );
    } else if (status === 435) {
      return toast.info(
        <p className="toast">محصول درحال حاضر در لیست دلخواه موجود است</p>
      );
    } else if (status === 436) {
      return toast.error(<p className="toast">کد تخفیف منقضی شده است</p>);
    } else if (status === 437) {
      return toast.error(<p className="toast">کد تخفیف معتبر نمی باشد</p>);
    } else if (status === 438) {
      return toast.error(<p className="toast">کاربر قبلا بن شده است!</p>);
    } else if (status === 409) {
      return toast.error(<p className="toast">کد وارد شده معتبر نمی باشد</p>);
    } else if (status === 410) {
      return toast.error(<p className="toast">کد وارد شده منقضی شده است</p>);
    } else if (status === 404) {
      return toast.error(
        <p className="toast">با عرض پوزش اطلاعات خواسته شده یافت نشد</p>
      );
    } else if (status === 400) {
      return toast.error(<p className="toast">محصول مورد نظر تصویر ندارد</p>);
    }
    return Promise.reject(error);
  }
);

export default apiRequest;
