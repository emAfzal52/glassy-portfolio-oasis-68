import { Calendar, Code, Globe, Database, Cloud, Brain } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Company } from "@/components/Company";
import { TechStacks } from "@/components/TechStacks";
import { Testimonials } from "@/components/Testimonials";
import { CustomCursor } from "@/components/CustomCursor";
import { SocialLinks } from "@/components/SocialLinks";

const services = [
  {
    title: "Full Stack Development",
    description: "MERN/MEAN stack development with modern technologies",
    icon: Code,
  },
  {
    title: "Metaverse & Virtual Worlds",
    description: "Creating immersive digital experiences with Unity",
    icon: Globe,
  },
  {
    title: "Blockchain Integration",
    description: "Smart contracts and decentralized applications",
    icon: Database,
  },
  {
    title: "Cloud Architecture",
    description: "Scalable and secure cloud solutions with DevOps practices",
    icon: Cloud,
  },
  {
    title: "AI Solutions",
    description: "AI Agents and Chatbot Integration",
    icon: Brain,
  },
  {
    title: "DevOps Services",
    description: "CI/CD pipelines, containerization, and infrastructure automation",
    icon: Cloud,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      
      <section id="hero" className="bg-sections-hero text-cyan-200">
        <Hero />
      </section>

      <section id="company" className="bg-sections-about text-white">
        <Company />
      </section>

      <section id="about" className="bg-sections-about text-white">
        <div className="container py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About My Tech Stack</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              I leverage these cutting-edge technologies to build innovative solutions that transform ideas into digital reality.
            </p>
          </div>
          <TechStacks />
        </div>
      </section>

      <section id="services" className="bg-sections-services text-gray-800">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-sections-testimonials text-white">
        <Testimonials />
      </section>

      <section id="hire-me" className="bg-sections-about text-white py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hire Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="text-center">
              <h3 className="text-2xl font-bold mb-4">Upwork</h3>
              <p className="mb-6">Let's collaborate on your next project through Upwork</p>
              <a 
                href="https://www.upwork.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                View Profile
              </a>
            </GlassCard>
            <GlassCard className="text-center">
              <h3 className="text-2xl font-bold mb-4">Fiverr</h3>
              <p className="mb-6">Check out my gigs and services on Fiverr</p>
              <a 
                href="https://www.fiverr.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                View Profile
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-sections-testimonials text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to my Newsletter</h2>
            <GlassCard>
              <p className="text-lg mb-8">
                Dive into the ever-evolving world of AI, Cloud, DevOps, and Cybersecurity! Our newsletter keeps you ahead of the curve with insights into cutting-edge technologies, best practices, and emerging trends that shape these critical domains. Whether it's breakthroughs in artificial intelligence, innovations in cloud computing, DevOps strategies, or the latest in cybersecurity, we've got you covered.
              </p>
              <p className="text-lg mb-8">
                Stay informed, stay secure, and stay ahead in this dynamic digital landscape. Let's explore what's next in tech together!
              </p>
              <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-96 px-6 py-3 rounded-full bg-glass/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-sections-testimonials text-white">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <GlassCard className="w-full">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-glass/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-glass/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-glass/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </GlassCard>

            {/* Calendar Card */}
            <GlassCard className="w-full">
              <h3 className="text-xl font-semibold mb-6">Book a Meeting</h3>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID"
                style={{ border: 0 }}
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
              ></iframe>
            </GlassCard>
          </div>
        </div>
      </section>

      <footer className="bg-sections-footer text-gray-300">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="space-y-4">
                <SocialLinks />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <span>Email:</span>
                  <a href="mailto:afzalishaq52@gmail.com" className="hover:text-white transition-colors">
                    afzalishaq52@gmail.com
                  </a>
                </p>
                <p>Follow me on social media</p>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2024 Muhammad Afzal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;