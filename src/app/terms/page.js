"use client";
import { useEffect, useState } from "react";
import { queryTerms } from "@/app/services/index"; // Import queryTerms function

export default function Terms() {
  const [termsData, setTermsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await queryTerms(); // Call function to fetch terms
        setTermsData(response.terms);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  if (loading) return <p className="min-h-screen">Loading...</p>;
  if (error) return <p className="min-h-screen" >Error: {error}</p>;

  return (
    <div className="container min-h-screen mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      {termsData?.map((item, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
        </div>
      ))}
    </div>
  );
}
