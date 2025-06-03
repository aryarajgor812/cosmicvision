"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Elara Moonstone",
    position: "CEO, Nebula Enterprises",
    company: "Nebula Enterprises",
    comment: "CosmicVision transformed our brand into something truly stellar. Their creative approach and strategic thinking helped us stand out in a crowded market. The team's commitment to excellence and attention to detail exceeded our expectations.",
    avatar: "https://ext.same-assets.com/4270750593/281581329.webp",
    rating: 5
  },
  {
    id: 2,
    name: "Orion Starfield",
    position: "Marketing Director, Stellar Systems",
    company: "Stellar Systems",
    comment: "Working with CosmicVision has been a journey through the cosmos! Their team understood our vision perfectly and delivered a website that captures the essence of our brand. The design is not just visually stunning but also highly functional.",
    avatar: "https://ext.same-assets.com/4270750593/1934781008.webp",
    rating: 5
  },
  {
    id: 3,
    name: "Nova Bright",
    position: "Founder, Galaxy Innovations",
    company: "Galaxy Innovations",
    comment: "The CosmicVision team brings a rare combination of creativity, technical expertise, and business acumen. They didn't just redesign our brand; they reimagined what it could be. Our engagement metrics have skyrocketed since launch.",
    avatar: "https://ext.same-assets.com/4270750593/873650197.webp",
    rating: 5
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);

  const handleImageError = useCallback((testimonialId: number) => {
    setImageErrors(prev => new Set(prev).add(testimonialId));
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate testimonials with pause functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextTestimonial, 8000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);



  return (
    <section className="py-24 bg-gradient-to-b from-cosmic-deep-blue/50 to-cosmic-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-cosmic-purple/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cosmic-teal/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            <span className="text-gradient">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
            Hear from the visionaries we've partnered with on their cosmic journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="cosmic-card p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="md:w-1/4 flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-cosmic-purple/30 bg-cosmic-deep-blue/50">
                      {imageErrors.has(testimonials[current].id) ? (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cosmic-purple/30 to-cosmic-teal/30">
                          <span className="text-2xl">👤</span>
                        </div>
                      ) : (
                        <Image
                          src={testimonials[current].avatar}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(testimonials[current].id)}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-cosmic-light">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-sm text-cosmic-light/70">
                      {testimonials[current].position}
                    </p>
                    <div className="flex items-center justify-center mt-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-cosmic-teal text-cosmic-teal" />
                      ))}
                    </div>
                  </div>

                  <div className="md:w-3/4 relative">
                    <Quote className="absolute -top-6 -left-6 h-12 w-12 text-cosmic-purple/20 rotate-180" />
                    <p className="text-cosmic-light/90 text-lg leading-relaxed">
                      {testimonials[current].comment}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div
              className="flex justify-center mt-8 gap-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-cosmic-deep-blue border border-cosmic-purple/30 hover:bg-cosmic-purple/20 text-cosmic-light/70 hover:text-cosmic-light transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent(i);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === current
                        ? "bg-cosmic-purple w-6"
                        : "bg-cosmic-purple/30 hover:bg-cosmic-purple/50"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-cosmic-deep-blue border border-cosmic-purple/30 hover:bg-cosmic-purple/20 text-cosmic-light/70 hover:text-cosmic-light transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
