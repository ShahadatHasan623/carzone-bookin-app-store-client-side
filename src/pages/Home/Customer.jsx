import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rakib Hossain",
    image: "https://i.ibb.co/dJtb4mch/uifaces-popular-image-1.jpg",
    review: "Very good experience! Car was clean and pickup was smooth.",
    rating: 5,
  },
  {
    name: "Mim Akter",
    image: "https://i.pravatar.cc/150?img=5",
    review: "Great service and affordable price. Highly recommended!",
    rating: 4,
  },
  {
    name: "Shakib Ahmed",
    image: "https://i.ibb.co/KzpwLtnz/uifaces-popular-image-2.jpg",
    review: "Loved the car and support team was helpful throughout.",
    rating: 5,
  },
  {
    name: "Sabbir Hossain",
    image: "https://i.ibb.co/1t4Syxny/uifaces-popular-image-3.jpg",
    review: "Driver was on time and professional. Will book again for sure!",
    rating: 4,
  },
  {
    name: "Tanisa Islam",
    image: "https://i.ibb.co/BHBvwk3f/uifaces-popular-image-5.jpg",
    review: "Pricing was transparent and no hidden fees. Great job!",
    rating: 5,
  },
];

const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-gray-100 py-12 max-w-7xl mx-auto lg:px-0 px-4 md:px-8 rounded-2xl mt-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-xl rounded-xl p-6 text-center flex flex-col items-center min-h-[360px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
                />

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-md w-full max-w-md">
                  <p className="text-gray-800 font-medium italic text-base">
                    “{item.review}”
                  </p>
                </div>

                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Customer;
