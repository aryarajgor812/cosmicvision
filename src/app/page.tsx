import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Process from "@/components/home/Process";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <FeaturedProjects />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <CtaSection />
    </>
  );
}
