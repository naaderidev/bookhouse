import * as Yup from "yup";

const emailLoginFormSchema = Yup.object().shape({
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
});

export default emailLoginFormSchema;
