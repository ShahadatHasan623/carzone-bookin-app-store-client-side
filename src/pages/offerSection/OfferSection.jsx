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
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OfferSection = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-14 my-24 rounded-3xl shadow-2xl"
      style={{ backgroundColor: "var(--background)" }}
    >
      <h2
        className="text-4xl font-extrabold mb-16 text-center select-none"
        style={{ color: "var(--text)", textShadow: "1px 1px 4px rgba(169, 55, 225, 0.5)" }}
      >
        Our Exclusive Offers
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            className="rounded-3xl p-8 shadow-lg cursor-pointer flex flex-col justify-center"
            style={{
              background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
              color: "white",
              boxShadow:
                "0 12px 25px rgba(169, 55, 225, 0.4), 0 6px 10px rgba(223, 115, 48, 0.3)",
            }}
            variants={cardVariants}
            whileHover={{
              scale: 1.07,
              boxShadow:
                "0 20px 40px rgba(169, 55, 225, 0.7), 0 10px 20px rgba(223, 115, 48, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--accent)" }}>
              {offer.title}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              {offer.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OfferSection;
