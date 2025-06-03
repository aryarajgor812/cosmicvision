"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Sample projects data
const projects = [
  {
    id: "project-1",
    title: "Nebula Energy Drink",
    category: "Branding • Packaging • Web Design",
    description: "A cosmic energy drink for the new age explorer",
    image: "https://ext.same-assets.com/3832141551/2018733539.svg",
    link: "/portfolio/nebula"
  },
  {
    id: "project-2",
    title: "Constellation Finance",
    category: "UI/UX • Web Development",
    description: "Illuminating the path to financial freedom",
    image: "https://ext.same-assets.com/3832141551/2906192847.webp",
    link: "/portfolio/constellation"
  },
  {
    id: "project-3",
    title: "Orbit Communications",
    category: "Branding • Marketing",
    description: "Revolving around your messaging needs",
    image: "https://ext.same-assets.com/3832141551/336984055.webp",
    link: "/portfolio/orbit"
  },
  {
    id: "project-4",
    title: "Stellar Apparel",
    category: "Branding • Photography",
    description: "Fashion that's out of this world",
    image: "https://ext.same-assets.com/3832141551/962726883.avif",
    link: "/portfolio/stellar"
  },
  {
    id: "project-5",
    title: "Galactic Cuisine",
    category: "Branding • Packaging • Photography",
    description: "Taste the universe in every bite",
    image: "https://ext.same-assets.com/3832141551/2357494123.webp",
    link: "/portfolio/galactic"
  },
];

export default function FeaturedProjects() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleImageError = useCallback((projectId: string) => {
    setImageErrors(prev => new Set(prev).add(projectId));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-cosmic-dark via-cosmic-midnight to-cosmic-dark relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-cosmic-purple/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cosmic-cyan/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-6">
              <span className="text-gradient neon-glow">Featured Projects</span>
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-light/80 max-w-2xl leading-relaxed">
              While the journey excites us, our greatest joy comes from helping our partners achieve impactful results. Explore our cosmic creations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="glass-morphism hover:bg-cosmic-purple/20 btn-magnetic border-cosmic-purple/50"
              asChild
            >
              <Link href="/portfolio" className="group flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <ExternalLink className="ml-1 h-3 w-3 opacity-60" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="cosmic-card overflow-hidden group cursor-pointer h-full">
                  <Link href={project.link} className="block h-full">
                    <div className="h-64 overflow-hidden relative bg-cosmic-deep-blue/50">
                      {imageErrors.has(project.id) ? (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cosmic-purple/20 to-cosmic-teal/20">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-cosmic-purple/30 flex items-center justify-center">
                              <span className="text-2xl">🎨</span>
                            </div>
                            <p className="text-cosmic-light/70 text-sm">Project Preview</p>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={() => handleImageError(project.id)}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-cosmic-teal mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-space-grotesk font-semibold text-cosmic-light mb-2 group-hover:text-cosmic-teal transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-cosmic-light/70 mb-4">
                        {project.description}
                      </p>
                      <span className="text-cosmic-teal font-medium inline-flex items-center">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="position-static bg-cosmic-deep-blue hover:bg-cosmic-purple/30 border-cosmic-purple/30" />
            <CarouselNext className="position-static bg-cosmic-deep-blue hover:bg-cosmic-purple/30 border-cosmic-purple/30" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
