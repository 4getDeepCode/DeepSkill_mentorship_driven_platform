import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
