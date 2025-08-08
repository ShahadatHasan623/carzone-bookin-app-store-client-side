import axios from "axios";
import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const Book = () => {
  const bookData = useLoaderData();
  const { user } = useContext(AuthContext);
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
      Swal.fire({
        icon: "warning",
        title: "Invalid Dates",
        text: "Please select valid start and end dates.",
      });
      return;
    }

    const bookingInfo = {
      model,
      pricePerDay: price,
      carId: _id,
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
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <>
      <div className="min-h-[calc(100vh-8rem)] flex justify-center items-center lg:px-0 px-4 bg-gradient-to-br from-indigo-50 to-indigo-100 py-16">
        <div className="max-w-7xl w-full card card-side bg-white rounded-3xl shadow-2xl border border-indigo-200 overflow-hidden">
          <figure className="w-1/2">
            <img
              src={imageUrl}
              alt={model}
              className="h-full w-full object-cover rounded-l-3xl"
            />
          </figure>
          <div className="card-body w-1/2 p-10 space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-extrabold text-indigo-900">{model}</h2>
              <h3 className="text-2xl text-indigo-700 font-semibold mt-1">
                Rent: <span className="text-orange-500">${price}/day</span>
              </h3>

              <div
                className={`inline-block px-5 py-2 rounded-full text-sm font-medium mt-3 select-none ${
                  availability === "available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {availability === "available" ? "Available ✅" : "Not Available ❌"}
              </div>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">{description}</p>

              {/* Features */}
              <div className="mt-6">
                <h4 className="text-indigo-800 font-semibold mb-2">Features:</h4>
                <div className="flex flex-wrap gap-3">
                  {Array.isArray(features) && features.length > 0 ? (
                    features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-900 px-4 py-1 rounded-full text-sm shadow-sm"
                      >
                        {feature}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400 italic">No features listed</span>
                  )}
                </div>
              </div>
            </div>

            <div className="card-actions justify-end">
              <button
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] active:scale-95"
                aria-label="Book Now"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-5 text-indigo-900">
              Confirm Your Booking
            </h3>
            <p className="text-gray-700 mb-6">
              You're about to book <strong>{model}</strong> at{" "}
              <strong>${price}/day</strong>
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  Start Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-indigo-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={startDate}
                  onChange={(e) => handleDateChange(e.target.value, endDate)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  End Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-indigo-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={endDate}
                  onChange={(e) => handleDateChange(startDate, e.target.value)}
                />
              </div>
              <div className="text-lg font-semibold text-indigo-900">
                Total Cost:{" "}
                <span className="text-green-600">
                  ${totalCost ? totalCost.toFixed(2) : "0.00"}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                aria-label="Cancel booking"
              >
                Cancel
              </button>
              <button
                onClick={handleBookingConfirm}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-lg transition"
                aria-label="Confirm booking"
              >
                Confirm
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
