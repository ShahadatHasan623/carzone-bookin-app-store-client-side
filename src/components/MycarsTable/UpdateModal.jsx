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
      price: form.price.value,
      availability: form.availability.value,
      registrationNumber: form.registrationNumber.value,
      features: form.features.value,
      description: form.description.value,
      imageUrl: form.imageUrl.value,
      location: form.location.value,
    };

    axios.put(`https://cars-server-side.vercel.app/cars/${carId}`, updatedCar).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      closeModal();
    });
  };

  if (!carData) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <h3 className="text-xl font-bold mb-4">Update Car</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="model"
            defaultValue={carData.model}
            className="input input-bordered w-full"
          />
          <input
            name="price"
            type="number"
            defaultValue={carData.price}
            className="input input-bordered w-full"
          />
          <select
            name="availability"
            defaultValue={carData.availability}
            className="select select-bordered w-full"
          >
            <option value="available">Available</option>
            <option value="not available">Not Available</option>
          </select>
          <input
            name="registrationNumber"
            defaultValue={carData.registrationNumber}
            className="input input-bordered w-full"
          />
          <input
            name="features"
            defaultValue={carData.features}
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            defaultValue={carData.description}
            className="textarea textarea-bordered w-full"
          />
          <input
            name="imageUrl"
            defaultValue={carData.imageUrl}
            className="input input-bordered w-full"
          />
          <input
            name="location"
            defaultValue={carData.location}
            className="input input-bordered w-full"
          />

          <div className="flex justify-between mt-4">
            <button type="submit" className="btn btn-success text-white">
              Update
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-error text-white"
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
