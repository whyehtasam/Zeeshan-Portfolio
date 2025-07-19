"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import TypewriterEffect from "@/components/typewriter-effect";
import Link from "next/link";
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="sm:min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mt-20 sm:mt-0 z-10 py-16 sm: py-12 sm:py-20">
        <div className="flex flex-col items-center justify-center mb-2">
          <div className="flex items-center justify-center gap-3">
            <span
              className="hidden sm:inline-block animate-wave text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2"
              role="img"
              aria-label="Waving hand"
            >
              👋
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 leading-tight bg-gradient-to-br from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zeeshan Ahmad Ansari
            </span>
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-cyan-300 mb-4 leading-snug">
          From debugging 500KW power systems to building AI that saves lives – I
          bring real-world engineering rigor to artificial intelligence.
        </h2>
        <div className="mb-4">
          <TypewriterEffect
            words={[
              "AI/ML Engineer",
              "Embedded Systems Innovator",
              "Data Scientist",
              "Analytics Expert",
              "Tech Leader",
            ]}
            className="text-base sm:text-lg md:text-3xl font-semibold text-violet-400"
          />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Most AI engineers have never seen a production system fail at 3 AM. I
          have. That's why my AI solutions are built for reliability, not just
          accuracy.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="#projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-purple-500 fuchsia-400 hover:from-cyan-600 hover:via-purple-600 hover:to-magenta-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>

          <div className="flex items-center space-x-3 mt-5 sm:mt-0 sm:space-x-4">
            <Link href="#projects">
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500 hover:text-gray-950 transition-all duration-300 hover:scale-110 bg-transparent shadow-lg hover:shadow-xl h-12 w-12 sm:h-14 sm:w-14"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500 hover:text-gray-950 transition-all duration-300 hover:scale-110 bg-transparent shadow-lg hover:shadow-xl h-12 w-12 sm:h-14 sm:w-14"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-magenta-400 text-magenta-400 hover:bg-gradient-to-r hover:from-magenta-400 hover:fuchsia-400 hover:text-gray-950 transition-all duration-300 hover:scale-110 bg-transparent shadow-lg hover:shadow-xl h-12 w-12 sm:h-14 sm:w-14"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute hidden sm:block bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
      </div>
    </section>
  );
}
