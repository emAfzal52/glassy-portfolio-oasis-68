import { Calendar } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const BookMeeting = () => {
  return (
    <section id="book-meeting" className="bg-sections-about text-white py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Book a Meeting</h2>
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center">
            <div className="flex flex-col items-center gap-6">
              <Calendar className="w-12 h-12 text-accent" />
              <h3 className="text-2xl font-bold">Schedule a Consultation</h3>
              <p className="text-lg text-white/80 mb-6">
                Let's discuss your project and explore how we can work together to bring your ideas to life.
              </p>
              <a 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0PwXH9HE7_h6WGywXYg_J5nTp_rA8A_1A-VWk="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};