import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "#",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "#",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "#",
    icon: Twitter,
  },
  {
    name: "Instagram",
    url: "#",
    icon: Instagram,
  },
  {
    name: "Email",
    url: "mailto:afzalishaq52@gmail.com",
    icon: Mail,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-accent transition-colors"
          aria-label={link.name}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};