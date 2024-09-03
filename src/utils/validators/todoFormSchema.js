import * as Yup from "yup";

const todoFormSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .max(200, "حداکثر 200 کاراکتر مجاز است")
    .required("وارد کردن عنوان مناسب الزامی است"),
});

export default todoFormSchema;
