import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const [showPassword, setShowPassword] = useState(false);
  const [ShowPassword, SetShowPassword] = useState(false);
  const [accountType,setAccountType]=useState("student");

  function sumbitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Accout Created");
    const accountData = {
      ...formData,
    };

    console.log("printing");
    console.log(accountData);

    navigate("/login");
  }

  return (
    <div >
      <div className="flex bg-richblack-800 rounded-full w-[200px] p-1 gap-x-2 mt-2 ">
        <button 
        className={`${accountType==="student" ?
      "bg-richblack-900 text-richblack-5 rounded-full pr-5 pl-4"
      :
      "bg-transparnet text-richblack-200 py-2 px-5 p-2 ml-2 pl-2 rounded-full transition-all duration-200"}`}
        onClick={()=>setAccountType("student")}>
          Student
          </button>
        <button
        className={`${accountType==="instructor" ?
      "bg-richblack-900 text-richblack-5 rounded-full pr-3 pl-3"
    :
  "bg-transparnet text-richblack-200 py-2 px-5 p-2 ml-2 pl-2 rounded-full transition-all duration-200"}`}
   
         onClick={()=>setAccountType("instructor")}>
          Instructor
          </button>
      </div>

      <form onSubmit={sumbitHandler}>
        {/* {-------/* First Name & Last name---------- */}
        <div className="flex gap-x-4 ">
          <label>
            <p className="text-richblack-5 mb-1 leading-[1 rem] text-[0.875] mt-4">
              First Name <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="First Name"
              value={formData.firstname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[200px] p-[10px]"
            />
          </label>

          <label>
            <p className="text-richblack-5 mb-1 leading-[1 rem] text-[0.875] mt-4">
              
              Last Name <sup  className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Last Name"
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[200px] p-[10px] "
            />
          </label>
        </div>

        {/* ---------Emial--------- */}
        <label>
          <p className="text-richblack-5 mb-1 leading-[1.37rem] text-[0.875] mt-3">
            Email Address <sup className="text-red-400">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder=" Enter Email Address"
            value={formData.email}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[350px] p-[10px]"
          />
        </label>

        {/* ------------password-------------- */}
        <div className="flex gap-x-4 mt-3">
          <label className="relative ">
            <p className="text-richblack-5 mb-1 leading-[1.37rem] text-[0.875]">
              Creat Password <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder=" Create Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[200px] p-[10px]"
            />
            <span className=" absolute right-3 top-[40px] cursor-pointer"
             onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label className="relative">
            <p className="text-richblack-5 mb-1 leading-[1.37rem] text-[0.875]">
              Confirm Password <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type={ShowPassword ? "text" : "password"}
              name="confirmpassword"
              onChange={changeHandler}
              placeholder=" Confirm Password"
              value={formData.confirmpassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[200px] p-[10px]"
            />
            <span className="absolute  cursor-pointer top-[40px] right-3"
            onClick={() => SetShowPassword((prev) => !prev)}>
              {ShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
</div>
 <div>
 <button className="text-black w-[400px] font-bold rounded-[8px] p-[8px] bg-yellow-50 mt-5" >Create Accout</button>
 </div>
      </form>
    </div>
  );
};

export default SignupForm;
