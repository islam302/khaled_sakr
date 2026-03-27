import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Thanks Section */}
      <div className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#f3f4f6" />
              <path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#000" strokeWidth="2" fill="none" />
              <circle cx="19" cy="20" r="2" fill="#000" />
              <circle cx="29" cy="20" r="2" fill="#000" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Thanks for visiting!
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Appreciate your time! Feel free to reach out for collaboration or just to say hi :)
          </p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Khaled Sakr. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/khaled-sakr" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/khaledskr" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:khaledsakr12345@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
