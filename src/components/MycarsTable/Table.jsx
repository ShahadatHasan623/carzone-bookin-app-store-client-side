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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://cars-server-side.vercel.app/cars/${id}`).then((res) => {
          if (res.data.deletedCount) {
            const remaininguser = carsData.filter((user) => user._id !== id);
            setCars(remaininguser);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <tr className="hover:bg-gray-50 transition duration-200">
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={allTable.imageUrl}
              alt="Car"
              className="h-12 w-12 rounded-md object-cover border"
            />
          </div>
        </td>
        <td className="px-6 py-4 font-medium text-gray-800">
          {allTable.model}
        </td>
        <td className="px-6 py-4 text-green-600 font-semibold">
          ${allTable.price}/Day
        </td>
        <td className="px-6 py-4 text-green-600 font-semibold">
          {allTable.bookingCount}
        </td>
        <td className="px-6 py-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              allTable.availability === "available"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {allTable.availability}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">
          {allTable.dateAdded}
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-2">
            <button
              onClick={() => handleEditClick(allTable._id)}
              className="p-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
              title="Edit"
            >
              <FaEdit size={16} />
            </button>
            <button
              onClick={() => handleDelete(allTable._id)}
              className="p-2 rounded bg-red-600 hover:bg-red-700 text-white"
              title="Delete"
            >
              <MdDelete size={16} />
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
