export const profile = {
  name: 'Abhay Sawale',
  email: 'abhaysawale9011@gmail.com',
  github: 'https://github.com/Abhay01221',
  linkedin: 'https://www.linkedin.com/in/abhay-sawale-47856628a/',
  leetcode: 'https://leetcode.com/u/AbhaySawale_1234/',
  certificate: 'https://www.udemy.com/certificate/UC-fd7adeb3-cf13-4d7b-a6eb-32d5fc899bcf/',
};

export type Project = {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string | null;
  demo: string | null;
  details: string[];
};

export const projects: Project[] = [
  {
    id: 'animatube', name: 'Animatube', category: 'AI VIDEO GENERATION',
    subtitle: 'From a thought to a finished film.',
    description: 'An automated video pipeline connecting AI-written scripts, synthesized narration, and video assembly. One idea, an entire production workflow.',
    stack: ['Next.js', 'BullMQ', 'Redis', 'FFmpeg', 'Groq', 'AWS S3'],
    github: 'https://github.com/Abhay01221/animatube', demo: null,
    details: [
      'Integrated LLM-based script generation, Edge TTS voice synthesis, and FFmpeg-based video assembly into an automated AI video generation pipeline.',
      'Used BullMQ and Redis for asynchronous background jobs, keeping video processing independent of the main application request flow.',
      'Delivered real-time pipeline progress with Server-Sent Events (SSE), without repeated client polling.',
      'Integrated OAuth authentication, token storage, and AWS S3 asset management for authenticated users and cloud video storage.',
    ],
  },
  {
    id: 'shiv-shankar', name: 'Shiv Shankar', category: 'FULL-STACK RESTAURANT PLATFORM',
    subtitle: 'A complete experience, from menu to meal.',
    description: 'A restaurant platform bringing ordering, payments, and chatbot flows together, with secure onboarding and end-to-end transaction traceability.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'PayPal API'],
    github: 'https://github.com/Abhay01221/restro-web/', demo: 'https://shiv-shankar-food.vercel.app/',
    details: [
      'Architected a modular Node.js and Express backend with controllers, middleware, and service layers for ordering, payments, and chatbot flows.',
      'Integrated the PayPal REST API for real-money transactions and persisted transaction states in MongoDB with rollback-safe schemas.',
      'Hardened API endpoints with Helmet headers, input validation, and rate limiting against common OWASP vulnerabilities.',
      'Implemented Firebase authentication with email verification and OAuth support for secure user onboarding.',
    ],
  },
  {
    id: 'codeforge', name: 'CodeForge', category: 'ONLINE CODING JUDGE',
    subtitle: 'Write. Submit. Learn. Repeat.',
    description: 'A full-stack coding judge with isolated execution, asynchronous evaluation, and persistent results. Built to turn problem-solving into progress.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    github: 'https://github.com/Abhay01221/Coder', demo: null,
    details: [
      'Built a FastAPI and PostgreSQL platform for solving programming problems, submitting solutions, and tracking submission history.',
      'Processed code submissions asynchronously through Celery workers and Redis, maintaining persistent execution results.',
      'Integrated an isolated execution service with Accepted, Wrong Answer, Runtime Error, and Time Limit Exceeded verdicts.',
      'Developed REST APIs for problems, submissions, and progress with authentication, role-based access control, and protected hidden test cases.',
    ],
  },
  {
    id: 'voidstream', name: 'VoidStream', category: 'MOVIE DISCOVERY & STREAMING',
    subtitle: 'Your next watch starts here.',
    description: 'A responsive movie discovery and streaming platform with rich movie details, Google sign-in, a persistent watchlist, and flexible playback providers.',
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'TMDB API', 'Firebase', 'Context API', 'Vercel'],
    github: 'https://github.com/Abhay01221/VoidStream', demo: 'https://voidstream-me.vercel.app/',
    details: [
      'Developed a responsive platform with React.js, Vite, and Tailwind CSS, featuring movie search, detailed information pages, and interactive browsing.',
      'Integrated The Movie Database (TMDB) API to dynamically display movie titles, posters, metadata, and related information.',
      'Implemented Firebase Authentication for Google sign-in and persistent authentication across sessions.',
      'Built a persistent watchlist with React Context API, useReducer, and LocalStorage so users can save and manage their favorite movies.',
      'Integrated third-party video players with provider switching to improve playback availability and the viewing experience.',
      'Deployed the application on Vercel and made it available through a public web interface.',
    ],
  },
];

export const skillGroups = [
  { name: 'Languages', items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript'] },
  { name: 'Backend', items: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs'] },
  { name: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3'] },
  { name: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma'] },
  { name: 'AI / ML', items: ['LLM Integration', 'Prompt Engineering', 'Agentic AI Pipelines', 'Pandas', 'NumPy'] },
  { name: 'Infrastructure', items: ['AWS S3', 'Docker', 'Git', 'CI/CD Fundamentals', 'Redis', 'BullMQ', 'FFmpeg', 'Firebase', 'Postman'] },
];
