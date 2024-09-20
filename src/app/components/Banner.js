import { useState, useEffect } from "react";
import Link from "next/link";

export default function Banner({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // To control the fading effect
  const [isPaused, setIsPaused] = useState(false); // To control whether the slider is paused
  const [showButtons, setShowButtons] = useState(false); // Control button visibility

  useEffect(() => {
    // Set an interval to change the slide every 5 seconds, if not paused
    if (!isPaused) {
      const interval = setInterval(() => {
        setFade(false); // Start fading out

        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Move to the next slide
          setFade(true); // Fade in after changing slide
        }, 1000); // 1 second fade out before changing slide
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval); // Cleanup the interval on unmount
    }
  }, [data, isPaused]);

  // Function to handle pausing the slider on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    setShowButtons(true); // Show the buttons on hover
  };

  // Function to handle resuming the slider after hover
  const handleMouseLeave = () => {
    setIsPaused(false);
    setShowButtons(false); // Hide the buttons when not hovering
  };

  // Manually go to the next slide
  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setFade(true);
    }, 500); // Adjusted transition time for manual clicks
  };

  // Manually go to the previous slide
  const goToPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500);
  };

  return (
    <>
      {data && (
        <section
          className="relative w-full h-screen"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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

                <p className="mt-4 text-lg">{data[currentIndex]?.description}</p>

                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded border border-primary bg-secondary px-12 py-3 text-sm font-medium hover:bg-primary"
                >
                  {data[currentIndex]?.buttonText}
                </Link>
              </div>

              {/* Next/Previous Buttons (only shown on hover) */}
              {showButtons && (
                <>
                  {/* Previous Button */}
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-70 text-white text-3xl  px-2 rounded-full hover:bg-primary transition"
                    onClick={goToPrev}
                  >
                    &#8249; {/* Left arrow */}
                  </button>

                  {/* Next Button */}
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-70 text-white text-3xl px-2 rounded-full hover:bg-primary transition"
                    onClick={goToNext}
                  >
                    &#8250; {/* Right arrow */}
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
