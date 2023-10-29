import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-dark-grey transition-colors ease-in-out">
      <Header />
      <div className="w-full h-full pt-[60px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
