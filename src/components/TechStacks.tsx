import { GlassCard } from "./GlassCard";

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
    name: "AI & Agents",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "AI Agents & Chatbots"
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
  },
  {
    name: "Python Django",
    icon: "/lovable-uploads/a4fdf3c0-4888-4d7b-a222-be3f9df2362c.png",
    description: "Python Web Development with Django"
  }
];

export const TechStacks = () => {
  return (
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
  );
};