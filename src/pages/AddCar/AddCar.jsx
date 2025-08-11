import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const car = Object.fromEntries(formData.entries());
    car.bookingCount = Number(car.bookingCount) || 0;
    car.features = car.features ? car.features.split(",").map((req) => req.trim()) : [];

    axios
      .post("https://cars-server-side.vercel.app/cars", car)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your MongoDB data has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  return (
    <div className="w-full lg:px-0 px-4 py-16 md:px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-12 select-none drop-shadow-md">
          Add New Car
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
          autoComplete="off"
        >
          {/* Left Column */}
          <div>
            <label className="block text-indigo-800 font-semibold mb-2">
              Car Model <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="model"
              className="input input-bordered w-full text-lg rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              placeholder="e.g., Toyota Corolla"
              required
            />
          </div>

          <div>
            <label className="block text-indigo-800 font-semibold mb-2">
              Daily Rental Price ($) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full text-lg rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              placeholder="e.g., 50"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-indigo-800 font-semibold mb-2">
              Availability <span className="text-red-500">*</span>
            </label>
            <select
              name="availability"
              className="select select-bordered w-full rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              required
              defaultValue="available"
            >
              <option value="available">Available</option>
              <option value="not available">Not Available</option>
            </select>
          </div>

          <div>
            <label className="block text-indigo-800 font-semibold mb-2">
              Vehicle Registration Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="registrationNumber"
              className="input input-bordered w-full text-lg rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              placeholder="e.g., DHA 1234"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-indigo-800 font-semibold mb-2">
              Features (comma separated)
            </label>
            <input
              type="text"
              name="features"
              className="input input-bordered w-full text-lg rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              placeholder="e.g., GPS, AC, Auto"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-indigo-800 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="textarea textarea-bordered w-full text-lg rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              placeholder="Write a short description..."
            />
          </div>

          <div>
            <label className="block text-indigo-800 font-semibold mb-2">
              Booking Count
            </label>
            <input
              type="number"
              name="bookingCount"
              defaultValue="0"
              readOnly
              className="input input-bordered w-full bg-indigo-100 cursor-not-allowed rounded-xl border-indigo-300 text-lg"
            />
          </div>

          <div>
            <label className="block text-indigo-800 font-semibold mb-2">
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="imageUrl"
              className="input input-bordered w-full text-lg rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              placeholder="https://example.com/car.jpg"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-indigo-800 font-semibold mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full text-lg rounded-xl border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 shadow-sm"
              placeholder="e.g., Dhaka, Bangladesh"
              required
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn btn-primary w-full py-4 rounded-2xl text-lg font-semibold tracking-wide shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              Submit Car Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
