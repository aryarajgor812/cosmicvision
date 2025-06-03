"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  Rocket,
  BarChart
} from "lucide-react";

const steps = [
  {
    id: "discovery",
    title: "Discovery",
    icon: <Search className="h-6 w-6" />,
    description: "We dive deep into understanding your business, goals, audience, and competition to establish a solid foundation for our creative process.",
    color: "from-cosmic-purple to-cosmic-cyan",
    hoverColor: "from-cosmic-violet to-cosmic-purple"
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Based on our findings, we develop a tailored strategy that aligns with your objectives and sets the direction for the creative work ahead.",
    color: "from-cosmic-cyan to-cosmic-emerald",
    hoverColor: "from-cosmic-cyan to-cosmic-violet"
  },
  {
    id: "design",
    title: "Design & Development",
    icon: <Palette className="h-6 w-6" />,
    description: "Our talented team brings your vision to life with stunning designs, compelling content, and cutting-edge development techniques.",
    color: "from-cosmic-emerald to-cosmic-amber",
    hoverColor: "from-cosmic-emerald to-cosmic-cyan"
  },
  {
    id: "implementation",
    title: "Implementation",
    icon: <Rocket className="h-6 w-6" />,
    description: "We carefully deploy your project across all relevant platforms and channels, ensuring a seamless and impactful launch.",
    color: "from-cosmic-amber to-cosmic-rose",
    hoverColor: "from-cosmic-amber to-cosmic-emerald"
  },
  {
    id: "evaluation",
    title: "Evaluation & Optimization",
    icon: <BarChart className="h-6 w-6" />,
    description: "We continuously monitor performance, gather feedback, and make data-driven adjustments to optimize results and ensure long-term success.",
    color: "from-cosmic-rose to-cosmic-purple",
    hoverColor: "from-cosmic-rose to-cosmic-amber"
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Auto-scroll through steps when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-24 bg-cosmic-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cosmic-purple/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cosmic-teal/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            <span className="text-gradient">Our Cosmic Process</span>
          </h2>
          <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
            A proven methodology that takes your brand from earthbound to among the stars.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Steps */}
          <div className="md:w-1/3">
            <div className="space-y-6 relative">
              {/* Connecting line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-purple via-cosmic-teal to-cosmic-purple/30" />

              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative flex items-start gap-4 group text-left w-full p-4 rounded-xl transition-all duration-500 ${
                    activeStep === index
                      ? "process-box active"
                      : "process-box hover:scale-105"
                  }`}
                >
                  {/* Step indicator */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                    transition-all duration-500 bg-gradient-to-r ${
                      activeStep === index ? step.hoverColor : step.color
                    } p-0.5 shadow-lg`}>
                    <div className={`w-full h-full rounded-xl flex items-center justify-center
                      ${activeStep === index ? "bg-cosmic-dark/90" : "bg-cosmic-dark/80"} backdrop-blur-sm`}>
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      activeStep === index ? "text-cosmic-light" : "text-cosmic-light/80 group-hover:text-cosmic-light"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors duration-300 ${
                      activeStep === index ? "text-cosmic-light/70" : "text-cosmic-light/50 group-hover:text-cosmic-light/70"
                    }`}>
                      Step {index + 1} of {steps.length}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3">
            <motion.div
              key={steps[activeStep].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="cosmic-card p-8 h-full"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${steps[activeStep].hoverColor} p-0.5 shadow-xl`}>
                  <div className="w-full h-full rounded-2xl flex items-center justify-center bg-cosmic-dark/90 backdrop-blur-sm">
                    {steps[activeStep].icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-space-grotesk font-bold text-cosmic-light mb-1">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-cosmic-cyan">
                    Phase {activeStep + 1} • {steps[activeStep].id.charAt(0).toUpperCase() + steps[activeStep].id.slice(1)}
                  </p>
                </div>
              </div>

              <p className="text-cosmic-light/90 text-lg leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              {/* Enhanced step counter */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-space-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple to-cosmic-cyan">
                    {(activeStep + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="text-cosmic-light/30 text-2xl font-light">/</div>
                  <div className="text-2xl font-space-grotesk font-medium text-cosmic-light/50">
                    {steps.length.toString().padStart(2, '0')}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="h-2 bg-cosmic-midnight rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-violet transition-all duration-700 ease-out rounded-full"
                      style={{ width: `${(activeStep + 1) / steps.length * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index <= activeStep ? 'bg-cosmic-cyan' : 'bg-cosmic-midnight'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
