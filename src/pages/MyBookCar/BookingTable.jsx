import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const BookingTable = ({ book, reload, setReload }) => {
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
    if (new Date(editStartDate) >= new Date(editEndDate)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Date Range",
        text: "Start date must be before end date.",
      });
      return;
    }
    axios
      .patch(`https://cars-server-side.vercel.app/bookingcar/update/${_id}`, {
        startDate: editStartDate,
        endDate: editEndDate,
      })
      .then(() => {
        setShowModal(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Booking dates updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setReload(!reload);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Please try again later.",
        });
      });
  };

  const handleCancel = (id) => {
    Swal.fire({
      title: "Do you want to cancel the booking?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://cars-server-side.vercel.app/bookingcar/cancel/${id}`,
            {
              status: "cancelled",
            }
          )
          .then(() => {
            setReload(!reload);
            Swal.fire("Booking Cancelled!", "", "success");
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Cancellation Failed", "Please try again later", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("No changes were made", "", "info");
      }
    });
  };

  return (
    <>
      <tr className="hover:bg-indigo-50 transition-all duration-300">
        <td className="px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14 ring ring-indigo-500 ring-offset-base-100 ring-offset-2">
                <img src={imageUrl} alt={`${model} image`} />
              </div>
            </div>
          </div>
        </td>

        <td className="px-4 py-4 text-gray-900 font-semibold">{model}</td>

        <td className="px-4 py-4 text-sm text-gray-600">
          {bookedAt?.slice(0, 10)}
        </td>

        <td className="px-4 py-4 text-sm text-gray-600">
          {new Date(startDate).toLocaleString()}
        </td>
        <td className="px-4 py-4 text-sm text-gray-600">
          {new Date(endDate).toLocaleString()}
        </td>

        <td className="px-4 py-4 text-green-700 font-semibold">${totalCost}</td>

        <td className="px-4 py-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase select-none ${
              status === "confirmed"
                ? "bg-green-100 text-green-800"
                : status === "cancelled"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {status}
          </span>
        </td>

        <td className="px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-2">
            <button
              onClick={() => setShowModal(true)}
              aria-label={`Edit booking dates for ${model}`}
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              <FaEdit size={20} />
            </button>
            <button
              onClick={() => handleCancel(_id)}
              aria-label={`Cancel booking for ${model}`}
              className="btn bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
            >
              Cancel
            </button>
          </div>
        </td>
      </tr>

      {/* Modal for editing booking dates */}
      {showModal && (
        <div
          className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="update-booking-title"
        >
          <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
            <h3
              id="update-booking-title"
              className="text-2xl font-bold mb-6 text-indigo-900"
            >
              Update Booking Dates
            </h3>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="edit-start-date"
                  className="block text-sm font-medium text-indigo-800 mb-1"
                >
                  Start Date & Time
                </label>
                <input
                  id="edit-start-date"
                  type="datetime-local"
                  className="w-full border border-indigo-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={editStartDate}
                  onChange={(e) => setEditStartDate(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="edit-end-date"
                  className="block text-sm font-medium text-indigo-800 mb-1"
                >
                  End Date & Time
                </label>
                <input
                  id="edit-end-date"
                  type="datetime-local"
                  className="w-full border border-indigo-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={editEndDate}
                  onChange={(e) => setEditEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUpdate}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Confirm
              </button>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close update booking modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingTable;
