import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
  name: Yup.string().trim().required("وارد کردن نام الزامی است"),
  phone: Yup.string()
    .trim()
    .required("وارد کردن شماره همراه الزامی است")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
      "شماره وارد شده معتبر نمی باشد"
    ),
  email: Yup.string()
    .trim()
    .required("وارد کردن ایمیل معتبر الزامی است")
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
      "ایمیل وارد شده معتبر نمی باشد"
    ),
  message: Yup.string().trim().required("نوشتن پیام الزامی است"),
});

export default contactFormSchema;
