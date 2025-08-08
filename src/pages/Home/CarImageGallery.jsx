import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "https://i.ibb.co/bjrxx9Bq/enmanuel-abreu-quezada-Q-EUrr-HHMo-unsplash.jpg",
    alt: "Car Front View",
    label: "Front View"
  },
  {
    id: 2,
    src: "https://i.ibb.co/nqRC2jHw/luca-nicoletti-s-C0m-Uew-agw-unsplash.jpg",
    alt: "Car Back View",
    label: "Back View"
  },
  {
    id: 3,
    src: "https://i.ibb.co/wZBCX1Jz/oliur-ovr-OPhu8v-Sw-unsplash.jpg",
    alt: "Car Interior",
    label: "Interior"
  },
  {
    id: 4,
    src: "https://i.ibb.co/tTQTgddD/eyosias-g-726-Y6h-Bac-V0-unsplash.jpg",
    alt: "Car Wheel Zoom",
    label: "Wheel Close-up"
  },
];

const CarImageGallery = () => {
  return (
    <div
      className="max-w-7xl mx-auto lg:px-0 px-6 mt-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <h2
        className="text-4xl font-extrabold text-center mb-12 select-none"
        style={{ color: "var(--text)" }}
      >
        Explore the Car in Detail
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-white cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: img.id * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(169, 55, 225, 0.4)" }}
          >
            <div className="relative h-60 overflow-hidden rounded-t-3xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute bottom-4 left-4 bg-purple-700 bg-opacity-90 text-white font-semibold px-4 py-1 rounded-full select-none text-sm md:text-base shadow-lg"
                style={{ backgroundColor: "var(--primary)" }}
              >
                {img.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CarImageGallery;
