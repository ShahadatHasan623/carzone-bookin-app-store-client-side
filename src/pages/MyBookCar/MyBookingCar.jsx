import React, { useEffect } from "react";
import { useState } from "react";
import MyBookingTable from "./MyBookingTable";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookingCar = () => {
  const [booking, setBooking] = useState([]);
  const {user}=useAuth()
  const axiosSecure =useAxiosSecure()
  useEffect(() => {
    axiosSecure(`/bookingcar?email=${user.email}`)
      .then(({data}) => setBooking(data));
  }, []);

  return (
    <div>
      <MyBookingTable booking={booking}></MyBookingTable>
    </div>
  );
};

export default MyBookingCar;
