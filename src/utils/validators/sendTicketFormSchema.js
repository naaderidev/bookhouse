import * as Yup from "yup";

const sendTicketFormSchema = Yup.object().shape({
  department: Yup.string().required("انتخاب دپارتمان الزامی است"),
  subDepartment: Yup.string().required("انتخاب دپارتمان زیرمجموعه الزامی است"),
  title: Yup.string().trim().required("وارد کردن عنوان مناسب الزامی است"),
  priority: Yup.string().required("انتخاب سطح اولویت الزامی است"),
  body: Yup.string()
    .trim()
    .max(1000, "حداکثر 1000 کاراکتر مجاز است")
    .required("وارد کردن پیام مناسب الزامی است"),
});

export default sendTicketFormSchema;
