import { NavLink, useNavigate } from "react-router";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } =useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Signed out successfully");
      navigate("/");
    });
  };

  // Common NavLink Styles
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5"
      : "hover:text-yellow-400 transition-colors duration-300";

  const links = (
    <>
      <li>
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/available">
          Available Cars
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink className={navLinkClass} to="/addcar">
              Add Car
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="/mycar">
              My Cars
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="/myBookingCar">
              My Booking
            </NavLink>
          </li>
          <li>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleSignOut}
              className="px-5 py-2.5 text-sm font-medium rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-lg transition"
            >
              Log Out
            </motion.button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#1F2937] text-white sticky top-0 z-50 px-8 shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 rounded-lg shadow bg-gray-800"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-14" src={logoImg} alt="CarZone Logo" />
          <h1 className="uppercase text-2xl font-bold tracking-wide">
            Car<span className="text-yellow-400">Zone</span>
          </h1>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <motion.img
            whileHover={{ scale: 1.1 }}
            className="h-12 w-12 rounded-full border-2 border-yellow-400 cursor-pointer"
            src={user.photoURL}
            alt="User Profile"
          />
        ) : (
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(251,191,36,0.7)",
            }}
            className="px-6 py-2 border-2 border-yellow-400 rounded-full font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            <NavLink to="/login">Login</NavLink>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
