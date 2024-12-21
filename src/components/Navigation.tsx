import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <GlassCard 
      className={`fixed w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-4xl mx-auto px-8 py-6">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-12">
            <a href="#about" className="text-white hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="text-white hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#testimonials" className="text-white hover:text-accent transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              href="#about"
              className="block text-white hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-white hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="block text-white hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </GlassCard>
  );
};