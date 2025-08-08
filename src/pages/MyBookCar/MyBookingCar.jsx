import React, { useEffect, useState } from "react";
import MyBookingTable from "./MyBookingTable";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookingCar = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [booking, setBooking] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (user?.email) {
      axiosSecure(`/bookingcar?email=${user.email}`)
        .then(({ data }) => setBooking(data))
        .catch((err) => {
          console.error("Failed to fetch bookings:", err);
          setBooking([]); // Optionally clear bookings on error
        });
    }
  }, [reload, user?.email, axiosSecure]);

  return (
    <section className="max-w-7xl mx-auto py-16 lg:px-0 px-5 sm:px-6 ">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-primary">
        My Bookings
      </h1>

      <MyBookingTable booking={booking} reload={reload} setReload={setReload} />
    </section>
  );
};

export default MyBookingCar;
