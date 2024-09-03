import * as Yup from "yup";

const editProductInfoFormSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("وارد کردن عنوان کتاب الزامی است")
    .max(50, "حداکثر 50 کاراکتر قابل قبول است"),
  author: Yup.string()
    .trim()
    .required("وارد کردن نام نویسنده الزامی است")
    .max(50, "حداکثر 50 کاراکتر قابل قبول است"),
  translator: Yup.string().trim().max(50, "حداکثر 50 کاراکتر قابل قبول است"),
  editor: Yup.string().trim().max(50, "حداکثر 50 کاراکتر قابل قبول است"),
  category: Yup.string()
    .trim()
    .required("وارد کردن دسته بندی موضوعی الزامی است")
    .max(50, "حداکثر 50 کاراکتر قابل قبول است"),
  publisher: Yup.string().trim().max(50, "حداکثر 50 کاراکتر قابل قبول است"),
  publishDate: Yup.string().trim().max(25, "حداکثر 25 کاراکتر قابل قبول است"),
  printPrice: Yup.number().required("وارد کردن قیمت پشت جلد الزامی است"),
  salePrice: Yup.number().required("وارد کردن قیمت پیشنهادی فروش الزامی است"),
  qty: Yup.number().required("وارد کردن موجودی کتاب الزامی است"),
  discount: Yup.number(),
  secondHand: Yup.boolean(),
  rupture: Yup.boolean(),
  highlight: Yup.boolean(),
  tags: Yup.string().trim(),
});

export default editProductInfoFormSchema;
