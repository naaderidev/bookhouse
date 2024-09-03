import React from "react";
import Sidebar from "@/components/modules/admin-panel/Sidebar";
import Topbar from "@/components/modules/Topbar";
import { authUser } from "@/utils/authentication/serverHelpers";
import { redirect } from "next/navigation";

export default async function AdminPanelLayout({ children }) {
  const user = await authUser();
  if (!user) {
    return redirect("/login-register");
  } else {
    if (user.role !== "ADMIN") {
      return redirect("/login-register");
    }
  }

  return (
    <div className="grid grid-cols-6 bg-brown-100">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Topbar name={user.name} phone={user.phone} email={user.email} />
        {children}
      </div>
    </div>
  );
}
