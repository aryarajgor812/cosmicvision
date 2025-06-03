"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = [
  { text: "કોસ્મિક વિઝન", lang: "Gujarati", code: "gu" },
  { text: "காஸ்மிக் விஷன்", lang: "Tamil", code: "ta" },
  { text: "ಕಾಸ್ಮಿಕ್ ವಿಷನ್", lang: "Kannada", code: "kn" },
  { text: "コズミックビジョン", lang: "Japanese", code: "ja" },
  { text: "코스믹 비전", lang: "Korean", code: "ko" },
  { text: "കോസ്മിക് വിഷൻ", lang: "Malayalam", code: "ml" },
  { text: "कॉस्मिक विज़न", lang: "Hindi", code: "hi" },
  { text: "Visión Cósmica", lang: "Spanish", code: "es" },
  { text: "Vision Cosmique", lang: "French", code: "fr" },
  { text: "Cosmic Vision", lang: "English", code: "en" },
];

interface CosmicLoaderProps {
  onComplete: () => void;
}

export function CosmicLoader({ onComplete }: CosmicLoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === translations.length - 1) {
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 1500);
          }, 4000); // Extended time for final animation
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #1a1b3a 0%, #0a0e27 100%)",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-cyan rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center">
        {/* Cosmic logo animation */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
        >
          <div className="relative w-24 h-24 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-violet"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full bg-cosmic-dark flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-cyan to-cosmic-violet"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Language text animation */}
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.6,
              }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-space-grotesk font-bold mb-4"
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #06b6d4 50%, #22d3ee 75%, #ec4899 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {translations[currentIndex].text}
              </motion.h1>


            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <motion.div
          className="mt-12 w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="h-1 bg-cosmic-midnight rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-violet rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / translations.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-between mt-3">
            {translations.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentIndex ? 'bg-cosmic-cyan' : 'bg-cosmic-midnight'
                }`}
                animate={{
                  scale: index === currentIndex ? 1.5 : 1,
                  opacity: index <= currentIndex ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Enhanced final animation for English */}
        {currentIndex === translations.length - 1 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {/* Background text that gets covered */}
            <motion.div
              className="absolute text-6xl md:text-8xl font-space-grotesk font-bold text-cosmic-light/20"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0.1, scale: 0.95 }}
              transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
            >
              Vision Cosmique
            </motion.div>

            {/* Foreground English text that covers */}
            <motion.div
              className="relative z-10 text-6xl md:text-8xl font-space-grotesk font-bold"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #06b6d4 50%, #22d3ee 75%, #ec4899 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 200%",
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                opacity: { delay: 2.5, duration: 1, ease: "easeOut" },
                scale: { delay: 2.5, duration: 1, type: "spring", stiffness: 200 },
                y: { delay: 2.5, duration: 1, ease: "easeOut" },
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Cosmic Vision
            </motion.div>

            {/* Particle burst effect */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cosmic-cyan rounded-full"
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 200}%`,
                    y: `${50 + (Math.random() - 0.5) * 200}%`,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    delay: 2.8 + Math.random() * 0.5,
                    duration: 2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Cosmic rays effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cosmic-cyan/30 to-transparent"
            style={{
              left: `${(i + 1) * 12.5}%`,
              transformOrigin: "center bottom",
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
