"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

const projectCategories = [
  "All",
  "AI/ML & Generative AI",
  "Data Visualization & Dashboards",
  "Predictive Analytics & ML",
  "Full-Stack Web Apps",
  "Social Impact & Research",
  "Assessment Tools",
];

const projects = [
  // AI/ML & Generative AI Projects
  {
    title: "Multi-Agent Medical Assistant",
    description:
      "Specialized AI agents for medical diagnosis, RAG knowledge queries, and computer vision analysis. Achieved 92% user satisfaction, 90% content accuracy, and 99.5% uptime.",
    category: "AI/ML & Generative AI",
    tags: [
      "Multi-Agent Systems",
      "RAG",
      "LangChain",
      "Computer Vision",
      "Medical AI",
      "FastAPI",
      "Docker",
      "PyTorch",
    ],
  },
  {
    title: "Automated Image Captioning Application",
    description:
      "CNN-RNN architecture with VGG16 and LSTM for real-time image-to-text conversion. Achieved 85% accuracy, reduced manual captioning time by 90%.",
    category: "AI/ML & Generative AI",
    tags: [
      "CNN-RNN",
      "VGG16",
      "LSTM",
      "Computer Vision",
      "TensorFlow",
      "Streamlit",
    ],
  },
  {
    title: "Gemini Explorer AI Chatbot",
    description:
      "Google Gemini LLM and Vertex AI for intelligent response generation. Responsive chat interface, session management, 95% uptime.",
    category: "AI/ML & Generative AI",
    tags: [
      "Google Gemini",
      "LLM",
      "Vertex AI",
      "Conversational AI",
      "Streamlit",
      "NLP",
    ],
  },
  {
    title: "Quizify - AI-Powered Quiz Generator",
    description:
      "Google Gemini LLM for question generation, ChromaDB for document vectorization, PDF-to-quiz conversion. Reduced manual quiz creation time by 90%.",
    category: "AI/ML & Generative AI",
    tags: [
      "Google Gemini",
      "ChromaDB",
      "LangChain",
      "Vertex AI",
      "NLP",
      "PDF Processing",
    ],
  },
  {
    title: "VideoAd-Analyzer",
    description:
      "Text embedding and cosine similarity for automated classification of ad content. Achieved 90% precision for incentive detection.",
    category: "AI/ML & Generative AI",
    tags: [
      "Text Embedding",
      "Cosine Similarity",
      "Sentence Transformers",
      "NLP",
      "Batch Processing",
    ],
  },
  {
    title: "Genre Classification Using NLP",
    description:
      "Feature extraction with Bag of Words, TF-IDF, BERT. 15% improvement in classification accuracy using BERT embeddings.",
    category: "AI/ML & Generative AI",
    tags: ["NLP", "Text Classification", "BERT", "TF-IDF", "Random Forest"],
  },
  // Data Visualization & Dashboard Projects
  {
    title: "Tableau Real Estate Analysis Dashboard",
    description:
      "Interactive dashboard for property analytics across Massachusetts. Identified 25+ high-potential investment areas, reduced analysis time by 80%.",
    category: "Data Visualization & Dashboards",
    tags: [
      "Tableau",
      "Real Estate",
      "Geospatial Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Netflix Content Analysis Dashboard",
    description:
      "Netflix-themed dashboard with interactive world map and genre analysis. Enabled content strategy for 200+ million subscribers.",
    category: "Data Visualization & Dashboards",
    tags: [
      "Tableau",
      "Content Analytics",
      "Streaming Analytics",
      "Business Intelligence",
    ],
  },
  {
    title: "House Sales Analysis Dashboard",
    description:
      "Customizable dashboard for housing market trends, price tracking, and heat map visualizations. Supported $50M+ in property transactions.",
    category: "Data Visualization & Dashboards",
    tags: ["Tableau", "Real Estate", "Market Analysis", "Data Visualization"],
  },
  {
    title: "British Airways Customer Review Analysis",
    description:
      "NLP-based sentiment analysis dashboard for airline reviews. Identified critical service pain points and improvement areas.",
    category: "Data Visualization & Dashboards",
    tags: ["Tableau", "Sentiment Analysis", "Customer Analytics", "NLP"],
  },
  // Predictive Analytics & ML Projects
  {
    title: "Austin Cyclist Crash Severity Prediction App",
    description:
      "Random Forest Classifier with SMOTE for crash severity prediction. Interactive app for real-time risk visualization.",
    category: "Predictive Analytics & ML",
    tags: ["Random Forest", "SMOTE", "Streamlit", "Predictive Analytics"],
  },
  {
    title: "Bank Term Deposit Subscription Prediction Tool",
    description:
      "ML models for predicting bank term deposit subscriptions. Achieved 90% accuracy, reduced campaign costs.",
    category: "Predictive Analytics & ML",
    tags: ["Random Forest", "Machine Learning", "SMOTE", "Streamlit"],
  },
  // Full-Stack Web Applications
  {
    title: "Gemini Flight Manager System",
    description:
      "FastAPI backend and Streamlit frontend for real-time flight management. Processed 10K+ daily queries, reduced search time by 60%.",
    category: "Full-Stack Web Apps",
    tags: ["FastAPI", "SQLite", "RESTful API", "Streamlit"],
  },
  {
    title: "Partner Assessment Tool",
    description:
      "React/Node.js platform for relationship assessment with OpenAI API integration. Privacy-first, 95% uptime.",
    category: "Full-Stack Web Apps",
    tags: ["React", "Node.js", "OpenAI API", "Full-Stack", "Cloud Deployment"],
  },
  // Social Impact & Research Projects
  {
    title: "Child Welfare Data Analysis Dashboard",
    description:
      "Tableau dashboard for child welfare analytics and COVID-19 impact forecasting. Contributed to KARA's publication.",
    category: "Social Impact & Research",
    tags: ["Social Impact", "Tableau", "Public Policy", "Forecasting"],
  },
  // Assessment Tools
  {
    title: "Toxic Attraction Pattern Quiz",
    description:
      "Interactive JavaScript quiz for personality assessment with gamification and analytics integration.",
    category: "Assessment Tools",
    tags: [
      "JavaScript",
      "Interactive Storytelling",
      "Gamification",
      "Psychology",
    ],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Calculate how many projects to show
  const projectsToShow = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
    // Reset show all when category changes
    setShowAllProjects(false);
  }, [activeCategory]);

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
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [projectsToShow]);

  const handleViewMore = () => {
    setShowAllProjects(true);
  };

  const handleHideProjects = () => {
    setShowAllProjects(false);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12  py-12 sm:py-20 lg: py-12 sm:py-20 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 sm:opacity-50 opacity-5 ">
        <div className="absolute top-10 left-10 text-4xl sm:text-6xl">💻</div>
        <div className="absolute top-20 right-20 text-3xl sm:text-4xl">💻</div>
        <div className="absolute bottom-20 left-20 text-4xl sm:text-5xl"></div>
        <div className="absolute bottom-10 right-10 text-3xl sm:text-4xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A showcase of my work in AI/ML, data analytics, embedded systems,
            and web development.
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
                  ? "bg-gradient-to-r from-cyan-500 via-purple-500 fuchsia-400 text-white shadow-lg hover:shadow-xl"
                  : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsToShow.map((project, index) => (
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
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  {project.description}
                </CardDescription>
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

        {/* View More/Hide Button */}
        {hasMoreProjects && (
          <div className="text-center mt-8 sm:mt-12">
            <Button
              onClick={showAllProjects ? handleHideProjects : handleViewMore}
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/30 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 px-8 py-3 text-lg font-medium group"
            >
              {showAllProjects ? "Hide Projects" : "View More Projects"}
              <ChevronDown
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  showAllProjects ? "rotate-180" : "group-hover:translate-y-1"
                }`}
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
