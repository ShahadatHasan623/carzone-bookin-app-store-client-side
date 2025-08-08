import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaComments } from "react-icons/fa";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 }
  },
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 25px rgba(169, 55, 225, 0.4)",
    transition: { type: "spring", stiffness: 300 }
  }
};

const SupportSection = () => {
  return (
    <section
      className="max-w-7xl mx-auto rounded-3xl shadow-2xl p-8 my-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold mb-6 text-center select-none"
        style={{ color: "var(--text)", textShadow: "1px 1px 5px rgba(169, 55, 225, 0.5)" }}
      >
        Need Help? Contact Support
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
        style={{ color: "rgba(39, 16, 213, 0.8)" }}
      >
        If you have any questions or need assistance, our support team is here to help you 24/7.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        {/* Call Us */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-md w-full md:w-1/3 text-center cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{ border: "2px solid var(--primary)" }}
        >
          <FaPhoneAlt className="mx-auto text-5xl mb-5" style={{ color: "var(--primary)" }} />
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--primary)" }}>
            Call Us
          </h3>
          <p className="text-lg font-medium" style={{ color: "var(--text)" }}>
            +880 1234 567 890
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--secondary)" }}>
            Mon - Fri, 9AM - 6PM
          </p>
        </motion.div>

        {/* Email Us */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-md w-full md:w-1/3 text-center cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{ border: "2px solid var(--secondary)" }}
        >
          <FaEnvelope className="mx-auto text-5xl mb-5" style={{ color: "var(--secondary)" }} />
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--secondary)" }}>
            Email Us
          </h3>
          <p className="text-lg font-medium" style={{ color: "var(--text)" }}>
            support@carwebsite.com
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--primary)" }}>
            We reply within 24 hours
          </p>
        </motion.div>

        {/* Live Chat */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-md w-full md:w-1/3 text-center cursor-pointer flex flex-col items-center"
          initial="offscreen"
          whileInView="onscreen"
          whileHover={{
            scale: 1.1,
            y: -7,
            boxShadow: "0 15px 35px rgba(169, 55, 225, 0.5)",
            transition: { type: "spring", stiffness: 300 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
        >
          <FaComments className="mb-5" size={64} style={{ color: "var(--primary)" }} />
          <button
            onClick={() => alert("Live chat coming soon!")}
            className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(90deg, var(--primary), var(--secondary))`,
            }}
          >
            Start Live Chat
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
