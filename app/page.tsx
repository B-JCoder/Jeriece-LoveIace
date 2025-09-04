"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  Star,
  CheckCircle,
  Calendar,
  Clock,
  Heart,
  Shield,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Brain,
  Stethoscope,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Globe,
} from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#FAF9F6" }}>
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, #A36ACB, transparent)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-200/20 to-purple-400/20 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-purple-300/15 to-purple-500/15 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4 pt-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            <Image
              src="/images/jeriece-lovelace.png"
              alt="Jeriece LoveIace, PMHNP-BC"
              width={300}
              height={400}
              className="relative mx-auto rounded-lg shadow-2xl hover:scale-105 transition-all duration-500 animate-float"
              style={{
                boxShadow: "0 20px 40px rgba(212, 195, 237, 0.4), 0 0 0 1px rgba(163, 106, 203, 0.1)",
                filter: "drop-shadow(0 0 20px rgba(163, 106, 203, 0.3))",
              }}
            />
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce shadow-lg">
              <Award className="inline h-4 w-4 mr-1" />
              Board Certified
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Jeriece LoveIace, PMHNP-BC
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance animate-fade-in-delay" style={{ color: "#000" }}>
            <Sparkles
              className="inline h-6 w-6 mr-2 text-black animate-spin"
              style={{ animationDuration: "3s" }}
            />
            Board-Certified Psychiatric Mental Health Nurse Practitioner
          </p>

          <div className="max-w-3xl mx-auto mb-8 p-6 bg-gradient-to-r from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed text-balance font-medium" style={{ color: "#A36ACB" }}>
              Welcome to your digital front door to healing and hope. As your trusted psychiatric mental health partner,
              I provide compassionate, evidence-based care that honors your unique journey. With over 8 years of
              specialized experience and board certification, I'm here to help you navigate life's challenges with
              personalized treatment plans that blend medication management and psychotherapy—because your mental health
              deserves expert, caring attention.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="group text-white font-semibold hover:scale-110 transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-xl hover:shadow-2xl relative overflow-hidden"
              onClick={() => window.open("tel:+17722721699")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Call (772) 272-1699
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group font-semibold border-2 bg-transparent hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 shadow-lg hover:shadow-xl relative overflow-hidden"
              style={{
                borderColor: "#A36ACB",
                color: "#A36ACB",
              }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Email Me
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100/50 to-purple-200/50 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200/30 animate-pulse-soft">
            <Heart className="h-4 w-4 text-purple-500 animate-pulse" />
            <p className="text-sm font-medium" style={{ color: "#A36ACB" }}>
              Free 15-minute consultation available
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 relative">
        <div
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-200/20 to-transparent animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card
            className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 relative overflow-hidden group"
            style={{ backgroundColor: "rgba(250, 249, 246, 0.8)", backdropFilter: "blur(10px)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[1px] rounded-lg" style={{ backgroundColor: "#FAF9F6" }} />

            <CardContent className="relative p-8 md:p-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-purple-100/50 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium text-purple-700">8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100/50 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium text-purple-700">500+ Clients Helped</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100/50 px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium text-purple-700">Board Certified</span>
                </div>
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-6 text-balance" style={{ color: "#000" }}>
                You don't have to go through life's challenges alone. As a Board-Certified Psychiatric Mental Health
                Nurse Practitioner (PMHNP-BC), I specialize in providing compassionate, evidence-based care for
                individuals struggling with anxiety, depression, ADHD, trauma, bipolar disorder, PTSD, substance abuse,
                and other mental health concerns.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-balance" style={{ color: "#000" }}>
                My goal is to create a safe, nonjudgmental space where you feel heard, supported, and empowered on your
                journey to healing and recovery. With over 8 years of psychiatric nursing experience, I am skilled in
                both medication management and psychotherapy, tailoring treatment plans to meet each client's unique
                needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: "#000" }}>
            Specialized care for individuals, families, and communities across all ages and backgrounds
          </p>

          {/* Service Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl" style={{ color: "#A36ACB" }}>
                  Mental Health Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {[
                    "Anxiety Disorders",
                    "Depression",
                    "ADHD",
                    "Bipolar Disorder",
                    "PTSD & Trauma",
                    "Substance Abuse",
                    "Mood Disorders",
                    "Panic Disorders",
                  ].map((condition, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200"
                    >
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm" style={{ color: "#000" }}>
                        {condition}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl" style={{ color: "#A36ACB" }}>
                  Treatment Services
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {[
                    "Psychiatric Evaluations",
                    "Medication Management",
                    "Psychotherapy (CBT)",
                    "Trauma-Informed Care",
                    "Crisis Intervention",
                    "Treatment Planning",
                    "Progress Monitoring",
                    "Collaborative Care",
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200"
                    >
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm" style={{ color: "#000" }}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl" style={{ color: "#A36ACB" }}>
                  Populations Served
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {[
                    "Adults (18+)",
                    "Adolescents (13-17)",
                    "Seniors (65+)",
                    "LGBTQ+ Community",
                    "Veterans & Military",
                    "Healthcare Workers",
                    "First Responders",
                    "Students & Professionals",
                  ].map((population, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200"
                    >
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm" style={{ color: "#000" }}>
                        {population}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Treatment Approach Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3 text-xl" style={{ color: "#A36ACB" }}>
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  What You Can Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-4">
                  {[
                    "Comprehensive psychiatric evaluations",
                    "Clear personalized treatment plans aligned with your needs",
                    "A blend of psychotherapy and psychopharmacology",
                    "Ongoing support, monitoring, and adjustments as your needs evolve",
                    "A collaborative, patient-centered approach that prioritizes your goals and values",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                    >
                      <CheckCircle
                        className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"
                        style={{ color: "#A36ACB" }}
                      />
                      <span style={{ color: "#000" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3 text-xl" style={{ color: "#A36ACB" }}>
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6" />
                  </div>
                  Treatment Approaches
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-4">
                  {[
                    "Cognitive Behavioral Therapy (CBT)",
                    "Trauma-informed care",
                    "Individualized medication strategies",
                    "Evidence-based practices",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                    >
                      <CheckCircle
                        className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"
                        style={{ color: "#A36ACB" }}
                      />
                      <span style={{ color: "#000" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Transparent Pricing & Plans
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: "#000" }}>
            Clear, upfront pricing with flexible payment options to make quality mental healthcare accessible
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Initial Consultation */}
            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600" />
              <CardHeader className="relative text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-2" style={{ color: "#A36ACB" }}>
                  Initial Consultation
                </CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                  $175
                </div>
                <p className="text-sm mt-2" style={{ color: "#000" }}>
                  Comprehensive 90-minute evaluation
                </p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {[
                    "Complete psychiatric assessment",
                    "Medical history review",
                    "Treatment plan development",
                    "Medication evaluation",
                    "Goal setting session",
                    "Resource recommendations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm" style={{ color: "#000" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-3 bg-purple-50/50 rounded-lg">
                  <p className="text-sm font-medium text-center" style={{ color: "#A36ACB" }}>
                    <Heart className="inline h-4 w-4 mr-1" />
                    Free 15-minute consultation available
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Follow-up Sessions */}
            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden transform md:scale-110"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-purple-700" />
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader className="relative text-center pt-8">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-2" style={{ color: "#A36ACB" }}>
                  Follow-up Sessions
                </CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                  $90
                </div>
                <p className="text-sm mt-2" style={{ color: "#000" }}>
                  Standard 45-60 minute sessions
                </p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {[
                    "Progress monitoring",
                    "Medication adjustments",
                    "Therapy sessions",
                    "Symptom management",
                    "Coping strategies",
                    "Crisis support",
                    "Care coordination",
                    "Treatment updates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm" style={{ color: "#000" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <Card
              className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
              style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600" />
              <CardHeader className="relative text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-2" style={{ color: "#A36ACB" }}>
                  Payment Options
                </CardTitle>
                <p className="text-sm" style={{ color: "#000" }}>
                  Flexible payment methods accepted
                </p>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {["ACH Bank Transfer", "Cash Payment", "PayPal", "Venmo", "Zelle"].map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50/30 to-purple-100/30 rounded-lg hover:scale-105 transition-transform duration-200"
                    >
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span className="font-medium" style={{ color: "#000" }}>
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-purple-50/50 rounded-lg">
                  <p className="text-sm font-medium mb-2" style={{ color: "#A36ACB" }}>
                    Insurance & Billing:
                  </p>
                  <p className="text-xs" style={{ color: "#000" }}>
                    Self-pay practice. Superbills provided for insurance reimbursement. Payment plans available upon
                    request.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Start Your Journey
          </h2>
          <Card
            className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 relative overflow-hidden"
            style={{ backgroundColor: "rgba(250, 249, 246, 0.95)", backdropFilter: "blur(10px)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-purple-500/20 to-purple-600/20 animate-pulse-slow" />
            <div className="absolute inset-[1px] rounded-lg" style={{ backgroundColor: "rgba(250, 249, 246, 0.95)" }} />

            <CardContent className="relative p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label
                      className="block text-sm font-medium mb-2 group-focus-within:text-purple-600 transition-colors"
                      style={{ color: "#000" }}
                    >
                      First Name
                    </label>
                    <Input
                      className="border-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-300"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                  <div className="group">
                    <label
                      className="block text-sm font-medium mb-2 group-focus-within:text-purple-600 transition-colors"
                      style={{ color: "#000" }}
                    >
                      Last Name
                    </label>
                    <Input
                      className="border-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-300"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                </div>
                <div className="group">
                  <label
                    className="block text-sm font-medium mb-2 group-focus-within:text-purple-600 transition-colors"
                    style={{ color: "#000" }}
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    className="border-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-300"
                    style={{ borderColor: "#D4C3ED" }}
                  />
                </div>
                <div className="group">
                  <label
                    className="block text-sm font-medium mb-2 group-focus-within:text-purple-600 transition-colors"
                    style={{ color: "#000" }}
                  >
                    Phone
                  </label>
                  <Input
                    type="tel"
                    className="border-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-300"
                    style={{ borderColor: "#D4C3ED" }}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label
                      className="block text-sm font-medium mb-2 group-focus-within:text-purple-600 transition-colors"
                      style={{ color: "#000" }}
                    >
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      className="border-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-300"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                  <div className="group">
                    <label
                      className="block text-sm font-medium mb-2 group-focus-within:text-purple-600 transition-colors"
                      style={{ color: "#000" }}
                    >
                      <Clock className="inline h-4 w-4 mr-1" />
                      Preferred Time
                    </label>
                    <Input
                      type="time"
                      className="border-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-300"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                </div>
                <div className="group">
                  <label
                    className="block text-sm font-medium mb-2 group-focus-within:text-purple-600 transition-colors"
                    style={{ color: "#000" }}
                  >
                    Message
                  </label>
                  <Textarea
                    rows={4}
                    className="border-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-300 resize-none"
                    style={{ borderColor: "#D4C3ED" }}
                    placeholder="Tell me about what brings you here today..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-white font-semibold hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-xl hover:shadow-2xl py-4 text-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: "#000" }}>
            Real experiences from individuals who found healing and hope through compassionate care
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                text: "Jeriece provided exceptional care during a very difficult time in my life. Her compassionate approach and expertise helped me find the right treatment plan. I finally feel like myself again.",
                author: "Sarah M.",
                condition: "Anxiety & Depression",
                rating: 5,
              },
              {
                text: "Professional, knowledgeable, and truly caring. I felt heard and supported throughout my treatment journey. The medication management was life-changing. Highly recommend!",
                author: "Michael R.",
                condition: "Bipolar Disorder",
                rating: 5,
              },
              {
                text: "After struggling with PTSD for years, Jeriece's trauma-informed approach helped me process my experiences safely. Her expertise and patience made all the difference in my recovery.",
                author: "Jennifer L.",
                condition: "PTSD",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group hover:scale-105 relative overflow-hidden"
                style={{ backgroundColor: "rgba(250, 249, 246, 0.9)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current animate-pulse"
                        style={{ color: "#A36ACB", animationDelay: `${i * 200}ms`, animationDuration: "2s" }}
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic relative leading-relaxed" style={{ color: "#000" }}>
                    <span className="text-4xl text-purple-300 absolute -top-2 -left-2">"</span>
                    {testimonial.text}
                    <span className="text-4xl text-purple-300 absolute -bottom-4 -right-2">"</span>
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: "#A36ACB" }}>
                          {testimonial.author}
                        </p>
                        <p className="text-sm opacity-75" style={{ color: "#000" }}>
                          {testimonial.condition}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, number: "500+", label: "Clients Helped" },
              { icon: Award, number: "8+", label: "Years Experience" },
              { icon: Star, number: "4.9", label: "Average Rating" },
              { icon: Heart, number: "95%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-110 transition-transform duration-300">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit group-hover:bg-purple-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-sm font-medium" style={{ color: "#000" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-50/30 to-purple-100/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Stay Connected
          </h2>
          <p className="text-lg mb-8" style={{ color: "#000" }}>
            Follow for mental health tips, resources, and community support
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                style={{ border: "2px solid #D4C3ED" }}
              >
                <social.icon
                  className="h-6 w-6 group-hover:scale-110 transition-transform duration-200"
                  style={{ color: "#A36ACB" }}
                />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" style={{ color: "#A36ACB" }} />
              <span style={{ color: "#000" }}>Serving Florida & Telehealth Nationwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" style={{ color: "#A36ACB" }} />
              <span style={{ color: "#000" }}>Secure Telehealth Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t relative" style={{ borderColor: "#D4C3ED" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-50/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Jeriece LoveIace, PMHNP-BC
          </h3>
          <p className="mb-6 text-lg" style={{ color: "#000" }}>
            Board-Certified Psychiatric Mental Health Nurse Practitioner
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
              <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <Phone className="h-5 w-5" style={{ color: "#A36ACB" }} />
              </div>
              <span className="font-medium" style={{ color: "#000" }}>
                (772) 272-1699
              </span>
            </div>
            <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
              <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <Heart className="h-5 w-5" style={{ color: "#A36ACB" }} />
              </div>
              <span className="font-medium" style={{ color: "#000" }}>
                Free 15-minute consultation
              </span>
            </div>
          </div>
          <p className="text-sm opacity-75" style={{ color: "#000" }}>
            © 2025 Jeriece LoveIace, PMHNP-BC. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
