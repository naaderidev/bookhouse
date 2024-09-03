import * as Yup from "yup";

const exchangeFormSchema = Yup.object().shape({
  name: Yup.string().trim().required("وارد کردن نام الزامی است"),
  phone: Yup.string().trim().required("وارد کردن شماره همراه الزامی است"),
  suggest: Yup.string()
    .trim()
    .max(50, "نام کتاب شامل حداکثر 50 کاراکتر باشد")
    .required("وارد کردن نام کتاب پیشنهادی الزامی است"),
  request: Yup.string()
    .trim()
    .max(50, "نام کتاب شامل حداکثر 50 کاراکتر باشد")
    .required("وارد کردن نام کتاب درخواستی الزامی است"),
});

export default exchangeFormSchema;
