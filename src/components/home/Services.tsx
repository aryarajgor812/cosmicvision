"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Palette, Figma, Code, Camera, Package, Search } from "lucide-react";

const services = [
  {
    id: "branding",
    title: "Branding",
    icon: <Palette className="h-6 w-6 text-cosmic-purple" />,
    description: "Craft a brand that speaks your unique truth and resonates with your audience.",
    features: [
      "Brand Identity",
      "Brand Strategy",
      "Brand Messaging",
      "Visual Identity"
    ],
    link: "/services/branding"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: <Figma className="h-6 w-6 text-cosmic-teal" />,
    description: "Create seamless experiences that keep users engaged and coming back for more.",
    features: [
      "User-Centered Design",
      "Wireframing & Prototyping",
      "Responsive Design",
      "User Research & Testing"
    ],
    link: "/services/ui-ux-design"
  },
  {
    id: "development",
    title: "Web Development",
    icon: <Code className="h-6 w-6 text-cosmic-nebula-pink" />,
    description: "Build fast, sleek websites that impress every visitor and drive conversions.",
    features: [
      "Custom Web Solutions",
      "Performance & Speed",
      "Responsive & Scalable",
      "SEO & Security Integration"
    ],
    link: "/services/web-development"
  },
  {
    id: "photography",
    title: "Product Photography",
    icon: <Camera className="h-6 w-6 text-cosmic-star-yellow" />,
    description: "Capture your products beautifully to inspire instant desire in your customers.",
    features: [
      "Stunning Visuals",
      "Brand Storytelling",
      "Attention to Detail",
      "Versatile Formats"
    ],
    link: "/services/product-photography"
  },
  {
    id: "packaging",
    title: "Packaging Design",
    icon: <Package className="h-6 w-6 text-cosmic-galaxy-blue" />,
    description: "Create packaging that tells your story and entices buyers from the shelf.",
    features: [
      "Creative Concepts",
      "Functional Design",
      "Sustainability Focus",
      "Market Appeal"
    ],
    link: "/services/packaging-design"
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    icon: <Search className="h-6 w-6 text-cosmic-purple" />,
    description: "Boost your visibility and rank higher in searches to drive quality traffic.",
    features: [
      "Comprehensive Audits",
      "Keyword Strategy",
      "On-Page Optimization",
      "Continuous Monitoring"
    ],
    link: "/services/seo"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="py-24 bg-gradient-to-b from-cosmic-dark to-cosmic-deep-blue/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            <span className="text-gradient">Beyond Services</span>
          </h2>
          <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
            We work across various connected verticals of product and marketing, both independently and as an integrated partner.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Service Navigation */}
          <div className="md:w-1/3">
            <div className="space-y-2 sticky top-24">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-500 flex items-center gap-3 group interactive-element
                    ${activeService === service.id
                      ? 'process-box active'
                      : 'process-box'}`}
                >
                  <div className={`p-2 rounded-md transition-all duration-300
                    ${activeService === service.id
                      ? 'bg-cosmic-deep-blue/80'
                      : 'bg-cosmic-deep-blue/30'}`}>
                    {service.icon}
                  </div>
                  <span className={`font-medium transition-colors ${
                    activeService === service.id
                      ? 'text-cosmic-light'
                      : 'text-cosmic-light/70'
                  }`}>
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                activeService === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cosmic-card p-8"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-md bg-cosmic-deep-blue/80">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-cosmic-light/80 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-cosmic-purple/20 text-cosmic-teal">
                            <span className="text-xs">✓</span>
                          </div>
                          <span className="text-cosmic-light/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.link}
                      className="inline-flex items-center text-cosmic-cyan hover:text-cosmic-violet font-semibold group interactive-element"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
