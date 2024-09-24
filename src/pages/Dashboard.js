import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // Redirect back to the login page
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          backgroundColor: "#3b82f6", // blue background
          color: "white",
        }}
      >
        {/* Middle: Navigation Links */}
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Home
          </a>
          <a
            href="/employee-list"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Employee List
          </a>
        </div>

        {/* Admin name and logout button */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>Vicky Kumar</div>
          <button
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          padding: "24px",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "480px",
          margin: "40px auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <span>Employee Dashboard</span> {/* Corrected text here */}
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
