import React, { useState, useEffect } from "react";
import AvailableCard from "../../components/availableCard/AvailableCard";

const AvailableCar = () => {
  const [carsData, setCarsData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // New sort state
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
    <div>
      <div className="flex lg:flex-row flex-col justify-between gap-5 mb-8 items-center">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input w-96"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <select
              className="select"
              defaultValue=""
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option disabled value="">
                Sort By
              </option>
              <option value="lowToHigh">Price: Lowest First</option>
              <option value="highToLow">Price: Highest First</option>
            </select>
          </div>
          <button
            onClick={handleToggleView}
            className="btn bg-[#e85e1a] text-white"
          >
            Toggle to {isGridView ? "list" : "grid"} view
          </button>
        </div>
      </div>

      <div
        className={`grid gap-5 ${
          isGridView
            ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
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
