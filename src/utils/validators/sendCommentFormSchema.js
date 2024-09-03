import * as Yup from "yup";

const sendCommentFormSchema = Yup.object().shape({
  username: Yup.string().trim().required("وارد کردن نام الزامی است"),
  email: Yup.string()
    .trim()
    .email("فرمت ایمیل وارد شده صحیح نمی باشد")
    .required("وارد کردن ایمیل الزامی است")
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
      "ایمیل وارد شده معتبر نمی باشد"
    ),
  body: Yup.string()
    .trim()
    .max(1000, "حداکثر 1000 کاراکتر مجاز است")
    .required("وارد کردن پیام مناسب الزامی است"),
});

export default sendCommentFormSchema;
