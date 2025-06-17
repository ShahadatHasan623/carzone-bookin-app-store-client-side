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
    transition: { type: "spring", stiffness: 300 }
  }
};

const SupportSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4 text-center text-gray-800"
      >
        Need Help? Contact Support
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-gray-600 mb-8"
      >
        If you have any questions or need assistance, our support team is here to help you 24/7.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        {/* Contact Card 1 */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-sm w-full md:w-1/3 text-center cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <FaPhoneAlt className="mx-auto text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-1">Call Us</h3>
          <p className="text-gray-700">+880 1234 567 890</p>
          <p className="text-gray-500 text-sm">Mon - Fri, 9AM - 6PM</p>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-sm w-full md:w-1/3 text-center cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <FaEnvelope className="mx-auto text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-1">Email Us</h3>
          <p className="text-gray-700">support@carwebsite.com</p>
          <p className="text-gray-500 text-sm">We reply within 24 hours</p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          whileHover={{
            scale: 1.1,
            y: -7,
            transition: { type: "spring", stiffness: 300 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
        >
          <FaComments className="text-6xl text-purple-600 mb-4" />
          <button
            onClick={() => alert("Live chat coming soon!")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Start Live Chat
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
