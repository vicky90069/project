import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        padding: "24px",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <form onSubmit={submitHandler} style={{ spaceBetween: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "8px" }}>
            <p style={{ color: "#374151", marginBottom: "4px" }}>
              User Name <sup style={{ color: "red" }}>*</sup>
            </p>
            <input
              required
              type="email"
              value={formData.email}
              onChange={changeHandler}
              name="email"
              placeholder="Enter email id"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <label style={{ marginBottom: "8px" }}>
            <p style={{ color: "#374151", marginBottom: "4px" }}>
              Password <sup style={{ color: "red" }}>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              name="password"
              placeholder="Enter Password"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            />
            {/* Uncomment and add icon for password visibility toggle if needed */}
            {/* <div style={{ position: 'absolute', top: '50%', right: '12px', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div> */}
          </label>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#3b82f6",
            color: "white",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
