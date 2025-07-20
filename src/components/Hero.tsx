import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-red-400 font-oxanium mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MurimCoders
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-2xl text-gray-300 max-w-2xl font-satoshi"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Warriors of Web · Cultivating code through ancient scrolls and sacred portals.
      </motion.p>

      <motion.p 
        className="text-md md:text-lg text-gray-400 font-satoshi mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Akula Sathwik · Sahithya Vardhaman · Allam Venkat Sai
      </motion.p>
    </section>
  );
};

export default Hero;
