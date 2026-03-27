import { motion } from 'framer-motion';
import profileImg from '../assets/khaled_sakr.webp';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 bg-white overflow-hidden"
    >
      {/* Big Wave at Top */}
      <div className="absolute top-0 left-0 right-0 w-full z-0">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-40 md:h-56 lg:h-64"
          fill="none"
        >
          <path
            d="M0,0 L0,160 C180,280 360,320 540,260 C720,200 900,80 1080,120 C1260,160 1380,240 1440,260 L1440,0 Z"
            fill="#f3f4f6"
          />
          <path
            d="M0,0 L0,120 C200,220 400,260 600,200 C800,140 1000,60 1200,100 C1350,130 1420,180 1440,200 L1440,0 Z"
            fill="#e5e7eb"
            opacity="0.5"
          />
        </svg>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight max-w-4xl"
      >
        Khaled Sakr is
        <br />
        Software Engineer
        <br />
        from Egypt
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="relative z-10 mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
      >
        Full Stack & Mobile Developer. Egyptian. Building impactful digital products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className="mt-16 w-full max-w-2xl lg:max-w-3xl relative z-10 overflow-hidden"
        style={{ maxHeight: '60vh' }}
      >
        <img
          src={profileImg}
          alt="Khaled Sakr"
          className="w-full object-cover object-top"
          style={{ maxHeight: '60vh' }}
        />
        {/* Fade out at the bottom like the reference */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </motion.div>
    </section>
  );
}
