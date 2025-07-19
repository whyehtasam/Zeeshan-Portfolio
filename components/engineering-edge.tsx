import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Lightbulb, Zap, Star, Award, TrendingUp, Eye } from "lucide-react";

const stories = [
  {
    icon: Lightbulb,
    title: "Why Hardware Engineers Make Exceptional AI Engineers",
    summary:
      "6 years of debugging real-world systems where failure isn't just a crashed program, it's a $50M production line shutdown. In hardware, you can't just restart when something breaks. You need to understand root causes, optimize for constraints, and build reliable systems from day one.",
    details: (
      <>
        <ul className="list-disc list-inside mb-2 text-gray-300">
          <li>
            <b>Debugging ML Models:</b> Systematic isolation of variables, data
            pipeline checks, and failure mode analysis, just like power
            electronics debugging.
          </li>
          <li>
            <b>Production Readiness:</b> Built-in monitoring, fallback
            mechanisms, and error handling from real 3AM production failures.
          </li>
          <li>
            <b>Resource Optimization:</b> Hardware cost constraints taught me to
            optimize ML models for memory, compute, and power—not just accuracy.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Zap,
    title: "The $3M Problem That Changed My Career",
    summary:
      "Debugging a 500KW solar inverter with 'random' failures led me to discover the power of data-driven pattern recognition, saving $3M in warranty claims.",
    details: (
      <>
        <p className="mb-2 text-gray-300">
          I collected sensor data, applied statistical analysis, and found
          subtle correlations that human analysis missed. This insight not only
          saved money but also pivoted my career toward AI-powered engineering.
        </p>
        <p className="text-gray-400">
          Now I build AI systems that solve real engineering problems, not just
          academic benchmarks.
        </p>
      </>
    ),
  },
  {
    icon: Star,
    title:
      "From Microcontrollers to Machine Learning: The Skills That Actually Transfer",
    summary:
      "Constraint-driven design, systematic debugging, production-grade thinking, and understanding the physical world—these are the real skills that transfer from hardware to AI.",
    details: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          <b>Constraint-Driven Design:</b> Building ML models for edge devices
          with strict latency and memory requirements.
        </li>
        <li>
          <b>Systematic Debugging:</b> Isolating failures in complex systems,
          whether hardware or ML pipelines.
        </li>
        <li>
          <b>Production-Grade Thinking:</b> Designing for reliability, error
          handling, and monitoring.
        </li>
        <li>
          <b>Physical World Understanding:</b> Knowing how sensors work and what
          can go wrong in real-world data.
        </li>
      </ul>
    ),
  },
  {
    icon: Award,
    title: "The Unfair Advantage: What I Bring That Others Don't",
    summary:
      "Most AI engineers think in code. I think in systems. I optimize for reliability, cost, and maintainability—not just accuracy.",
    details: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          <b>Medical AI Project:</b> Built with confidence scoring,
          human-in-the-loop verification, and fallback mechanisms. Result: 92%
          user satisfaction.
        </li>
        <li>
          <b>Supply Chain Analytics:</b> Included physical constraints for 85%
          accuracy vs. industry average of 65%.
        </li>
        <li>
          <b>Bottom Line:</b> I build engineering solutions that happen to use
          AI, not just computer science projects.
        </li>
      </ul>
    ),
  },
  {
    icon: TrendingUp,
    title: "The Plot Twist: Why I'm Actually Better at AI Because of Hardware",
    summary:
      "Everyone thinks transitioning from hardware to AI is hard. It's actually an unfair advantage.",
    details: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          <b>Imperfect Data:</b> I expect dirty data and build systems that
          handle it.
        </li>
        <li>
          <b>Understanding Constraints:</b> I optimize for real-world limits,
          not just benchmarks.
        </li>
        <li>
          <b>Knowing When to Stop Optimizing:</b> I ship working solutions
          instead of chasing perfect ones.
        </li>
        <li>
          <b>Building for Maintenance:</b> I design ML systems that gracefully
          handle changing conditions.
        </li>
      </ul>
    ),
  },
  {
    icon: Eye,
    title: "The Results Speak for Themselves & What's Next",
    summary:
      "Every project delivers measurable business impact, not just technical achievements. The future: AI that works in the real world, not just in notebooks.",
    details: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          <b>Medical AI System:</b> 92% user satisfaction, 99.5% uptime, 67%
          reduction in diagnosis time.
        </li>
        <li>
          <b>Supply Chain Analytics:</b> 85% prediction accuracy, 20% reduction
          in operational risks, 30% improvement in process efficiency.
        </li>
        <li>
          <b>Vision:</b> AI that integrates with infrastructure, handles edge
          cases, and provides transparent decision-making.
        </li>
      </ul>
    ),
  },
];

export default function EngineeringEdge() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edge-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".edge-accordion",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="edge"
      ref={sectionRef}
      className=" py-12 sm:py-20 relative bg-gray-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Engineering Edge
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories and lessons from the intersection of hardware and
            AI—why my background delivers results others can't.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="edge-accordion space-y-4"
        >
          {stories.map((story, idx) => {
            const Icon = story.icon;
            return (
              <AccordionItem
                key={idx}
                value={story.title}
                className="edge-card bg-gray-900/60 border border-gray-800 rounded-lg shadow-lg"
              >
                <AccordionTrigger className="flex items-center gap-4 text-left px-6 py-4">
                  <Icon className="h-7 w-7 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg md:text-xl font-semibold text-white">
                    {story.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="mb-2 text-cyan-300 font-medium">
                    {story.summary}
                  </div>
                  <div>{story.details}</div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
