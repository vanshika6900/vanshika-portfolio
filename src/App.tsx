/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ReactNode, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Zap,
  ShieldCheck,
  Cpu,
  Database,
  Cloud,
  Layers,
  ArrowRight,
  ChevronRight,
  Download,
  MapPin,
  MoveUpRight,
  MessageSquare,
  Clock,
  Terminal,
  FileText,
  X,
  Maximize2
} from "lucide-react";

import { RESUME_DATA } from "./data";

// --- Components ---

const BentoBox = ({ children, className = "", onClick, ...props }: { children: ReactNode, className?: string, onClick?: () => void, [key: string]: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={onClick}
    className={`glass glass-hover p-6 rounded-sm relative group overflow-hidden ${onClick ? 'cursor-pointer hover:border-acid/40 transition-colors' : ''} ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const Label = ({ children, color = "text-acid" }: { children: ReactNode, color?: string }) => (
  <span className={`font-display text-[10px] font-bold tracking-[0.2em] uppercase ${color}`}>
    {children}
  </span>
);

const SectionTitle = ({ children, onExpand }: { children: ReactNode, onExpand?: () => void }) => (
  <h2 className="font-display text-2xl font-black mb-6 tracking-tighter uppercase flex items-center gap-2">
    {children}
    <div className="h-[1px] flex-grow bg-white/10" />
    {onExpand && (
      <button
        onClick={onExpand}
        className="p-1 hover:text-acid transition-colors cursor-pointer"
        title="Expand Section"
      >
        <Maximize2 size={16} />
      </button>
    )}
  </h2>
);

const DataDossier = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-crosshair"
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          className="relative w-full max-w-5xl max-h-[85vh] glass bg-black/80 border border-acid/20 rounded-sm overflow-hidden flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-acid flex items-center justify-center text-bg">
                <Terminal size={20} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter text-acid uppercase">{title}</h3>
                <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Accessing secure_module // v2.0.4</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-all rounded-sm"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
            {children}
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-white/5 bg-black flex justify-between items-center text-[10px] font-mono opacity-30">
            <span>SYSTEM.EXEC: LIST_RESOURCES</span>
            <span>PARITY: SECURE</span>
          </div>

          {/* Decorative Grid */}
          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-5">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,theme(colors.acid),transparent_1px)] bg-[size:10px_10px]" />
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const CircularText = ({ text = "BACKEND ENGINEER • SYSTEM ARCHITECT • " }: { text?: string }) => (
  <div className="relative w-40 h-40 animate-[spin_10s_linear_infinite] opacity-20 pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
      <text className="font-display text-[8px] font-bold tracking-[0.1em] fill-white">
        <textPath xlinkHref="#circlePath">{text.repeat(3)}</textPath>
      </text>
    </svg>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeDossier, setActiveDossier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-acid selection:text-bg font-display overflow-hidden relative">
      {/* Background Subject Image */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-full aspect-[3/4] max-h-[100vh]"
        >
          <img
            src="https://lh3.googleusercontent.com/d/1Rfppntg056x9lOcBm91NFbXU7s0mQTGK"
            alt="Vanshika Goel"
            className="w-full h-full object-cover grayscale brightness-[0.8] contrast-[1.1] transition-all duration-1000"
          />
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </motion.div>
      </div>

      {/* Extreme Decorative Elements */}
      <div className="fixed top-1/2 -right-4 -translate-y-1/2 vertical-text font-display opacity-10 text-[10px] font-black tracking-[1.5em] pointer-events-none uppercase pt-10">
        CORE_KERNEL_V2.0 // SYSTEM_STABLE //
      </div>

      <div className="fixed top-10 left-10 pointer-events-none z-50">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-acid animate-ping" />
          <span className="text-[10px] font-black tracking-widest text-acid/80">LINK_ESTABLISHED</span>
        </div>
        <div className="font-mono text-[8px] opacity-20 leading-none">
          SECURE_NODE: 192.168.1.1<br />
          LATENCY: 14MS<br />
          STATUS: AUTHORIZED
        </div>
      </div>

      {/* Main UI Overlay */}
      <main className="relative z-10 w-full min-h-screen grid grid-cols-12 gap-4 p-4 md:p-8 overflow-y-auto custom-scrollbar">

        {/* TOP LEFT: Large Name & Role */}
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-start pt-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-white/90">
              <span className="block italic">VANSHIKA</span>
              <span className="block">GOEL</span>
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-[2px] w-20 bg-acid" />
              <Label color="text-acid/80">{RESUME_DATA.role}</Label>
            </div>
          </motion.div>
        </div>

        {/* TOP RIGHT: Education/Bio */}
        <div className="col-span-12 lg:col-span-4 flex flex-col items-end pt-10 text-right">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xs space-y-6"
          >
            <div>
              <Label>EDUCATION</Label>
              <p className="text-sm opacity-50 mt-1 font-mono uppercase tracking-wider">B.TECH IN INFORMATION TECHNOLOGY<br />GGSIP UNIVERSITY // GPA 9.2</p>
            </div>
            {/* <div>
              <Label>LOCATION</Label>
              <p className="text-sm opacity-50 mt-1 font-mono tracking-widest">{RESUME_DATA.location}</p>
            </div> */}
          </motion.div>
        </div>

        {/* MIDDLE LEFT: Creative DNA / Profile & Blogs */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 self-center pt-10 lg:pt-0">
          <BentoBox className="max-w-md">
            <SectionTitle>TECHNICAL DNA</SectionTitle>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {RESUME_DATA.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-acid">{stat.value}</span>
                  <span className="text-[8px] opacity-40 font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm opacity-70 leading-relaxed uppercase font-medium mb-4">
              {RESUME_DATA.bio}
            </p>

            <motion.a
              href={RESUME_DATA.links.resume}
              target="_blank"
              rel="noreferrer"
              className="flex w-full group cursor-pointer border border-acid/20 rounded-sm overflow-hidden"
            >
              <div className="p-4 bg-acid flex flex-col items-center justify-center text-bg group-hover:bg-acid/90 transition-all">
                <FileText size={20} strokeWidth={3} />
              </div>
              <div className="flex-grow bg-white/5 p-3 flex flex-col justify-center group-hover:bg-white/10 transition-all">
                <div className="flex justify-between items-center">
                  <Label color="text-white/60">VIEW_RESUME.PDF</Label>
                  <MoveUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-acid" />
                </div>
                <p className="text-[8px] font-mono opacity-30 mt-1 uppercase">Cloud repository link established</p>
              </div>
            </motion.a>
          </BentoBox>

          {/* <BentoBox
            onClick={() => setActiveDossier('blogs')}
            className="max-w-md border-white/5 bg-black/40"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <Label color="text-acid/60">DAILY_TRANSMISSIONS</Label>
                <span className="text-[8px] font-mono opacity-20 uppercase">Streaming from secure_source</span>
              </div>
              <Terminal size={14} className="text-acid/40" />
            </div>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {RESUME_DATA.blogs.map((blog, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4, backgroundColor: 'rgba(163, 255, 0, 0.03)' }}
                  className="group flex items-center justify-between py-3 px-2 border-b border-white/5 last:border-0 rounded-sm transition-all"
                >
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-acid/40 tracking-wider">{blog.date} // {blog.tag}</span>
                    <span className="text-xs font-black uppercase tracking-tight group-hover:text-acid transition-colors">{blog.title}</span>
                  </div>
                  <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-all text-acid" />
                </motion.div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
              <span className="text-[8px] font-mono opacity-30 uppercase">EOB_REACHED_V1.1</span>
              <button
                onClick={() => setActiveDossier('blogs')}
                className="text-[10px] font-black text-acid/60 hover:text-acid uppercase tracking-widest transition-all flex items-center gap-1 cursor-pointer"
              >
                View Archive <MoveUpRight size={10} />
              </button>
            </div>
          </BentoBox> */}
        </div>

        {/* MIDDLE CENTER: Circular Text Decor */}
        <div className="col-span-12 lg:col-span-4 flex items-center justify-center pointer-events-none py-10 lg:py-0">
          <CircularText text="BACKEND ENGINEER // SYSTEM ARCHITECT // VANSHIKA GOEL // " />
          <motion.div
            animate={{ rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute text-acid"
          >
            <Zap size={40} className="acid-glow" />
          </motion.div>
        </div>

        {/* MIDDLE RIGHT: Skills Grid */}
        <div className="col-span-12 lg:col-span-4 self-center lg:text-right">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <SectionTitle>SKILLS</SectionTitle>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                {RESUME_DATA.skills.map((skill, i) => (
                  <div key={i}>
                    <Label>{skill.category}</Label>
                    <div className="flex flex-wrap lg:justify-end gap-2 mt-3">
                      {skill.items.map((item, j) => (
                        <span
                          key={j}
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-white/10 bg-white/5 rounded-sm opacity-70 hover:border-acid/40 hover:text-acid hover:opacity-100 transition-all"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM LEFT: Contacts */}
        <div className="col-span-12 lg:col-span-3 flex flex-col justify-end pb-10 gap-4">
          <a href="mailto:vgoel6900@gmail.com" className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 glass flex items-center justify-center text-acid group-hover:bg-acid group-hover:text-bg transition-all"><Mail size={18} /></div>
            <div className="overflow-hidden">
              <div className="text-[10px] opacity-40 font-bold uppercase tracking-[0.2em]">Contact</div>
              <div className="text-xs font-mono truncate">vgoel6900@gmail.com</div>
            </div>
          </a>
          <a href={RESUME_DATA.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 glass flex items-center justify-center text-acid group-hover:bg-acid group-hover:text-bg transition-all"><Github size={18} /></div>
            <div className="overflow-hidden">
              <div className="text-[10px] opacity-40 font-bold uppercase tracking-[0.2em]">Source</div>
              <div className="text-xs font-mono">vanshika6900</div>
            </div>
          </a>
          <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 glass flex items-center justify-center text-acid group-hover:bg-acid group-hover:text-bg transition-all"><Linkedin size={18} /></div>
            <div className="overflow-hidden">
              <div className="text-[10px] opacity-40 font-bold uppercase tracking-[0.2em]">Network</div>
              <div className="text-xs font-mono truncate">vanshika-goel</div>
            </div>
          </a>
        </div>

        {/* BOTTOM RIGHT: Creative Journey / Exp & Projects separated */}
        <div className="col-span-12 lg:col-span-9 flex flex-col justify-end pb-10 gap-6">
          <BentoBox
            onClick={() => setActiveDossier('experience')}
            className="w-full border-acid/10"
          >
            <SectionTitle onExpand={() => setActiveDossier('experience')}>CREATIVE JOURNEY</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar-thin">
              {RESUME_DATA.experience.map((exp, i) => (
                <div key={i} className="space-y-3 border-l-2 border-acid/30 pl-6 py-2 group-hover:border-acid transition-colors">
                  <div className="text-acid text-[10px] font-black tracking-[0.3em]">{exp.period}</div>
                  <h4 className="text-xl font-black leading-tight uppercase tracking-tighter">{exp.company}</h4>
                  <p className="text-[10px] text-acid/60 font-bold uppercase tracking-widest">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-xs opacity-40 uppercase leading-relaxed font-medium">
                        <span className="text-acid/60 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tech.map((t, j) => <span key={j} className="text-[9px] font-mono border border-acid/20 text-acid/60 px-2 py-0.5 rounded-sm">#{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </BentoBox>

          <BentoBox
            onClick={() => setActiveDossier('projects')}
            className="w-full border-white/5 bg-black/60"
          >
            <div className="flex justify-between items-center mb-6">
              <SectionTitle onExpand={() => setActiveDossier('projects')}>TECHNICAL CRAFTS</SectionTitle>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar-thin">
              {RESUME_DATA.projects.map((proj, i) => (
                <div key={`p-${i}`} className="space-y-3 border-l-2 border-white/10 pl-6 py-2 hover:border-white/40 transition-colors">
                  <div className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-2">
                    <Layers size={10} />
                    {proj.tech[0]}
                  </div>
                  <h4 className="text-xl font-black leading-tight uppercase tracking-tighter hover:text-acid transition-colors">{proj.title}</h4>
                  <ul className="space-y-2">
                    {proj.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-xs opacity-30 uppercase leading-relaxed font-medium">
                        <span className="text-white/40 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2 opacity-20">
                    {proj.tech.slice(1).map((t, j) => <span key={j} className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded-sm">#{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </BentoBox>
        </div>

      </main>

      {/* Extreme Decorative Elements */}
      <div className="fixed top-0 right-10 vertical-text font-display opacity-10 text-xs font-black tracking-[1em] pointer-events-none uppercase pt-10">
        BACKEND // DISTRIBUTED // AUTH // CLOUD // SCALE
      </div>

      <div className="fixed bottom-0 right-0 w-full h-[30vh] bg-gradient-to-t from-acid/10 via-transparent to-transparent pointer-events-none mix-blend-overlay" />

      {/* Dossier Modals */}
      <DataDossier
        isOpen={activeDossier === 'blogs'}
        onClose={() => setActiveDossier(null)}
        title="TRANSMISSION_ARCHIVE"
      >
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESUME_DATA.blogs.map((blog, i) => (
              <div key={i} className="p-6 border border-white/10 hover:border-acid/40 bg-white/5 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-acid uppercase">{blog.date}</span>
                  <Label color="text-white/20">{blog.tag}</Label>
                </div>
                <h4 className="text-xl font-black uppercase mb-4 group-hover:text-acid transition-colors">{blog.title}</h4>
                <p className="text-sm opacity-50 uppercase leading-relaxed mb-6 font-medium">
                  Detailed analysis on {blog.title.toLowerCase()}. This transmission covers implementation strategies, architectural bottlenecks, and performance benchmarks.
                </p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-acid hover:gap-4 transition-all">
                  Read Full Article <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
          {/* Repeat for visual volume */}
          <div className="opacity-20 pointer-events-none">
            <Label color="text-white/40">PREVIOUS_MONTHS_LOADED</Label>
            <div className="h-40 border border-white/5 mt-4 border-dashed" />
          </div>
        </div>
      </DataDossier>

      <DataDossier
        isOpen={activeDossier === 'experience'}
        onClose={() => setActiveDossier(null)}
        title="PROFESSIONAL_HISTORY"
      >
        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="text-acid text-lg font-black tracking-widest">{exp.period}</div>
                <div className="h-1 w-10 bg-acid/40 mt-2" />
              </div>
              <div className="md:col-span-3 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-3xl font-black uppercase tracking-tighter">{exp.company}</h4>
                    <Label color="text-acid/60">{exp.role}</Label>
                  </div>
                  <ShieldCheck className="text-acid/20" size={32} />
                </div>
                <ul className="space-y-3 max-w-2xl">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-base md:text-lg opacity-60 leading-relaxed uppercase font-medium">
                      <span className="text-acid shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-4">
                  {exp.tech.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono opacity-40 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DataDossier>

      <DataDossier
        isOpen={activeDossier === 'projects'}
        onClose={() => setActiveDossier(null)}
        title="TECHNICAL_RESOURCES"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((proj, i) => (
            <div key={i} className="flex flex-col border border-white/10 bg-white/5 p-8 group">
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 glass flex items-center justify-center text-acid group-hover:bg-acid group-hover:text-bg transition-all">
                  <Cpu size={24} />
                </div>
                <div className="text-right">
                  <Label color="text-white/20">DEPLOYED_STATUS</Label>
                  <div className="flex items-center gap-2 justify-end">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-green-500">ACTIVE</span>
                  </div>
                </div>
              </div>
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 group-hover:text-acid transition-colors">{proj.title}</h4>
              <ul className="space-y-3 mb-8">
                {proj.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm opacity-50 uppercase leading-relaxed font-medium">
                    <span className="text-acid shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2 py-1 border border-white/10 text-[10px] font-mono bg-white/5 uppercase">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-white/10 pt-6">
                  <button className="flex-grow py-3 px-4 glass border border-acid/20 text-acid font-black text-xs uppercase tracking-widest hover:bg-acid hover:text-bg transition-all flex items-center justify-center gap-2">
                    View Source <Github size={14} />
                  </button>
                  <button className="p-3 glass border border-white/20 text-white hover:border-white transition-all">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DataDossier>
    </div>
  );
}

