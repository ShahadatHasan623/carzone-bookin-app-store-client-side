import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaThList, FaThLarge } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import AvailableCard from "../../components/availableCard/AvailableCard";
import Loading from "../../components/Loading/Loading";

const AvailableCar = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const fetchCars = async () => {
    const res = await fetch(
      `https://cars-server-side.vercel.app/cars/available?searchParams=${search}`
    );
    let data = await res.json();

    if (selectedModel) {
      data = data.filter((car) => car.model === selectedModel);
    }
    if (selectedFeature) {
      data = data.filter((car) =>
        typeof car.features === "string"
          ? car.features.includes(selectedFeature)
          : Array.isArray(car.features)
          ? car.features.includes(selectedFeature)
          : false
      );
    }
    if (selectedDate) {
      data = data.filter((car) => {
        const carDate = new Date(car.dateAdded).toISOString().split("T")[0];
        return carDate === selectedDate;
      });
    }

    if (sortOrder === "lowToHigh") {
      data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOrder === "highToLow") {
      data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    return data;
  };

  const { data: carsData = [], isLoading, isError } = useQuery({
    queryKey: ["availableCars", search, sortOrder, selectedModel, selectedFeature, selectedDate],
    queryFn: fetchCars,
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;

  const handleToggleView = () => setIsGridView((prev) => !prev);

  return (
    <div
      className="relative max-w-7xl mx-auto py-16 lg:px-0 px-6 md:px-12 min-h-screen
                 transition-colors duration-700 bg-[var(--background)]"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-14 select-none drop-shadow-lg
                   text-[var(--text)] tracking-wide"
      >
        🚗 Explore Our Premium Cars
      </motion.h1>

      {/* Search & Sort */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-3xl shadow-2xl border p-6 flex flex-col lg:flex-row justify-between gap-8 items-center mb-12
                   bg-white dark:bg-[#2C2C4D] border-orange-400 dark:border-[var(--primary)]
                   transition-colors duration-700"
      >
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <FaSearch className="absolute top-3.5 left-4 text-[var(--accent)] text-lg" />
          <input
            type="text"
            placeholder="Search car model..."
            className="w-full pl-12 pr-4 py-3 rounded-3xl border border-gray-300 dark:border-[#55587A]
                       focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)] focus:outline-none
                       shadow-lg text-lg font-semibold bg-white dark:bg-[#1B1B35] text-gray-900 dark:text-[#E0E0F0]
                       placeholder-gray-400 dark:placeholder-gray-400 transition-colors duration-700"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Sort & Toggle */}
        <div className="flex gap-6 flex-col sm:flex-row items-center w-full sm:w-auto">
          <select
            className="w-full sm:w-52 rounded-3xl border border-gray-300 dark:border-[#55587A]
                       focus:outline-none focus:ring-4 focus:ring-[var(--accent)] text-lg font-semibold
                       bg-white dark:bg-[#1B1B35] text-gray-900 dark:text-[#E0E0F0] transition-colors duration-700"
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
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white
                       w-full sm:w-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300
                       flex items-center gap-3 px-6 py-3 select-none text-lg font-semibold"
            aria-label="Toggle view"
          >
            {isGridView ? <FaThList size={20} /> : <FaThLarge size={20} />}
            {isGridView ? " List View" : " Grid View"}
          </button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14"
      >
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="rounded-3xl w-full border border-gray-300 px-4 py-4 dark:border-[#55587A]
                     focus:outline-none focus:ring-4 focus:ring-[var(--accent)] text-lg font-semibold
                     bg-white dark:bg-[#1B1B35] text-gray-900 dark:text-[#E0E0F0] transition-colors duration-700"
        >
          <option value="">All Models</option>
          <option value="Toyota Corolla">Toyota Corolla</option>
          <option value="Honda Civic">Honda Civic</option>
          <option value="BMW X5">BMW X5</option>
        </select>

        <select
          value={selectedFeature}
          onChange={(e) => setSelectedFeature(e.target.value)}
          className="rounded-3xl w-full border border-gray-300 px-4 py-4  dark:border-[#55587A]
                     focus:outline-none focus:ring-4 focus:ring-[var(--accent)] text-lg font-semibold
                     bg-white dark:bg-[#1B1B35] text-gray-900 dark:text-[#E0E0F0] transition-colors duration-700"
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
          className="rounded-3xl w-full border px-4 py-4   border-gray-300 dark:border-[#55587A]
                     focus:outline-none focus:ring-4 focus:ring-[var(--accent)] text-lg font-semibold
                     bg-white dark:bg-[#1B1B35] text-gray-900 dark:text-[#E0E0F0] transition-colors duration-700"
        />
      </motion.div>

      {/* Error */}
      {isError && (
        <p className="text-center text-red-600 dark:text-red-400 select-none font-semibold">
          Something went wrong while fetching cars.
        </p>
      )}

      {/* Cars List/Grid */}
      {!isLoading && (
        <AnimatePresence>
          {carsData.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 text-gray-600 dark:text-gray-400 select-none"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
                alt="No cars"
                className="mx-auto w-32 mb-6 opacity-60"
              />
              <p className="text-xl font-semibold">No cars found matching your criteria</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`gap-8 ${
                isGridView
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "flex flex-col gap-6"
              }`}
            >
              {carsData.map((car, index) => (
                <motion.div
                  key={car.registrationNumber || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0 16px 35px rgba(187, 134, 252, 0.7)",
                  }}
                  className="rounded-3xl overflow-hidden shadow-2xl
                             bg-white dark:bg-[#2A2A4D] hover:bg-purple-100 dark:hover:bg-[#403F7F]
                             border border-transparent dark:border-[var(--primary)]
                             transition-colors duration-700 flex flex-col h-full"
                >
                  <AvailableCard isGridView={isGridView} carsData={car} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default AvailableCar;
