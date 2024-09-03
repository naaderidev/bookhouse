import * as Yup from "yup";

const editUserAddressFormSchema = Yup.object().shape({
  province: Yup.string().trim().required("وارد کردن استان الزامی است"),
  city: Yup.string().trim().required("وارد کردن شهر الزامی است"),
  address: Yup.string().trim().required("وارد کردن آدرس الزامی است"),
  zip: Yup.string().trim().required("وارد کردن کدپستی الزامی است"),
});

export default editUserAddressFormSchema;
