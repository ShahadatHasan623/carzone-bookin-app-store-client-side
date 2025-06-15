import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCar = () => {

  const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const car = Object.fromEntries(formData.entries());
    car.bookingCount = Number(car.bookingCount) || 0;
    axios
      .post("http://localhost:3000/cars", car)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Mongodb data has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[#F9FAFB] p-8 sm:p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Add New Car
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Car Model
            </label>
            <input
              type="text"
              name="model"
              className="input input-bordered w-full"
              placeholder="e.g., Toyota Corolla"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Daily Rental Price
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full"
              placeholder="e.g., 50"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Availability
            </label>
            <select name="availability" className="select select-bordered w-full">
              <option value="available">Available</option>
              <option value="not available">Not Available</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              name="registrationNumber"
              className="input input-bordered w-full"
              placeholder="e.g., DHA 1234"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Features
            </label>
            <input
              type="text"
              name="features"
              className="input input-bordered w-full"
              placeholder="e.g., GPS, AC, Auto"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Write a short description..."
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Booking Count
            </label>
            <input
              type="number"
              name="bookingCount"
              defaultValue="0"
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              className="input input-bordered w-full"
              placeholder="e.g., https://example.com/car.jpg"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              placeholder="e.g., Dhaka, Bangladesh"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 hover:scale-[1.02] transition-transform duration-300"
          >
            Submit Car Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
