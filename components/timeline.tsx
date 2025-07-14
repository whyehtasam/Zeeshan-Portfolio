"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react"

const timelineEvents = [
  {
    year: "2019",
    title: "B.Tech in Electronics Engineering",
    organization: "Top University",
    description: "Graduated with honors, specializing in embedded systems and digital signal processing.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2020",
    title: "Junior Data Analyst",
    organization: "Tech Solutions Inc.",
    description: "Started career in data analytics, working on business intelligence and reporting systems.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2021",
    title: "Machine Learning Engineer",
    organization: "AI Innovations Ltd.",
    description: "Developed and deployed ML models for predictive analytics and computer vision applications.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2022",
    title: "Best Innovation Award",
    organization: "AI Conference 2022",
    description: "Recognized for outstanding contribution to AI/ML research and practical applications.",
    icon: Award,
    type: "achievement",
  },
  {
    year: "2023",
    title: "Senior Data Scientist",
    organization: "DataTech Corp.",
    description: "Led cross-functional teams in developing enterprise-scale AI solutions and data platforms.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024",
    title: "MS in Analytics",
    organization: "University of Texas at Arlington",
    description: "Completed Master's degree with focus on advanced analytics, machine learning, and data science.",
    icon: GraduationCap,
    type: "education",
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".timeline-line",
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "from-blue-500 to-blue-600"
      case "work":
        return "from-green-500 to-green-600"
      case "achievement":
        return "from-yellow-500 to-yellow-600"
      default:
        return "from-cyan-500 to-cyan-600"
    }
  }

  return (
    <section id="timeline" ref={sectionRef} className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my educational milestones, professional growth, and key achievements in the field of data
            science and AI.
          </p>
        </div>

        <div className="timeline-container relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-magenta-400 timeline-line" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              return (
                <div
                  key={index}
                  className="timeline-item relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${getTypeColor(event.type)} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                      <p className="text-cyan-400 font-medium mb-3">{event.organization}</p>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
