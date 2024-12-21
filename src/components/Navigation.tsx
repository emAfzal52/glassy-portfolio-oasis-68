import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || heroBottom > 0) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-20'
    }`}>
      <div className="backdrop-blur-lg bg-glass/30 border border-white/20 rounded-full px-6 py-3">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  "text-sm font-medium text-white/80 hover:text-white transition-colors",
                  "relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0",
                  "after:bg-accent after:transition-all hover:after:w-full"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};