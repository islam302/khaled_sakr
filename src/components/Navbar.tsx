import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Khaled Sakr', href: '#hero' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Work', href: '#work' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khaledskr', external: true },
  { label: 'Get in touch', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-sm'
        } rounded-full px-2 py-2 hidden md:flex`}
        style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }}
      >
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-200 block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden bg-white/90 backdrop-blur-md shadow-lg rounded-full p-3"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
