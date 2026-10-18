'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'FastAPI', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'AI/ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'LangChain', 'Hugging Face'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux'],
    color: 'from-orange-500 to-red-500',
  },
];

const marqueeSkills = [
  'React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'TensorFlow', 
  'Docker', 'PostgreSQL', 'MongoDB', 'Tailwind', 'Node.js', 'AWS',
  'Machine Learning', 'AI', 'SaaS', 'Full Stack', 'DevOps', 'Cloud'
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-white/20 transition-all"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/10 text-sm font-medium hover:border-white/30 transition-all cursor-default`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative overflow-hidden py-8"
        >
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 rounded-full glass text-lg font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-300 mb-8">Always learning, always building</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solver', 'Fast Learner', 'Team Player', 'Open Source'].map((trait, index) => (
              <motion.div
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-sm font-medium"
              >
                {trait}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
