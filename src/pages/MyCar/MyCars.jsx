import React, { useEffect, useState } from "react";
import MyCarsTable from "../../components/MycarsTable/MyCarsTable";
import AddedCars from "../AddedCars/AddedCars";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCars = () => {
  const [allCarsData, setAllCarsData] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowest");
  const{user}=useAuth()
  const axiosSecure =useAxiosSecure()

  useEffect(() => {
    axiosSecure("/cars")
      .then(({data}) => {
        setAllCarsData(data);
      });
  }, []);

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
    <div className="p-4">
      {allCarsData.length === 0 ? (
        <AddedCars></AddedCars>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="sort" className="mr-2 font-semibold">
              Sort by Price:
            </label>
            <select
              id="sort"
              onChange={handleSortChange}
              className="border px-2 py-1 rounded"
              value={sortOrder}
            >
              <option value="lowest">Lowest First</option>
              <option value="highest">Highest First</option>
            </select>
          </div>
          <MyCarsTable setAllCarsData={setAllCarsData} allCarsData={allCarsData} sortOrder={sortOrder} />
        </>
      )}
    </div>
  );
};

export default MyCars;
