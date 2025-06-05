import React from "react";
import { NavLink } from "react-router";
import loginLottie from "../../../public/login.json";
import Lottie from "lottie-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-10 gap-10 rounded-2xl">
      <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">CarZone Login</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
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
