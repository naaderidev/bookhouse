import * as Yup from "yup";

const phoneLoginFormSchema = Yup.object().shape({
  phone: Yup.string()
    .trim()
    .required("وارد کردن شماره الزامی است")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
      "شماره وارد شده معتبر نمی باشد"
    ),
});

export default phoneLoginFormSchema;
