"use client";
import React, { useState, useEffect } from "react";
import { queryGallery } from "@/app/services/index";

const Gallery = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch the gallery data when the component mounts
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
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + data.length) % data.length
    );
  };

  return (
    <div className=" container mx-auto px-4 pt-6 gallery grid grid-cols-2 sm:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onClick={() => openModal(index)}
        >
          {/* Image */}
          <img
            src={item.image.url}
            alt={item.title}
            className="w-full h-60 object-cover"
          />

          {/* Title overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white text-xl transition-opacity">
            {item.title}
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && currentImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-4/5 h-4/5">
            {/* Image */}
            <div className="relative w-full h-full rounded-lg">
              <img
                src={data[currentImageIndex].image.url}
                alt={data[currentImageIndex].title}
                className="w-full h-full  object-contain"
              />

              {/* Title Overlay */}
              <div className="absolute top-0 left-0 w-full p-4 bg-purple-800 bg-opacity-76 text-white text-center text-2xl">
                {data[currentImageIndex].title}
              </div>
            </div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Next and Previous buttons */}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
