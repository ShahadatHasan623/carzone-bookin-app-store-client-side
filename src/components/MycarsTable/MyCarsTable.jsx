import React, { useMemo } from "react";
import Table from "./Table";

const MyCarsTable = ({ allCarsData, sortOrder, setCars }) => {
  const sortedCars = useMemo(() => {
    const carsCopy = [...allCarsData];
    if (sortOrder === "lowest") {
      return carsCopy.sort((a, b) => a.price - b.price);
    }
    if (sortOrder === "highest") {
      return carsCopy.sort((a, b) => b.price - a.price);
    }
    return carsCopy;
  }, [allCarsData, sortOrder]);

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
          <tr>
            <th className="px-6 py-3 text-left">Image</th>
            <th className="px-6 py-3 text-left">Model</th>
            <th className="px-6 py-3 text-left">Price</th>
            <th className="px-6 py-3 text-left">Availability</th>
            <th className="px-6 py-3 text-left">Date Added</th>
            <th className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sortedCars.map((car) => (
            <Table
              key={car._id}
              allTable={car}
              carsData={allCarsData}
              setCars={setCars}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCarsTable;
