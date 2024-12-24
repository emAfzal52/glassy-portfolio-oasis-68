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
    <div className="fixed w-full z-50 flex justify-center">
      <GlassCard 
        className={`max-w-4xl w-full mx-4 transition-transform duration-300 px-6 py-4 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav>
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-white hover:text-accent transition-colors">
              Neuralberry
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-accent transition-colors">
                About
              </a>
              <a href="#services" className="text-white hover:text-accent transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-white hover:text-accent transition-colors">
                Testimonials
              </a>
              <a href="#hire-me" className="text-white hover:text-accent transition-colors">
                Hire Me
              </a>
              <a href="#company" className="text-white hover:text-accent transition-colors">
                My Company
              </a>
              <a href="#newsletter" className="text-white hover:text-accent transition-colors">
                Newsletter
              </a>
              <a href="#contact" className="text-white hover:text-accent transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
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
                href="#services"
                className="block text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#hire-me"
                className="block text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Hire Me
              </a>
              <a
                href="#company"
                className="block text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                My Company
              </a>
              <a
                href="#newsletter"
                className="block text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Newsletter
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
    </div>
  );
};