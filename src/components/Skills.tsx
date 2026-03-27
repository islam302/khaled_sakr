import { motion } from 'framer-motion';

interface SkillCard {
  category: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  items: string[];
}

const skillCards: SkillCard[] = [
  {
    category: 'Languages',
    title: 'Core Programming Languages',
    description: 'Building robust applications with modern languages',
    bgColor: 'bg-gradient-to-br from-red-800 to-red-950',
    textColor: 'text-white',
    items: ['JavaScript', 'TypeScript', 'C++', 'Matlab'],
  },
  {
    category: 'Frontend',
    title: 'Frontend & Mobile',
    description: 'Creating beautiful, performant user interfaces',
    bgColor: 'bg-white',
    textColor: 'text-black',
    items: ['React.js', 'React Native', 'Next.js', 'Expo', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    title: 'Backend & Services',
    description: 'Server-side development and cloud services',
    bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700',
    textColor: 'text-white',
    items: ['Node.js', 'Firebase', 'REST APIs', 'Supabase'],
  },
  {
    category: 'Tools',
    title: 'Dev Tools & Workflow',
    description: 'Professional development environment and practices',
    bgColor: 'bg-gray-100',
    textColor: 'text-black',
    items: ['Git', 'GitLab', 'Jira', 'Slack', 'Agile/Scrum', 'CI/CD'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCards.map((card) => (
            <motion.div
              key={card.category}
              variants={item}
              className={`${card.bgColor} ${card.textColor} rounded-3xl p-8 md:p-10 ${
                card.bgColor === 'bg-white' ? 'border border-gray-200' : ''
              } hover:shadow-xl transition-shadow duration-300`}
            >
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-2">
                {card.category}
              </p>
              <h3 className="text-2xl md:text-3xl font-black mb-3">{card.title}</h3>
              <p className="opacity-70 mb-6 text-sm">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      card.textColor === 'text-white'
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
