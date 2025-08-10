import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCarSide, FaHeadset, FaCheckCircle, FaClock } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarBlogsGallery from "./CarBlogsGallery";

const teamMembers = [
  {
    name: "Shahadat Hossain",
    role: "Founder & CEO",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Passionate about building scalable car rental platforms with excellent UX.",
  },
  {
    name: "Sarah Williams",
    role: "Lead Developer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in React and backend integration, ensuring smooth user experience.",
  },
  {
    name: "James Lee",
    role: "Marketing Head",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "Driving brand awareness and customer engagement through smart campaigns.",
  },
];

const testimonials = [
  {
    name: "Emily Johnson",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "Frequent User",
    rating: 5,
    quote:
      "CarZone made booking a car so easy and hassle-free. Highly recommended!",
  },
  {
    name: "Michael Brown",
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    title: "Business Client",
    rating: 4,
    quote:
      "Excellent service and support. Perfect for all my business travel needs.",
  },
  {
    name: "Anna Davis",
    photo: "https://randomuser.me/api/portraits/women/54.jpg",
    title: "Tourist",
    rating: 5,
    quote:
      "A seamless experience from start to finish. Great car selection too!",
  },
];

const services = [
  {
    icon: <FaCarSide />,
    title: "Wide Range of Cars",
    description:
      "From compact cars to luxury SUVs, find the perfect car for your trip.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description: "Our support team is available round the clock to help you.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Easy Booking Process",
    description:
      "Book your car in just a few clicks with our simple interface.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Rental Plans",
    description:
      "Choose from hourly, daily, or weekly plans that suit you best.",
  },
];

const stats = [
  {
    id: 1,
    count: 132,
    label: "Worldwide Rent Stations",
  },
  {
    id: 2,
    count: 1541,
    label: "Cars of Various Categories",
  },
  {
    id: 3,
    count: 107,
    label: "Business Partners",
  },
];

const Star = ({ filled }) => (
  <svg
    className={`w-6 h-6 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.621a1 1 0 00.95.69h3.802c.969 0 1.371 1.24.588 1.81l-3.077 2.234a1 1 0 00-.364 1.118l1.177 3.621c.3.921-.755 1.688-1.538 1.118l-3.077-2.234a1 1 0 00-1.176 0l-3.077 2.234c-.783.57-1.838-.197-1.538-1.118l1.177-3.621a1 1 0 00-.364-1.118L2.174 9.048c-.783-.57-.38-1.81.588-1.81h3.802a1 1 0 00.95-.69l1.177-3.62z" />
  </svg>
);

const NextArrow = ({ onClick }) => (
  <button
    aria-label="Next testimonial"
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
    type="button"
  >
    ▶
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    aria-label="Previous testimonial"
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
    type="button"
  >
    ◀
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
  accessibility: true,
};

const AboutUs = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/1JfR3TMV/tyler-clemmensen-d1-Jum1v-VLew-unsplash.jpg')",
        }}
        aria-label="Car rental hero banner"
      >
        <div className="absolute inset-0  bg-opacity-60"></div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            About CarZone
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200">
            Connecting you with the perfect car for every journey.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto my-16 px-6 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
          aria-labelledby="mission-heading"
        >
          <h2
            id="mission-heading"
            className="text-4xl font-extrabold mb-4 text-gray-900"
          >
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To revolutionize the car rental experience by making it accessible,
            transparent, and customer-friendly.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
          aria-labelledby="vision-heading"
        >
          <h2
            id="vision-heading"
            className="text-4xl font-extrabold mb-4 text-gray-900"
          >
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To be the most trusted and convenient car rental platform worldwide.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section
        className="max-w-7xl mx-auto my-16 lg:px-0 px-5"
        aria-label="Our Services"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map(({ icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(223,115,48,0.3)",
              }}
              className="bg-white rounded-3xl p-10 shadow-lg flex flex-col items-center text-center cursor-pointer transition-transform duration-300"
              tabIndex={0}
              role="button"
              aria-pressed="false"
            >
              <div className="text-[var(--primary,#df732f)] text-5xl mb-6">
                {icon}
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 max-w-xs">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around text-center gap-12">
          {stats.map(({ id, count, label }) => (
            <div
              key={id}
              className="space-y-1 md:space-y-2 flex flex-col items-center"
            >
              <h3 className="text-5xl font-extrabold drop-shadow-md leading-none">
                <CountUp end={count} duration={3} />+
              </h3>
              <p className="uppercase tracking-wide font-semibold text-sm md:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        className="max-w-7xl mx-auto my-16 lg:px-0 px-5"
        aria-label="Meet the Team"
      >
        <h2 className="text-4xl font-bold text-center mb-14">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {teamMembers.map(({ name, role, photo, bio }) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center"
              tabIndex={0}
              aria-label={`Team member: ${name}, role: ${role}`}
            >
              <img
                src={photo}
                alt={name}
                className="w-36 h-36 rounded-full object-cover border-4 border-orange-500 shadow-md"
                loading="lazy"
              />
              <h3 className="mt-6 text-2xl font-semibold">{name}</h3>
              <p className="text-orange-600 font-semibold mt-1">{role}</p>
              <p className="mt-4 leading-relaxed">{bio}</p>
            </motion.article>
          ))}
        </div>
      </section>
      <CarBlogsGallery></CarBlogsGallery>
      {/* Testimonials Section */}
      <section
        className="max-w-7xl mx-auto my-16 lg:px-8 px-5 relative"
        aria-label="User Testimonials"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          What Our Users Say
        </h2>

        <div className="relative">
          <Slider {...sliderSettings} aria-live="polite">
            {testimonials.map(({ name, photo, title, rating, quote }) => (
              <motion.blockquote
                key={name}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(223,115,48,0.3)",
                }}
                className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-between h-96 mx-4"
                tabIndex={0}
                aria-label={`Testimonial from ${name}, ${title}`}
                style={{ minHeight: "350px" }}
              >
                <p className="italic text-gray-700 mb-6 text-lg leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center mb-4">
                  <img
                    src={photo}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover mr-5 border-2 border-orange-500"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {name}
                    </p>
                    <p className="text-orange-500 text-sm">{title}</p>
                    <div
                      className="flex mt-1"
                      aria-label={`Rating: ${rating} out of 5 stars`}
                    >
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} filled={i <= rating} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-orange-500 py-16 text-white text-center rounded-xl max-w-7xl mx-auto lg:px-0 px-5 mb-16">
        <h2 className="text-4xl font-bold mb-4">Ready to Rent Your Car?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Find the perfect car at the best price. Book now and enjoy your
          journey!
        </p>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
          Book a Car
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
