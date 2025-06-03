"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle properties - reduced for better performance
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 15));

    // Premium particle colors
    const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#22d3ee", "#ec4899", "#f59e0b"];

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = "";
      alpha: number = 0;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.8 + 0.2;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        // Wrap around edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Animation loop with performance optimization
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    function animate(currentTime: number = 0) {
      if (!ctx || !canvas) return;

      // Throttle animation to target FPS
      if (currentTime - lastTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;

      // Use fillRect for better performance than clearRect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Batch particle updates and draws
      ctx.globalCompositeOperation = 'lighter';
      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 mx-auto flex flex-col items-center text-center">
        <motion.span
          className="px-6 py-2 text-sm rounded-full glass-morphism text-cosmic-cyan border border-cosmic-purple/30 mb-8 font-medium inline-block shimmer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          The Universe of Design & Branding
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-space-grotesk font-bold leading-tight md:leading-tight mb-8"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.3
          }}
        >
          We Exist Because <br />
          <motion.span
            className="text-gradient neon-glow"
            animate={{
              filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            The World Needs Us
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-cosmic-light/90 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.8
          }}
        >
          A Design-Thinking Company That Drives 300+ Brands Beyond Cosmic Horizons
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
            delay: 1.2
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              className="btn-premium text-lg font-semibold px-10 py-6 group"
              asChild
            >
              <Link href="/portfolio">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="outline"
              className="px-10 py-6 text-lg font-semibold glass-morphism hover:bg-cosmic-purple/20 text-cosmic-light border-cosmic-purple/50 btn-magnetic"
              asChild
            >
              <Link href="/contact-us">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced abstract shapes */}
      <motion.div
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-cosmic-purple/20 blur-3xl animate-float"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-cosmic-cyan/15 blur-3xl animate-float"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-cosmic-violet/10 blur-3xl animate-float"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </section>
  );
}
