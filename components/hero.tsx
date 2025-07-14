"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import TypewriterEffect from "@/components/typewriter-effect"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(".hero-title", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="hero-title">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
            <span className="wave-emoji text-3xl sm:text-4xl md:text-5xl lg:text-6xl">👋</span> Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400 bg-clip-text text-transparent">
              Zeeshan Ahmad Ansari
            </span>
          </h1>
        </div>

        <div className="hero-subtitle mb-6 sm:mb-8">
          <TypewriterEffect
            words={[
              "Data Scientist",
              "AI/ML Engineer",
              "Embedded Systems Innovator",
              "Analytics Expert",
              "Tech Enthusiast",
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
          />
        </div>

        <div className="hero-description mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            MS in Analytics graduate with expertise in AI/ML, embedded systems, and data science. Passionate about
            transforming complex data into actionable insights and building intelligent systems that drive innovation.
          </p>
        </div>

        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 hover:from-cyan-600 hover:via-purple-600 hover:to-magenta-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500 hover:text-gray-950 transition-all duration-300 hover:scale-110 bg-transparent shadow-lg hover:shadow-xl h-12 w-12 sm:h-14 sm:w-14"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500 hover:text-gray-950 transition-all duration-300 hover:scale-110 bg-transparent shadow-lg hover:shadow-xl h-12 w-12 sm:h-14 sm:w-14"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-magenta-400 text-magenta-400 hover:bg-gradient-to-r hover:from-magenta-400 hover:to-magenta-500 hover:text-gray-950 transition-all duration-300 hover:scale-110 bg-transparent shadow-lg hover:shadow-xl h-12 w-12 sm:h-14 sm:w-14"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
      </div>
    </section>
  )
}
