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
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        Explore the Car in Detail
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: img.id * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
            <div className="p-4 text-center text-base font-semibold text-gray-800">
              {img.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CarImageGallery;
