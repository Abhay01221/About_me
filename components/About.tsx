'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code2, Rocket, Zap, Trophy } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: 25, icon: Code2 },
  { label: 'GitHub Contributions', value: 1200, icon: Zap },
  { label: 'Technologies', value: 15, icon: Rocket },
  { label: 'Years Learning', value: 4, icon: Trophy },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}+</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Passionate about building intelligent systems that solve real problems
          </p>
        </motion.div>

        {/* Story section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">The Journey</h3>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                I'm a full stack developer and AI engineer based in Maharashtra, India, 
                driven by a passion for creating futuristic digital products that push 
                the boundaries of what's possible.
              </p>
              <p>
                My journey began with curiosity about how things work, which evolved into 
                a deep fascination with artificial intelligence and machine learning. Today, 
                I build AI-powered SaaS platforms, automation systems, and cinematic web 
                experiences that blend cutting-edge technology with exceptional design.
              </p>
              <p>
                I believe in the startup mindset: move fast, build iteratively, and create 
                products that users love. Whether it's training ML models, architecting 
                scalable backends, or crafting pixel-perfect frontends, I approach every 
                project with the same level of dedication and attention to detail.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">What Drives Me</h3>
            <div className="space-y-6">
              {[
                {
                  title: 'AI Innovation',
                  desc: 'Exploring the frontiers of machine learning and building intelligent systems',
                },
                {
                  title: 'Product Thinking',
                  desc: 'Creating solutions that users love, not just code that works',
                },
                {
                  title: 'Continuous Learning',
                  desc: 'Staying ahead of the curve with emerging technologies and best practices',
                },
                {
                  title: 'Open Source',
                  desc: 'Contributing to the community and learning from brilliant developers worldwide',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="border-l-2 border-purple-500/50 pl-4"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-zinc-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-2xl text-center group hover:border-purple-500/50 transition-all"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              <div className="text-4xl font-bold text-gradient mb-2">
                <Counter value={stat.value} />
              </div>
              <div className="text-sm text-zinc-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
