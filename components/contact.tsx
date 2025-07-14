"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "zeeshan@example.com",
    href: "mailto:zeeshan@example.com",
    color: "text-cyan-400",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-purple-400",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dallas, TX",
    href: "#",
    color: "text-magenta-400",
  },
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/zeeshanahmadansari",
    color: "hover:text-gray-300",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/zeeshanahmadansari",
    color: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/zeeshanahmadansari",
    color: "hover:text-cyan-400",
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-4xl sm:text-6xl">📧</div>
        <div className="absolute top-20 right-20 text-3xl sm:text-4xl">💬</div>
        <div className="absolute bottom-20 left-20 text-4xl sm:text-5xl">🚀</div>
        <div className="absolute bottom-10 right-10 text-3xl sm:text-4xl">✨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to
            life.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="contact-card bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-semibold text-white flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <span>Get in Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group"
                    >
                      <div
                        className={`p-2 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300`}
                      >
                        <IconComponent className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.title}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="contact-card bg-gray-900/50 border-gray-800 hover:border-purple-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="contact-card bg-gray-900/50 border-gray-800 hover:border-magenta-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-semibold text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-400 focus:ring-cyan-400"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-400 focus:ring-cyan-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white focus:border-cyan-400 focus:ring-cyan-400"
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-gray-800 border-gray-700 text-white focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                      placeholder="Tell me about your project or how we can collaborate..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 hover:from-cyan-600 hover:via-purple-600 hover:to-magenta-600 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-cyan-400/30 max-w-4xl mx-auto">
            <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Ready to Start Something Amazing?</h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Whether you're looking to build cutting-edge AI solutions, analyze complex datasets, or develop
                innovative embedded systems, I'm here to help bring your vision to reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-magenta-400 text-magenta-400 hover:bg-gradient-to-r hover:from-magenta-400 hover:to-magenta-500 hover:text-white transition-all duration-300 hover:scale-105 px-6 sm:px-8 py-3 font-semibold bg-transparent"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
