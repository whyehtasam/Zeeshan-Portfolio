"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Cloud, Wrench, BarChart } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI/ML Frameworks",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Keras",
      "Hugging Face",
    ],
  },
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "R", "JavaScript", "C/C++", "SQL", "MATLAB"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Apache Spark",
      "Hadoop",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    icon: BarChart,
    title: "Visualization Tools",
    skills: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn", "D3.js"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    icon: Wrench,
    title: "Development Tools",
    skills: ["Git", "Jupyter", "VS Code", "Linux", "Apache Airflow", "MLflow"],
  },
];

const techStack = [
  { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
  { name: "Machine Learning", level: 90, color: "from-green-500 to-green-600" },
  { name: "Data Analysis", level: 92, color: "from-purple-500 to-purple-600" },
  { name: "SQL", level: 88, color: "from-orange-500 to-orange-600" },
  { name: "Deep Learning", level: 85, color: "from-red-500 to-red-600" },
  { name: "Cloud Computing", level: 80, color: "from-cyan-500 to-cyan-600" },
  {
    name: "Embedded Systems",
    level: 87,
    color: "from-yellow-500 to-yellow-600",
  },
  { name: "Data Visualization", level: 90, color: "from-pink-500 to-pink-600" },
];

// Technical skills with comma-separated values
const technicalSkills = {
  "Hardware Design & Development":
    "Microcontrollers (TMS320F28377D, TM4C1294KCPDT, RX65N, AM3551, STM32 series), Communication Protocols (SPI, I2C, CAN, RS-485, GSM), Design Tools (OrCad Capture, Allegro, Altium Designer), Simulation (LT-Spice, MultiSim, Tina-TI), Testing Equipment (DSO, CRO, Function Generators)",
  "Power Electronics & Signal Conditioning":
    "High-Voltage Systems, Signal Processing, Power Management, EMI/EMC Compliance",
  "Production & Quality":
    "ATE Testing, Quality Assurance, Cost Engineering, Manufacturing Support",
};

const transferableSkills = {
  "Problem-Solving & Analytical Thinking":
    "Systematic Debugging, Root Cause Analysis, Data-Driven Decision Making",
  "Technical Foundation":
    "Signal Processing, Statistical Analysis, System Integration",
  "Engineering Best Practices":
    "Documentation, Version Control, Testing Methodologies",
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".progress-bar",
        { width: 0 },
        {
          width: "100%",
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tech-stack",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className=" py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning embedded hardware, power
            electronics, signal processing, and modern AI/ML engineering.
          </p>
        </div>

        {/* Tech Stack Categories */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="skill-card bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-white text-lg">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-400 transition-all duration-300 text-xs px-2 py-1"
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

        {/* Technical & Transferable Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 sm:mb-16">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-xl mb-2">
                Technical Skills Gained from Hardware Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(technicalSkills).map(
                ([category, skills], index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-white font-semibold text-lg">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.split(", ").map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-400 transition-all duration-300 text-xs px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              )}
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-xl mb-2">
                Transferable Skills to AI/ML Career
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(transferableSkills).map(
                ([category, skills], index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-white font-semibold text-lg">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.split(", ").map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/20 hover:text-purple-400 transition-all duration-300 text-xs px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack Proficiency */}
        <div className="tech-stack">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-cyan-400 font-semibold">
                    {tech.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`progress-bar h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
