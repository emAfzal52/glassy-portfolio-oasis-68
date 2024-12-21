import { Calendar, Code, Globe, Database, Cloud, Brain } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechStacks } from "@/components/TechStacks";
import { Testimonials } from "@/components/Testimonials";
import { CustomCursor } from "@/components/CustomCursor";

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
    <div className="min-h-screen bg-hero text-white" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/6c559c27-d00c-41c6-aed5-1904338c5695.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
      <CustomCursor />
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>

      {/* About Section with Tech Stack */}
      <section id="about" className="container py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About My Tech Stack</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I leverage these cutting-edge technologies to build innovative solutions that transform ideas into digital reality.
          </p>
        </div>
        <TechStacks />
      </section>

      {/* Services Section */}
      <section id="services" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <GlassCard className="max-w-xl mx-auto">
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
      </section>

      {/* Footer */}
      <footer className="container py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/80">
            © 2024 Muhammad Afzal. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;