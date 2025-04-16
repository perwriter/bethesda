
"use client";

import { useState, useEffect } from "react";
import { queryHomepage } from "@/app/services/index";
import Banner from "@/app/components/Banner";
import Blog from "@/app/components/Blogs";
import CTAButton from "@/app/components/Cta";
import Questions from "@/app/components/Questions";
import Services from "@/app/components/Services";

export default function Page() {
  const [data, setData] = useState();

  useEffect(() => {
    getBannerData();
  }, []);

  const getBannerData = async () => {
    const res = await queryHomepage();
    setData(res);
    return;
  };

  return (
    <main className="min-h-screen ">
      <Banner data={data?.banners} />
      <Services data={data?.services} />
      <Blog data={data?.bloglists} />
      <CTAButton data={data?.ctas[0]} />
      <Questions data={data?.faqs} />
      {/* Google Maps Section */}
      <div className="flex flex-col items-center justify-center w-full py-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255346.08576255012!2d35.996553102471424!3d-0.2424821341186138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829eb2325fae3f9%3A0x8c5cf11ad65927f8!2sBethesda%20Childcare%20Center!5e0!3m2!1sen!2ske!4v1742526565050!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}