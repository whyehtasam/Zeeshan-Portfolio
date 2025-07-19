"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Goals", href: "#goals" },
  { name: "GitHub", href: "#github" },
  { name: "Timeline", href: "#timeline" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gray-950/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zeeshan
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-cyan-400"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-cyan-400"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-cyan-400"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-400 hover:from-cyan-600 hover:via-purple-600 hover:to-magenta-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-cyan-400"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-cyan-400"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-cyan-400"
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-400 hover:from-cyan-600 hover:via-purple-600 hover:to-magenta-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
