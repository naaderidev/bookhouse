import * as Yup from "yup";

const otpSchema = Yup.object().shape({
  code: Yup.string()
    .trim()
    .required("وارد کردن کد دریافتی الزامی است")
    .max(5, "کد وارد شده حداکثر 5 رقمی است"),
});

export default otpSchema;
