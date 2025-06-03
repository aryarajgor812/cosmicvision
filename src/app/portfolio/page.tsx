import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Portfolio | CosmicVision",
  description: "Explore CosmicVision's portfolio of branding, UI/UX design, and web development projects. See how we've helped brands reach cosmic heights.",
};

// Project data
const projects = [
  {
    id: "nebula-energy",
    title: "Nebula Energy",
    category: "Branding • Packaging • Web Design",
    description: "A cosmic energy drink for the new age explorer",
    image: "https://ext.same-assets.com/3832141551/2018733539.svg",
    link: "/portfolio/nebula-energy"
  },
  {
    id: "constellation-finance",
    title: "Constellation Finance",
    category: "UI/UX • Web Development",
    description: "Illuminating the path to financial freedom",
    image: "https://ext.same-assets.com/3832141551/2906192847.webp",
    link: "/portfolio/constellation-finance"
  },
  {
    id: "orbit-communications",
    title: "Orbit Communications",
    category: "Branding • Marketing",
    description: "Revolving around your messaging needs",
    image: "https://ext.same-assets.com/3832141551/336984055.webp",
    link: "/portfolio/orbit-communications"
  },
  {
    id: "stellar-apparel",
    title: "Stellar Apparel",
    category: "Branding • Photography",
    description: "Fashion that's out of this world",
    image: "https://ext.same-assets.com/3832141551/962726883.avif",
    link: "/portfolio/stellar-apparel"
  },
  {
    id: "galactic-cuisine",
    title: "Galactic Cuisine",
    category: "Branding • Packaging • Photography",
    description: "Taste the universe in every bite",
    image: "https://ext.same-assets.com/3832141551/2357494123.webp",
    link: "/portfolio/galactic-cuisine"
  },
  {
    id: "meteor-software",
    title: "Meteor Software",
    category: "UI/UX • Web Development",
    description: "Blazing fast software solutions",
    image: "https://ext.same-assets.com/3832141551/233488948.webp",
    link: "/portfolio/meteor-software"
  },
  {
    id: "lunar-resort",
    title: "Lunar Resort",
    category: "Branding • Web Design",
    description: "Luxury accommodations beyond Earth",
    image: "https://ext.same-assets.com/3832141551/2816274700.webp",
    link: "/portfolio/lunar-resort"
  },
  {
    id: "astro-tech",
    title: "Astro Tech",
    category: "Branding • UI/UX • Development",
    description: "Technology inspired by the cosmos",
    image: "https://ext.same-assets.com/3832141551/1119133961.webp",
    link: "/portfolio/astro-tech"
  },
  {
    id: "nova-studios",
    title: "Nova Studios",
    category: "Branding • Photography",
    description: "Creative production with stellar results",
    image: "https://ext.same-assets.com/3832141551/3910780220.webp",
    link: "/portfolio/nova-studios"
  },
  {
    id: "pulsar-fitness",
    title: "Pulsar Fitness",
    category: "Branding • Web Design",
    description: "Energize your workout routine",
    image: "https://ext.same-assets.com/3832141551/663181398.webp",
    link: "/portfolio/pulsar-fitness"
  },
  {
    id: "cosmic-cafe",
    title: "Cosmic Café",
    category: "Branding • Packaging • Photography",
    description: "Coffee that takes you to another dimension",
    image: "https://ext.same-assets.com/3832141551/12551094.webp",
    link: "/portfolio/cosmic-cafe"
  },
  {
    id: "eclipse-fashion",
    title: "Eclipse Fashion",
    category: "Branding • Web Design • Photography",
    description: "Apparel that stands out in any crowd",
    image: "https://ext.same-assets.com/3832141551/855464014.webp",
    link: "/portfolio/eclipse-fashion"
  },
];

// Categories
const categories = [
  "All Projects",
  "Branding",
  "UI/UX Design",
  "Web Development",
  "Photography",
  "Packaging"
];

export default function Portfolio() {
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
              Our Cosmic Creations
            </span>

            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              <span className="text-gradient">Featured Projects</span>
            </h1>

            <p className="text-xl text-cosmic-light/80 mb-12 max-w-3xl mx-auto">
              Explore our universe of work. While the journey excites us, our greatest joy comes from helping our partners achieve impactful results. Have a look around!
            </p>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${category === "All Projects"
                      ? 'bg-cosmic-purple text-cosmic-light'
                      : 'bg-cosmic-deep-blue text-cosmic-light/70 hover:text-cosmic-light hover:bg-cosmic-purple/20'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 bg-cosmic-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="cosmic-card overflow-hidden group cursor-pointer h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-cosmic-dark to-cosmic-deep-blue/50 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-cosmic-purple/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cosmic-teal/5 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              <span className="text-gradient">Words From Our Clients</span>
            </h2>
            <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
              Don't just take our word for it—hear what our satisfied clients have to say.
            </p>
          </div>

          <div className="max-w-4xl mx-auto cosmic-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-cosmic-purple/30">
                  <Image
                    src="https://ext.same-assets.com/4270750593/281581329.webp"
                    alt="Elara Moonstone"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-cosmic-light">
                  Elara Moonstone
                </h3>
                <p className="text-sm text-cosmic-light/70">
                  CEO, Nebula Enterprises
                </p>
              </div>

              <div className="md:w-2/3">
                <blockquote className="text-cosmic-light/90 text-lg italic leading-relaxed">
                  "CosmicVision transformed our brand into something truly stellar. Their creative approach and strategic thinking helped us stand out in a crowded market. The team's commitment to excellence and attention to detail exceeded our expectations. We've seen a significant increase in customer engagement and brand recognition since our rebrand."
                </blockquote>
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
              Ready to <span className="text-gradient">Join Our Portfolio</span> of Cosmic Success Stories?
            </h2>

            <p className="text-xl text-cosmic-light/80 mb-12 max-w-3xl mx-auto">
              Let's collaborate to create something truly stellar for your brand. Our team is ready to launch your next project into the stratosphere.
            </p>

            <Button
              className="px-8 py-6 text-lg bg-cosmic-purple hover:bg-cosmic-purple/90 group"
              asChild
            >
              <Link href="/contact-us">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
