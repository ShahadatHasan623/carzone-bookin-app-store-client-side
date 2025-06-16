import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const BookingTable = ({ book }) => {
  const {
    imageUrl,
    model,
    bookedAt,
    totalCost,
    endDate,
    startDate,
    status,
    _id,
  } = book;

  const [showModal, setShowModal] = useState(false);
  const [editStartDate, setEditStartDate] = useState(startDate);
  const [editEndDate, setEditEndDate] = useState(endDate);

  const handleConfirmUpdate = () => {
    axios
      .patch(`http://localhost:3000/bookingcar/update/${_id}`, {
        startDate: editStartDate,
        endDate: editEndDate,
      })
      .then(() => {
        setShowModal(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update date time successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Update Failed");
      });
  };

  return (
    <>
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

        <td className="px-4 py-4 text-sm text-gray-500">
          {new Date(startDate).toLocaleString()}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500">
          {new Date(endDate).toLocaleString()}
        </td>

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
            <button
              onClick={() => setShowModal(true)}
              className="btn bg-blue-500 hover:bg-blue-600 text-white"
            >
              <FaEdit size={20} />
            </button>
            <button className="btn bg-red-500 hover:bg-red-600 text-white">
              Cancel
            </button>
          </div>
        </td>
      </tr>

      {/* Modal for editing booking dates */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
            <h3 className="text-lg font-bold mb-4">Update Booking</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="datetime-local"
                  className="w-full px-3 py-2 border rounded"
                  value={editStartDate}
                  onChange={(e) => setEditStartDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="datetime-local"
                  className="w-full px-3 py-2 border rounded"
                  value={editEndDate}
                  onChange={(e) => setEditEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-sm bg-gray-300 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUpdate}
                className="btn btn-sm bg-green-500 text-white"
              >
                Confirm
              </button>
            </div>
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingTable;
