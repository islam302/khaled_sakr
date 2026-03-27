import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Almdrasa Company',
    role: 'Full Stack Engineer',
    period: 'Oct 2025 - Present',
    location: 'United Kingdom, Remote',
    description:
      'Working on DS-Mate, a high-scale automatic dropshipping platform. Leading the frontend team, overseeing architecture decisions, code reviews, and collaborating closely with backend engineers.',
    color: 'bg-blue-600',
  },
  {
    company: 'TAZKIAH Foundation',
    role: 'React Native Mobile Developer',
    period: 'Oct 2024 - Oct 2025',
    location: 'Saudi Arabia, Remote',
    description:
      'Developed a React Native app with 60,000+ active users. Implemented i18n, push notifications, MMKV storage, and deep linking. Worked in an Agile environment with GitLab, Jira, Slack.',
    color: 'bg-emerald-600',
  },
  {
    company: 'Kalbonyan Elmarsos',
    role: 'Software Engineer Intern',
    period: 'Mar 2023 - Sep 2023',
    location: 'Egypt',
    description:
      'Completed intensive internship covering programming, data structures, APIs, and modern front-end frameworks. Developed real-world apps using JavaScript and React.',
    color: 'bg-gray-800',
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full ${exp.color} ring-4 ring-white`} />

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-gray-600 font-medium">{exp.role}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-1 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
