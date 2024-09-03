import React from "react";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import DashboardCards from "@/components/modules/DashboardCards";

export default async function page() {
  return (
    <UserPanelLayout>
      <div className="container">
        <DashboardCards />
      </div>
    </UserPanelLayout>
  );
}
