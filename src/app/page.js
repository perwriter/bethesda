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
      <Banner  data={data?.banners} />
      <Services data={data?.services} />
      <Blog data={data?.bloglists} />
      <CTAButton data={data?.ctas[0]} />
      <Questions data={data?.faqs} />
    </main>
  );
}
