"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Star, GitFork, Eye } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

const githubStats = [
  { icon: Eye, label: "Profile Views", value: 1250, color: "text-blue-400" },
  { icon: Star, label: "Total Stars", value: 89, color: "text-yellow-400" },
  { icon: GitFork, label: "Forks", value: 34, color: "text-green-400" },
  { icon: Github, label: "Repositories", value: 42, color: "text-purple-400" },
]

const languages = [
  { name: "Python", percentage: 45, color: "bg-blue-500" },
  { name: "JavaScript", percentage: 25, color: "bg-yellow-500" },
  { name: "R", percentage: 15, color: "bg-blue-600" },
  { name: "C/C++", percentage: 10, color: "bg-gray-500" },
  { name: "Other", percentage: 5, color: "bg-purple-500" },
]

const contributions = [
  { day: "Mon", commits: 12 },
  { day: "Tue", commits: 8 },
  { day: "Wed", commits: 15 },
  { day: "Thu", commits: 6 },
  { day: "Fri", commits: 20 },
  { day: "Sat", commits: 4 },
  { day: "Sun", commits: 9 },
]

export default function GitHubStats() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".github-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".github-stats-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".language-bar",
        { width: 0 },
        {
          width: "100%",
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".languages-chart",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".contribution-bar",
        { height: 0 },
        {
          height: "100%",
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contributions-chart",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="github" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GitHub{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A snapshot of my coding activity, contributions, and open-source involvement.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="github-stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {githubStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="github-card bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                      <AnimatedCounter end={stat.value} />
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* Languages Chart */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Github className="h-5 w-5 text-cyan-400" />
                <span>Most Used Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="languages-chart">
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{lang.name}</span>
                      <span className="text-gray-400 text-sm">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`language-bar h-2 rounded-full ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contribution Activity */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Star className="h-5 w-5 text-cyan-400" />
                <span>Weekly Contributions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="contributions-chart">
              <div className="flex items-end justify-between h-32 space-x-2">
                {contributions.map((day, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                    <div className="w-full bg-gray-700 rounded-t relative" style={{ height: "80px" }}>
                      <div
                        className="contribution-bar bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t absolute bottom-0 w-full"
                        style={{ height: `${(day.commits / 20) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{day.day}</span>
                    <span className="text-xs text-cyan-400 font-semibold">{day.commits}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-cyan-400/30 max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <Github className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Explore My Code</h3>
              <p className="text-gray-400 mb-4">
                Check out my repositories, contributions, and open-source projects on GitHub.
              </p>
              <a
                href="https://github.com/zeeshanahmadansari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="h-5 w-5" />
                <span>Visit GitHub Profile</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
