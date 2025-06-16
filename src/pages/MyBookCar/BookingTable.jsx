import React from "react";
import { FaEdit } from "react-icons/fa";

const BookingTable = ({ book }) => {
  const { imageUrl, model, bookedAt, totalCost, endDate, startDate, status } =
    book;
  return (
    <tr className="hover:bg-gray-50 transition-all">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={imageUrl} alt="Car Image" />
            </div>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-gray-800 font-medium">{model}</td>

      <td className="px-4 py-4 text-sm text-gray-500">
        {bookedAt?.slice(0, 10)}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500">{startDate}</td>
      <td className="px-4 py-4 text-sm text-gray-500">{endDate}</td>

      <td className="px-4 py-4 text-green-600 font-semibold">${totalCost}</td>

      <td className="px-4 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
            status === "confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-4 py-4">
        <div className="join join-vertical lg:join-horizontal gap-2">
          <button className="btn  bg-blue-500 hover:bg-blue-600 text-white">
            <FaEdit size={20} />
          </button>
          <button className="btn  bg-red-500 hover:bg-red-600 text-white">
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BookingTable;
