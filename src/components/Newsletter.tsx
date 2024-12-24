import { Button } from "@/components/ui/button";
import { GlassCard } from "./GlassCard";
import { useNavigate } from "react-router-dom";

export const Newsletter = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to my Newsletter</h2>
        <GlassCard>
          <p className="text-lg mb-8">
            Dive into the ever-evolving world of AI, Cloud, DevOps, and Cybersecurity! Our newsletter keeps you ahead of the curve with insights into cutting-edge technologies, best practices, and emerging trends that shape these critical domains. Whether it's breakthroughs in artificial intelligence, innovations in cloud computing, DevOps strategies, or the latest in cybersecurity, we've got you covered.
          </p>
          <p className="text-lg mb-8">
            Stay informed, stay secure, and stay ahead in this dynamic digital landscape. Let's explore what's next in tech together!
          </p>
          <Button 
            onClick={() => navigate("/newsletter")}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full font-medium transition-all hover:scale-105 text-lg"
          >
            Join Our Newsletter Community
          </Button>
        </GlassCard>
      </div>
    </div>
  );
};