import React, { useEffect } from "react";
import { useState } from "react";
import MyBookingTable from "./MyBookingTable";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookingCar = () => {
  const [booking, setBooking] = useState([]);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure(`/bookingcar?email=${user.email}`).then(({ data }) =>
      setBooking(data)
    );
  }, [reload, user, axiosSecure]);

  return (
    <div className="max-w-7xl mx-auto py-16">
      <MyBookingTable
        reload={reload}
        setReload={setReload}
        booking={booking}
      ></MyBookingTable>
    </div>
  );
};

export default MyBookingCar;
