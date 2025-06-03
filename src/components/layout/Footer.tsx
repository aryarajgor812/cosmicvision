"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Globe,
  Camera,
  Users,
  MessageCircle,
  Video,
  Palette,
  Code
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cosmic-dark pt-24 pb-8 border-t border-cosmic-purple/20">
      <div className="container mx-auto">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-orbitron text-2xl font-bold text-cosmic-light">
                Cosmic<span className="text-gradient">Vision</span>
              </span>
            </Link>
            <p className="text-cosmic-light/70 max-w-xs">
              We craft unforgettable brand experiences that truly connect with your audience and elevate your vision to cosmic heights.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Globe className="h-4 w-4" />} />
              <SocialLink href="https://instagram.com" icon={<Camera className="h-4 w-4" />} />
              <SocialLink href="https://twitter.com" icon={<MessageCircle className="h-4 w-4" />} />
              <SocialLink href="https://linkedin.com" icon={<Users className="h-4 w-4" />} />
              <SocialLink href="https://youtube.com" icon={<Video className="h-4 w-4" />} />
              <SocialLink href="https://dribbble.com" icon={<Palette className="h-4 w-4" />} />
              <SocialLink href="https://github.com" icon={<Code className="h-4 w-4" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-cosmic-light">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                <FooterLink href="/about-us">About Us</FooterLink>
                <FooterLink href="/portfolio">Portfolio</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/creative-studio">Creative Studio</FooterLink>
                <FooterLink href="/awards">Awards</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/contact-us">Contact Us</FooterLink>
              </ul>
            </nav>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-cosmic-light">Our Services</h3>
            <nav>
              <ul className="space-y-3">
                <FooterLink href="/services/branding">Branding</FooterLink>
                <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
                <FooterLink href="/services/web-development">Web Development</FooterLink>
                <FooterLink href="/services/product-photography">Product Photography</FooterLink>
                <FooterLink href="/services/packaging-design">Packaging Design</FooterLink>
                <FooterLink href="/services/seo">SEO</FooterLink>
              </ul>
            </nav>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-cosmic-light">Stay Updated</h3>
            <p className="text-cosmic-light/70">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-cosmic-deep-blue/50 border-cosmic-purple/30 placeholder:text-cosmic-light/50"
              />
              <Button type="submit" className="w-full btn-premium">
                Subscribe
              </Button>
            </form>
            <div className="space-y-2">
              <h4 className="font-medium text-cosmic-light">Contact Us</h4>
              <p className="text-cosmic-light/70">cosmicvision@gmail.com</p>
              <p className="text-cosmic-light/70">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cosmic-purple/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cosmic-light/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CosmicVision. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-cosmic-light/50 hover:text-cosmic-teal text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-cosmic-light/50 hover:text-cosmic-teal text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-cosmic-light/50 hover:text-cosmic-teal text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-cosmic-light/70 hover:text-cosmic-cyan transition-all duration-300 interactive-element relative group">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-xl glass-morphism text-cosmic-light/70 hover:text-cosmic-cyan hover:bg-cosmic-purple/20 transition-all duration-300 interactive-element"
    >
      {icon}
    </Link>
  );
}