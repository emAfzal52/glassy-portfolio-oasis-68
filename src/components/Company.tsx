import { GlassCard } from "./GlassCard";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export const Company = () => {
  return (
    <section className="container min-h-[70vh] flex items-center justify-center py-20">
      <GlassCard className="max-w-4xl mx-auto p-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
          Welcome to Neuralberry
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
          At Neuralberry, we specialize in Generative AI, Web 3.0, Cloud, and Metaverse innovation, 
          delivering bespoke SaaS solutions that redefine digital engagement. Our expertise spans 
          AI-Powered Applications, Blockchain-Based DApps, Immersive VR Game Development, Modern 
          Full-Stack Web Technologies, and Robust DevOps Practices, driving Scalable, Secure, and 
          User-Centric Digital Ecosystems.
        </p>
        <Button 
          className="group flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full font-medium transition-all hover:scale-105"
          onClick={() => window.open('https://neuralberry.com', '_blank')}
        >
          Visit Neuralberry
          <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </GlassCard>
    </section>
  );
};