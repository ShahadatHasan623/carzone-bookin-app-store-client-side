import React, { useState } from "react";
import { motion } from "framer-motion";

const carBlogs = [
  {
    id: 1,
    title: "Top 10 Luxury Cars in 2025",
    excerpt: "Discover the most luxurious cars hitting the market this year.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    content:
      "Luxury cars have always been the symbol of status and comfort. In 2025, these top 10 luxury cars bring unmatched performance, design, and technology...",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Rental Car",
    excerpt: "Tips and tricks to select the best car for your needs and budget.",
    image:
      "https://i.ibb.co.com/JF2gzR4d/stephan-louis-qm1-C36-SOynk-unsplash.jpg",
    content:
      "Choosing a rental car can be overwhelming. Factors like trip duration, passenger count, and fuel efficiency should be considered to get the best deal...",
  },
  {
    id: 3,
    title: "Electric vs Gasoline Cars: Which to Rent?",
    excerpt: "Comparing the benefits and challenges of electric and gasoline vehicles.",
    image:
      "https://i.ibb.co.com/FQw2F15/pexels-hamann-la-338986-1131575.jpg",
    content:
      "Electric vehicles (EVs) are becoming more popular, but gasoline cars still have their advantages. Learn which option fits your travel style best...",
  },
  {
    id: 4,
    title: "Future of Autonomous Cars",
    excerpt: "How self-driving cars are changing transportation.",
    image:
      "https://i.ibb.co.com/XxX5bfrR/pexels-jeshoots-com-147458-13861.jpg",
    content:
      "Autonomous cars promise to revolutionize travel by improving safety and efficiency...",
  },
];

const CarBlogsGallery = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="max-w-full mx-auto px-0 my-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text)] tracking-wide">
        Latest Car Blogs
      </h2>

      <div className="grid grid-cols-2 gap-0 h-[800px] w-full">
        {carBlogs.map((blog) => (
          <div
            key={blog.id}
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(blog.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${
                hovered === blog.id ? "scale-110" : "scale-100"
              }`}
              loading="lazy"
            />

            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered === blog.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex flex-col justify-center items-center p-6 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="text-base">{blog.excerpt}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarBlogsGallery;
