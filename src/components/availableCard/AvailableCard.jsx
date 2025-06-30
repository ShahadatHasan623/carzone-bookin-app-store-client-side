import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { FaCar, FaCheck, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const AvailableCard = ({ carsData, isGridView }) => {
  const {
    imageUrl,
    model,
    description,
    registrationNumber,
    location,
    price,
    availability,
    _id,
    bookingCount,
  } = carsData;

  return (
    <div
      className={`grid bg-[#fcebd2] rounded-xl overflow-hidden shadow-md transition-all duration-300
      ${
        isGridView
          ? "grid-rows-[auto_1fr_auto]"
          : "grid-cols-1 sm:grid-cols-[1fr_2fr] items-start sm:min-h-52"
      }`}
    >
      {/* Image Section */}
      <div className={`${isGridView ? "h-48" : "h-full w-full"}`}>
        <img
          src={imageUrl}
          alt={model}
          className={`w-full h-full object-cover ${
            isGridView ? "" : "sm:rounded-l-xl"
          }`}
        />
      </div>

      <div className="p-6 flex flex-col justify-between gap-2 overflow-hidden">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-800">{model}</h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-3 break-words">
            {description}
          </p>
          <p className="text-sm text-gray-700 break-all">
            <strong>Reg:</strong> {registrationNumber}
          </p>
          <h1 className="flex items-center gap-1 text-sm">
            <FaLocationDot className="text-[#e85e1a]" size={18} />
            <span>{location}</span>
          </h1>
          <p className="text-sm break-words flex items-center gap-1">
            <FaCheck className="text-green-700" />{" "}
            <span className="whitespace-pre-line">{availability}</span>
          </p>
          <p className="flex items-center gap-1">
            <FaCar className="text-primary" size={20}/> <span>bookingcount:{bookingCount}</span>
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <p className="text-lg font-semibold text-primary flex items-center gap-1">
            <FiDollarSign className="text-[#e85e1a]" size={20} />
            <span>${price}/day</span>
          </p>
          <Link to={`/book/${_id}`} className="btn btn-sm btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCard;
