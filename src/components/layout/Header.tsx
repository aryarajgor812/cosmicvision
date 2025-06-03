"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const mainNav = [
  { name: "About Us", href: "/about-us" },
  { name: "Portfolio", href: "/portfolio" },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "Branding", href: "/services/branding" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Product Photography", href: "/services/product-photography" },
      { name: "Packaging", href: "/services/packaging-design" },
      { name: "SEO", href: "/services/seo" },
    ],
  },
  { name: "Creative Studio", href: "/creative-studio" },
  { name: "Awards", href: "/awards" },
  { name: "Careers", href: "/careers" },
  {
    name: "Resources",
    href: "#",
    submenu: [
      { name: "Blogs", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cosmic-dark/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="z-50 interactive-element">
          <div className="flex items-center">
            <span className="font-orbitron text-2xl font-bold text-cosmic-light">
              Cosmic<span className="text-gradient">Vision</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {mainNav.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center text-cosmic-light hover:text-cosmic-cyan transition-all duration-300 interactive-element">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-cosmic-dark/90 backdrop-blur-md border-cosmic-purple/30">
                  <DropdownMenuGroup>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          href={subItem.href}
                          className="cursor-pointer hover:bg-cosmic-purple/20"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-cosmic-light hover:text-cosmic-cyan transition-all duration-300 interactive-element relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="outline"
            className="btn-premium text-cosmic-light border-0"
            asChild
          >
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-cosmic-light hover:text-cosmic-teal"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 bg-cosmic-dark/95 backdrop-blur-md border-cosmic-purple/30">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-cosmic-purple/30">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center">
                    <span className="font-orbitron text-xl font-bold text-cosmic-light">
                      Cosmic<span className="text-cosmic-teal">Vision</span>
                    </span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-cosmic-light hover:text-cosmic-teal"
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
              </div>
              <nav className="flex-1 overflow-auto py-4">
                <ul className="space-y-2 px-2">
                  {mainNav.map((item) => (
                    <li key={item.name}>
                      {item.submenu ? (
                        <div className="py-2">
                          <p className="px-4 py-2 text-cosmic-light font-medium">
                            {item.name}
                          </p>
                          <ul className="mt-1 pl-4 border-l border-cosmic-purple/30">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2 text-cosmic-light/80 hover:text-cosmic-teal"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-cosmic-light hover:text-cosmic-teal"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-4 border-t border-cosmic-purple/30">
                <Button
                  className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90 text-cosmic-light"
                  asChild
                >
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
