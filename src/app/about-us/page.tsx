import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | CosmicVision",
  description: "Learn about CosmicVision, our story, our team, and our mission to elevate brands to cosmic heights."
};

export default function AboutUs() {
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
          <div className="max-w-4xl mx-auto text-center">
            <span className="px-4 py-1.5 text-sm rounded-full bg-cosmic-deep-blue/50 text-cosmic-teal border border-cosmic-purple/30 mb-4 font-medium inline-block">
              Our Cosmic Journey
            </span>

            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Let Us Show You What Happens When You Get
              <br />
              <span className="text-gradient">#BrandedByCosmicVision</span>
            </h1>

            <p className="text-xl text-cosmic-light/80 mb-8 max-w-3xl mx-auto">
              CosmicVision's inception is still a mystery (much like the creation of the universe itself), but what we can tell you is that it's a wild series of events that brought us here.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="rounded-xl overflow-hidden cosmic-card">
              <Image
                src="https://ext.same-assets.com/4270750593/3976548136.webp"
                alt="CosmicVision Team"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-cosmic-dark to-cosmic-deep-blue/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-8 text-gradient text-center">
              Where The Magic Happens, Every Single Time!
            </h2>

            <div className="cosmic-card p-8 md:p-12 space-y-6 text-cosmic-light/90 text-lg">
              <p>
                We started as four friends who wanted to do different things in life. Each of us had a different thought process and skill set, but we all had a common love for design, creativity, and the start-up culture, and that is what brought us together.
              </p>
              <p>
                We literally started CosmicVision out of a basement with 2 laptops and a few phones. Today we are a team of almost 25+ cosmic explorers who love their work. That's the thing – if you aren't a tad bit crazy about creativity, you don't make it to CosmicVision.
              </p>
              <p>
                Our work isn't just aesthetically pleasing, it's behavior-driven. We believe what separates a good design from a great one is its ability to solve problems. We try to design-think through everything we do at CosmicVision, always aiming for the stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-cosmic-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              <span className="text-gradient">Our Cosmic Process</span>
            </h2>
            <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
              A step-by-step journey from initial contact to launching your brand into the stratosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="cosmic-card p-6 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-cosmic-purple/20 transition-all duration-300 group-hover:scale-150" />

              <span className="text-5xl font-space-grotesk font-bold text-cosmic-purple/30 mb-4 block">01</span>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light mb-3">Initial Contact</h3>
              <p className="text-cosmic-light/70">
                You found us through search, social media, or referral – your quest for cosmic design has begun. Our team will connect with you to understand your vision.
              </p>
            </div>

            {/* Step 2 */}
            <div className="cosmic-card p-6 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-cosmic-teal/20 transition-all duration-300 group-hover:scale-150" />

              <span className="text-5xl font-space-grotesk font-bold text-cosmic-teal/30 mb-4 block">02</span>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light mb-3">Exploration Meeting</h3>
              <p className="text-cosmic-light/70">
                We dive deep into understanding your business, goals, and requirements through a detailed discussion about your project scope, timelines, and vision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="cosmic-card p-6 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-cosmic-nebula-pink/20 transition-all duration-300 group-hover:scale-150" />

              <span className="text-5xl font-space-grotesk font-bold text-cosmic-nebula-pink/30 mb-4 block">03</span>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light mb-3">Strategic Planning</h3>
              <p className="text-cosmic-light/70">
                Our team analyzes your needs, conducts market research, and develops a strategic roadmap tailored to your cosmic ambitions.
              </p>
            </div>

            {/* Step 4 */}
            <div className="cosmic-card p-6 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-cosmic-star-yellow/20 transition-all duration-300 group-hover:scale-150" />

              <span className="text-5xl font-space-grotesk font-bold text-cosmic-star-yellow/30 mb-4 block">04</span>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light mb-3">Concept Development</h3>
              <p className="text-cosmic-light/70">
                We create thoughtful concepts based on our research, presenting fresh perspectives and innovative solutions for your brand challenges.
              </p>
            </div>

            {/* Step 5 */}
            <div className="cosmic-card p-6 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-cosmic-galaxy-blue/20 transition-all duration-300 group-hover:scale-150" />

              <span className="text-5xl font-space-grotesk font-bold text-cosmic-galaxy-blue/30 mb-4 block">05</span>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light mb-3">Creation & Refinement</h3>
              <p className="text-cosmic-light/70">
                Our creative team brings your vision to life, incorporating your feedback to perfect the final product through iterative collaboration.
              </p>
            </div>

            {/* Step 6 */}
            <div className="cosmic-card p-6 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-cosmic-purple/20 transition-all duration-300 group-hover:scale-150" />

              <span className="text-5xl font-space-grotesk font-bold text-cosmic-purple/30 mb-4 block">06</span>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light mb-3">Launch & Beyond</h3>
              <p className="text-cosmic-light/70">
                We deliver your project and continue to support your journey with optimization, maintenance, and growth strategies for ongoing cosmic success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-cosmic-deep-blue/50 to-cosmic-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              <span className="text-gradient">Meet The Team</span>
            </h2>
            <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
              Our cosmic collective of creative minds who will be working with you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="cosmic-card p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden cosmic-border">
                <Image
                  src="https://ext.same-assets.com/4270750593/281581329.webp"
                  alt="Nova Stellar"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light">Nova Stellar</h3>
              <p className="text-cosmic-light/70 mb-3">Founder & Creative Director</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-cosmic-deep-blue flex items-center justify-center text-cosmic-light/70 hover:text-cosmic-teal transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="cosmic-card p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden cosmic-border">
                <Image
                  src="https://ext.same-assets.com/4270750593/1934781008.webp"
                  alt="Orion Darkstar"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light">Orion Darkstar</h3>
              <p className="text-cosmic-light/70 mb-3">Lead Designer</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-cosmic-deep-blue flex items-center justify-center text-cosmic-light/70 hover:text-cosmic-teal transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="cosmic-card p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden cosmic-border">
                <Image
                  src="https://ext.same-assets.com/4270750593/873650197.webp"
                  alt="Luna Eclipse"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light">Luna Eclipse</h3>
              <p className="text-cosmic-light/70 mb-3">Web Development Lead</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-cosmic-deep-blue flex items-center justify-center text-cosmic-light/70 hover:text-cosmic-teal transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="cosmic-card p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden cosmic-border">
                <Image
                  src="https://ext.same-assets.com/4270750593/2195498096.gif"
                  alt="Astro Glide"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold text-cosmic-light">Astro Glide</h3>
              <p className="text-cosmic-light/70 mb-3">Strategy Director</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-cosmic-deep-blue flex items-center justify-center text-cosmic-light/70 hover:text-cosmic-teal transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
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
              Ready to Join Our <span className="text-gradient">Cosmic Mission?</span>
            </h2>

            <p className="text-xl text-cosmic-light/80 mb-12 max-w-3xl mx-auto">
              Partner with us to transform your brand into a cosmic force that captivates, engages, and inspires your audience.
            </p>

            <Button
              className="px-8 py-6 text-lg bg-cosmic-purple hover:bg-cosmic-purple/90 group"
              asChild
            >
              <Link href="/contact-us">
                Let's Collaborate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
