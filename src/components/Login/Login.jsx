import React, { use, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import loginLottie from "../../../public/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {CreateSignIn}=use(AuthContext)
  const navigate =useNavigate();
  const location =useLocation();
  const [showpassword,setShowPassword]=useState(false)
  const handleSignIn =e=>{
    e.preventDefault();
    const form =e.target;
    const email =form.email.value;
    const password =form.password.value;
    CreateSignIn(email,password)
    .then(result=>{
      console.log(result.user)
      toast.success("signIn Successfully")
      navigate(`${location.state?location.state:'/'}`)
    })
    .then(error=>{
      console.log(error.message)
    })
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-10 gap-10 rounded-2xl">
      <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">CarZone Login</h2>

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showpassword ?'text':'password'}
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <div>
              <button type="button" onClick={()=>setShowPassword(!showpassword)} className="absolute right-5 top-9 text-black">
                {showpassword ? <FaEye size={20}></FaEye>:<FaEyeSlash size={20}></FaEyeSlash>}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 text-amber-500 focus:ring-amber-500"
              />
              Remember me
            </label>
            <a href="#" className="text-amber-400 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-amber-400 hover:underline">Sign up</NavLink>
        </p>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Lottie animationData={loginLottie} loop={true} />
      </div>
    </div>
  );
};

export default Login;
