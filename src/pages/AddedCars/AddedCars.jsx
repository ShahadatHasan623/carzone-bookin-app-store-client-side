import React from 'react';
import { NavLink } from 'react-router';
import { FaPlus } from 'react-icons/fa';

const AddedCars = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">No Cars Added Yet</h1>
        <p className="text-gray-600 mb-6">You haven't added any cars to your list. Click below to add one.</p>
        <NavLink
          to="/addcar"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
        >
          <FaPlus /> Add Car
        </NavLink>
      </div>
    </div>
  );
};

export default AddedCars;
