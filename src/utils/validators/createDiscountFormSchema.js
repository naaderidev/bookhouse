import * as Yup from "yup";

const createDiscountFormSchema = Yup.object().shape({
  code: Yup.string().trim().max(10, "حداکثر 10 کاراکتر قابل قبول است"),
  percent: Yup.number().required("وارد کردن درصد تخفیف الزامی است"),
  maxUse: Yup.number().required("وارد کردن حداکثر دفعات استفاده الزامی است"),
  desc: Yup.string()
    .trim()
    .required("وارد کردن توضیحات تخفیف الزامی است")
    .max(50, "حداکثر 50 کاراکتر قابل قبول است"),
});

export default createDiscountFormSchema;
