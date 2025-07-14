"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Rocket, BookOpen, Users, CheckCircle } from "lucide-react"

const goals = [
  {
    icon: Target,
    title: "Career Development Goals",
    items: [
      "Lead AI/ML initiatives in Fortune 500 companies",
      "Develop scalable machine learning solutions",
      "Mentor junior data scientists and engineers",
      "Drive digital transformation projects",
    ],
  },
  {
    icon: Rocket,
    title: "Professional Development",
    items: [
      "Obtain AWS Machine Learning Specialty certification",
      "Complete advanced deep learning specializations",
      "Contribute to open-source AI/ML projects",
      "Speak at industry conferences and meetups",
    ],
  },
  {
    icon: BookOpen,
    title: "Research & Academic Pursuits",
    items: [
      "Publish research papers in top-tier journals",
      "Collaborate with academic institutions",
      "Explore cutting-edge AI research areas",
      "Pursue PhD in Machine Learning (future goal)",
    ],
  },
  {
    icon: Users,
    title: "Collaboration & Networking",
    items: [
      "Build strategic partnerships with tech leaders",
      "Join AI/ML professional organizations",
      "Participate in hackathons and competitions",
      "Create educational content for the community",
    ],
  },
]

export default function CareerGoals() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".goal-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".goals-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".goal-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".goal-item",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="goals" ref={sectionRef} className="py-20 relative">
      {/* Retro Tech Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">👾</div>
        <div className="absolute top-20 right-20 text-4xl">🚀</div>
        <div className="absolute bottom-20 left-20 text-5xl">⚡</div>
        <div className="absolute bottom-10 right-10 text-4xl">🎯</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Career{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">Goals</span> &
            Vision
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic initiatives and aspirations driving my professional journey in AI, data science, and technology
            leadership.
          </p>
        </div>

        <div className="goals-grid grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {goals.map((goal, index) => {
            const IconComponent = goal.icon
            return (
              <Card
                key={index}
                className="goal-card bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full group-hover:from-cyan-500/30 group-hover:to-magenta-500/30 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {goal.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {goal.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="goal-item flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-cyan-400/30 max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become a leading AI/ML architect who bridges the gap between cutting-edge research and practical
                business solutions, while fostering innovation and mentoring the next generation of data scientists and
                engineers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
