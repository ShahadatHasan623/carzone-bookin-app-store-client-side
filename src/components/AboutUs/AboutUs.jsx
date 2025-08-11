import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCarSide, FaHeadset, FaCheckCircle, FaClock } from "react-icons/fa";
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

const services = [
  {
    icon: <FaCarSide />,
    title: "Wide Range of Cars",
    description: "From compact cars to luxury SUVs, find the perfect car for your trip.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description: "Our support team is available round the clock to help you.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Easy Booking Process",
    description: "Book your car in just a few clicks with our simple interface.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Rental Plans",
    description: "Choose from hourly, daily, or weekly plans that suit you best.",
  },
];

const stats = [
  { id: 1, count: 132, label: "Worldwide Rent Stations" },
  { id: 2, count: 1541, label: "Cars of Various Categories" },
  { id: 3, count: 107, label: "Business Partners" },
];

const AboutUs = () => {
  // মূল container এ CSS variables দিয়ে inline style দিচ্ছি
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative h-72 sm:h-96 flex items-center justify-center bg-cover bg-center"
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
          className="relative z-10 text-center px-4 sm:px-6 max-w-3xl"
          style={{ color: "white" }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            About CarZone
          </h1>
          <p className="text-base sm:text-xl md:text-2xl max-w-lg mx-auto">
            Connecting you with the perfect car for every journey.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto my-12 md:my-16 px-5 lg:px-0 sm:px-6 grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 sm:p-8 rounded-3xl shadow-lg"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text)",
            border: "1px solid var(--primary)",
          }}
          aria-labelledby="mission-heading"
        >
          <h2
            id="mission-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "var(--primary)" }}
          >
            Our Mission
          </h2>
          <p className="leading-relaxed text-base sm:text-lg">
            To revolutionize the car rental experience by making it accessible,
            transparent, and customer-friendly.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 sm:p-8 rounded-3xl shadow-lg"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text)",
            border: "1px solid var(--primary)",
          }}
          aria-labelledby="vision-heading"
        >
          <h2
            id="vision-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "var(--primary)" }}
          >
            Our Vision
          </h2>
          <p className="leading-relaxed text-base sm:text-lg">
            To be the most trusted and convenient car rental platform worldwide.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section
        className="max-w-7xl mx-auto my-12 md:my-16 px-5 lg:px-0 sm:px-6"
        aria-label="Our Services"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12" style={{ color: "var(--primary)" }}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map(({ icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(223,115,48,0.3)",
              }}
              className="rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col items-center text-center cursor-pointer transition-transform duration-300"
              tabIndex={0}
              role="button"
              aria-pressed="false"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--text)",
                border: "1px solid var(--primary)",
              }}
            >
              <div className="text-[var(--primary,#df732f)] text-4xl sm:text-5xl mb-6" style={{ color: "var(--primary)" }}>
                {icon}
              </div>
              <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold">{title}</h3>
              <p className="mt-3 sm:mt-4 max-w-xs text-sm sm:text-base">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        className="bg-gradient-to-r from-orange-500 to-yellow-400 py-12 sm:py-16 text-white"
        style={{ background: "linear-gradient(to right, var(--secondary), var(--accent))" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row justify-around text-center gap-8 md:gap-12">
          {stats.map(({ id, count, label }) => (
            <div
              key={id}
              className="space-y-1 md:space-y-2 flex flex-col items-center"
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold drop-shadow-md leading-none">
                <CountUp end={count} duration={3} />+
              </h3>
              <p className="uppercase tracking-wide font-semibold text-xs sm:text-sm md:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        className="max-w-7xl mx-auto my-12 md:my-16 px-5 lg:px-0 sm:px-6"
        aria-label="Meet the Team"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-14" style={{ color: "var(--primary)" }}>
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-14">
          {teamMembers.map(({ name, role, photo, bio }) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center"
              tabIndex={0}
              aria-label={`Team member: ${name}, role: ${role}`}
              style={{
                backgroundColor: "var(--background)",
                color: "var(--text)",
                border: "1px solid var(--primary)",
              }}
            >
              <img
                src={photo}
                alt={name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-orange-500 shadow-md"
                loading="lazy"
              />
              <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold">{name}</h3>
              <p className="text-orange-600 font-semibold mt-1">{role}</p>
              <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">{bio}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Car Blogs Gallery */}
      <CarBlogsGallery />

      {/* Contact CTA */}
      <section
        className="py-12 sm:py-16 text-white text-center rounded-xl max-w-7xl mx-auto px-5 sm:px-6 mb-16"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Rent Your Car?</h2>
        <p className="mb-6 sm:mb-8 max-w-xl mx-auto text-base sm:text-lg">
          Find the perfect car at the best price. Book now and enjoy your journey!
        </p>
        <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition text-sm sm:text-base">
          Book a Car
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
