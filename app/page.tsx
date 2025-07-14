"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import CareerGoals from "@/components/career-goals"
import GitHubStats from "@/components/github-stats"
import Timeline from "@/components/timeline"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import Contact from "@/components/contact"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Parallax background elements
    gsap.to(".parallax-slow", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    gsap.to(".parallax-fast", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CareerGoals />
        <GitHubStats />
        <Timeline />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
