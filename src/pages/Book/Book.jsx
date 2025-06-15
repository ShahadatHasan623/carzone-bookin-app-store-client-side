import React from "react";
import { FaCar } from "react-icons/fa6";
import { useLoaderData } from "react-router";

const Book = () => {
  const bookData = useLoaderData();
  const { model, price, availability, features, imageUrl, description } =
    bookData;

  return (
    <div className="max-w-5xl mx-auto mt-10 card card-side bg-white rounded-2xl shadow-lg border lg:px-0 px-5 border-gray-200 hover:shadow-2xl transition-all duration-300">
      <figure className="w-1/2">
        <img
          src={imageUrl}
          alt={model}
          className="h-full w-full object-cover rounded-l-2xl"
        />
      </figure>
      <div className="card-body w-1/2 p-8 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-1"><FaCar /><span>{model}</span></h2>
        <h3 className="text-xl text-gray-700 font-semibold">
           Per Day Price: <span className="text-[#f97316]">${price}/day</span>
        </h3>
        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
            availability === "available"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {availability === "available" ? "Available ✅" : "Not Available ❌"}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <p className="font-semibold">Features : {features}</p>
        <div className="card-actions justify-end pt-4">
          <button className="btn bg-[#f97316] hover:bg-[#ea580c] text-white border-none px-6 py-2 rounded-full shadow-md transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
