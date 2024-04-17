import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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

  function sumbitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={sumbitHandler}>
      <label >
        <p className="text-richblack-5 mb-1 leading-[1.37rem] text-[0.875] mt-2">
          Email Address <sup className="text-red-400">*</sup>
        </p>
        <input
          required
          type="emial"
          value={formData.email}
          onChange={changeHandler}
          name="email"
          placeholder="Enter email id"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[350px] p-[10px]"
        />
      </label>
      <label className="w-full relative ">
        <p className="text-richblack-5 mb-1 leading-[1.37rem] text-[0.875] mt-2">
          Password <sup className="text-red-400">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          name="password"
          placeholder="Enter Password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[350px] p-[10px]"
        />

        <span
          className=" absolute right-3 top-[73px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-blue-100 max-w-max ml-auto m-1 ">
            Forgot Password
          </p>
        </Link>
      </label>

      <br />

      <button className="text-black w-full font-bold rounded-[10px] p-[8px] bg-yellow-50">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
