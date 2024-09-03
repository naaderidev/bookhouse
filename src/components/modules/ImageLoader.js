import React from "react";

export default function ImageLoader({style}) {
  return (
    <div
      className={`border border-catalan-400 shadow rounded-md p-4 w-full mx-auto ${style}`}
    >
      <div className="animate-pulse flex flex-col gap-4">
        <div className="rounded-full bg-catalan-400 h-10 w-10"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-2 bg-catalan-400 rounded"></div>
          <div className="h-2 bg-catalan-400 rounded"></div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-catalan-400 rounded col-span-2"></div>
              <div className="h-2 bg-catalan-400 rounded col-span-2"></div>
              <div className="h-2 bg-catalan-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-catalan-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
