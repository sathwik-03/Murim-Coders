import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Floating Katanas */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-4"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="katana-blade bg-gradient-to-r from-gray-300 to-gray-500 h-2 rounded-full relative">
          <div className="katana-handle absolute -right-6 top-0 w-8 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded"></div>
          <div className="katana-glow absolute inset-0 bg-cyan-400/30 blur-sm rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 w-28 h-4"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="katana-blade bg-gradient-to-r from-gray-300 to-gray-500 h-2 rounded-full relative">
          <div className="katana-handle absolute -right-6 top-0 w-8 h-2 bg-gradient-to-r from-red-600 to-red-800 rounded"></div>
          <div className="katana-glow absolute inset-0 bg-purple-400/30 blur-sm rounded-full"></div>
        </div>
      </motion.div>

      {/* Floating Scrolls */}
      <motion.div
        className="absolute top-60 left-1/4 w-16 h-20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="scroll-paper bg-gradient-to-b from-amber-100 to-amber-200 h-full rounded-sm relative shadow-lg">
          <div className="scroll-rod absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
          <div className="scroll-rod absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
          <div className="scroll-text absolute inset-2 text-xs text-gray-800 opacity-50">道</div>
          <div className="scroll-glow absolute inset-0 bg-yellow-400/20 blur-md rounded-sm"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-1/3 w-14 h-18"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        <div className="scroll-paper bg-gradient-to-b from-amber-100 to-amber-200 h-full rounded-sm relative shadow-lg">
          <div className="scroll-rod absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
          <div className="scroll-rod absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
          <div className="scroll-text absolute inset-2 text-xs text-gray-800 opacity-50">武</div>
          <div className="scroll-glow absolute inset-0 bg-cyan-400/20 blur-md rounded-sm"></div>
        </div>
      </motion.div>

      {/* Floating Rocks */}
      <motion.div
        className="absolute top-1/3 left-20 w-12 h-8"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="floating-rock bg-gradient-to-br from-gray-600 to-gray-800 h-full rounded-lg relative shadow-xl">
          <div className="rock-glow absolute inset-0 bg-purple-400/20 blur-lg rounded-lg"></div>
          <div className="rock-crystal absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-80"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-16 w-10 h-6"
        animate={{
          y: [0, 18, 0],
          x: [0, -8, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      >
        <div className="floating-rock bg-gradient-to-br from-gray-600 to-gray-800 h-full rounded-lg relative shadow-xl">
          <div className="rock-glow absolute inset-0 bg-red-400/20 blur-lg rounded-lg"></div>
          <div className="rock-crystal absolute top-1 left-1 w-2 h-2 bg-red-400 rounded-full opacity-80"></div>
        </div>
      </motion.div>

      {/* Mystical Portals */}
      <motion.div
        className="absolute top-1/2 left-10 w-20 h-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="portal-ring border-2 border-purple-400/30 rounded-full h-full relative">
          <div className="portal-inner absolute inset-2 border border-cyan-400/20 rounded-full">
            <div className="portal-core absolute inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-sm"></div>
          </div>
          <div className="portal-glow absolute inset-0 bg-purple-400/10 blur-xl rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      >
        <div className="portal-ring border-2 border-cyan-400/30 rounded-full h-full relative">
          <div className="portal-inner absolute inset-2 border border-red-400/20 rounded-full">
            <div className="portal-core absolute inset-2 bg-gradient-to-r from-cyan-500/20 to-red-500/20 rounded-full blur-sm"></div>
          </div>
          <div className="portal-glow absolute inset-0 bg-cyan-400/10 blur-xl rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingElements;