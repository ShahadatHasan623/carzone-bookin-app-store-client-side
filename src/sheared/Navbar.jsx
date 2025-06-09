import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import logoImg from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user,signOutUser}=use(AuthContext)
  const [open, setOpen] = useState(false);
  const handleSignOut =()=>{
    signOutUser()
    .then(()=>{
      toast.success("Sign Out SuccessFully")
    })
  }
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-lime-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:outline-none shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              : ""
          }
          to="available"
        >
          Available Cars
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#1F2937] shadow-sm text-[#FFFFFF]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <img className="h-20" src={logoImg} alt="" />
          <div>
            <h1 className="uppercase flex items-center gap-1 text-2xl font-bold">
              car<span className="text-[#FBBF24]">zone</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="relative inline-block text-left">
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
              <img
                className="w-12 h-12 rounded-full hover:border-3 hover:border-[#FBBF24]"
                src={user?.photoURL}
                alt="Profile"
              />
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-88  rounded-lg shadow-lg bg-white z-50">
                <div className="px-4 py-3 border-b flex flex-col items-center justify-center z-10">
                  <p className="font-medium text-gray-800">
                    {user.displayName}
                  </p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <div className="p-2">
                  <button onClick={handleSignOut}
                    className="w-full px-4 py-2 btn bg-gray-300 text-sm text-red-600 hover:bg-gray-100 rounded"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(251,191,36)",
              }}
              className="px-8 py-2 rounded-4xl border-2 font-semibold border-[#FBBF24]"
            >
              <NavLink to="/login">Login</NavLink>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
