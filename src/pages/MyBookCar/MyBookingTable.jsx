import React from "react";
import BookingTable from "./BookingTable";

const MyBookingTable = ({ booking, reload, setReload }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">
      <table className="table-auto w-full text-sm text-gray-700">
        <thead className="bg-indigo-100 text-indigo-900 uppercase text-xs font-semibold border-b border-indigo-300">
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

        <tbody className="divide-y divide-indigo-200">
          {booking.map((book) => (
            <BookingTable
              setReload={setReload}
              reload={reload}
              key={book._id}
              book={book}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingTable;
