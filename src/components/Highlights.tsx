import { motion } from 'framer-motion';
import { FaReact, FaGooglePlay, FaAppStore, FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const highlights = [
  {
    icon: <FaGooglePlay className="text-4xl" />,
    title: '60,000+ Active Users',
    description: 'Tazakka App on Google Play — Islamic mobile app with massive user base',
    link: '#work',
  },
  {
    icon: <FaAppStore className="text-4xl" />,
    title: 'Published on App Store & Google Play',
    description: 'Hawadeet App — Social platform for Arabic users on both platforms',
    link: '#work',
  },
  {
    icon: <SiNextdotjs className="text-4xl" />,
    title: 'Full Stack at Almdrasa',
    description: 'Leading frontend team on DS-Mate, a high-scale dropshipping platform',
    link: '#work',
  },
  {
    icon: <FaReact className="text-4xl" />,
    title: 'React Native Expert',
    description: 'Building production mobile apps with 60K+ users at TAZKIAH Foundation',
    link: '#work',
  },
  {
    icon: <FaLaptopCode className="text-4xl" />,
    title: 'Frontend Team Lead',
    description: 'Overseeing architecture decisions, code reviews, and task distribution',
    link: '#work',
  },
  {
    icon: <SiTypescript className="text-4xl" />,
    title: 'TypeScript & Modern Stack',
    description: 'React, Next.js, React Native, Node.js, Tailwind CSS, Firebase',
    link: '#work',
  },
  {
    icon: <FaGraduationCap className="text-4xl" />,
    title: 'B.Sc. Electrical Engineering',
    description: 'Al Azhar University — Class of 2025',
    link: '#',
  },
  {
    icon: <FaCode className="text-4xl" />,
    title: 'Software Engineer Intern',
    description: 'Kalbonyan Elmarsos — Intensive training in programming & modern frameworks',
    link: '#work',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {highlights.map((h, i) => (
          <motion.a
            key={i}
            variants={item}
            href={h.link}
            className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 text-black group-hover:scale-110 transition-transform duration-300 inline-block">
              {h.icon}
            </div>
            <h3 className="text-lg font-bold text-black mb-2 leading-tight">
              {h.title}
            </h3>
            <p className="text-sm text-gray-500">{h.description}</p>
            <span className="mt-4 inline-flex items-center text-sm text-gray-400 group-hover:text-black transition-colors">
              See more
              <svg className="ml-1 w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1l10 10M11 1v10H1" />
              </svg>
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
