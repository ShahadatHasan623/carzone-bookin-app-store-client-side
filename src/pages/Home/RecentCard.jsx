import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaDollarSign } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const RecentCard = ({ recnt }) => {
  const { imageUrl, model, availability, createdAt, price } = recnt;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      className="card bg-[#fcebd2] w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-md shadow-lg rounded-xl overflow-hidden cursor-pointer flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <figure className="h-48 w-full overflow-hidden rounded-t-xl relative">
        <img
          src={imageUrl}
          alt={model}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
            availability === "Available"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {availability}
        </span>
      </figure>

      <div className="card-body p-5 flex flex-col justify-between flex-grow">
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
          <FaCar className="text-orange-500" /> {model}
        </h2>

        <h3 className="flex gap-2 items-center text-lg sm:text-xl font-medium text-orange-600 mb-2">
          <FaDollarSign size={20} /> <span>${price}</span>
        </h3>

        <div className="italic text-gray-600 flex items-center gap-2 text-sm sm:text-base">
          <IoTime className="text-orange-500" size={20} />
          <span>Added: {formattedDate}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentCard;
