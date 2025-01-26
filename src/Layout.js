import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faCalendarCheck, faComment, faGlobe, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./Components/Dashboard/Dashboard";

const Layout = () => {
  const navigate = useNavigate();

  //logout function writing here
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("authToken"); 
      navigate("/", { replace: true }); 
      window.history.pushState(null, "", window.location.href); 
      window.onpopstate = () => {
        navigate("/", { replace: true });
      };
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Management</h2>
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link">
              <FontAwesomeIcon icon={faGlobe} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">
              <FontAwesomeIcon icon={faGlobe} /> Portfolio
            </Link>
          </li>
          <li>
            <Link to="/patients" className="nav-link">
              <FontAwesomeIcon icon={faPerson} /> Patients
            </Link>
          </li>
          <li>
            <Link to="/appointments" className="nav-link">
              <FontAwesomeIcon icon={faCalendarCheck} /> Appointments
            </Link>
          </li>
          <li>
            <Link to="/communication" className="nav-link">
              <FontAwesomeIcon icon={faComment} /> Communication
            </Link>
          </li>
        </ul>

        
        <div className="logout-btn-container">
          <button className="logout-btn" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
