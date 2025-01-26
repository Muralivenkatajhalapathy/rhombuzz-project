import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css"

const Dashboard = () => {
  

  return (
    <div className="dashboard-container">
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
