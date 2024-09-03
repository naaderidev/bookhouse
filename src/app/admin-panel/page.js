import React from "react";
import connectToDB from "@/configs/db";
import todoModel from "@/models/Todo";
import MiniTopbar from "@/components/modules/MiniTopbar";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import TodoList from "@/components/templates/admin-panel/dashboard/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const todos = await todoModel.find({}).sort({ _id: -1 }).lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="دفتر برنامه ریزی روزانه"
            btn="در یک نگاه"
            link="/admin-panel/overview"
            icon={<HiOutlineSquares2X2 className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4 relative">
          <TodoList todos={JSON.parse(JSON.stringify(todos))} />
        </div>
      </div>
      <ToastContainer position="bottom-left" rtl={true} theme="dark" />
    </AdminPanelLayout>
  );
}
