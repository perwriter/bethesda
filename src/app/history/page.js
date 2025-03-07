"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { queryHistories } from "@/app/services/index";

export default function HistoryPage() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch history data on component mount
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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-lg mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our History</h1>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 border-l pr-4 border-purple-300 h-full"></div>

        {timelineData.map((event, index) => {
          const imageSrc = event.himage?.url || "/logo1.png";

          return (
            <div
              key={index}
              className={`mb-8 flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:items-center`}
            >
              <div
                className={`md:w-1/4 text-center ${
                  index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                }`}
              >
                <h2 className="text-2xl font-semibold mb-2">{event.year}</h2>
              </div>
              <div className="md:w-1/4 hidden  md:flex justify-center">
                <div className="relative w-40 h-40">
                  <Image
                    src={imageSrc}
                    alt={`Event in ${event.year}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div
                className={`md:w-1/2 text-start ${
                  index % 2 === 0 ? "md:pl-4" : "md:pr-4"
                }`}
              >
                <p className="text-lg mb-4">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
