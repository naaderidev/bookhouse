import React from "react";
import { redirect } from "next/navigation";
import Topbar from "@/components/modules/Topbar";
import Sidebar from "@/components/modules/user-panel/Sidebar";
import { authUser } from "@/utils/authentication/serverHelpers";

export default async function UserPanelLayout({ children }) {
  const user = await authUser();
  if (!user) {
    return redirect("/login-register");
  } else {
    if (user.role !== "USER") {
      return redirect("/");
    }
  }
  return (
    <div className="grid grid-cols-6 bg-brown-100">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Topbar
          name={user.name}
          phone={user.phone}
          email={user.email}
          role={user.role}
        />
        {children}
      </div>
    </div>
  );
}
