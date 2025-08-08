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
      className="card w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-md rounded-2xl overflow-hidden cursor-pointer flex flex-col shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(169, 55, 225, 0.5)" }}
      style={{ backgroundColor: "var(--background)" }}
    >
      <figure className="h-52 w-full overflow-hidden rounded-t-2xl relative">
        <img
          src={imageUrl}
          alt={model}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
        />
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md select-none ${
            availability === "Available"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {availability}
        </span>
      </figure>

      <div className="card-body p-6 flex flex-col justify-between flex-grow">
        <h2
          className="flex items-center gap-3 text-2xl font-bold mb-3 select-none"
          style={{ color: "var(--primary)" }}
        >
          <FaCar className="text-secondary" /> {model}
        </h2>

        <h3
          className="flex gap-2 items-center text-xl font-semibold mb-3 select-none"
          style={{ color: "var(--secondary)" }}
        >
          <FaDollarSign size={22} /> <span>${price}</span>
        </h3>

        <div
          className="italic flex items-center gap-2 text-base select-none"
          style={{ color: "var(--text)" }}
        >
          <IoTime className="text-accent" size={22} />
          <span>Added: {formattedDate}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentCard;
