import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg';
import {toast} from "react-hot-toast";


const Navbar = (props) => { 
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return (
        <div className="flex  justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex gap-5  font-semibold text-richblack-100">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="About">About</Link>
                    </li>

                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login--Signup--Logout */}
            <div className="flex ml-5 mr-5 gap-3  font-semibold text-richblack-100  items-center">
                {!isLoggedIn &&
                    <Link to="/Login">
                        <button className="bg-richbalck-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Login
                        </button>
                    </Link>
                }

                {!isLoggedIn &&
                    <Link to="/Signup">
                        <button className="bg-richbalck-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" >
                            Sign up
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="login">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");

                        }} className="bg-richbalck-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Log Out
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richbalck-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Dashboard
                        
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
