"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Cpu, BarChart3 } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";

const roles = [
  {
    icon: Brain,
    title: "AI/ML Engineering",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "NLP",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    skills: [
      "Predictive Modeling",
      "Statistical Analysis",
      "Data Mining",
      "Python",
      "R",
      "SQL",
    ],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    skills: [
      "IoT Development",
      "Microcontrollers",
      "Real-time Systems",
      "C/C++",
      "Arduino",
      "Raspberry Pi",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    skills: [
      "Dashboard Development",
      "Data Visualization",
      "Tableau",
      "Power BI",
      "ETL Processes",
      "KPI Analysis",
    ],
  },
];

const metrics = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
  { label: "Research Papers", value: 3, suffix: "" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".role-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".roles-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".metric-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".metrics-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className=" py-12 sm:py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-10 left-10 text-4xl sm:text-6xl">🤖</div>
        <div className="absolute top-10 right-10 text-3xl sm:text-4xl">⚡</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming complex data into actionable insights through
            cutting-edge AI/ML solutions, embedded systems innovation, and
            comprehensive analytics.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="roles-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card
                key={index}
                className="role-card bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-full w-fit group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/30 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-cyan-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {role.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="metrics-grid grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="metric-card bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="pt-4 sm:pt-6 px-2 sm:px-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
