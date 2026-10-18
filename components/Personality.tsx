'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Coffee, Dumbbell, Lightbulb, Moon, Zap } from 'lucide-react';

const interests = [
  {
    icon: Brain,
    title: 'AI Research',
    description: 'Exploring cutting-edge papers and implementing novel ML architectures',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Coffee,
    title: 'Late Night Coding',
    description: 'Best code happens between 10 PM and 3 AM with good music',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Dumbbell,
    title: 'Fitness',
    description: 'Staying physically strong to keep the mind sharp and focused',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Love tackling complex challenges and finding elegant solutions',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Startup Building',
    description: 'Passionate about creating products that users love and need',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Moon,
    title: 'Innovation',
    description: 'Always thinking about what is next and how to build it',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Personality() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Beyond <span className="text-gradient">Code</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            What drives me, inspires me, and keeps me building
          </p>
        </motion.div>

        {/* Interest cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass p-6 rounded-3xl group hover:border-white/20 transition-all relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <interest.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {interest.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="text-6xl text-purple-500/20 mb-4">"</div>
            <p className="text-2xl md:text-3xl font-medium text-zinc-300 mb-6 leading-relaxed">
              I believe the best products are built at the intersection of{' '}
              <span className="text-gradient">technology</span>,{' '}
              <span className="text-gradient">design</span>, and{' '}
              <span className="text-gradient">human empathy</span>.
            </p>
            <div className="text-zinc-500">— My philosophy on building</div>
          </div>
        </motion.div>

        {/* Fun facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            '☕ Coffee enthusiast',
            '🎵 Music while coding',
            '🌙 Night owl',
            '📚 Continuous learner',
            '🚀 Startup mindset',
          ].map((fact, index) => (
            <motion.div
              key={fact}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 rounded-full glass text-sm"
            >
              {fact}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
