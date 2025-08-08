import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaThList, FaThLarge } from "react-icons/fa";
import AvailableCard from "../../components/availableCard/AvailableCard";

const AvailableCar = () => {
  const [carsData, setCarsData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetch(`https://cars-server-side.vercel.app/cars/available?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        let filteredData = [...data];

        if (selectedModel) {
          filteredData = filteredData.filter((car) => car.model === selectedModel);
        }
        if (selectedFeature) {
          filteredData = filteredData.filter((car) =>
            typeof car.features === "string"
              ? car.features.includes(selectedFeature)
              : Array.isArray(car.features)
              ? car.features.includes(selectedFeature)
              : false
          );
        }
        if (selectedDate) {
          filteredData = filteredData.filter((car) => {
            const carDate = new Date(car.dateAdded).toISOString().split("T")[0];
            return carDate === selectedDate;
          });
        }

        if (sortOrder === "lowToHigh") {
          filteredData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortOrder === "highToLow") {
          filteredData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        setCarsData(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [search, sortOrder, selectedModel, selectedFeature, selectedDate]);

  const handleToggleView = () => setIsGridView((prev) => !prev);

  return (
    <div className="relative max-w-7xl mx-auto py-16 lg:px-0 px-6 md:px-12 min-h-screen">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-14 text-indigo-900 select-none drop-shadow-lg"
      >
        🚗 Explore Our Premium Cars
      </motion.h1>

      {/* Filters & Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-3xl shadow-xl border border-orange-300 p-6 flex flex-col lg:flex-row justify-between gap-8 items-center mb-12"
      >
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <FaSearch className="absolute top-3.5 left-4 text-cyan-400 text-lg" />
          <input
            type="text"
            placeholder="Search car model..."
            className="input w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-md text-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Sort + Toggle Buttons */}
        <div className="flex gap-6 flex-col sm:flex-row items-center w-full sm:w-auto">
          <select
            className="select select-bordered w-full sm:w-52 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
            defaultValue=""
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option disabled value="">
              Sort By
            </option>
            <option value="lowToHigh">Price: Lowest First</option>
            <option value="highToLow">Price: Highest First</option>
          </select>

          <button
            onClick={handleToggleView}
            className="btn bg-gradient-to-r from-purple-700 to-orange-500 text-white w-full sm:w-auto rounded-3xl shadow-lg hover:scale-105 transition-transform flex items-center gap-3 px-6 py-3 select-none text-lg"
            aria-label="Toggle view"
          >
            {isGridView ? <FaThList size={20} /> : <FaThLarge size={20} />}
            {isGridView ? " List View" : " Grid View"}
          </button>
        </div>
      </motion.div>

      {/* Additional Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14"
      >
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="select select-bordered rounded-2xl w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
        >
          <option value="">All Models</option>
          <option value="Toyota Corolla">Toyota Corolla</option>
          <option value="Honda Civic">Honda Civic</option>
          <option value="BMW X5">BMW X5</option>
        </select>

        <select
          value={selectedFeature}
          onChange={(e) => setSelectedFeature(e.target.value)}
          className="select select-bordered rounded-2xl w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
        >
          <option value="">All Features</option>
          <option value="GPS">GPS</option>
          <option value="AC">AC</option>
          <option value="Bluetooth">Bluetooth</option>
        </select>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="input input-bordered rounded-2xl w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
        />
      </motion.div>

      {/* Cars Grid/List */}
      <AnimatePresence>
        {carsData.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16 text-gray-500 select-none"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
              alt="No cars"
              className="mx-auto w-32 mb-6 opacity-50 select-none"
            />
            <p className="text-xl font-medium">No cars found matching your criteria</p>
          </motion.div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`gap-8 ${
              isGridView
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch"
                : "flex flex-col gap-6"
            }`}
          >
            {carsData.map((car, index) => (
              <motion.div
                key={car.registrationNumber || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                whileHover={{ scale: 1.06, boxShadow: "0px 16px 35px rgba(61, 207, 255, 0.3)" }}
                className="rounded-3xl overflow-hidden object-cover shadow-xl bg-white  hover:bg-purple-50 transition-all flex flex-col h-full"
              >
                <AvailableCard isGridView={isGridView} carsData={car} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AvailableCar;
