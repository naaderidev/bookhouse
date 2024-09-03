import React from "react";

export default function DashCard({ title, count, icon }) {
  return (
    <div className="flex flex-col gap-x-2 gap-y-4  w-fit min-w-40 bg-catalan-400 text-brown-100 p-2 rounded-lg">
      <h3 className="text-3xl font-DanaDemiBold">{count}</h3>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-MorabbaMedium">{title}</h4>
        {icon}
      </div>
    </div>
  );
}
