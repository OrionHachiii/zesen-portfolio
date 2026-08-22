'use client';

import { ArrowDown, ArrowRight, ArrowUpRight, Download, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProjectScene } from '@/components/project-scene';

const projects = [
  { id: 'lego', number: '01', title: 'LEGO Game Console', label: 'Embedded / Education', color: 'lime' },
  { id: 'vehicle', number: '02', title: 'Wall-Climbing Vehicle', label: 'Robotics / Mechanical', color: 'orange' },
];

const projectDetails = {
  lego: {
    number: '01',
    title: 'LEGO-Based Game Console',
    intro: 'A playful, CAD-free mini game console built with reusable construction bricks, an OLED, joystick, and buzzer.',
    story: 'The project started as an Arduino Uno Club Day demo, then evolved into a lower-cost ESP32 redesign and the final project for a multi-session hardware workshop. Students moved from their first firmware upload to a complete embedded game system.',
    stats: [['2', 'hardware generations'], ['5+', 'original mini games'], ['100%', 'rebuildable enclosure']],
    tags: ['ESP32', 'Arduino', 'Embedded C++', 'OLED', 'Technical Instruction'],
    images: ['/projects/lego/uno-console.jpg', '/projects/lego/esp32-console.jpg'],
    repo: 'https://github.com/OrionHachiii/lego-game-console',
    accent: 'lime',
  },
  vehicle: {
    number: '02',
    title: 'Fan-Adhesion Wall-Climbing Vehicle',
    intro: 'A remotely controlled vehicle engineered to drive horizontally and climb a vertical wall using a central fan and pressure differential.',
    story: 'Built through force analysis, CAD, laser cutting, 3D printing, assembly, and iterative testing. The 630 g final vehicle successfully completed a vertical climbing demonstration.',
    stats: [['630 g', 'final mass'], ['$110.20', 'documented BOM'], ['✓', 'vertical climb']],
    tags: ['CAD', 'Rapid Prototyping', 'Mechanical Design', 'Testing', 'RC Systems'],
    images: ['/projects/vehicle/final-vehicle.jpg', '/projects/vehicle/cad-overview.jpg'],
    repo: 'https://github.com/OrionHachiii/wall-climbing-vehicle',
    accent: 'orange',
  },
};

const moreProjects = [
  { title: 'AI Trash Detector', type: 'Edge AI / Embedded', copy: 'On-device vision classification with ESP32, TensorFlow Lite, OLED feedback, and serial diagnostics.', image: '/projects/ai-trash/complete-system.jpg', href: 'https://github.com/OrionHachiii/ai-trash-detector' },
  { title: 'BOM Finder', type: 'AI Tool / Full Stack', copy: 'Turns a hardware idea into a structured bill of materials, cost estimate, and build blueprint.', image: null, href: 'https://github.com/OrionHachiii/bom-finder' },
  { title: 'Face-Tracking Rover', type: 'Robotics / Vision', copy: 'A Raspberry Pi rover combining OpenCV face tracking, LiDAR, mecanum drive, and pan–tilt control.', image: null, href: 'https://github.com/OrionHachiii/IVC-ENGR100-FaceTrackingRover' },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<keyof typeof projectDetails | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Zesen Long home">ZL<span>●</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a></div>
        <a className="nav-cta" href="mailto:zesenl@uci.edu">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="eyebrow"><span /> Computer engineer · UCI</div>
          <h1>I build ideas<br />you can <em>touch.</em></h1>
          <p>Embedded systems, robotics, edge AI, and playful hardware–software experiences—designed by Zesen Long.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <ArrowDown size={17} /></a>
            <a className="icon-button social-mark" href="https://github.com/OrionHachiii" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a className="icon-button social-mark" href="https://www.linkedin.com/in/zesen-long-5a1239327/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </motion.div>

        <motion.div className="hero-object" initial={{ opacity: 0, scale: 0.88, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
          <span className="object-tag">Drag to rotate</span>
          <ProjectScene type="lego" hero />
          <div className="hero-sticker"><strong>BUILD</strong><span>↓ 01</span></div>
        </motion.div>
        <div className="hero-index" aria-hidden="true"><span>PORTFOLIO / 2026</span><span>IRVINE, CA</span></div>
      </section>

      <section className="work-intro" id="work">
        <p>Selected work</p>
        <h2>Things I&apos;ve made<br />move, think &amp; climb.</h2>
        <span className="section-count">02 / FEATURED</span>
      </section>

      <section className="projects" aria-label="Selected projects">
        {projects.map((project, index) => (
          <motion.article className={`project-card ${project.color}`} key={project.id} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.08 }}>
            <div className="project-meta"><span>{project.number}</span><span>{project.label}</span></div>
            <div className="project-stage"><ProjectScene type={project.id as 'lego' | 'vehicle'} /></div>
            <div className="project-title-row"><h3>{project.title}</h3><button onClick={() => setActiveProject(project.id as keyof typeof projectDetails)} aria-label={`Open ${project.title}`}><ArrowUpRight size={24} /></button></div>
          </motion.article>
        ))}
      </section>

      <section className="more-work">
        <div className="more-heading"><span>More experiments / 03</span><h2>From tiny chips<br />to complete systems.</h2></div>
        <div className="more-list">
          {moreProjects.map((project, index) => (
            <a className="more-row" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span className="row-number">0{index + 3}</span>
              {project.image ? <img src={project.image} alt="" /> : <div className={`mini-visual visual-${index}`} aria-hidden="true"><span>{index === 1 ? 'BOM' : 'CV'}</span></div>}
              <div><p>{project.type}</p><h3>{project.title}</h3><span>{project.copy}</span></div>
              <ArrowUpRight size={28} />
            </a>
          ))}
        </div>
      </section>

      <section className="about-preview" id="about">
        <div className="about-kicker">Hardware <span>↔</span> Software</div>
        <div className="about-copy">
          <p>A transfer student at <strong>UC Irvine</strong>, studying Computer Engineering and building at the boundary between code and the physical world.</p>
          <div className="skill-strip"><span>C / C++</span><span>ESP32</span><span>Python</span><span>Edge AI</span><span>CAD</span><span>Three.js</span></div>
          <a className="resume-link" href="/documents/zesen-long-resume.pdf" target="_blank">Download résumé <Download size={18} /></a>
        </div>
      </section>

      <footer>
        <div><span className="footer-dot" /> Available for internships &amp; collaborations</div>
        <h2>Let&apos;s build something<br /><em>real.</em></h2>
        <div className="footer-links">
          <a href="mailto:zesenl@uci.edu">Email <ArrowRight size={15} /></a>
          <a href="https://github.com/OrionHachiii" target="_blank" rel="noreferrer">GitHub <ArrowRight size={15} /></a>
          <a href="https://www.linkedin.com/in/zesen-long-5a1239327/" target="_blank" rel="noreferrer">LinkedIn <ArrowRight size={15} /></a>
        </div>
        <p>© 2026 Zesen Long · Built with React, Framer Motion &amp; Three.js</p>
      </footer>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetail project={projectDetails[activeProject]} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

function ProjectDetail({ project, onClose }: { project: (typeof projectDetails)[keyof typeof projectDetails]; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div className="detail-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={project.title}>
      <motion.article className={`detail-panel detail-${project.accent}`} initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }}>
        <div className="detail-nav"><span>Project / {project.number}</span><button onClick={onClose} aria-label="Close project"><X size={24} /></button></div>
        <header className="detail-hero">
          <div><p>{project.intro}</p><div className="detail-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          <h2>{project.title}</h2>
        </header>
        <div className="detail-gallery">{project.images.map((image, index) => <figure key={image}><img src={image} alt={`${project.title} ${index + 1}`} /></figure>)}</div>
        <div className="detail-story"><p>{project.story}</p><div className="detail-stats">{project.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div>
        <a className="detail-repo" href={project.repo} target="_blank" rel="noreferrer">View open-source project <ArrowUpRight size={21} /></a>
      </motion.article>
    </motion.div>
  );
}
