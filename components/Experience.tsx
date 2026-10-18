'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Award, Code, Rocket } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'AI/ML Engineer',
    description: 'Building production-ready ML models and AI-powered SaaS platforms. Focused on computer vision, NLP, and automation systems.',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2023',
    title: 'Full Stack Development',
    description: 'Mastered modern web development with Next.js, React, and FastAPI. Built scalable applications with cloud infrastructure.',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    year: '2022',
    title: 'Hackathons & Competitions',
    description: 'Won multiple hackathons building innovative solutions. Collaborated with teams to create impactful projects under tight deadlines.',
    icon: Award,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2021',
    title: 'Started Coding Journey',
    description: 'Discovered passion for programming and problem-solving. Built first projects and fell in love with creating digital products.',
    icon: Calendar,
    color: 'from-orange-500 to-red-500',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            From curiosity to creation - the path of continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 rounded-2xl group hover:border-white/20 transition-all"
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10 mb-4`}>
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-75`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Hackathons Won', value: '5+' },
            { label: 'Open Source Contributions', value: '100+' },
            { label: 'Projects Deployed', value: '25+' },
          ].map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-2xl text-center group hover:border-purple-500/50 transition-all"
            >
              <div className="text-4xl font-bold text-gradient mb-2">{achievement.value}</div>
              <div className="text-sm text-zinc-300">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
