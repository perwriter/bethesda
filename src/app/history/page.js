"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { queryHistories } from "@/app/services/index";

export default function HistoryPage() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const response = await queryHistories();
        setTimelineData(response.histories);
      } catch (error) {
        console.error("Error fetching histories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistories();
  }, []);

  useEffect(() => {
    if (timelineData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
      }, 8000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [timelineData]);

  if (loading)
    return <p className="min-h-screen text-center text-xl">Loading...</p>;

  return (
    <div className=" flex flex-col min-h-screen justify-center items-center bg-gray-50">
      <h1 className="text-5xl font-bold text-center mb-8">Our History</h1>
      <div className="flex justify-center space-x-4 mb-8">
        {timelineData.map((event, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg ${
              currentIndex === index ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {event.year}
          </button>
        ))}
      </div>
      <div className="w-full max-w-screen-lg mx-auto p-4">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-col items-center justify-center space-y-6 md:space-y-0 md:space-x-12 transition-opacity duration-500 ${
              currentIndex === index ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">{event.year}</h2>

            {/* Image Section */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
              <Image
                src={event.image?.url || "/logo1.png"}
                alt={`Event in ${event.year}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="max-w-3xl text-center md:text-center">
              <h2 className="text-3xl font-semibold mb-2">{event.year}</h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {event.title}
              </h3>
              <p className="text-lg text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
