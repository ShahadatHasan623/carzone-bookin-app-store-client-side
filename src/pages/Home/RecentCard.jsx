import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaCalendarCheck } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const RecentCard = ({ recnt }) => {
  const { imageUrl, model, availability, createdAt,price } = recnt;

  // createdAt থেকে readable date বানানো
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      className="card bg-[#fcebd2] w-full max-w-xs shadow-lg rounded-xl overflow-hidden cursor-pointer flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <figure className="h-44 w-full overflow-hidden rounded-t-xl relative">
        <img
          src={imageUrl}
          alt={model}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
        />
        {/* Availability Badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            availability === "Available"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {availability}
        </span>
      </figure>

      <div className="card-body p-4 flex flex-col justify-between flex-grow">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
          <FaCar className="text-orange-500" /> {model}
        </h2>
        <h2 className="flex gap-1 items-center"><FaDollarSign className="text-orange-500" size={20}/><span>{price}</span></h2>
        <div className="italic text-gray-500 flex items-center gap-1"><IoTime className="text-orange-500" size={20} /><span>Added: {formattedDate}</span></div>
    
      </div>
    </motion.div>
  );
};

export default RecentCard;
