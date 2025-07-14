"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projectCategories = ["All", "AI & Machine Learning", "Data Analytics", "Embedded Systems", "Web Applications"]

const projects = [
  {
    title: "Predictive Analytics Dashboard",
    description:
      "Real-time dashboard for predictive analytics using machine learning models to forecast business metrics and trends.",
    category: "Data Analytics",
    tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
    github: "#",
    demo: "#",
  },
  {
    title: "Computer Vision Object Detection",
    description: "Advanced object detection system using YOLO and OpenCV for real-time image and video analysis.",
    category: "AI & Machine Learning",
    tags: ["Python", "OpenCV", "YOLO", "TensorFlow", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&crop=center",
    github: "#",
    demo: "#",
  },
  {
    title: "IoT Environmental Monitoring",
    description: "Smart environmental monitoring system using Arduino and sensors with real-time data visualization.",
    category: "Embedded Systems",
    tags: ["Arduino", "C++", "IoT", "Sensors", "Real-time"],
    image: "https://images.unsplash.com/photo-1614846027182-cecfee3a427b?w=400&h=200&fit=crop&crop=center",
    github: "#",
    demo: "#",
  },
  {
    title: "NLP Sentiment Analysis Tool",
    description: "Natural language processing tool for sentiment analysis of social media data and customer feedback.",
    category: "AI & Machine Learning",
    tags: ["Python", "NLTK", "Transformers", "Flask", "NLP"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&crop=center",
    github: "#",
    demo: "#",
  },
  {
    title: "Business Intelligence Platform",
    description: "Comprehensive BI platform with interactive dashboards and automated reporting capabilities.",
    category: "Data Analytics",
    tags: ["Tableau", "SQL", "ETL", "Power BI", "Data Warehouse"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Home Automation",
    description: "Complete home automation system with voice control and mobile app integration.",
    category: "Embedded Systems",
    tags: ["Raspberry Pi", "Python", "IoT", "Voice Recognition", "Mobile App"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&crop=center",
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [filteredProjects])

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A showcase of my work in AI/ML, data analytics, embedded systems, and web development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 text-white shadow-lg hover:shadow-xl"
                  : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="project-card bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-gray-800/80 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-gray-800/80 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300 text-lg sm:text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-400 transition-all duration-300 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
