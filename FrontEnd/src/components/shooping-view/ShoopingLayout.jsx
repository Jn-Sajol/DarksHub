import React from "react";
import { Outlet } from "react-router-dom";
import ShoopingHeader from "./ShoopingHeader";

const ShoopingLayout = () => {
  return (
    <div className="flex flex-col bg-amber-50 overflow-hidden">
      {/* common componnet  */}
      <ShoopingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ShoopingLayout;
