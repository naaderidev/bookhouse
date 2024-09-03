import * as Yup from "yup";

const editProductTranscriptFormSchema = Yup.object().shape({
  details: Yup.string()
    .trim()
    .required("وارد کردن جزئیات کتاب الزامی است")
    .max(100, "حداکثر 100 کاراکتر قابل قبول است"),
  introduction: Yup.string()
    .trim()
    .required("وارد کردن معرفی کتاب الزامی است")
    .max(1000, "حداکثر 1000 کاراکتر قابل قبول است"),
  description: Yup.string()
    .trim()
    .required("وارد کردن توضیحات و چکیده کتاب الزامی است")
    .max(2000, "حداکثر 2000 کاراکتر قابل قبول است"),
});

export default editProductTranscriptFormSchema;
