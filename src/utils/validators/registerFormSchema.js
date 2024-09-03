import * as Yup from "yup";

const registerFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("وارد کردن نام الزامی است")
    .min(3, "حداقل 3 کاراکتر الزامی است")
    .max(20, "حداکثر 20 کاراکتر قابل قبول است"),
  username: Yup.string()
    .trim()
    .required("وارد کردن نام کاربری الزامی است")
    .min(3, "حداقل 3 کاراکتر الزامی است")
    .max(20, "حداکثر 20 کاراکتر قابل قبول است"),
  email: Yup.string()
    .trim()
    .email("فرمت ایمیل وارد شده صحیح نمی باشد")
    .required("وارد کردن ایمیل الزامی است")
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
      "ایمیل وارد شده معتبر نمی باشد"
    ),
  password: Yup.string()
    .trim()
    .min(8, "رمز عبور شامل حداقل 8 کاراکتر است")
    .max(12, "رمز عبور شامل حداکثر 12 کاراکتر است")
    .required("وارد کردن ایمیل الزامی است")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
      "رمز عبور باید شامل حروف خاص و بزرگ باشد"
    ),
  phone: Yup.string()
    .trim()
    .required("وارد کردن شماره الزامی است")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
      "شماره وارد شده معتبر نمی باشد"
    ),
  province: Yup.string().trim().required("وارد کردن استان الزامی است"),
  city: Yup.string().trim().required("وارد کردن شهر الزامی است"),
  address: Yup.string().trim().required("وارد کردن آدرس الزامی است"),
  zip: Yup.string().trim().required("وارد کردن کدپستی الزامی است"),
});

export default registerFormSchema;
