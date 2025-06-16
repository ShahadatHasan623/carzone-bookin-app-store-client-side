import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateModal from "./UpdateModal";
const Table = ({ allTable }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleEditClick = (id) => {
    setSelectedCarId(id);
    setOpenModal(true);
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={allTable.imageUrl} alt="Car" />
              </div>
            </div>
          </div>
        </td>
        <td>{allTable.model}</td>
        <td>${allTable.price}</td>
        <td>{allTable.availability}</td>
        <td>{allTable.dateAdded}</td>
        <th>
          <div className="join flex items-center gap-2">
            <button
              onClick={() => handleEditClick(allTable._id)}
              className="btn join-item btn-primary"
            >
              <FaEdit size={20} />
            </button>
            <button className="btn join-item bg-red-600 text-white">
              <MdDelete size={20} />
            </button>
          </div>
        </th>
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
