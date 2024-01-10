import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/Admin/Menu/SideMenu";

const AdminDashPage = () => {
  return (
    <div className="flex p-3">
      <SideMenu />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashPage;
