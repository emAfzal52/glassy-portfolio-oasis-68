import { useRef, useState } from "react";
import { GlassCard } from "./GlassCard";
import { Circle, CircleDot } from "lucide-react";

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth / 3;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 3;
      const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="testimonials" className="container max-w-6xl mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-4 px-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onScroll={handleScroll}
        >
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={index}
              className="flex-none w-[calc(33.333%-1.33rem)] min-w-[calc(33.333%-1.33rem)] flex flex-col gap-4 p-6 snap-center animate-fade-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 200}ms` }}
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

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            index === activeIndex ? (
              <CircleDot key={index} className="w-4 h-4 text-accent" />
            ) : (
              <Circle key={index} className="w-4 h-4 text-white/50" />
            )
          ))}
        </div>
      </div>
    </section>
  );
};