import { useRef } from "react";
import { GlassCard } from "./GlassCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    content: "Working with Neuralberry has transformed our development process. Their expertise in DevOps and cloud architecture is unmatched.",
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
  },
  {
    name: "David Wilson",
    role: "CEO, InnovateTech",
    content: "Neuralberry's approach to AI integration and cloud solutions has given us a significant competitive advantage.",
    avatar: "/lovable-uploads/6c559c27-d00c-41c6-aed5-1904338c5695.png"
  },
  {
    name: "Lisa Zhang",
    role: "Product Manager, FutureScale",
    content: "The team's expertise in Web3 and blockchain technology helped us launch our DeFi platform ahead of schedule.",
    avatar: "/lovable-uploads/6c559c27-d00c-41c6-aed5-1904338c5695.png"
  }
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="container py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Clients Say</h2>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-8 px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={index}
              className="flex-none w-[calc(33.333%-1rem)] min-w-[320px] flex flex-col gap-4 p-6 snap-center animate-fade-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">"{testimonial.content}"</p>
            </GlassCard>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <span className="w-2 h-2 rounded-full bg-white/50 animate-dot-slide" />
          <span className="w-2 h-2 rounded-full bg-white/50 animate-dot-slide" style={{ animationDelay: '0.5s' }} />
          <span className="w-2 h-2 rounded-full bg-white/50 animate-dot-slide" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};