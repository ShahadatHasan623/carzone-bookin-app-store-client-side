import React, { use } from "react";
import Table from "./Table";

const MyCarsTable = ({ allCarsData }) => {
  const cars = use(allCarsData);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Model</th>
            <th>Price/Day</th>
            <th>Availability</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            cars.map(allTable=><Table key={allTable._id} allTable={allTable}></Table>)
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default MyCarsTable;
