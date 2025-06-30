import React, { useEffect, useState } from "react";
import RecentCard from "./RecentCard";

const RecentCar = () => {
  const [recentcar, setRecentCar] = useState([]);
  useEffect(() => {
    fetch("https://cars-server-side.vercel.app/cars/sortData")
      .then((res) => res.json())
      .then((data) => setRecentCar(data));
  },[]);
  return (
  <div className="bg-gradient-to-b from-white to-slate-50 px-4 lg:px-0 max-w-7xl mx-auto mt-16">
      <div>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-2">
             Recent Cars
          </h1>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Explore our most recently added cars. Choose the one that fits your style and budget.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentcar.map((recnt) => (
            <RecentCard key={recnt._id} recnt={recnt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCar;
