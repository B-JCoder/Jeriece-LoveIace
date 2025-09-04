"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Star, CheckCircle, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF9F6" }}>
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/jeriece-lovelace.png"
              alt="Jeriece LoveIace, PMHNP-BC"
              width={300}
              height={100}
              className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 "
              style={{ boxShadow: "0 10px 25px #D4C3ED" }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#D8AFE7" }}>
            Jeriece LoveIace, PMHNP-BC
          </h1>
          <p className="text-xl mb-8 text-balance" style={{ color: "#D8AFE7" }}>
            Board-Certified Psychiatric Mental Health Nurse Practitioner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-white font-semibold hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: "#A36ACB" }}
              onClick={() => window.open("tel:+17722721699")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (772) 272-1699
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold border-2 bg-transparent hover:scale-105 transition-transform duration-200"
              style={{
                borderColor: "#A36ACB",
                color: "#A36ACB",
                backgroundColor: "transparent",
              }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
          </div>
          <p className="mt-4 text-sm" style={{ color: "#D8AFE7" }}>
            Free 15-minute consultation available
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#D8AFE7" }}>
            About
          </h2>
          <Card className="shadow-lg" style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#D8AFE7" }}>
                You don't have to go through life's challenges alone. As a Board-Certified Psychiatric Mental Health
                Nurse Practitioner (PMHNP-BC), I specialize in providing compassionate, evidence-based care for
                individuals struggling with anxiety, depression, ADHD, trauma, bipolar disorder, PTSD, substance abuse,
                and other mental health concerns.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#D8AFE7" }}>
                My goal is to create a safe, nonjudgmental space where you feel heard, supported, and empowered on your
                journey to healing and recovery. With over 8 years of psychiatric nursing experience, I am skilled in
                both medication management and psychotherapy, tailoring treatment plans to meet each client's unique
                needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#D8AFE7" }}>
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg" style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}>
              <CardHeader>
                <CardTitle style={{ color: "#A36ACB" }}>What You Can Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>Comprehensive psychiatric evaluations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>Clear personalized treatment plans aligned with your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>A blend of psychotherapy and psychopharmacology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>
                      Ongoing support, monitoring, and adjustments as your needs evolve
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>
                      A collaborative, patient-centered approach that prioritizes your goals and values
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg" style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}>
              <CardHeader>
                <CardTitle style={{ color: "#A36ACB" }}>Treatment Approaches</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>Cognitive Behavioral Therapy (CBT)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>Trauma-informed care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>Individualized medication strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#A36ACB" }} />
                    <span style={{ color: "#D8AFE7" }}>Evidence-based practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#D8AFE7" }}>
            Fees & Payment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg" style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}>
              <CardHeader>
                <CardTitle style={{ color: "#A36ACB" }}>Session Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span style={{ color: "#D8AFE7" }}>Initial Session Fee</span>
                    <span className="font-bold text-xl" style={{ color: "#A36ACB" }}>
                      $175
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: "#D8AFE7" }}>Standard Visit</span>
                    <span className="font-bold text-xl" style={{ color: "#A36ACB" }}>
                      $90
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg" style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}>
              <CardHeader>
                <CardTitle style={{ color: "#A36ACB" }}>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li style={{ color: "#D8AFE7" }}>• ACH Bank Transfer</li>
                  <li style={{ color: "#D8AFE7" }}>• Cash</li>
                  <li style={{ color: "#D8AFE7" }}>• PayPal</li>
                  <li style={{ color: "#D8AFE7" }}>• Venmo</li>
                  <li style={{ color: "#D8AFE7" }}>• Zelle</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#D8AFE7" }}>
            Contact Me
          </h2>
          <Card
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}
          >
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#D8AFE7" }}>
                      First Name
                    </label>
                    <Input
                      className="border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#D8AFE7" }}>
                      Last Name
                    </label>
                    <Input
                      className="border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#D8AFE7" }}>
                    Email
                  </label>
                  <Input
                    type="email"
                    className="border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
                    style={{ borderColor: "#D4C3ED" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#D8AFE7" }}>
                    Phone
                  </label>
                  <Input
                    type="tel"
                    className="border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
                    style={{ borderColor: "#D4C3ED" }}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#D8AFE7" }}>
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      className="border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#D8AFE7" }}>
                      <Clock className="inline h-4 w-4 mr-1" />
                      Preferred Time
                    </label>
                    <Input
                      type="time"
                      className="border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: "#D4C3ED" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#D8AFE7" }}>
                    Message
                  </label>
                  <Textarea
                    rows={4}
                    className="border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
                    style={{ borderColor: "#D4C3ED" }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-white font-semibold hover:scale-105 transition-transform duration-200"
                  style={{ backgroundColor: "#A36ACB" }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#D8AFE7" }}>
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{ color: "#A36ACB" }} />
                  ))}
                </div>
                <p className="mb-4" style={{ color: "#D8AFE7" }}>
                  "Jeriece provided exceptional care during a very difficult time in my life. Her compassionate approach
                  and expertise helped me find the right treatment plan."
                </p>
                <p className="font-semibold" style={{ color: "#A36ACB" }}>
                  - Sarah M.
                </p>
              </CardContent>
            </Card>

            <Card
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ boxShadow: "0 8px 20px #D4C3ED", backgroundColor: "#FAF9F6" }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{ color: "#A36ACB" }} />
                  ))}
                </div>
                <p className="mb-4" style={{ color: "#D8AFE7" }}>
                  "Professional, knowledgeable, and truly caring. I felt heard and supported throughout my treatment
                  journey. Highly recommend!"
                </p>
                <p className="font-semibold" style={{ color: "#A36ACB" }}>
                  - Michael R.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t" style={{ borderColor: "#D4C3ED" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#D8AFE7" }}>
            Jeriece LoveIace, PMHNP-BC
          </h3>
          <p className="mb-4" style={{ color: "#D8AFE7" }}>
            Board-Certified Psychiatric Mental Health Nurse Practitioner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" style={{ color: "#A36ACB" }} />
              <span style={{ color: "#D8AFE7" }}>(772) 272-1699</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" style={{ color: "#A36ACB" }} />
              <span style={{ color: "#D8AFE7" }}>Free 15-minute consultation</span>
            </div>
          </div>
          <p className="mt-8 text-sm" style={{ color: "#D8AFE7" }}>
            © 2025 Jeriece LoveIace, PMHNP-BC. All rights reserved.
          </p>
          
        </div>
      </footer>
    </div>
  )
}
