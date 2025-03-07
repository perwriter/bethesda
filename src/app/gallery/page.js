"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { queryGallery } from "@/app/services/index";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await queryGallery();
        setData(response.galleries);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div>
    <div className="container mx-auto px-4 py-10">
     <h1 className=" text-2xl md:text-5xl font-semibold pb-4 text-center "> Our Gallery</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(index)}
          >
            <Image
              src={item.image.url}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {item.title}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && currentImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-11/12 md:w-3/4 lg:w-1/2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={data[currentImageIndex].image.url}
                alt={data[currentImageIndex].title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg object-contain"
              />
              <motion.div
                className="absolute top-0 left-0 w-full p-4 bg-purple-700 text-white text-center text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {data[currentImageIndex].title}
              </motion.div>

              {/* Close Button */}
              <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeModal}>
                &times;
              </button>
              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={goToPrevImage}
              >
                &#8249;
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={goToNextImage}
              >
                &#8250;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default Gallery;
