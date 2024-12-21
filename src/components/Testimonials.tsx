import { GlassCard } from "./GlassCard";

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

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <GlassCard 
            key={testimonial.name}
            className="flex flex-col gap-4 p-6 animate-fade-up hover:scale-105 transition-transform"
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
    </section>
  );
};