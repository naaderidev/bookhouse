import * as Yup from "yup";

const checkDiscountFormSchema = Yup.object().shape({
  code: Yup.string().trim().max(10, "حداکثر 10 کاراکتر قابل قبول است"),
});

export default checkDiscountFormSchema;
