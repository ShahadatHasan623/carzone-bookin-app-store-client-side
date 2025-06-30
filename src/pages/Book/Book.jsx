import axios from "axios";
import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const Book = () => {
  const bookData = useLoaderData();
  const { user } = use(AuthContext);
  const { model, price, availability, features, imageUrl, description, _id } =
    bookData;

  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const timeDiff = e.getTime() - s.getTime();
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
    return dayDiff > 0 ? Math.ceil(dayDiff) : 0;
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
      carId: _id, // Track which car was booked
      startDate,
      endDate,
      totalCost,
      imageUrl,
      bookedAt: new Date().toISOString(),
      status: "confirmed",
      userEmail: user?.email || "unknown",
    };

    axios
      .post("https://cars-server-side.vercel.app/bookingcar", bookingInfo)
      .then((res) => {
        const bookingId = res.data.insertedId || res.data._id;
        return axios
          .patch(
            `https://cars-server-side.vercel.app/cars/increase-booking/${_id}`
          )
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
      <div className="min-h-[calc(100vh-8rem)] flex justify-center items-center lg:px-0 px-4">
        <div className="max-w-7xl w-full card card-side bg-white rounded-2xl shadow-lg border overflow-hidden">
          <figure className="w-1/2">
            <img
              src={imageUrl}
              alt={model}
              className="h-full w-full object-cover"
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
              {availability === "available"
                ? "Available ✅"
                : "Not Available ❌"}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">
                Features:
              </h4>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(features) && features.length > 0 ? (
                  features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700"
                    >
                      {feature}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 italic">
                    No features listed
                  </span>
                )}
              </div>
            </div>

            <div className="card-actions justify-end pt-4">
              <button
                onClick={() => setShowModal(true)}
                className="btn bg-primary hover:bg-[#ea580c] text-white px-6 py-2 rounded-full shadow-md"
              >
                Book Now
              </button>
            </div>
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
                <label className="text-sm font-medium">Start Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full border rounded px-3 py-2 mt-1"
                  value={startDate}
                  onChange={(e) => handleDateChange(e.target.value, endDate)}
                />
              </div>
              <div>
                <label className="text-sm font-medium">End Date & Time</label>
                <input
                  type="datetime-local"
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
