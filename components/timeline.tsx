"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

const timelineEvents = [
  // AI/ML Engineering & Generative AI
  {
    year: "2024-2025",
    title: "AI Engineer",
    organization: "Reality AI Labs",
    description:
      "Contributed to Marvel AI and Sky AI, leveraging Generative AI, LLMs, and RAG. Developed automated rubric creation, document summarization, and knowledge graph-based retrieval. Led deployment and monitoring on Google Cloud Run. Achieved 92% user satisfaction, 90% content accuracy, and 99.5% uptime.",
    icon: Briefcase,
    type: "work",
  },
  // Research & Academic Projects
  {
    year: "2024",
    title: "Research Assistant",
    organization: "Northeastern University",
    description:
      "Led analysis of 200GB+ supply chain data for predictive analytics. Developed scalable AI/ML platform, implemented risk prediction models, and designed performance dashboards. Achieved 85% accuracy, reduced operational risks by 20%.",
    icon: Briefcase,
    type: "work",
  },
  // Senior Test Engineer
  {
    year: "2021-2022",
    title: "Senior Test Engineer (ATE)",
    organization: "Tessolve Semiconductors Pvt Ltd",
    description:
      "Led feasibility study and test plan for LTX to ETS testers. Designed hardware, reduced test times by 50%, and improved analysis quality and lab operations.",
    icon: Briefcase,
    type: "work",
  },
  // Hardware Lead
  {
    year: "2020-2021",
    title: "Hardware Lead",
    organization: "Newen Systems Pvt Ltd",
    description:
      "Engineered Analog Sensing card for BESS, managed BOM finalization, vendor negotiations, and EMI/EMC testing for production compliance.",
    icon: Briefcase,
    type: "work",
  },
  // Embedded Hardware Engineer
  {
    year: "2018-2020",
    title: "Embedded Hardware Engineer",
    organization: "Raychem RPG Pvt Ltd",
    description:
      "Designed and tested control cards for DC-DC converters and Microgrid Inverters. Achieved 90% cost reduction, implemented automation control cards, and ensured industry compliance.",
    icon: Briefcase,
    type: "work",
  },
  // Post Silicon Validation Engineer
  {
    year: "2021-2023",
    title: "Post Silicon Validation Engineer (ATE)",
    organization: "Tessolve Semiconductor Pvt Ltd",
    description:
      "Led design conversion from LTX to ETS88 tester platforms. Developed test plans, hardware schematics, and implemented quality control checks. Achieved significant yield improvements.",
    icon: Briefcase,
    type: "work",
  },
  // Embedded Hardware Engineer (Newen)
  {
    year: "2020-2021",
    title: "Embedded Hardware Engineer",
    organization: "Newen Systems Pvt Ltd",
    description:
      "Designed analog sensing card for BESS, managed BOM, and conducted EMI/EMC testing. Delivered robust sensing solution for battery monitoring.",
    icon: Briefcase,
    type: "work",
  },
  // Embedded Hardware Engineer (Raychem)
  {
    year: "2018-2020",
    title: "Embedded Hardware Engineer",
    organization: "Raychem RPG Pvt Ltd",
    description:
      "Developed control cards for solar storage and microgrid inverters. Integrated communication protocols and power management solutions.",
    icon: Briefcase,
    type: "work",
  },
  // Project Intern
  {
    year: "2017-2018",
    title: "Project Intern",
    organization: "Raychem RPG Pvt Ltd",
    description:
      "Designed embedded control card with analog/digital I/O using TI TIVA microcontroller. Learned end-to-end hardware development process and created PCB footprints and BOM for manufacturing support.",
    icon: Briefcase,
    type: "work",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        }
      );

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
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "from-blue-500 to-blue-600";
      case "work":
        return "from-green-500 to-green-600";
      case "achievement":
        return "from-yellow-500 to-yellow-600";
      default:
        return "from-cyan-500 to-cyan-600";
    }
  };

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className=" py-12 sm:py-20 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 sm:opacity-50 opacity-5">
        <div className="absolute top-10 left-10 text-4xl sm:text-6xl">🎓</div>
        <div className="absolute top-20 right-20 text-3xl sm:text-4xl">💼</div>
        <div className="absolute bottom-20 left-20 text-4xl sm:text-5xl"></div>
        <div className="absolute bottom-10 right-10 text-3xl sm:text-4xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my educational milestones, professional growth, and
            key achievements in the field of data science and AI.
          </p>
        </div>

        <div className="timeline-container relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-7 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-fuchsia-400 timeline-line " />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={index}
                  className="timeline-item relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${getTypeColor(
                      event.type
                    )} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>

                  {/* Content */}
                  <Card className="flex-1 sm:bg-gray-900/50 bg-gray-900 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 ml-6 sm:ml-0 border-cyan-400/50">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {event.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-3">
                        {event.organization}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
