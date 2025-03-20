"use client";
import { useEffect, useState } from "react";
import { queryPrivacies } from "@/app/services/index"; // Corrected function name

export default function Privacy() {
  const [privacyData, setPrivacyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrivacy = async () => {
      try {
        const response = await queryPrivacies(); // Corrected function call
        setPrivacyData(response.privacies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacy();
  }, []);

  if (loading) return <p className="min-h-screen">Loading...</p>;
  if (error) return <p className="min-h-screen" >Error: {error}</p>

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      {privacyData?.map((item, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.privacy.html }} />
        </div>
      ))}
    </div>
  );
}
