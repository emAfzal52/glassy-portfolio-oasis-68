import { Calendar, Code, Globe, Database, Cloud, Brain } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SocialLinks } from "@/components/SocialLinks";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";

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
    description: "Generative AI and machine learning integration",
    icon: Brain,
  },
  {
    title: "DevOps Services",
    description: "CI/CD pipelines, containerization, and infrastructure automation",
    icon: Cloud,
  },
];

const techStacks = [
  {
    name: "MERN Stack",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "MongoDB, Express.js, React, Node.js"
  },
  {
    name: "MEAN Stack",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "MongoDB, Express.js, Angular, Node.js"
  },
  {
    name: "DevOps",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "Docker, Kubernetes, Jenkins, GitLab CI/CD"
  },
  {
    name: "Cloud",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "AWS, Azure, GCP"
  },
  {
    name: "AI & ML",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "Generative AI & Machine Learning"
  },
  {
    name: "Unity",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "Unity 3D & Virtual Worlds"
  },
  {
    name: "Blockchain",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "Ethereum, Solidity, Web3.js"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    content: "Working with this team has transformed our development process. Their expertise in DevOps and cloud architecture is unmatched.",
    avatar: "/lovable-uploads/6c559c27-d00c-41c6-aed5-1904338c5695.png"
  },
  {
    name: "Michael Chen",
    role: "Founder, MetaWorld",
    content: "The virtual world solutions they delivered exceeded our expectations. Their understanding of blockchain integration is impressive.",
    avatar: "/lovable-uploads/6c559c27-d00c-41c6-aed5-1904338c5695.png"
  },
  {
    name: "Emma Davis",
    role: "Lead Developer, AI Solutions",
    content: "Their AI implementation helped us achieve 200% improvement in our processing efficiency. Truly revolutionary work!",
    avatar: "/lovable-uploads/6c559c27-d00c-41c6-aed5-1904338c5695.png"
  }
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

      {/* About Section with Tech Stack */}
      <section id="about" className="container py-20 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About My Tech Stack</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I leverage these cutting-edge technologies to build innovative solutions that transform ideas into digital reality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techStacks.map((tech) => (
            <GlassCard 
              key={tech.name}
              className="flex flex-col items-center justify-center gap-4 p-6 hover:scale-105 transition-transform"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-lg font-semibold">{tech.name}</h3>
              <p className="text-sm text-white/70 text-center">{tech.description}</p>
            </GlassCard>
          ))}
        </div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <GlassCard 
              key={testimonial.name}
              className="flex flex-col gap-4 p-6"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">"{testimonial.content}"</p>
            </GlassCard>
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
          <div className="flex gap-8">
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
};

export default Index;
