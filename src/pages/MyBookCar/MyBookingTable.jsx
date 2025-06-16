import React from "react";
import BookingTable from "./BookingTable";

const MyBookingTable = ({ booking }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg mt-10">
      <table className="table-auto w-full text-sm text-left text-gray-700">
        {/* Table Header */}
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs border-b">
          <tr>
            <th className="px-6 py-4">Car Image</th>
            <th className="px-6 py-4">Car Model</th>
            <th className="px-6 py-4">Booking Date</th>
            <th className="px-6 py-4">Start Date</th>
            <th className="px-6 py-4">End Date</th>
            <th className="px-6 py-4">Total Price</th>
            <th className="px-6 py-4">Booking Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {booking.map((book) => (
            <BookingTable key={book._id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingTable;
