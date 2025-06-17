import React from 'react';
import errorLottie from '../../assets/error.json'; 
import Lottie from 'lottie-react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-10">
      <Lottie animationData={errorLottie} loop={true} />
      <h2 className="text-center text-lg font-semibold text-red-600 mt-4">Oops! Something went wrong.</h2>
      <div className='text-center'>
        <NavLink to="/" className="btn btn-primary">Home Pages</NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
