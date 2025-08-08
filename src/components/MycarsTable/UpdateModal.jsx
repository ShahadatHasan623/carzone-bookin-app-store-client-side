import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateModal = ({ carId, closeModal }) => {
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    axios.get(`https://cars-server-side.vercel.app/cars/${carId}`).then((res) => {
      setCarData(res.data);
    });
  }, [carId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCar = {
      model: form.model.value,
      price: Number(form.price.value),
      availability: form.availability.value,
      registrationNumber: form.registrationNumber.value,
      features: form.features.value,
      description: form.description.value,
      imageUrl: form.imageUrl.value,
      location: form.location.value,
    };

    axios
      .put(`https://cars-server-side.vercel.app/cars/${carId}`, updatedCar)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        closeModal();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update failed. Please try again.",
        });
      });
  };

  if (!carData) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(41,32,118,0.7)] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full p-8 shadow-xl overflow-auto max-h-[90vh]">
        <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">Update Car</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label htmlFor="model" className="mb-1 font-semibold text-[var(--text)]">
              Model
            </label>
            <input
              id="model"
              name="model"
              defaultValue={carData.model}
              className="input input-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1 font-semibold text-[var(--text)]">
              Price (per day)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              defaultValue={carData.price}
              className="input input-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)]"
              min={0}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="availability" className="mb-1 font-semibold text-[var(--text)]">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              defaultValue={carData.availability}
              className="select select-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)]"
              required
            >
              <option value="available">Available</option>
              <option value="not available">Not Available</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="registrationNumber"
              className="mb-1 font-semibold text-[var(--text)]"
            >
              Registration Number
            </label>
            <input
              id="registrationNumber"
              name="registrationNumber"
              defaultValue={carData.registrationNumber}
              className="input input-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="features" className="mb-1 font-semibold text-[var(--text)]">
              Features (comma separated)
            </label>
            <input
              id="features"
              name="features"
              defaultValue={carData.features}
              className="input input-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)]"
              placeholder="e.g. GPS, AC, Auto"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="imageUrl" className="mb-1 font-semibold text-[var(--text)]">
              Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              defaultValue={carData.imageUrl}
              className="input input-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)]"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="description" className="mb-1 font-semibold text-[var(--text)]">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={carData.description}
              rows={4}
              className="textarea textarea-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)] resize-none"
              placeholder="Write a short description..."
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="location" className="mb-1 font-semibold text-[var(--text)]">
              Location
            </label>
            <input
              id="location"
              name="location"
              defaultValue={carData.location}
              className="input input-bordered w-full border-[var(--primary)] focus:ring-[var(--primary)]"
              required
            />
          </div>

          <div className="md:col-span-2 flex justify-between mt-4 gap-4">
            <button
              type="submit"
              className="btn bg-[var(--primary)] hover:bg-[#8a2dc9] text-white w-full md:w-auto transition"
            >
              Update
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="btn bg-[var(--secondary)] hover:bg-[#c66128] text-white w-full md:w-auto transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
