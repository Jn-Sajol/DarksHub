import React from "react";
import { Outlet } from "react-router-dom";

const Authlayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-blue-400 px-12">
        <div className="max-w-md space-y-6 text-center text-primary">
          <h1 className="text-8xl">welcome to ecommerce </h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-full bg-amber-100 px-4 sm:px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
