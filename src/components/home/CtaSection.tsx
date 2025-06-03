"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-deep-blue via-cosmic-dark to-cosmic-purple/40 z-0" />

      {/* Optimized animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full bg-cosmic-teal opacity-70 animate-twinkle-${i % 3 === 0 ? 'slow' : i % 3 === 1 ? '' : 'fast'}`}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 1.5 + 0.5
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i + 12}
            className="absolute w-1 h-1 rounded-full bg-cosmic-nebula-pink opacity-70 animate-twinkle"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 1.5 + 0.5
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Large glowing orb */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cosmic-purple/30 blur-[100px] opacity-60 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-6 leading-tight">
              Ready to <span className="text-gradient">Elevate Your Brand</span> to Cosmic Heights?
            </h2>

            <p className="text-xl text-cosmic-light/80 mb-12 max-w-3xl mx-auto">
              Your journey to the stars begins with a conversation. Let's explore the universe of possibilities for your brand together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                className="btn-premium text-lg font-semibold px-10 py-6 group"
                asChild
              >
                <Link href="/contact-us">
                  Start Your Cosmic Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="px-10 py-6 text-lg font-semibold cosmic-border hover:bg-cosmic-purple/20 text-cosmic-light border-cosmic-purple/50"
                asChild
              >
                <Link href="/portfolio">
                  Explore Our Universe
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
