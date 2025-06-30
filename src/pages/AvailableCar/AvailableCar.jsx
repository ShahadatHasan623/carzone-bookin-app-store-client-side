import React, { useState, useEffect } from "react";
import AvailableCard from "../../components/availableCard/AvailableCard";

const AvailableCar = () => {
  const [carsData, setCarsData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  // New Filter States
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetch(`https://cars-server-side.vercel.app/cars/available?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        let filteredData = [...data];

        // Model Filter
        if (selectedModel) {
          filteredData = filteredData.filter(car => car.model === selectedModel);
        }

        // Feature Filter (supports string or array)
        if (selectedFeature) {
          filteredData = filteredData.filter(car =>
            typeof car.features === "string"
              ? car.features.includes(selectedFeature)
              : Array.isArray(car.features)
              ? car.features.includes(selectedFeature)
              : false
          );
        }

        // Date Filter
        if (selectedDate) {
          filteredData = filteredData.filter((car) => {
            const carDate = new Date(car.dateAdded).toISOString().split("T")[0];
            return carDate === selectedDate;
          });
        }

        // Sorting
        if (sortOrder === "lowToHigh") {
          filteredData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortOrder === "highToLow") {
          filteredData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        setCarsData(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [search, sortOrder, selectedModel, selectedFeature, selectedDate]);

  const handleToggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <div className="lg:px-0 px-4 md:px-4 max-w-7xl mx-auto py-16">
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

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 ">
        {/* Model Filter */}
        <select
          className="select select-bordered w-full"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">All Models</option>
          <option value="Toyota Corolla">Toyota Corolla</option>
          <option value="Honda Civic">Honda Civic</option>
          <option value="BMW X5">BMW X5</option>
        </select>

        {/* Feature Filter */}
        <select
          className="select select-bordered w-full"
          value={selectedFeature}
          onChange={(e) => setSelectedFeature(e.target.value)}
        >
          <option value="">All Features</option>
          <option value="GPS">GPS</option>
          <option value="AC">AC</option>
          <option value="Bluetooth">Bluetooth</option>
        </select>

        {/* Date Filter */}
        <input
          type="date"
          className="input input-bordered w-full"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
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
