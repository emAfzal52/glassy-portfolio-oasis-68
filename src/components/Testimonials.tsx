import { useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = 340 * index; // Width of one card + gap
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="testimonials" className="container py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Clients Say</h2>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-8 px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={(e) => {
            const index = Math.round(e.currentTarget.scrollLeft / 340);
            setActiveIndex(index);
          }}
        >
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={index}
              className="flex-none w-80 flex flex-col gap-4 p-6 snap-center animate-fade-up hover:scale-105 transition-transform"
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

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};