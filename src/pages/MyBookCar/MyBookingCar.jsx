import React, { useEffect } from "react";
import { useState } from "react";
import MyBookingTable from "./MyBookingTable";
import useAuth from "../../hooks/useAuth";

const MyBookingCar = () => {
  const [booking, setBooking] = useState([]);
  const {user}=useAuth()
  useEffect(() => {
    fetch(`http://localhost:3000/bookingcar?email=${user.email}`)
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
