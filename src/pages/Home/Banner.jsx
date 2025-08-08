import React from "react";
import { Link } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const slides = [
    {
      title: "Drive Your Dreams Today!",
      btnText: "View Available Cars",
      btnLink: "/available",
      imageUrl: "https://i.ibb.co/d08D2WrH/pexels-smepictures-14876414.jpg",
    },
    {
      title: "Explore Premium Cars For You",
      btnText: "Browse Now",
      btnLink: "/available",
      imageUrl:
        "https://i.ibb.co/HD8RgnMT/pexels-introspectivedsgn-28921490.jpg",
    },
    {
      title: "Affordable Rentals, Premium Quality",
      btnText: "Check Offers",
      btnLink: "/offers",
      imageUrl: "https://i.ibb.co/xqbS2JRb/pexels-brice-122958-376674.jpg",
    },
    {
      title: "Experience Luxury & Comfort",
      btnText: "See More",
      btnLink: "/luxury",
      imageUrl:
        "https://i.ibb.co/dJtpVx3J/pexels-introspectivedsgn-28996404.jpg",
    },
  ];

  return (
    <div className="w-full h-[75vh] mx-auto">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={800}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        useKeyboardArrows={true}
      >
        {slides.map(({ title, btnText, btnLink, imageUrl }, idx) => (
          <div
            key={idx}
            className="relative w-full h-[75vh]"
            style={{ position: "relative" }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            {/* Black overlay with opacity */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div
              className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center"
              style={{ color: "var(--text)" }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg max-w-4xl mb-6 leading-tight"
                style={{ color: "var(--text)" }}
              >
                {title}
              </h2>
              <Link
                to={btnLink}
                className="font-semibold rounded-full px-8 py-3 shadow-lg transition-colors duration-300 ease-in-out text-lg sm:text-xl"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary)";
                  e.currentTarget.style.color = "white";
                }}
              >
                {btnText}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
