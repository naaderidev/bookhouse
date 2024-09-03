import * as Yup from "yup";

const editUserInfoFormSchema = Yup.object().shape({
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
  phone: Yup.string()
    .trim()
    .required("وارد کردن شماره الزامی است")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
      "شماره وارد شده معتبر نمی باشد"
    ),
});

export default editUserInfoFormSchema;
