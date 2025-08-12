import React, { useEffect, useState } from "react";
import MyCarsTable from "../../components/MycarsTable/MyCarsTable";
import AddedCars from "../AddedCars/AddedCars";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading/Loading";

const MyCars = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [allCarsData, setAllCarsData] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosSecure(`/cars?email=${user.email}`)
        .then(({ data }) => setAllCarsData(data))
        .catch((err) => {
          console.error("Failed to fetch cars:", err);
          setAllCarsData([]);
        })
        .finally(() => setLoading(false));
    }
  }, [user?.email, axiosSecure]);

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSortOrder(selected);

    const sorted = [...allCarsData].sort((a, b) => {
      if (selected === "lowest") return a.price - b.price;
      if (selected === "highest") return b.price - a.price;
      return 0;
    });

    setAllCarsData(sorted);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-0 py-16 min-h-[70vh]">
      <h1 className="text-3xl font-extrabold mb-8 text-primary text-center">
        My Cars
      </h1>

      {loading ? (
        <Loading></Loading>
      ) : allCarsData.length === 0 ? (
        <AddedCars />
      ) : (
        <>
          <div className="mb-6 flex justify-end items-center space-x-3">
            <label htmlFor="sort" className="font-semibold text-gray-700">
              Sort by Price:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="lowest">Lowest First</option>
              <option value="highest">Highest First</option>
            </select>
          </div>

          <MyCarsTable
            allCarsData={allCarsData}
            setAllCarsData={setAllCarsData}
            sortOrder={sortOrder}
          />
        </>
      )}
    </section>
  );
};

export default MyCars;
