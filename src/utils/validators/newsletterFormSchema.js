import * as Yup from "yup";

const newsletterFormSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("فرمت ایمیل وارد شده صحیح نمی باشد")
    .required("وارد کردن ایمیل الزامی است")
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
      "ایمیل وارد شده معتبر نمی باشد"
    ),
});

export default newsletterFormSchema;
