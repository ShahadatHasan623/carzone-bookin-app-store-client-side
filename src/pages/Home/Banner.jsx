import React from "react";
import "./Banner.css";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="banner flex flex-col items-center justify-center text-center space-y-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        Drive Your Dreams Today!
      </h1>
      <Link to='/available' className="btn bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300">
        View Available Cars
      </Link>
    </div>
  );
};

export default Banner;
