"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Camera,
  MessageCircle,
  Users,
  Video,
  Send,
  CheckCircle2
} from "lucide-react";

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

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
              Ready to Take Off?
            </span>

            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Let's <span className="text-gradient">Connect</span> and Create Something Cosmic
            </h1>

            <p className="text-xl text-cosmic-light/80 mb-8 max-w-3xl mx-auto">
              Whether you're starting a new project or looking to elevate an existing brand, we're here to help you reach for the stars.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-cosmic-dark to-cosmic-deep-blue/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-space-grotesk font-bold mb-6 text-gradient">
                  Get In Touch
                </h2>

                <div className="cosmic-card p-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-cosmic-deep-blue/80 text-cosmic-purple">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-cosmic-light">Our Location</h3>
                        <p className="text-cosmic-light/70">123 Cosmic Boulevard, Starlight City, Universe 42</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-cosmic-deep-blue/80 text-cosmic-teal">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-cosmic-light">Email Us</h3>
                        <p className="text-cosmic-light/70">hello@cosmicvision.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-cosmic-deep-blue/80 text-cosmic-nebula-pink">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-cosmic-light">Call Us</h3>
                        <p className="text-cosmic-light/70">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-space-grotesk font-bold mb-4 text-cosmic-light">
                  Follow Our Cosmic Journey
                </h3>

                <div className="flex gap-3 mb-8">
                  <SocialLink icon={<Globe className="h-5 w-5" />} href="#" label="Facebook" />
                  <SocialLink icon={<Camera className="h-5 w-5" />} href="#" label="Instagram" />
                  <SocialLink icon={<MessageCircle className="h-5 w-5" />} href="#" label="Twitter" />
                  <SocialLink icon={<Users className="h-5 w-5" />} href="#" label="LinkedIn" />
                  <SocialLink icon={<Video className="h-5 w-5" />} href="#" label="YouTube" />
                </div>

                <div className="rounded-xl overflow-hidden cosmic-card">
                  <Image
                    src="https://ext.same-assets.com/4270750593/3976548136.webp"
                    alt="CosmicVision Office"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-space-grotesk font-bold mb-6 text-gradient">
                  Send Us a Message
                </h2>

                <div className="cosmic-card p-8">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-cosmic-purple/20 flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-8 w-8 text-cosmic-teal" />
                      </div>
                      <h3 className="text-2xl font-space-grotesk font-bold text-cosmic-light mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-cosmic-light/70 mb-6">
                        Thank you for reaching out. We'll get back to you within 24-48 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-cosmic-purple hover:bg-cosmic-purple/90"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-cosmic-light">
                            Full Name <span className="text-cosmic-nebula-pink">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="bg-cosmic-deep-blue/50 border-cosmic-purple/30 placeholder:text-cosmic-light/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-cosmic-light">
                            Email Address <span className="text-cosmic-nebula-pink">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="bg-cosmic-deep-blue/50 border-cosmic-purple/30 placeholder:text-cosmic-light/30"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-cosmic-light">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+1 123 456 7890"
                            value={formState.phone}
                            onChange={handleChange}
                            className="bg-cosmic-deep-blue/50 border-cosmic-purple/30 placeholder:text-cosmic-light/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-cosmic-light">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Cosmic Enterprises"
                            value={formState.company}
                            onChange={handleChange}
                            className="bg-cosmic-deep-blue/50 border-cosmic-purple/30 placeholder:text-cosmic-light/30"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-cosmic-light">
                          Your Message <span className="text-cosmic-nebula-pink">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project and how we can help..."
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="bg-cosmic-deep-blue/50 border-cosmic-purple/30 placeholder:text-cosmic-light/30 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90 py-6 flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin h-5 w-5 border-2 border-cosmic-light border-t-transparent rounded-full" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5 ml-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cosmic-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
              Here are answers to some common questions about our cosmic services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cosmic-card p-6">
              <h3 className="text-xl font-space-grotesk font-semibold text-cosmic-light mb-3">
                What services do you offer?
              </h3>
              <p className="text-cosmic-light/70">
                We offer a comprehensive range of creative services including branding, UI/UX design, web development, product photography, packaging design, and SEO optimization.
              </p>
            </div>

            <div className="cosmic-card p-6">
              <h3 className="text-xl font-space-grotesk font-semibold text-cosmic-light mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-cosmic-light/70">
                Project timelines vary based on complexity and scope. A branding project might take 4-6 weeks, while a website could take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="cosmic-card p-6">
              <h3 className="text-xl font-space-grotesk font-semibold text-cosmic-light mb-3">
                What is your pricing structure?
              </h3>
              <p className="text-cosmic-light/70">
                We customize our pricing based on project requirements. We offer both project-based and retainer options to accommodate different needs and budgets. Contact us for a personalized quote.
              </p>
            </div>

            <div className="cosmic-card p-6">
              <h3 className="text-xl font-space-grotesk font-semibold text-cosmic-light mb-3">
                How do I get started with CosmicVision?
              </h3>
              <p className="text-cosmic-light/70">
                Simply reach out to us through the contact form on this page, send us an email, or give us a call. We'll schedule an initial consultation to discuss your project needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-cosmic-deep-blue flex items-center justify-center text-cosmic-light/70 hover:text-cosmic-teal hover:bg-cosmic-purple/20 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
