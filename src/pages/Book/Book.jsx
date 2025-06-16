import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Book = () => {
  const bookData = useLoaderData();
  const { model, price, availability, features, imageUrl, description, _id } =
    bookData;

  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const timeDiff = e - s;
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
    return dayDiff > 0 ? dayDiff : 0;
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    const days = calculateDays(start, end);
    setTotalCost(days * price);
  };

  const handleBookingConfirm = () => {
    if (!startDate || !endDate || totalCost === 0) {
      alert("Please select valid dates");
      return;
    }

    const bookingInfo = {
      model,
      pricePerDay: price,
      startDate,
      endDate,
      totalCost,
      imageUrl,
      bookedAt: new Date().toISOString(),
      status: "confirmed",
    };

    axios
      .post("http://localhost:3000/bookingcar", bookingInfo)
      .then((res) => {
        const bookingId = res.data.insertedId || res.data._id;
        return axios
          .patch(`http://localhost:3000/cars/increase-booking/${_id}`)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Booking confirmed! Your ID: ${bookingId}`,
              showConfirmButton: true,
            });
            setShowModal(false);
          });
      })
      .catch((error) => {
        console.error(error);
        alert("Booking failed. Try again.");
      });
  };

  return (
    <>
      <div className="max-w-5xl mx-auto mt-10 card card-side bg-white rounded-2xl shadow-lg border">
        <figure className="w-1/2">
          <img
            src={imageUrl}
            alt={model}
            className="h-full w-full object-cover rounded-l-2xl"
          />
        </figure>
        <div className="card-body w-1/2 p-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{model}</h2>
          <h3 className="text-xl text-gray-700 font-semibold">
            Rent: <span className="text-[#f97316]">${price}/day</span>
          </h3>
          <div
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              availability === "available"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {availability === "available" ? "Available ✅" : "Not Available ❌"}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          <div className="card-actions justify-end pt-4">
            <button
              onClick={() => setShowModal(true)}
              className="btn bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-full shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-40 bg-black/40">
          <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-lg relative">
            <h3 className="text-xl font-bold mb-4">Confirm Your Booking</h3>
            <p className="text-sm text-gray-600 mb-4">
              You're about to book <strong>{model}</strong> at{" "}
              <strong>${price}/day</strong>
            </p>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  className="w-full border rounded px-3 py-2 mt-1"
                  value={startDate}
                  onChange={(e) => handleDateChange(e.target.value, endDate)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">End Date</label>
                <input
                  type="date"
                  className="w-full border rounded px-3 py-2 mt-1"
                  value={endDate}
                  onChange={(e) => handleDateChange(startDate, e.target.value)}
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Total Cost:{" "}
                <span className="text-[#22c55e]">
                  ${totalCost ? totalCost.toFixed(2) : "0.00"}
                </span>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-sm bg-gray-300 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleBookingConfirm}
                className="btn btn-sm bg-[#22c55e] text-white"
              >
                Confirm
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
