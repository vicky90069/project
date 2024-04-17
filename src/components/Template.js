import React from "react";
import frame from "../assets/frame.png";
// import login from '../pages/Login';
import { FcGoogle } from "react-icons/fc";

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="  text-white flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="">
        <h1 className="text-richblack-5 font-semibold text-[1.85rem] leading-[2-373rem]">
          {title}
        </h1>
        <p className="text-white text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br></br>
          <spen className="text-blue-100 italic">{desc2}</spen>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] bg-richblack-700 w-full"></div>
          <p className="text-richblack-700 font-medium leading[1.75rem] ">OR</p>
          <div className="h-[1px] bg-richblack-700 w-full"></div>
        </div>

        <button className="w-full flex justify-center rounded[8px] font-medium text-reichblack-100 border border-richblack-700 pc-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle className=" mt-1"/>
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w[450px]">
        <img src={frame} 
        alt="frame" 
        width={400} 
        height={400} 
        loading="lazy"
        className="absolute -right-4 "
        />

        <img src={image}
          alt="student"
          width={400}
          height={400}
          loading="lazy"
          className="absolute -top-3 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
