import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../Assets/CompanyLogo.png";
import "./LoginPage.css"

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (credentials.username === "ADMIN" && credentials.password === "ADMIN!@#$") {
      navigate("/dashboard"); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      
      <div className="left-panel">
        <img src={CompanyLogo} alt="Company Logo" className="logo" />
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2 className="text-center">Login Page</h2>
          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
