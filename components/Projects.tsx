'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI SaaS Platform',
    description: 'Full-stack AI-powered SaaS with subscription management, API integrations, and real-time analytics dashboard.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI', 'Stripe'],
    image: 'bg-gradient-to-br from-purple-600 to-pink-600',
    featured: true,
  },
  {
    title: 'ML Crop Disease Detection',
    description: 'Computer vision system using TensorFlow to detect plant diseases with 94% accuracy, helping farmers prevent crop loss.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    image: 'bg-gradient-to-br from-green-600 to-emerald-600',
    featured: true,
  },
  {
    title: 'Cinematic Subtitle Generator',
    description: 'AI-powered tool that generates and syncs cinematic subtitles with custom styling and animations for video content.',
    tech: ['Python', 'Whisper AI', 'FFmpeg', 'Next.js'],
    image: 'bg-gradient-to-br from-cyan-600 to-blue-600',
    featured: false,
  },
  {
    title: 'WhatsApp AI Assistant',
    description: 'Intelligent chatbot integrated with WhatsApp Business API, handling customer queries with NLP and context awareness.',
    tech: ['Node.js', 'OpenAI', 'MongoDB', 'WhatsApp API'],
    image: 'bg-gradient-to-br from-orange-600 to-red-600',
    featured: false,
  },
  {
    title: 'Trade Analyzer Dashboard',
    description: 'Real-time trading analytics platform with ML-powered predictions, risk analysis, and portfolio optimization.',
    tech: ['React', 'Python', 'Pandas', 'WebSocket', 'Redis'],
    image: 'bg-gradient-to-br from-yellow-600 to-orange-600',
    featured: false,
  },
  {
    title: 'Video Automation Platform',
    description: 'Automated video editing and generation platform using AI for content creators, with batch processing capabilities.',
    tech: ['Python', 'FFmpeg', 'FastAPI', 'AWS S3', 'Celery'],
    image: 'bg-gradient-to-br from-indigo-600 to-purple-600',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Building products that solve real problems with cutting-edge technology
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass hover:border-white/20 transition-all ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Project image/gradient */}
              <div className={`${project.image} h-64 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-xs font-medium">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/abhay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 hover:border-white/20 transition-all group"
          >
            <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
