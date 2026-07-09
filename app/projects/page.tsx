'use client';

import { useState, useEffect, useCallback, SyntheticEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, ExternalLink, Github, X, ChevronLeft, ChevronRight, Code2, Layers, Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  architecture: string;
  demo: string;
  github: string;
  coverImage?: string; // يقبل رابط صورة أو رابط فيديو (mp4/webm/mov...) - يتم التعرف عليه تلقائياً
  screenshots?: string[]; // نفس الفكرة، تقدر تخلط صور وفيديوهات بنفس المصفوفة
  highlights?: string[];
}

// ─── Helpers ────────────────────────────────────────────────────────────────
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v', '.ogv'];
const isVideo = (url?: string) => {
  if (!url) return false;
  const clean = url.split('?')[0].toLowerCase();
  return VIDEO_EXTENSIONS.some(ext => clean.endsWith(ext));
};

const projects: Project[] = [

  {
    id: 1,
    title: 'لوحة تحكم نظام صحي',
    description: 'لوحة تحكم شاملة لإدارة البرامج الصحية والمستخدمين مع طباعة تقارير مفصلة.',
    category: 'Health',
    tech: ['Flutter', 'Laravel', 'BLoC', 'REST API'],
    architecture: 'Clean Architecture',
    demo: '#',
    github: '#',
    coverImage: 'https://res.cloudinary.com/olhrhert/image/upload/v1783605586/%D9%84%D9%88%D8%BA%D9%88_%D9%84%D9%88%D8%AD%D8%A9_%D8%A7%D9%84%D8%AA%D8%AD%D9%83%D9%85_rkcky6.png',
    screenshots: [
'https://res.cloudinary.com/olhrhert/image/upload/v1783581543/standing-iphone-mockup_s6ri1n.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581541/standing-iphone-mockup_1_stimd7.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581542/standing-iphone-mockup_2_d69dxp.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581542/standing-iphone-mockup_3_tl4srw.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581539/standing-iphone-mockup_4_a37ha9.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581536/standing-iphone-mockup_5_snshiz.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581530/standing-iphone-mockup_6_ymz6ri.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581535/standing-iphone-mockup_7_d3v8y6.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581533/standing-iphone-mockup_8_qou0tr.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581537/standing-iphone-mockup_9_vvnnus.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581531/standing-iphone-mockup_10_fl7dau.png',
'https://res.cloudinary.com/olhrhert/image/upload/v1783581538/standing-iphone-mockup_11_gt3g30.png',
      // مثال: تحط رابط فيديو هنا وبيشتغل تلقائي كفيديو
      // 'https://res.cloudinary.com/olhrhert/video/upload/v.../demo_clip.mp4',
    ],
    highlights: [
      'إدارة المستخدمين والبرامج الصحية',
      'طباعة تقارير مفصلة',
      'لوحة إحصائيات متقدمة',
      'نظام صلاحيات متعدد المستويات',
    ],
  },
   {
     id: 2,
    title: 'تطبيق عيادتي ',
    description: 'تطبيق لادارة اليعدة الطبية بشكل كاملة وتسهيل عملية تسجيل المرضى ودخولهم والعديد من الميزات المدهشة',
    category: 'Health',
    tech: ['Flutter', 'sql', 'BLoC', 'REST API'],
    architecture: 'Clean Architecture',
    demo: '#',
    github: '#',
    coverImage: 'https://res.cloudinary.com/olhrhert/image/upload/v1783594167/logo_mu_clinc_t74jo1.png',
    screenshots:[
      'https://res.cloudinary.com/olhrhert/video/upload/v1783593573/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82_%D8%B9%D9%8A%D8%A7%D8%AF%D8%AA%D9%8A_kwxd7j.mp4'
    ],
    highlights:[
      'اضافة مرضى',
      'تسجيل مواعيد',
      'ملف طبي شامل',
      'قائمة انتظار ذكية',
      'طباعة ملف طبي',
      'اختصارات سريعة',
    ],
  },
  
    {
     id: 3,
    title: 'تطبيق متعة التغير ',
    description: 'تطبيق نظام صحي متكامل وتتبع الوزن ومراقبة النتائج واالتزام لحظة ب لحظة ',
    category: 'Health',
    tech: ['Flutter', 'hive', 'BLoC', 'REST API'],
    architecture: 'Clean Architecture',
    demo: '#',
    github: '#',
    coverImage: 'https://res.cloudinary.com/olhrhert/image/upload/v1783595785/photo_1_2026-07-08_11-51-05-removebg-preview_g3kb7j.png',
    screenshots:[
      'https://res.cloudinary.com/olhrhert/video/upload/v1783596311/AQNXTg8diwHX4qDIM8nA753CyP0uPfQkz4Tq2h_3S9E4n7p1OGLPDKjNr5TagQG_z379sv.mp4'
    ],
    highlights:[
      ' متابعة الوزن',
      'انظمة صحية مناسبة',
      'تخزين حي',
      'متابعة الالتزام',
    ],
  },
];

const categories = ['all', 'E-Commerce', 'Health', 'Real Estate', 'Food', 'Finance', 'Social'];

// ─── Media (صورة أو فيديو) ─────────────────────────────────────────────────
function MediaThumb({ src, alt, className, active }: { src: string; alt: string; className?: string; active?: boolean }) {
  if (isVideo(src)) {
    return (
      <div className={`relative ${className ?? ''}`}>
        <video
          src={src}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Play className={`text-white drop-shadow ${active ? 'w-4 h-4' : 'w-3 h-3'}`} fill="white" />
        </div>
      </div>
    );
  }
  return (
    <div className={`relative ${className ?? ''}`}>
      <Image src={src} alt={alt} fill className="object-cover" unoptimized />
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const shots = project.screenshots ?? [];
  const activeSrc = shots[activeIdx];

  const prev = useCallback(() => setActiveIdx(i => (i - 1 + shots.length) % shots.length), [shots.length]);
  const next = useCallback(() => setActiveIdx(i => (i + 1) % shots.length), [shots.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative z-10 w-full max-w-5xl mx-4 max-h-[92vh] flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ background: 'linear-gradient(135deg, #0d1520 0%, #0a0e14 100%)' }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm border border-white/10"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Left — Gallery */}
          {shots.length > 0 && (
            <div className="lg:w-[55%] relative bg-[#060b13] flex-shrink-0">
              {/* Main media */}
              <div className="relative h-72 lg:h-full min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {isVideo(activeSrc) ? (
                      <video
                        key={activeSrc}
                        src={activeSrc}
                        className="w-full h-full object-contain p-2"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <Image
                        src={activeSrc}
                        alt={`${project.title} - ${activeIdx + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        unoptimized
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060b13] to-transparent pointer-events-none" />

                {/* Nav arrows */}
                {shots.length > 1 && (
                  <>
                    <button onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all border border-white/10 backdrop-blur-sm">
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all border border-white/10 backdrop-blur-sm">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {shots.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
                  {shots.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        i === activeIdx ? 'border-[#27c6da] scale-110' : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <MediaThumb src={src} alt={`thumb ${i + 1}`} className="w-full h-full" active={i === activeIdx} />
                    </button>
                  ))}
                </div>
              )}

              {/* Counter */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-mono text-white">
                {activeIdx + 1} / {shots.length}
              </div>
            </div>
          )}

          {/* Right — Info */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col gap-5">
            {/* Header */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#27c6da]/10 border border-[#27c6da]/30 text-[#27c6da] text-xs font-mono mb-3">
                {project.category}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight">
                {project.title}
              </h2>
              <p className="text-[#9aa7b8] text-sm leading-relaxed mt-2">{project.description}</p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <p className="text-[10px] font-mono text-[#5f6b7d] uppercase tracking-widest mb-3">المميزات</p>
                <div className="grid grid-cols-1 gap-2">
                  {project.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-center gap-2.5 text-sm text-[#9aa7b8]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da] shrink-0" />
                      {h}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <p className="text-[10px] font-mono text-[#5f6b7d] uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code2 className="w-3 h-3" /> Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#9aa7b8] hover:border-[#27c6da]/40 hover:text-[#27c6da] transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="flex items-center gap-2 py-3 border-t border-white/10">
              <Layers className="w-3.5 h-3.5 text-[#27c6da]" />
              <span className="text-xs text-[#5f6b7d] font-mono">Architecture:</span>
              <span className="text-xs text-[#27c6da] font-mono">{project.architecture}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-[#9aa7b8] hover:text-white hover:border-white/30 transition-all">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#27c6da] text-[#04101f] text-sm font-semibold hover:bg-[#27c6da]/90 transition-all">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const cover = project.coverImage;
  const coverIsVideo = isVideo(cover);
  const hasDetails = (project.screenshots?.length ?? 0) > 0 || !!project.highlights;

  // نكتشف أبعاد الفيديو الحقيقية (عرضي أو طولي زي الريلز) عشان نضبط الحاوية بدون قص أو أشرطة سوداء
  const [videoRatio, setVideoRatio] = useState<number | null>(null);
  const isPortraitVideo = coverIsVideo && videoRatio !== null && videoRatio < 1;

  const handleLoadedMetadata = (e: SyntheticEvent<HTMLVideoElement>) => {
    const { videoWidth, videoHeight } = e.currentTarget;
    if (videoWidth && videoHeight) setVideoRatio(videoWidth / videoHeight);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={hasDetails ? onClick : undefined}
      className={`group glass rounded-xl overflow-hidden border border-white/10 hover:border-[#27c6da]/30 hover:-translate-y-2 transition-all duration-300 ${hasDetails ? 'cursor-pointer' : ''}`}
    >
      {/* Thumbnail */}
      {cover ? (
        <div
          className={`relative overflow-hidden bg-[#060b13] mx-auto ${isPortraitVideo ? 'w-full max-h-[420px]' : 'h-52 w-full'}`}
          style={isPortraitVideo ? { aspectRatio: videoRatio as number } : undefined}
        >
          {coverIsVideo ? (
            <video
              src={cover}
              className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${isPortraitVideo ? 'object-cover' : 'object-contain'}`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={handleLoadedMetadata}
            />
          ) : (
            <Image
              src={cover}
              alt={project.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          )}
          <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white">
            {project.category}
          </span>
          {coverIsVideo && (
            <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <Play className="w-3 h-3 text-white" fill="white" />
            </span>
          )}
          {hasDetails && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="px-5 py-2.5 rounded-xl bg-[#27c6da] text-[#04101f] text-sm font-bold shadow-lg shadow-[#27c6da]/30">
                عرض التفاصيل ↗
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-52 bg-gradient-to-br from-[#0468d7]/20 to-[#7c5cfc]/20 relative overflow-hidden flex items-center justify-center">
          <div className="w-20 h-32 rounded-xl bg-[#0a0e14]/80 border border-white/10 backdrop-blur-sm p-2 transform translate-y-4">
            <div className="h-1.5 w-8 bg-white/20 rounded-full mb-2" />
            <div className="h-1.5 w-5 bg-white/20 rounded-full mb-2" />
            <div className="flex-1 bg-white/10 rounded-lg mt-3" />
          </div>
          <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white">
            {project.category}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="p-5">
        <h3 className="font-display text-base font-semibold mb-1.5 group-hover:text-[#27c6da] transition-colors">{project.title}</h3>
        <p className="text-xs text-[#9aa7b8] leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-md border border-white/10 text-[10px] font-mono text-[#9aa7b8]">{tech}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-[10px] text-[#5f6b7d] font-mono">{project.architecture}</span>
          <div className="flex gap-3" onClick={e => e.stopPropagation()}>
            <a href={project.github} className="text-[#9aa7b8] hover:text-[#27c6da] transition-colors"><Github className="w-3.5 h-3.5" /></a>
            <a href={project.demo} className="text-[#9aa7b8] hover:text-[#27c6da] transition-colors"><ExternalLink className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects.filter(p => {
    const s = search.toLowerCase();
    const matchSearch = p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s);
    const matchCat = category === 'all' || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{t('projects.title')}</h1>
            <p className="text-[#9aa7b8] text-lg mt-4">{t('projects.subtitle')}</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5f6b7d]" />
              <input type="text" placeholder="Search projects..." value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#5f6b7d] focus:border-[#27c6da] focus:outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button key={cat} onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    category === cat ? 'bg-[#27c6da] text-[#04101f]' : 'bg-white/5 border border-white/10 text-[#9aa7b8] hover:bg-white/10'
                  }`}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * index }}>
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#9aa7b8]">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
