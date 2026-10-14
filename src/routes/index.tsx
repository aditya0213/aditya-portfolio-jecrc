import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Github, Linkedin, Menu, X, MapPin, GraduationCap, Code2, Award, BookOpen, Heart, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import heroImage from '@/assets/hero-sculpture.jpg';
import academicImage from '@/assets/project-academic.jpg';
import personalImage from '@/assets/project-personal.jpg';
import aiImage from '@/assets/project-ai.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Aditya Singh Gurjar — B.Tech CSE Student' },
    { name: 'description', content: 'Meet Aditya Singh Gurjar, a first-year Computer Science student at JECRC University, Jaipur, exploring software development and artificial intelligence.' },
    { property: 'og:title', content: 'Aditya Singh Gurjar — Personal Portfolio' },
    { property: 'og:description', content: 'A curious mind building a foundation in code. Explore my education, skills, projects, and learning journey.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const navigation: [string, string][] = [['Home', 'home'], ['About', 'about'], ['Education', 'education'], ['Skills', 'skills'], ['Projects', 'projects'], ['Achievements', 'achievements']];
const skills = [ { symbol: 'C', name: 'C', detail: 'Programming fundamentals' }, { symbol: 'C++', name: 'C++', detail: 'Object-oriented programming' }, { symbol: 'Py', name: 'Python', detail: 'Scripting & problem solving' }, { symbol: '{ }', name: 'Data Structures', detail: 'Building the basics' }, { symbol: '</>', name: 'Web Development', detail: 'Crafting for the web' } ];
function SectionHeading({ number, title, description }: { number: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="section-number">{number} /</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [draft, setDraft] = useState('');
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState('home');
  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(`From: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    setCopied(false);
  }
  async function copyMessage() {
    try { await navigator.clipboard.writeText(draft); setCopied(true); } catch { setNotice('Your browser could not copy the message. You can select and copy the draft below.'); }
  }
  const social = (platform: string) => setNotice(`${platform} profile will be linked soon. Thank you for stopping by!`);
  return <>
    <header className="site-header" id="home"><div className="shell flex h-full items-center justify-between gap-5">
      <a href="#home" className="brand" aria-label="Aditya home">aditya<span>.</span></a>
      <nav className="desktop-nav flex items-center gap-7" aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setActive(id)} className={`nav-link ${active === id ? 'active' : ''}`}>{label}</a>)}</nav>
      <div className="flex items-center gap-3"><Button asChild variant="outline" className="h-9 text-xs"><a href="#contact">Let's talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
    </div></header>
    {menuOpen && <nav className="shell grid grid-cols-2 gap-5 border-b border-border bg-background py-6" aria-label="Mobile navigation">{navigation.map(([label, id]) => <a className="nav-link" href={`#${id}`} key={id} onClick={() => { setMenuOpen(false); setActive(id); }}>{label}</a>)}</nav>}
    <main>
      <section className="hero" aria-label="Introduction">
        <img className="hero-art" src={heroImage} alt="An interlocking sculpture of brushed silver and green glass" width={1536} height={1024} />
        <div className="shell hero-content"><div className="eyebrow flex items-center gap-3"><span className="status-dot" /> Curious mind. Constant learner.</div>
          <h1>Aditya Singh<br /><span>Gurjar.</span></h1>
          <p className="hero-title">B.Tech CSE Student <span className="mx-2 text-muted-foreground">/</span> First Year</p>
          <p className="hero-copy">Welcome to my little corner of the internet. I’m learning to turn curiosity into code and ideas into things that matter.</p>
          <div className="flex gap-3"><Button asChild className="h-11 px-5 text-xs"><a href="#projects">Explore my work <ArrowUpRight /></a></Button><Button asChild variant="outline" className="h-11 px-5 text-xs"><a href="#contact">Get in touch <ArrowRight /></a></Button></div>
        </div>
        <div className="hero-bottom"><div className="shell flex items-center justify-between"><span className="eyebrow flex items-center gap-2"><MapPin size={13} /> Based in Jaipur, India</span><a href="#about" className="eyebrow flex items-center gap-3">Scroll to explore <ArrowDown size={14} /></a></div></div>
      </section>
      <section id="about" className="section"><div className="shell"><SectionHeading number="01" title="A little about me" /><div className="about-grid"><div className="bio"><p>I’m Aditya, a first-year <strong>Computer Science & Engineering student</strong> at JECRC University, Jaipur. I’m at the beginning of my journey, driven by a simple question: <strong>“What can I build next?”</strong></p><p className="mt-5">I’m passionate about software development and fascinated by the possibilities of artificial intelligence. Right now, I’m building a strong foundation in programming, exploring new technologies, and learning one line of code at a time.</p><p className="mt-5 text-foreground">Always curious. Always a work in progress.</p></div><div><div className="fact"><GraduationCap /><div><div className="fact-label">Currently studying</div><div className="fact-value">B.Tech in Computer Science & Engineering</div></div></div><div className="fact"><Code2 /><div><div className="fact-label">Exploring</div><div className="fact-value">Software Development & Artificial Intelligence</div></div></div><div className="fact"><MapPin /><div><div className="fact-label">Home base</div><div className="fact-value">Jaipur, Rajasthan, India</div></div></div></div></div></div></section>
      <section id="education" className="section"><div className="shell"><SectionHeading number="02" title="The learning journey" description="The places that have shaped my foundation." />
        <div className="education-item"><div className="education-icon"><GraduationCap size={23} /></div><div><h3 className="text-base font-semibold">JECRC University</h3><p className="mt-2 text-sm text-muted-foreground">B.Tech · Computer Science & Engineering</p><p className="mt-3 text-xs text-muted-foreground">Jaipur, Rajasthan</p></div><span className="badge flex items-center gap-2 self-start pt-2"><span className="status-dot" /> First year · Ongoing</span></div>
        <div className="education-item"><div className="education-icon"><BookOpen size={21} /></div><div><h3 className="text-base font-semibold">Army Public School Patiala</h3><p className="mt-2 text-sm text-muted-foreground">School Education</p><p className="mt-3 text-xs text-muted-foreground">Patiala, Punjab</p></div><span className="eyebrow pt-2">Completed</span></div>
      </div></section>
      <section id="skills" className="section"><div className="shell"><SectionHeading number="03" title="My growing toolkit" description="Technologies I’m learning, practicing, and building with." /><div className="skill-grid">{skills.map(skill => <article className="skill-card" key={skill.name}><div className="skill-symbol">{skill.symbol}</div><h3>{skill.name}</h3><p>{skill.detail}</p></article>)}</div><p className="mt-6 flex items-center gap-2 font-mono text-[11px] text-muted-foreground"><span className="status-dot" /> Learning every day. This list is only getting longer.</p></div></section>
      <section id="projects" className="section"><div className="shell"><SectionHeading number="04" title="From ideas to code" description="A space for experiments, academic projects, and things I build along the way." /><div className="project-grid">{[{ title: 'Academic explorations', text: 'Coursework brought to life through code. A home for my upcoming university projects.', image: academicImage, alt: 'A laptop with a code editor beside a notebook of algorithm diagrams', tags: 'C / C++' }, { title: 'Personal experiments', text: 'Small ideas, hands-on learning. A collection of personal coding projects is on its way.', image: personalImage, alt: 'Layered mint, coral, and silver glass interface designs', tags: 'PYTHON / WEB' }, { title: 'Exploring AI', text: 'Getting curious about intelligent systems. My first steps into AI will live here.', image: aiImage, alt: 'A silver neural-network brain sculpture with a green glass core on a microchip', tags: 'PYTHON / AI' }].map((project, index) => <article className="project-card" key={project.title}><div className="project-cover"><img src={project.image} alt={project.alt} width={1024} height={768} loading="lazy" /><span className="project-index" aria-hidden="true">0{index + 1}</span></div><div className="project-content"><div className="flex items-center justify-between"><span className="badge">Coming soon</span><span className="font-mono text-[9px] text-muted-foreground">{project.tags}</span></div><h3>{project.title}</h3><p>{project.text}</p></div></article>)}</div></div></section>
      <section id="achievements" className="section"><div className="shell"><SectionHeading number="05" title="Small steps, meaningful milestones" description="There’s a lot to learn. And a lot to look forward to." /><div className="achievement-grid"><article className="achievement"><Award /><div><h3 className="text-sm font-semibold">Certifications & workshops</h3><p className="mt-3 text-xs leading-6 text-muted-foreground">A space for technical workshops, courses, and certifications as I continue to grow.</p><p className="badge mt-5">More to come</p></div></article><article className="achievement"><GraduationCap /><div><h3 className="text-sm font-semibold">Academic milestones</h3><p className="mt-3 text-xs leading-6 text-muted-foreground">New challenges, new discoveries. My university journey is just getting started.</p><p className="badge mt-5">The journey begins</p></div></article></div></div></section>
      <section id="contact" className="section"><div className="shell contact-grid"><div><SectionHeading number="06" title="Let’s connect." /><p className="bio max-w-sm">Have an idea, a question, or just want to say hello? I’d love to meet fellow learners and build something together.</p><div className="mt-8 flex gap-3"><Button variant="outline" onClick={() => social('GitHub')}><Github /> GitHub <ArrowUpRight /></Button><Button variant="outline" onClick={() => social('LinkedIn')}><Linkedin /> LinkedIn <ArrowUpRight /></Button></div><p className="mt-5 text-xs text-muted-foreground">Email and social profiles coming soon.</p>{notice && <p role="status" className="mt-4 text-xs leading-6 text-primary">{notice}</p>}</div>
        <form className="contact-form space-y-5" onSubmit={prepareMessage}><div className="grid grid-cols-1 gap-5 sm:grid-cols-2"><div><label className="form-label" htmlFor="name">Your name</label><Input name="name" id="name" placeholder="Alex Johnson" required maxLength={100} /></div><div><label className="form-label" htmlFor="email">Email address</label><Input name="email" id="email" type="email" placeholder="alex@example.com" required /></div></div><div><label className="form-label" htmlFor="message">Your message</label><Textarea name="message" id="message" placeholder="Hey Aditya, let’s talk about…" required maxLength={5000} /></div><div className="flex items-center justify-between gap-5"><span className="text-[11px] text-muted-foreground">Messages aren’t sent yet.</span><Button type="submit" className="h-10 px-5 text-xs">Prepare message <ArrowUpRight /></Button></div>{draft && <div role="status" className="border-t border-border pt-5"><p className="mb-3 text-xs text-muted-foreground">Your draft is ready. Delivery will be available once an email is added.</p><pre className="whitespace-pre-wrap break-words text-xs leading-6">{draft}</pre><Button type="button" variant="outline" className="mt-4" onClick={copyMessage}>{copied ? <Check /> : <Copy />}{copied ? 'Copied' : 'Copy message'}</Button></div>}</form>
      </div></section>
    </main><footer className="footer"><div className="shell flex flex-wrap items-center justify-between gap-5"><a className="brand text-lg" href="#home">aditya<span>.</span></a><span className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} Aditya Singh Gurjar</span><span className="flex items-center gap-2 text-[10px] text-muted-foreground">Made with curiosity <Heart size={11} className="text-primary" /><a href="#home" aria-label="Back to top" className="ml-4"><ArrowUpRight size={17} /></a></span></div></footer>
  </>;
}
