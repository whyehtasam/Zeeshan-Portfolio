"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Zeeshan Ahmad Ansari
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Data Scientist & AI/ML Engineer passionate about transforming data into actionable insights and building
              intelligent systems that drive innovation.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-cyan-400/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-cyan-400/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-cyan-400/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Goals", "GitHub", "Timeline", "Blog"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resume */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <p className="text-gray-400">Interested in collaboration or have a project in mind? Let's connect!</p>
            <Button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 hover:from-cyan-600 hover:via-purple-600 hover:to-magenta-600 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 Zeeshan Ahmad Ansari. Built with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>using Next.js & Shadcn UI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
