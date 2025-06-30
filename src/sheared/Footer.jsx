import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png"
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src={logo} 
              alt="DriveNow Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold uppercase">
                Car<span className="text-orange-500">zone</span>
            </span>
          </div>
          <p className="text-sm">
            Smooth & Reliable Car Rentals. <br />
            Trusted Since 2010.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/myBookingCar" className="hover:underline">Car Booking</NavLink></li>
            <li><a className="hover:underline" href="#">Corporate Rentals</a></li>
            <li><a className="hover:underline" href="#">Long Term</a></li>
            <li><a className="hover:underline" href="#">24/7 Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">About Us</a></li>
            <li><a className="hover:underline" href="#">Contact</a></li>
            <li><a className="hover:underline" href="#">Careers</a></li>
            <li><a className="hover:underline" href="#">Blog</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} DriveNow Car Rentals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
