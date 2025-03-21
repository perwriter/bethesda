"use client";
import { useEffect, useState } from "react";
import { queryDisclaimers } from "@/app/services/index"; // Corrected function name

export default function Disclaimer() {
  const [disclaimerData, setDisclaimerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisclaimer = async () => {
      try {
        const response = await queryDisclaimers(); // Corrected function call
        setDisclaimerData(response.disclaimers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDisclaimer();
  }, []);

  if (loading) return <p className="min-h-screen">Loading...</p>;
  if (error) return <p className="min-h-screen">Error: {error}</p>;

  return (
    <div className="container min-h-screen mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      {disclaimerData?.map((item, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
        </div>
      ))}
    </div>
  );
}