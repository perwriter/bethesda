import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [data, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setShowButtons(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  if (!data.length) return null; // Ensure data is available before rendering

  return (
    <section
      className="relative w-full  h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${data[currentIndex]?.image?.url})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-6 sm:px-10">
            <motion.h2
              className="text-3xl font-bold max-w-4xl sm:text-5xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {data[currentIndex]?.heading}
            </motion.h2>

            <motion.p
              className="mt-4 text-lg max-w-xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {data[currentIndex]?.description}
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-lg border border-primary bg-secondary px-12 py-3 text-sm font-medium hover:bg-primary transition"
              >
                {data[currentIndex]?.buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {showButtons && (
        <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-70 text-white text-3xl px-5 py-2 rounded-full hover:bg-primary transition"
            onClick={goToPrev}
          >
            &#8249;
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-70 text-white text-3xl px-5 py-2 rounded-full hover:bg-primary transition"
            onClick={goToNext}
          >
            &#8250;
          </button>
        </>
      )}
    </section>
  );
}
