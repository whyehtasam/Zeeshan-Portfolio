"use client";

import { useEffect, useRef } from "react";
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
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Deep Learning for Computer Vision: A Comprehensive Guide",
    excerpt:
      "Exploring advanced techniques in computer vision using deep learning frameworks like TensorFlow and PyTorch.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&crop=center",
  },
  {
    title: "Building Scalable Data Pipelines with Apache Spark",
    excerpt:
      "Learn how to design and implement robust data processing pipelines for big data analytics.",
    date: "2024-01-08",
    readTime: "12 min read",
    tags: ["Big Data", "Apache Spark", "Data Engineering"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
  },
  {
    title: "MLOps Best Practices: From Model to Production",
    excerpt:
      "A practical guide to implementing MLOps workflows for seamless model deployment and monitoring.",
    date: "2024-01-01",
    readTime: "10 min read",
    tags: ["MLOps", "DevOps", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&crop=center",
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className=" py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge and insights about AI, machine learning, data
            science, and emerging technologies.
          </p>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="blog-card bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-400 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0 h-auto font-semibold group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-cyan-500 to-fuchsia-400 hover:from-cyan-600 hover:to-magenta-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
