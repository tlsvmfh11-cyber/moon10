import { useState, useEffect } from 'react';
import { Menu, X, Phone, Send } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '처음이라면', href: '#intro' },
    { name: '이용방법', href: '#system' },
    { name: '가격안내', href: '#pricing' },
    { name: '이용후기', href: '#reviews' },
    { name: '예약하기', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-guide-bg/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          DALTO GUIDE
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-guide-text hover:text-guide-accent transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="https://t.me/hscompanyshs" target="_blank" className="bg-guide-accent/10 px-4 py-2 rounded-full text-guide-accent hover:bg-guide-accent hover:text-white transition-colors">
            <Send size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-guide-card border-b border-guide-text/10 p-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-medium text-center text-guide-text hover:text-guide-accent transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </a>
                ))}
            </div>
            <div className="flex justify-center gap-6 pt-6 border-t border-guide-text/10 mt-2">
                <a href="tel:01023033778" className="flex items-center gap-2 text-white bg-guide-accent/20 px-4 py-2 rounded-full">
                    <Phone size={18} className="text-guide-accent" /> 전화
                </a>
                <a href="https://t.me/hscompanyshs" target="_blank" className="flex items-center gap-2 text-white bg-[#0088cc]/20 px-4 py-2 rounded-full">
                    <Send size={18} className="text-[#0088cc]" /> 텔레그램
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
