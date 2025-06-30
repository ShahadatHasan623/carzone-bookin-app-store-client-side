import React from "react";

import { motion } from "framer-motion";

const offers = [
  { id: 1, title: "Weekend Special", desc: "Flat 15% off on weekend rentals" },
  { id: 2, title: "Long-Term Deals", desc: "Save up to 25% on rentals longer than 7 days" },
  { id: 3, title: "Early Bird Offer", desc: "Book 30 days in advance and get 10% off" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const OfferSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 my-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-lg ">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-primary tracking-wide drop-shadow-md">
        Our Exclusive Offers
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-[#ff6200]">{offer.title}</h3>
            <p className="text-gray-700 text-lg">{offer.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OfferSection;
