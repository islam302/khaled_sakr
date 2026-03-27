import { motion } from 'framer-motion';
import { FaGooglePlay, FaAppStoreIos, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  name: string;
  title: string;
  description: string;
  tech: string[];
  bgColor: string;
  textColor: string;
  stats: { icon: React.ReactNode; label: string; sublabel: string }[];
  ctaLabel: string;
  ctaLink: string;
  image: string;
  imageStyle: 'phone' | 'desktop' | 'dual-phone';
  accentColor: string;
}

const projects: Project[] = [
  {
    name: 'Tazakka',
    title: 'An Islamic companion for daily worship',
    description:
      'An Islamic mobile app with over 60,000+ active users, designed to help users wake up for Fajr prayer and stay consistent with daily worship through motivational content, personalized reminders, and step counting.',
    tech: ['React Native', 'SWR', 'Reanimated', 'MMKV', 'i18n'],
    bgColor: 'bg-emerald-50',
    textColor: 'text-black',
    stats: [
      { icon: <FaGooglePlay className="text-2xl" />, label: 'Tazakka', sublabel: '60K+ users' },
      { icon: <span className="text-xl font-bold">60K+</span>, label: '60,000+', sublabel: 'active users' },
    ],
    ctaLabel: 'Tazakka on Google Play',
    ctaLink: 'https://play.google.com/store/apps/details?id=com.tazkiahapp&hl=ar',
    image: '/tazakka.png',
    imageStyle: 'phone',
    accentColor: 'bg-emerald-600',
  },
  {
    name: 'Hawadeet',
    title: 'A social platform for Arabic storytelling',
    description:
      'A social platform tailored for Arabic users, allowing them to create and engage with posts through likes and comments. Built using React Native and Expo with deep linking and optimized media handling for both iOS and Android.',
    tech: ['React Native', 'Expo', 'React Query', 'Deep Linking'],
    bgColor: 'bg-blue-50',
    textColor: 'text-black',
    stats: [
      { icon: <FaAppStoreIos className="text-2xl" />, label: 'App Store', sublabel: 'Published' },
      { icon: <FaGooglePlay className="text-2xl" />, label: 'Google Play', sublabel: 'Published' },
    ],
    ctaLabel: 'Hawadeet on App Store',
    ctaLink: 'https://apps.apple.com/eg/app/hawadeet/id6670516431',
    image: '/hawadeet.png',
    imageStyle: 'dual-phone',
    accentColor: 'bg-blue-600',
  },
  {
    name: 'DS-Mate',
    title: 'Automating dropshipping at scale',
    description:
      'A high-scale automatic dropshipping platform built with Next.js and Node.js. Contributed as Full Stack Engineer, primarily leading frontend development, building dashboards, admin panels, and automation workflows.',
    tech: ['Next.js', 'Node.js', 'React', 'TypeScript'],
    bgColor: 'bg-[#0d1f17]',
    textColor: 'text-white',
    stats: [
      { icon: <FaExternalLinkAlt className="text-xl" />, label: 'DS-Mate', sublabel: 'Live Platform' },
      { icon: <span className="text-sm font-bold">Almdrasa</span>, label: 'Almdrasa', sublabel: 'UK Company' },
    ],
    ctaLabel: 'DS-Mate Platform',
    ctaLink: 'https://ds-mate.com/',
    image: '/dsmate.png',
    imageStyle: 'desktop',
    accentColor: 'bg-lime-500',
  },
  {
    name: 'Original Software',
    title: 'Enterprise software solutions platform',
    description:
      'A comprehensive enterprise platform offering tailored software solutions for companies, banks, and government institutions. Features an elegant bilingual storefront with product browsing, secure checkout, and a full admin dashboard for managing orders, users, and digital product delivery.',
    tech: ['Next.js', 'Django', 'TypeScript', 'Tailwind', 'REST API'],
    bgColor: 'bg-yellow-50',
    textColor: 'text-black',
    stats: [
      { icon: <FaExternalLinkAlt className="text-xl" />, label: 'Original Software', sublabel: 'Live Platform' },
    ],
    ctaLabel: 'Visit Platform',
    ctaLink: 'https://app.original-software.com/',
    image: '/original-soft.png',
    imageStyle: 'desktop',
    accentColor: 'bg-yellow-500',
  },
];

function PhoneMockup({ image }: { image: string }) {
  return (
    <div className="relative mx-auto w-48 md:w-56">
      <div className="rounded-[2rem] overflow-hidden border-[6px] border-gray-900 shadow-2xl">
        <img src={image} alt="" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

function DualPhoneMockup({ image }: { image: string }) {
  return (
    <div className="relative flex justify-center gap-2">
      <div className="-rotate-3 scale-90 w-36 md:w-44">
        <div className="rounded-[2rem] overflow-hidden border-[6px] border-gray-900 shadow-2xl">
          <img src={image} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
      <div className="rotate-3 scale-90 w-36 md:w-44">
        <div className="rounded-[2rem] overflow-hidden border-[6px] border-gray-900 shadow-2xl">
          <img src={image} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

function DesktopMockup({ image }: { image: string }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-xl overflow-hidden border-[6px] border-gray-900 shadow-2xl">
        <img src={image} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className="mx-auto w-24 h-6 bg-gray-800 rounded-b-lg" />
      <div className="mx-auto w-32 h-2 bg-gray-700 rounded-b-lg" />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`${project.bgColor} rounded-3xl overflow-hidden`}
          >
            <div className={`p-8 md:p-16 ${i % 2 === 0 ? 'md:flex md:flex-row' : 'md:flex md:flex-row-reverse'} items-center gap-12`}>
              {/* Text Content */}
              <div className={`flex-1 mb-8 md:mb-0 ${project.textColor}`}>
                <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${project.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.name}
                </p>
                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                  {project.title}
                </h2>
                <p className={`text-base md:text-lg leading-relaxed mb-6 ${project.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${project.textColor === 'text-white' ? 'bg-white/10 text-gray-300' : 'bg-white/70 text-gray-700'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mockup */}
              <div className="flex-1">
                {project.imageStyle === 'phone' && <PhoneMockup image={project.image} />}
                {project.imageStyle === 'dual-phone' && <DualPhoneMockup image={project.image} />}
                {project.imageStyle === 'desktop' && <DesktopMockup image={project.image} />}
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="px-8 md:px-16 pb-8">
              <div className={`${project.textColor === 'text-white' ? 'bg-white/10' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4`}>
                <div className="flex items-center gap-6">
                  {project.stats.map((stat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={project.textColor === 'text-white' ? 'text-white' : 'text-black'}>{stat.icon}</div>
                      <div>
                        <p className={`font-bold text-sm ${project.textColor === 'text-white' ? 'text-white' : ''}`}>{stat.label}</p>
                        <p className={`text-xs ${project.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'}`}>{stat.sublabel}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={project.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.accentColor} text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity`}
                >
                  {project.ctaLabel}
                  <span className="text-lg">&rarr;</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
