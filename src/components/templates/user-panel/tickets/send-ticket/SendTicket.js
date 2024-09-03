"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import sendTicketFormSchema from "@/utils/validators/sendTicketFormSchema";
import apiRequest from "@/libs/axios/configs";

export default function SendTicket() {
  const [departments, setDepartments] = useState([]);
  const [subDepartments, setSubDepartments] = useState([]);
  const [departmentID, setDepartmentID] = useState("-1");
  const [subDepartmentID, setSubDepartmentID] = useState("-1");

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/department");
      const data = await res.json();
      setDepartments([...data]);
    };
    getDepartments();
  }, []);

  useEffect(() => {
    const getSubDepartments = async () => {
      const res = await fetch(`/api/department/sub/${departmentID}`);
      if (res.status === 200) {
        const data = await res.json();
        setSubDepartments([...data]);
      }
    };
    getSubDepartments();
  }, [departmentID]);

  const sendTicketForm = useFormik({
    initialValues: {
      department: "-1",
      subDepartment: "-1",
      title: "",
      priority: "-1",
      body: "",
    },
    validationSchema: sendTicketFormSchema,
    onSubmit: async (values, { resetForm }) => {
      await apiRequest.post("/tickets", {
        ...values,
        department: departmentID,
        subDepartment: subDepartmentID,
      });
      resetForm();
    },
  });

  return (
    <>
      <div className="container px-8">
        <form action="" onSubmit={sendTicketForm.handleSubmit}>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-department">دپارتمان مربوطه</label>
              <select
                name="department"
                id="product-department"
                defaultValue="-1"
                className="text-xs font-Dana text-catalan-800"
                onChange={(e) => {
                  sendTicketForm.handleChange;
                  setDepartmentID(e.target.value);
                }}
              >
                <option value="-1">دپارتمان مورد نظر را انتخاب کنید</option>
                {departments?.map((department) => (
                  <option key={department._id} value={department._id}>
                    {department.title}
                  </option>
                ))}
              </select>
              {sendTicketForm.errors.department &&
                sendTicketForm.touched.department && (
                  <span className="text-xs font-Dana text-rose-800">
                    {sendTicketForm.errors.department}
                  </span>
                )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-sub-department">واحد مربوطه</label>
              <select
                name="subDepartment"
                id="product-sub-department"
                defaultValue="-1"
                className="text-xs font-Dana text-catalan-800"
                onChange={(e) => {
                  sendTicketForm.handleChange;
                  setSubDepartmentID(e.target.value);
                }}
              >
                <option value="-1">واحد مورد نظر را انتخاب کنید</option>
                {subDepartments?.map((subDepartment) => (
                  <option key={subDepartment._id} value={subDepartment._id}>
                    {subDepartment.title}
                  </option>
                ))}
              </select>
              {sendTicketForm.errors.subDepartment &&
                sendTicketForm.touched.subDepartment && (
                  <span className="text-xs font-Dana text-rose-800">
                    {sendTicketForm.errors.subDepartment}
                  </span>
                )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-50">
              <label htmlFor="product-title">عنوان</label>
              <input
                className="text-catalan-800"
                type="text"
                name="title"
                id="product-title"
                placeholder="عنوان مناسب برای تیکت انتخاب کنید"
                value={sendTicketForm.values.title}
                onChange={sendTicketForm.handleChange}
                onBlur={sendTicketForm.handleBlur}
              />
              {sendTicketForm.errors.title && sendTicketForm.touched.title && (
                <span className="text-xs font-Dana text-rose-800">
                  {sendTicketForm.errors.title}
                </span>
              )}
            </div>
            <div className="form-col-50">
              <label htmlFor="product-priority">سطح اولویت</label>
              <select
                name="priority"
                id="product-priority"
                defaultValue="-1"
                className="text-xs font-Dana text-catalan-800"
                onChange={sendTicketForm.handleChange}
              >
                <option value="-1">اولویت تیکت را مشخص کنید</option>
                <option value={1}>کم</option>
                <option value={2}>متوسط</option>
                <option value={3}>بالا</option>
              </select>
            </div>
          </div>
          <div className="custom-row">
            <label htmlFor="product-category">متن تیکت</label>
            <textarea
              id="product-image"
              className="text-catalan-800"
              placeholder="مشکل مورد نظر را به صورت واضح بنویسید. همکاران ما در اسرع وقت پاسخگوی شما هستند"
              cols={10}
              rows={5}
              name="body"
              value={sendTicketForm.values.body}
              onChange={sendTicketForm.handleChange}
              onBlur={sendTicketForm.handleBlur}
            />
            {sendTicketForm.errors.body && sendTicketForm.touched.body && (
              <span className="text-xs font-Dana text-rose-800">
                {sendTicketForm.errors.body}
              </span>
            )}
          </div>
          <button
            className="btn-form text-catalan-800 mt-2"
            type="submit"
            disabled={sendTicketForm.isSubmitting}
          >
            <span>
              {sendTicketForm.isSubmitting ? "درحال پردازش" : "ثبت تیکت"}
            </span>
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-left"
        rtl={true}
        theme="dark"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
}
