import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gateway', path: '/' },
    { name: 'Junction', path: '/#about' },
    { name: 'Book your Future', path: '/#programs' },
    { name: 'Success Records', path: '/#placement' },
    //{ name: 'Book your Future', path: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="icon.png" alt="Logo" className="h-12 w-auto" />
            <span className={`text-2xl font-heading font-bold ${scrolled ? 'text-primary-navy' : 'text-white'}`}>
              Arctic <span className="text-accent-green">Professionals</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors hover:text-accent-green ${scrolled ? 'text-text-main' : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#apply"
              className="bg-primary-blue hover:bg-primary-navy text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Reserve Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${scrolled ? 'text-primary-navy' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-white border-t border-gray-100"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-text-main font-medium hover:text-primary-blue py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setIsOpen(false)}
                className="bg-primary-blue text-center text-white px-6 py-3 rounded-md font-medium mt-2"
              >
                Apply Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
