import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import Layout from "./Layout";  // Import the layout component
import DashboardContent from "./Components/Dashboard/DashboardContent";
import Portfolio from "./Components/Portfolio/Portfolio";
import Patients from "./Components/Patients";
import Appointments from "./Components/Appointments";
import Communication from "./Components/Communication";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route element={<Layout />}>
        
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/communication" element={<Communication />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
