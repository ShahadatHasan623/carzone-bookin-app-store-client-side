import React from 'react';
import { useLoaderData } from 'react-router';

const MyBookingCar = () => {
    const bookNow =useLoaderData()
    console.log(bookNow)
    return (
        <div>
            
        </div>
    );
};

export default MyBookingCar;