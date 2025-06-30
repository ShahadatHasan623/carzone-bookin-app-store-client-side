import React from "react";
import { motion } from "motion/react";
import { FaMousePointer } from "react-icons/fa";
import { FaCarSide, FaMoneyBillWave, FaPhoneVolume } from "react-icons/fa6";

const features = [
  {
    icon: <FaCarSide size={40} className="text-white" />,
    title: "Wide Variety of Cars",
    description:
      "Choose from a diverse fleet of vehicles, including economy, SUVs, and luxury cars. Perfect for every journey and budget.",
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-white" />,
    title: "Affordable Prices",
    description:
      "Enjoy competitive pricing with no hidden fees. Get the best value for your money without compromising on quality.",
  },
  {
    icon: <FaMousePointer size={40} className="text-white" />,
    title: "Easy Booking Process",
    description:
      "Our intuitive platform ensures a seamless booking experience. Reserve your car in just a few clicks, anytime, anywhere.",
  },
  {
    icon: <FaPhoneVolume size={40} className="text-white" />,
    title: "Customer Support",
    description:
      "We’ve got you covered 24/7. Reach out to our friendly support team for assistance whenever you need it.",
  },
];
const WhyChoos = () => {
  return (
    <div className="mt-16 lg:px-0 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Why Choose Us?
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {feature.title}
            </h3>
            <div className="w-12 h-1 bg-white mx-auto mb-3 rounded-full"></div>
            <p className="text-sm text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoos;
