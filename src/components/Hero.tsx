import { Calendar } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { SocialLinks } from "./SocialLinks";

export const Hero = () => {
  return (
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
            href="#contact"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Book a Meeting
          </a>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};