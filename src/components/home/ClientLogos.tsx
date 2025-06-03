"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "https://ext.same-assets.com/3832141551/1704073702.webp" },
  { name: "Client 2", logo: "https://ext.same-assets.com/3832141551/2861505836.webp" },
  { name: "Client 3", logo: "https://ext.same-assets.com/3832141551/994444411.webp" },
  { name: "Client 4", logo: "https://ext.same-assets.com/3832141551/4178540779.png" },
  { name: "Client 5", logo: "https://ext.same-assets.com/3832141551/2357494123.webp" },
  { name: "Client 6", logo: "https://ext.same-assets.com/3832141551/233488948.webp" },
  { name: "Client 7", logo: "https://ext.same-assets.com/3832141551/2906192847.webp" },
  { name: "Client 8", logo: "https://ext.same-assets.com/3832141551/2816274700.webp" },
  { name: "Client 9", logo: "https://ext.same-assets.com/3832141551/1119133961.webp" },
  { name: "Client 10", logo: "https://ext.same-assets.com/3832141551/336984055.webp" },
  { name: "Client 11", logo: "https://ext.same-assets.com/3832141551/12551094.webp" },
  { name: "Client 12", logo: "https://ext.same-assets.com/3832141551/3910780220.webp" },
  { name: "Client 13", logo: "https://ext.same-assets.com/3832141551/663181398.webp" },
  { name: "Client 14", logo: "https://ext.same-assets.com/3832141551/962726883.avif" },
];

export default function ClientLogos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Optimized auto-scrolling animation
  const startAnimation = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    let isAnimating = true;
    const scrollSpeed = 0.3; // Reduced for smoother animation
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const scroll = (currentTime: number = 0) => {
      if (!isAnimating) return;

      // Throttle animation for consistent performance
      if (currentTime - lastTime < frameInterval) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      lastTime = currentTime;
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled one item width
      if (scrollPosition >= 140) { // Adjusted for better timing
        scrollPosition = 0;
        if (scrollContainer.firstChild) {
          const firstChild = scrollContainer.firstChild as HTMLElement;
          scrollContainer.appendChild(firstChild);
        }
      }

      // Use transform for better performance
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isAnimating = false;
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      isAnimating = true;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    scroll();

    // Clean up
    return () => {
      isAnimating = false;
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [startAnimation]);

  return (
    <section className="py-12 bg-cosmic-dark border-t border-b border-cosmic-purple/10">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex items-center space-x-12 py-4 transition-transform duration-300"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-cosmic-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-cosmic-dark to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
