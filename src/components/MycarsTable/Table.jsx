import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateModal from "./UpdateModal";
import axios from "axios";
import Swal from "sweetalert2";

const Table = ({ allTable, carsData, setCars }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleEditClick = (id) => {
    setSelectedCarId(id);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f97316", // Tailwind orange-500
      cancelButtonColor: "#ef4444", // Tailwind red-500
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://cars-server-side.vercel.app/cars/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingCars = carsData.filter((car) => car._id !== id);
              setCars(remainingCars);
              Swal.fire("Deleted!", "Car has been deleted.", "success");
            }
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "Something went wrong while deleting.",
              "error"
            );
          });
      }
    });
  };

  return (
    <>
      <tr className="hover:bg-gray-50 transition-colors duration-300 ease-in-out cursor-default">
        <td className="px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src={allTable.imageUrl}
              alt={`${allTable.model} image`}
              className="h-14 w-14 rounded-lg object-cover border border-gray-200 shadow-sm"
              loading="lazy"
            />
          </div>
        </td>

        <td className="px-6 py-4 font-semibold text-gray-900">{allTable.model}</td>

        <td className="px-6 py-4 text-orange-600 font-semibold">${allTable.price}/Day</td>

        <td className="px-6 py-4 text-indigo-600 font-semibold">{allTable.bookingCount}</td>

        <td className="px-6 py-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
              allTable.availability === "available"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {allTable.availability}
          </span>
        </td>

        <td className="px-6 py-4 text-gray-500 text-sm">{allTable.dateAdded}</td>

        <td className="px-6 py-4 text-right">
          <div className="flex justify-end gap-3">
            <button
              onClick={() => handleEditClick(allTable._id)}
              className="flex items-center justify-center p-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 text-white transition"
              title="Edit Car"
              aria-label={`Edit ${allTable.model}`}
            >
              <FaEdit size={18} />
            </button>
            <button
              onClick={() => handleDelete(allTable._id)}
              className="flex items-center justify-center p-2 rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 text-white transition"
              title="Delete Car"
              aria-label={`Delete ${allTable.model}`}
            >
              <MdDelete size={18} />
            </button>
          </div>
        </td>
      </tr>

      {openModal && selectedCarId && (
        <UpdateModal
          carId={selectedCarId}
          closeModal={() => {
            setOpenModal(false);
            setSelectedCarId(null);
          }}
        />
      )}
    </>
  );
};

export default Table;
