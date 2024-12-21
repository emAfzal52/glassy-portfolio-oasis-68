import { Calendar } from "lucide-react";
import { code, globe, database, cloud, brain } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SocialLinks } from "@/components/SocialLinks";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Navigation } from "@/components/Navigation";

const services = [
  {
    title: "Full Stack Development",
    description: "MERN/MEAN stack development with modern technologies",
    icon: code,
  },
  {
    title: "Metaverse & Virtual Worlds",
    description: "Creating immersive digital experiences",
    icon: globe,
  },
  {
    title: "Blockchain Integration",
    description: "Smart contracts and decentralized applications",
    icon: database,
  },
  {
    title: "Cloud Architecture",
    description: "Scalable and secure cloud solutions",
    icon: cloud,
  },
  {
    title: "AI Solutions",
    description: "Generative AI and machine learning integration",
    icon: brain,
  },
];

const projects = [
  {
    title: "Metaverse Platform",
    description: "A virtual world platform with blockchain integration",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "AI-Powered Analytics",
    description: "Business intelligence with machine learning",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Cloud Migration Solution",
    description: "Enterprise-scale cloud architecture",
    image: "/placeholder.svg",
    link: "#",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-hero text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container min-h-screen flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-accent font-medium tracking-wider uppercase animate-fade-up">
              Full Stack Developer & Tech Innovator
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent animate-fade-up" style={{ animationDelay: "200ms" }}>
              Transforming Ideas into Digital Reality
            </h1>
          </div>
          
          <GlassCard className="mb-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <p className="text-lg md:text-xl text-white/80">
              Hi, I'm Muhammad Afzal, a Full Stack Developer specializing in creating immersive Metaverse and Virtual Worlds with Blockchain and AI integration. I am also a DevSecOps and Cloud Expert, delivering innovative Generative AI solutions.
            </p>
          </GlassCard>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Book a Meeting
            </a>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-20">
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
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
};

export default Index;
