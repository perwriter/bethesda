import { useState, useEffect } from "react";
import Link from "next/link";

export default function Banner({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // To control the fading effect

  // Automatically move to the next slide with fading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Move to the next slide
        setFade(true); // Fade in after changing slide
      }, 1000); // 1 second fade out before changing slide
    }, 5000); // Change slide every 8 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [data]);

  return (
    <>
      {data && (
        <section className="relative w-full h-screen ">
          <div className="w-full h-full relative">
            {/* Slide with background image and fade effect */}
            <div
              className={`relative w-full h-full bg-cover bg-center flex items-center justify-center text-white transition-opacity duration-1000 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${data[currentIndex]?.image?.url})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Overlay Text */}
              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {data[currentIndex]?.heading}
                </h2>

                <p className="mt-4 text-lg">
                  {data[currentIndex]?.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium hover:bg-green-700"
                >
                  {data[currentIndex]?.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
