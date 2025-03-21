"use client";
import { useEffect, useState } from "react";
import { querySponsors } from "@/app/services/index"; // Import querySponsors function
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Assuming you're using Lucide icons

export default function Sponsors() {
  const [sponsorsData, setSponsorsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await querySponsors(); // Call function to fetch sponsors
        setSponsorsData(response.sponsors);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  if (loading) return <p className="min-h-screen">Loading...</p>;
  if (error) return <p className="min-h-screen">Error: {error}</p>;

  return (
    <div className="container min-h-screen mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Our Sponsors</h1>

      {/* Introductory Text Section */}
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Champions of Change: The Stories Behind Our Financial Sponsors
        </h2>
        <p className="text-gray-600">
          Behind every great initiative, there are people who believe in its
          impact and invest in its future. Here are four inspiring individuals
          who have played a key role in supporting our mission:
        </p>
      </div>

      {/* Sponsors List */}
      {sponsorsData?.map((sponsor, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-purple-200 rounded-[30px] transform rotate-3"></div>
            <div className="relative z-10 rounded-[30px] overflow-hidden border-8 border-white shadow-lg">
              <Image
                src={sponsor.sponsorImage.url}
                alt={sponsor.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{sponsor.title}</h2>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: sponsor.story.html }}
            />
            
          </div>
        </div>
      ))}
    </div>
  );
}