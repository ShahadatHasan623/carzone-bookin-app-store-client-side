import React from "react";
import { motion } from "framer-motion";
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
    <div
      className="mt-16 lg:px-0 px-6 max-w-7xl mx-auto my-16 "
    >
      <h2
        className="text-4xl font-extrabold text-center mb-12 select-none"
        style={{ color: "var(--text)" }}
      >
        Why Choose Us?
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="rounded-3xl p-8 shadow-xl flex flex-col items-center text-center cursor-pointer"
            style={{
              background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
              color: "white",
              boxShadow:
                "0 10px 20px rgba(169, 55, 225, 0.4), 0 6px 6px rgba(223, 115, 48, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              boxShadow:
                "0 20px 40px rgba(169, 55, 225, 0.6), 0 10px 15px rgba(223, 115, 48, 0.5)",
            }}
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
            <div className="w-14 h-1 bg-accent rounded-full mb-5" style={{backgroundColor: "var(--accent)"}}></div>
            <p className="text-base leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoos;
