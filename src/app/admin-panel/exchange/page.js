import React from "react";
import connectToDB from "@/configs/db";
import MiniTopbar from "@/components/modules/MiniTopbar";
import applicantExchangeModel from "@/models/ApplicantExchange";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import ExchangeList from "@/components/templates/admin-panel/exchange/ExchangeList";
import { HiOutlineHome } from "react-icons/hi2";

export default async function page() {
  connectToDB();
  const exchangeList = await applicantExchangeModel.find({}).lean();
  return (
    <AdminPanelLayout>
      <div className="container">
        <div className="flex-center my-6">
          <MiniTopbar
            title="درخواست های مبادله"
            btn="خانه"
            link="/"
            icon={<HiOutlineHome className="icon-sm" />}
          />
        </div>
        <div className="flex-center flex-wrap gap-4 p-4">
          <ExchangeList
            exchangeList={JSON.parse(JSON.stringify(exchangeList))}
          />
        </div>
      </div>
    </AdminPanelLayout>
  );
}
