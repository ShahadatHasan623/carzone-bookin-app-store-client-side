import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import logoImg from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate =useNavigate()
  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Sign Out SuccessFully");
      navigate('/')
    });
  };
  const links = (
    <>
      <li className="text-amber-600">
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
      <li className="text-amber-600">
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
      {user && (
        <>
          <li className="text-amber-600">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:outline-none shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  : ""
              }
              to="addcar"
            >
              Add Car
            </NavLink>
          </li>
          <li className="text-amber-600">
            <NavLink
              to="/mycar"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:outline-none shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  : ""
              }
            >
              My Cars
            </NavLink>
          </li>
          <li className="text-amber-600">
            <NavLink
              to="/myBookingCar"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:outline-none shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  : ""
              }
            >
              My Booking
            </NavLink>
          </li>
          <li className="text-amber-600">
            <button onClick={handleSignOut} className="hover:btn">
              LogOut
            </button>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#1F2937] shadow-sm text-[#FFFFFF] sticky top-0 z-50 px-6">
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
          <img className="h-16" src={logoImg} alt="" />
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
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src={user.photoURL}
              alt="User Profile"
            />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
