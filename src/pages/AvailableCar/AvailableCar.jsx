import React, { useState, useEffect } from "react";
import AvailableCard from "../../components/availableCard/AvailableCard";

const AvailableCar = () => {
  const [carsData, setCarsData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    fetch(`https://cars-server-side.vercel.app/cars/available?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        let sortedData = [...data];
        if (sortOrder === "lowToHigh") {
          sortedData.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "highToLow") {
          sortedData.sort((a, b) => b.price - a.price);
        }
        setCarsData(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [search, sortOrder]);

  const handleToggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <div className="px-4 md:px-10 py-6">
      {/* Search and Controls */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-center mb-8">
        <input
          type="text"
          placeholder="Search car model"
          className="input input-bordered w-full sm:max-w-md"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3 flex-col sm:flex-row items-center w-full sm:w-auto">
          <select
            className="select select-bordered w-full sm:w-48"
            defaultValue=""
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option disabled value="">Sort By</option>
            <option value="lowToHigh">Price: Lowest First</option>
            <option value="highToLow">Price: Highest First</option>
          </select>

          <button
            onClick={handleToggleView}
            className="btn bg-[#e85e1a] text-white w-full sm:w-auto"
          >
            Toggle to {isGridView ? "list" : "grid"} view
          </button>
        </div>
      </div>

      {/* Cars Grid/List */}
      <div
        className={`gap-5 ${
          isGridView
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "flex flex-col"
        }`}
      >
        {carsData.map((car) => (
          <AvailableCard
            key={car.registrationNumber}
            isGridView={isGridView}
            carsData={car}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableCar;
