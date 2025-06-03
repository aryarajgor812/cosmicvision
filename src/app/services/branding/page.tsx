import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Branding Services | CosmicVision",
  description: "Transform your brand with CosmicVision's professional branding services. We create memorable brand identities, strategies, and visual systems.",
};

export default function BrandingService() {
  return (
    <div className="bg-cosmic-dark">
      {/* Hero Section */}
      <section className="pt-16 pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cosmic-purple/5 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cosmic-teal/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="px-4 py-1.5 text-sm rounded-full bg-cosmic-deep-blue/50 text-cosmic-teal border border-cosmic-purple/30 mb-4 font-medium inline-block">
                Branding Services
              </span>

              <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 leading-tight">
                Discover Branding Solutions <span className="text-gradient">Tailored To You</span>
              </h1>

              <p className="text-xl text-cosmic-light/80 mb-8">
                At CosmicVision, we know that a strong brand is the foundation for business success. Our passionate team of experts is here to ensure your brand not only stands out but thrives in a competitive landscape.
              </p>

              <Button
                className="px-8 py-6 text-lg bg-cosmic-purple hover:bg-cosmic-purple/90 group"
                asChild
              >
                <Link href="/contact-us">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden cosmic-card">
                <Image
                  src="https://ext.same-assets.com/3832141551/2018733539.svg"
                  alt="Branding Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-cosmic-deep-blue/30 border-t border-b border-cosmic-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-space-grotesk font-bold text-cosmic-light">
              Trusted by Visionary Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={`https://ext.same-assets.com/3832141551/${1704073702 + index * 100000}.webp`}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cosmic-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              <span className="text-gradient">Our Branding Services</span>
            </h2>
            <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
              We offer a comprehensive suite of branding services designed to elevate your brand to cosmic heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="cosmic-card p-8 relative group">
              <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-700" />

              <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light mb-4">
                Brand Strategy
              </h3>

              <p className="text-cosmic-light/70 mb-6">
                We develop comprehensive brand strategies that align with your business goals and resonate with your target audience.
              </p>

              <ul className="space-y-3 mb-6">
                <ServiceFeature>Market Research & Analysis</ServiceFeature>
                <ServiceFeature>Competitor Benchmarking</ServiceFeature>
                <ServiceFeature>Brand Positioning</ServiceFeature>
                <ServiceFeature>Brand Messaging Framework</ServiceFeature>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="cosmic-card p-8 relative group">
              <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-700" />

              <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light mb-4">
                Brand Identity
              </h3>

              <p className="text-cosmic-light/70 mb-6">
                We create distinctive visual identities that capture your brand's essence and make a lasting impression.
              </p>

              <ul className="space-y-3 mb-6">
                <ServiceFeature>Logo Design & Development</ServiceFeature>
                <ServiceFeature>Color Palette Selection</ServiceFeature>
                <ServiceFeature>Typography System</ServiceFeature>
                <ServiceFeature>Brand Style Guidelines</ServiceFeature>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="cosmic-card p-8 relative group">
              <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-700" />

              <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light mb-4">
                Brand Applications
              </h3>

              <p className="text-cosmic-light/70 mb-6">
                We implement your brand across all touchpoints to ensure consistency and maximize impact.
              </p>

              <ul className="space-y-3 mb-6">
                <ServiceFeature>Business Cards & Stationery</ServiceFeature>
                <ServiceFeature>Marketing Materials</ServiceFeature>
                <ServiceFeature>Social Media Assets</ServiceFeature>
                <ServiceFeature>Brand Merchandise</ServiceFeature>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="cosmic-card p-8 relative group">
              <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-700" />

              <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light mb-4">
                Brand Storytelling
              </h3>

              <p className="text-cosmic-light/70 mb-6">
                We craft compelling narratives that connect with your audience on an emotional level and build brand loyalty.
              </p>

              <ul className="space-y-3 mb-6">
                <ServiceFeature>Brand Story Development</ServiceFeature>
                <ServiceFeature>Copywriting & Messaging</ServiceFeature>
                <ServiceFeature>Content Strategy</ServiceFeature>
                <ServiceFeature>Brand Voice Guidelines</ServiceFeature>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="cosmic-card p-8 relative group">
              <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-700" />

              <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light mb-4">
                Brand Rebranding
              </h3>

              <p className="text-cosmic-light/70 mb-6">
                We refresh and revitalize existing brands to align with evolving markets and business objectives.
              </p>

              <ul className="space-y-3 mb-6">
                <ServiceFeature>Brand Audit & Assessment</ServiceFeature>
                <ServiceFeature>Brand Evolution Strategy</ServiceFeature>
                <ServiceFeature>Identity Redesign</ServiceFeature>
                <ServiceFeature>Relaunch Campaigns</ServiceFeature>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="cosmic-card p-8 relative group">
              <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-700" />

              <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light mb-4">
                Brand Management
              </h3>

              <p className="text-cosmic-light/70 mb-6">
                We provide ongoing support to ensure your brand maintains its integrity and effectiveness over time.
              </p>

              <ul className="space-y-3 mb-6">
                <ServiceFeature>Brand Guidelines Management</ServiceFeature>
                <ServiceFeature>Brand Consistency Monitoring</ServiceFeature>
                <ServiceFeature>Brand Growth Strategies</ServiceFeature>
                <ServiceFeature>Brand Performance Metrics</ServiceFeature>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-cosmic-deep-blue/50 to-cosmic-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              <span className="text-gradient">Our Branding Process</span>
            </h2>
            <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
              A methodical approach that takes your brand from concept to cosmic reality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-purple via-cosmic-teal to-cosmic-purple/30" />

              {/* Process steps */}
              <div className="space-y-12 relative">
                <ProcessStep
                  number="01"
                  title="Discovery"
                  description="We begin by diving deep into understanding your business, target audience, competitors, and goals through research and collaboration."
                  align="right"
                />

                <ProcessStep
                  number="02"
                  title="Strategy Development"
                  description="Based on our findings, we develop a comprehensive brand strategy that defines your positioning, messaging, and overall direction."
                  align="left"
                />

                <ProcessStep
                  number="03"
                  title="Creative Exploration"
                  description="Our designers explore multiple creative directions, experimenting with different visual elements to find the perfect expression of your brand."
                  align="right"
                />

                <ProcessStep
                  number="04"
                  title="Refinement"
                  description="We refine the chosen direction based on your feedback, perfecting every detail to create a cohesive and impactful brand identity."
                  align="left"
                />

                <ProcessStep
                  number="05"
                  title="Implementation"
                  description="We apply your new brand across all touchpoints, ensuring consistency and maximizing impact across various platforms and materials."
                  align="right"
                />

                <ProcessStep
                  number="06"
                  title="Evolution"
                  description="Brands are living entities. We provide ongoing support to help your brand evolve and grow while maintaining its core identity."
                  align="left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-deep-blue via-cosmic-dark to-cosmic-purple/40 z-0" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cosmic-purple/30 blur-[100px] opacity-60 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-6">
              Ready to <span className="text-gradient">Transform Your Brand</span> with CosmicVision?
            </h2>

            <p className="text-xl text-cosmic-light/80 mb-12 max-w-3xl mx-auto">
              Let's create a brand that resonates with your audience and propels your business to new cosmic heights.
            </p>

            <Button
              className="px-8 py-6 text-lg bg-cosmic-purple hover:bg-cosmic-purple/90 group"
              asChild
            >
              <Link href="/contact-us">
                Start Your Branding Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-cosmic-purple/20 text-cosmic-teal mt-0.5">
        <Check className="h-3.5 w-3.5" />
      </div>
      <span className="text-cosmic-light/80">{children}</span>
    </li>
  );
}

function ProcessStep({
  number,
  title,
  description,
  align
}: {
  number: string;
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <div className={`flex flex-col ${align === "right" ? "md:ml-[50%]" : "md:mr-[50%] md:items-end"}`}>
      <div className="flex items-center gap-4">
        <div className={`relative ${align === "right" ? "order-first" : "md:order-last"}`}>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-cosmic-purple/50" />
          <div className="z-10 relative w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-teal flex items-center justify-center">
            <span className="text-xs font-bold text-cosmic-light">{number}</span>
          </div>
        </div>

        <div className={`cosmic-card p-6 max-w-sm ${align === "right" ? "" : "md:text-right"}`}>
          <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light mb-2">
            {title}
          </h3>
          <p className="text-cosmic-light/70">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
