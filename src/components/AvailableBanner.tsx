import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/khaled_sakr.webp';

export default function AvailableBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white rounded-full px-4 py-2 flex items-center gap-3 shadow-2xl"
        >
          <img src={profileImg} alt="Khaled" className="w-8 h-8 rounded-full object-cover" />
          <div className="text-sm">
            <p className="font-medium">Khaled is available for hire</p>
            <p className="text-xs text-gray-400">Availability: Immediately</p>
          </div>
          <a
            href="#contact"
            className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors ml-2"
          >
            Hire Khaled
          </a>
          <button
            onClick={() => setVisible(false)}
            className="ml-1 text-gray-400 hover:text-white text-lg leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
