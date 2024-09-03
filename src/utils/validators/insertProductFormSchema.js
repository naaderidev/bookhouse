import * as Yup from "yup";

const insertProductFormSchema = Yup.object().shape({
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
  image: Yup.string().required("آپلود عکس کتاب الزامی است"),
  tags: Yup.string().trim(),
});

export default insertProductFormSchema;
