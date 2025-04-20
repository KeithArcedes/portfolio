"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-[url('/images/home-pattern.png')] bg-cover bg-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Hello, I'm <span className="font-bold">Keith Arcedes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl  mb-2">
            Web Developer | Tech Enthusiast
          </p>
          <p className="text-base mb-8">
            I create beautiful and functional web applications that make a
            difference. .
          </p>
          <div className="flex justify-start space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-110 transition transform">
              View Projects
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col space-y-12 mt-5 md:mt-0">
          <motion.img
            src="/images/small-celestial-fog.png"
            alt="Image 1"
            className="w-80 h-100 mb-12 pb-12 object-cover rounded-lg bg-cover bg-center"
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Move to its original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          />
          <motion.img
            src="/images/moon art.png"
            alt="Image 2"
            className="w-80 h-100 object-cover rounded-lg"
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Move to its original position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Add delay for staggered effect
          />
        </div>
      </div>

      {/* Gradient Line and Arrowhead */}

      <motion.div
        className="absolute place-items-start bottom-6 left-10 flex flex-col items-center ms-12 ps-6"
        animate={{
          y: [0, 10, 0], // Moves down 10px and back to the original position
        }}
        transition={{
          duration: 1.5, // Animation duration
          repeat: Infinity, // Infinite loop
          ease: "easeInOut", // Smooth easing
        }}
      >
        {/* Gradient Line */}
        <div className="w-1 h-24 bg-gradient-to-b from-purple-500 to-green-500"></div>

        {/* Arrowhead */}
        <div className="w-0 h-0 mt-1 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-green-500"></div>
      </motion.div>
    </section>
  );
}
