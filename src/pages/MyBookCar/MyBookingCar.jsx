import React, { useEffect } from "react";
import { useState } from "react";
import MyBookingTable from "./MyBookingTable";

const MyBookingCar = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bookingcar")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  return (
    <div>
      <MyBookingTable booking={booking}></MyBookingTable>
    </div>
  );
};

export default MyBookingCar;
