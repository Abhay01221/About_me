'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Copy, Download, Layers3, Mail, Moon, Play, Sun, X } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import GlassLens from './GlassLens';
import DemoPreview from './DemoPreview';
import { profile, projects, skillGroups } from '@/lib/portfolio';
import type { Project } from '@/lib/portfolio';

function ProjectVisual({ index }: { index: number }) {
  return <div className={`project-art art-${index}`} aria-hidden="true">
    <div className="art-topline"><span>{['ANIMATUBE / PRODUCTION PIPELINE', 'SHIV SHANKAR / ORDER EXPERIENCE', 'CODEFORGE / EXECUTION ENGINE', 'VOIDSTREAM / DISCOVER YOUR NEXT WATCH'][index]}</span><span>ARCHITECTURE STUDY</span></div>
    {index === 0 ? <div className="video-visual">
      <div className="film-orbit orbit-one" /><div className="film-orbit orbit-two" />
      <div className="play-disc"><Play size={35} strokeWidth={1} fill="currentColor" /></div>
      <div className="video-caption">An idea. <i>In motion.</i></div>
      <div className="pipeline-track"><span>01 Script</span><i /><span>02 Voice</span><i /><span>03 Film</span></div>
    </div> : index === 1 ? <div className="restaurant-visual">
      <span className="restaurant-mark">शिव शंकर</span><span className="restaurant-sub">GOOD FOOD. THOUGHTFULLY SERVED.</span>
      <div className="plate"><div className="plate-inner"><span>शि</span></div></div>
      <div className="order-chip"><Check size={13} /> Menu → Order → Payment</div>
    </div> : index === 3 ? <div className="voidstream-visual">
      <div className="cinema-orbit" /><span className="cinema-wordmark">VOID<span>STREAM</span><span className="cinema-live">DISCOVER. SAVE. WATCH.</span></span>
      <div className="cinema-posters"><div><span>DISCOVER</span><i>Beyond<br />the ordinary.</i></div><div><span>YOUR WATCHLIST</span><Play size={30} strokeWidth={1} /><i>A world<br />of stories.</i></div><div><span>KEEP EXPLORING</span><i>Find your<br />next favorite.</i></div></div>
      <div className="cinema-meta"><span>TMDB powered discovery</span><span>Made for movie nights ↗</span></div>
    </div> : <div className="code-window">
      <div className="code-toolbar"><span><b /><b /><b /></span><span>solution.py</span><Code2 size={14} /></div>
      <pre><span className="code-muted">01   </span><span className="code-purple">def</span> solve(nums, target):{'\n'}<span className="code-muted">02   </span>    seen = {'{}'}{'\n'}<span className="code-muted">03   </span>    <span className="code-purple">for</span> i, n <span className="code-purple">in</span> enumerate(nums):{'\n'}<span className="code-muted">04   </span>        <span className="code-purple">if</span> target - n <span className="code-purple">in</span> seen:{'\n'}<span className="code-muted">05   </span>            <span className="code-purple">return</span> [seen[target - n], i]{'\n'}<span className="code-muted">06   </span>        seen[n] = i</pre>
      <div className="verdict"><span><Check size={14} /> Accepted</span><span>Isolated execution / Async evaluation</span></div>
    </div>}
    <div className="art-footer"><span className="art-number">0{index + 1}</span><span>{projects[index].name}</span><ArrowUpRight size={18} /></div>
  </div>;
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [clock, setClock] = useState('INDIA / IST');
  const [activeSkill, setActiveSkill] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [previewing, setPreviewing] = useState(false);
  const [toast, setToast] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme');
    document.documentElement.dataset.theme = stored === 'obsidian' ? 'obsidian' : 'daylight';
    // Keep the initial server and client render identical; apply the saved preference after hydration.
    if (stored === 'obsidian') requestAnimationFrame(() => setDark(true));
    const tick = () => setClock(`IST ${new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date())}`);
    tick();
    const timer = setInterval(tick, 1000);
    return () => { clearInterval(timer); if (toastTimer.current) clearTimeout(toastTimer.current); };
  }, []);

  useEffect(() => {
    if (selected) {
      dialogRef.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previous; };
    }
  }, [selected]);

  useEffect(() => {
    if (selected) dialogRef.current?.querySelector<HTMLButtonElement>('[aria-label="Close project details"]')?.focus();
  }, [previewing, selected]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'obsidian' : 'daylight';
    localStorage.setItem('portfolio-theme', next ? 'obsidian' : 'daylight');
  }
  function closeProject() {
    dialogRef.current?.close();
    setSelected(null);
    setPreviewing(false);
  }
  function openProject(project: Project, preview = false) {
    setSelected(project);
    setPreviewing(preview);
    if (dialogRef.current) dialogRef.current.scrollTop = 0;
  }
  function showPreview() {
    setPreviewing(true);
    if (dialogRef.current) dialogRef.current.scrollTop = 0;
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast('Email address copied');
    } catch {
      setToast('Could not copy. Use the email link to get in touch.');
    }
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 3000);
  }

  return <>
    <a className="skip-to-main" href="#main-content">Skip to content</a>
    <div className="ambient" aria-hidden="true"><div /><div /><div /></div>
    <header className="site-header">
      <nav className="glass-pill navigation" aria-label="Main navigation">
        <a href="#top" className="wordmark"><span className="brand-symbol">a.</span><span>Sawale</span></a>
        <div className="nav-links"><a href="#projects">Works</a><a href="#skills">Craft</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <button className="theme-switch" onClick={toggleTheme} aria-label={dark ? 'Switch to daylight theme' : 'Switch to obsidian theme'} aria-pressed={dark}><span>{dark ? <Moon size={11} /> : <Sun size={11} />}</span></button>
      </nav>
    </header>

    <main id="main-content" className="page-shell">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="meta-row"><span>PUNE, INDIA</span><span className="meta-specialty">SOFTWARE DEVELOPMENT & AI SYSTEMS</span><time>{clock}</time></div>
        <div className="hero-stage">
          <h1 id="hero-title" className="sr-only">Abhay Sawale — Software & AI Systems</h1>
          <GlassLens dark={dark} />
          <span className="glass-pill lens-caption"><span className="tiny-dot" /> Glide across the type. See things differently.</span>
          <span className="hero-coordinate">EST. 2023 / ALWAYS BUILDING</span>
        </div>
        <div className="hero-intro">
          <p>Building thoughtful software,<br />from the <i>interface</i> to the infrastructure.</p>
          <div className="intro-detail"><span className="eyebrow">CURRENTLY</span><span>Computer Science @ IIIT Kottayam</span><span>Class of 2027</span></div>
          <div className="intro-detail"><span className="eyebrow">EXPLORING</span><span>Full-stack development</span><span>Python & AI-integrated systems</span></div>
        </div>
        <div className="hero-actions"><a className="glass-pill button" href="#projects">Explore the work <ArrowDown size={14} /></a><a className="text-link" href="/Abhay-Sawale-Resume.pdf" download><Download size={14} /> Download resume</a><span className="availability"><span /> Open to opportunities</span></div>
      </section>

      <section id="projects" className="section works" aria-labelledby="works-title">
        <div className="section-header"><div><span className="eyebrow">01 / SELECTED WORK</span><h2 id="works-title">Ideas, made <i>real.</i></h2></div><p>AI pipelines, complete platforms, and systems built to work beyond the interface.</p></div>
        <div className="project-stack">{projects.map((project, index) => <article className={`project-row ${index % 2 === 1 ? 'reversed' : ''}`} key={project.id}>
          <button className="glass project-plate" onClick={() => openProject(project)} aria-label={`Inspect ${project.name} project`}><ProjectVisual index={index} /></button>
          <div className="glass project-caption"><div className="caption-meta"><span>{project.category}</span><span>0{index + 1}</span></div><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p><p>{project.description}</p><div className="tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-card-actions"><button className="inspect-link" onClick={() => openProject(project)}>Inspect project <ArrowUpRight size={15} /></button>{project.demo && <button className="glass-pill button card-demo-button" onClick={() => openProject(project, true)} aria-label={`Try ${project.name} live demo`}><Play size={12} /> Live demo</button>}</div></div>
        </article>)}</div>
        <a className="text-link github-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> More on GitHub <ArrowUpRight size={14} /></a>
      </section>

      <section id="skills" className="section" aria-labelledby="skills-title">
        <div className="section-header"><div><span className="eyebrow">02 / THE TOOLKIT</span><h2 id="skills-title">Code, craft & <i>curiosity.</i></h2></div><p>A practical toolkit for connecting thoughtful interfaces with capable systems.</p></div>
        <div className="craft-grid">
          <div className="glass craft-card skill-explorer"><span className="eyebrow">A / EXPLORE THE STACK</span><div className="skill-dock" role="tablist" aria-label="Skill categories">{skillGroups.map((group, index) => <button key={group.name} id={`skill-tab-${index}`} role="tab" aria-selected={activeSkill === index} aria-controls="skill-panel" tabIndex={activeSkill === index ? 0 : -1} className={`glass-pill ${activeSkill === index ? 'active' : ''}`} onClick={() => setActiveSkill(index)} onKeyDown={e => { if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) { e.preventDefault(); const next = e.key === 'Home' ? 0 : e.key === 'End' ? skillGroups.length - 1 : (index + (e.key === 'ArrowRight' ? 1 : -1) + skillGroups.length) % skillGroups.length; setActiveSkill(next); document.getElementById(`skill-tab-${next}`)?.focus(); } }} aria-label={group.name}>{['Py', '</>', 'UI', 'Db', 'AI', '∞'][index]}</button>)}</div><div id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${activeSkill}`}><h3>{skillGroups[activeSkill].name}</h3><div className="tags">{skillGroups[activeSkill].items.map(item => <span key={item}>{item}</span>)}</div></div><p className="craft-hint">Choose a glass bead to explore.</p></div>
          <div className="glass craft-card"><span className="eyebrow">B / CONNECTING THE PIECES</span><div className="capsule-space"><button className={`glass-pill pipeline-capsule ${expanded ? 'expanded' : ''}`} aria-expanded={expanded} aria-controls="pipeline-detail" onClick={() => setExpanded(!expanded)}><span><Layers3 size={19} /> Idea → Output <span className="capsule-plus">{expanded ? '−' : '+'}</span></span>{expanded && <span id="pipeline-detail" className="pipeline-detail">LLM script → Edge TTS<br />BullMQ + Redis → FFmpeg<br />SSE progress → AWS S3</span>}</button></div><h3>Asynchronous by design.</h3><p>Inside Animatube: background workers handle production while the interface streams progress.</p></div>
          <div className="glass craft-card solving-card"><span className="eyebrow">C / THINKING IN ALGORITHMS</span><a className="problem-count" href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="View 300 plus solved problems on LeetCode">300<span>+</span><ArrowUpRight size={22} /></a><h3>One problem at a time.</h3><p>LeetCode problems solved across dynamic programming, arrays, sliding windows, trees, and graphs.</p></div>
        </div>
        <div className="skill-index">{skillGroups.map((group, index) => <div key={group.name}><span className="eyebrow">0{index + 1} / {group.name}</span><p>{group.items.join(' · ')}</p></div>)}</div>
      </section>

      <section id="about" className="section about" aria-labelledby="about-title">
        <div className="section-header"><div><span className="eyebrow">03 / A LITTLE CONTEXT</span><h2 id="about-title">Curiosity is the <i>constant.</i></h2></div></div>
        <div className="about-grid"><div className="about-copy"><p>I’m Abhay, a Computer Science undergraduate at IIIT Kottayam, building software that connects useful ideas with real-world problems.</p><p>My work spans full-stack platforms, REST APIs, asynchronous processing, authentication, and AI-integrated applications. I enjoy understanding how the pieces fit together, then turning that understanding into something people can use.</p><a className="text-link" href="/Abhay-Sawale-Resume.pdf" target="_blank" rel="noreferrer">Read the full resume <ArrowUpRight size={15} /></a></div><div className="about-index"><div><span className="eyebrow">2023 — 2027 / EDUCATION</span><h3>IIIT Kottayam</h3><p>B.Tech in Computer Science Engineering</p></div><div><span className="eyebrow">CONTINUOUS LEARNING</span><h3>Python certification</h3><a className="text-link" href={profile.certificate} target="_blank" rel="noreferrer">Udemy · View credential <ArrowUpRight size={13} /></a></div><div><span className="eyebrow">LOOKING AHEAD</span><p>Seeking opportunities in software development, Python engineering, and AI systems.</p></div></div></div>
      </section>

      <footer id="contact" className="contact section" aria-labelledby="contact-title"><span className="eyebrow">04 / LET’S MAKE SOMETHING USEFUL</span><h2 id="contact-title">Good things start<br />with a <i>conversation.</i></h2><p>Have an opportunity, a project, or an interesting problem?<br />I’d love to hear from you.</p><div className="glass-pill email-pill"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copyEmail} aria-label="Copy email address"><Copy size={15} /><span>Copy address</span></button></div><a href={`mailto:${profile.email}`} className="text-link">Say hello <Mail size={14} /></a><div className="colophon"><span>© {new Date().getFullYear()} ABHAY SAWALE</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={12} /></a></div><a href="#top">Back to top ↑</a></div></footer>
    </main>

    <dialog ref={dialogRef} className={`glass project-dialog ${previewing ? 'demo-dialog' : ''}`} aria-labelledby="project-dialog-title" onCancel={() => { setSelected(null); setPreviewing(false); }} onClose={() => { setSelected(null); setPreviewing(false); }} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject(); } }}>
      {selected && <><div className="dialog-heading"><div><span className="eyebrow">{previewing ? 'INTERACTIVE LIVE PREVIEW' : selected.category}</span><h2 id="project-dialog-title">{selected.name}</h2></div><div className="dialog-heading-actions">{previewing && <button className="text-link back-to-details" onClick={() => setPreviewing(false)}>← Project details</button>}<button className="glass-pill icon-button" onClick={closeProject} aria-label="Close project details" autoFocus><X size={20} /></button></div></div>{previewing && selected.demo ? <DemoPreview key={selected.id} project={selected} /> : <><p className="dialog-subtitle">{selected.subtitle}</p><p>{selected.description}</p><h3>Under the surface</h3><ul>{selected.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tags">{selected.stack.map(tech => <span key={tech}>{tech}</span>)}</div><div className="dialog-actions">{selected.github && <a className="glass-pill button" href={selected.github} target="_blank" rel="noreferrer"><Github size={16} /> View source <ArrowUpRight size={14} /></a>}{selected.demo && <button className="glass-pill button" onClick={showPreview}><Play size={14} /> Live demo</button>}<button className="text-link" onClick={closeProject}>Close <ArrowRight size={14} /></button></div></>}</>}
    </dialog>
    <div role="status" aria-live="polite" className={`toast glass-pill ${toast ? 'visible' : ''}`}>{toast && <><Check size={15} />{toast}</>}</div>
  </>;
}
