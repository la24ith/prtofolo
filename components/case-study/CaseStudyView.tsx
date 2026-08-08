'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/data/case-studies';
import '../../app/case-studies/case-study.css';

function themeVars(theme: CaseStudy['theme']): React.CSSProperties {
  return {
    ['--jade' as any]: theme.primary,
    ['--jade-dk' as any]: theme.primaryDark,
    ['--jade-mid' as any]: theme.primaryMid,
    ['--jade-lt' as any]: theme.primaryLight,
    ['--brass' as any]: theme.accent,
    ['--brass-lt' as any]: theme.accentLight,
  };
}

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function CaseStudyView({ data }: { data: CaseStudy }) {
  return (
    <div className="case-study-theme" style={themeVars(data.theme)} dir="rtl">
      {/* ══ Hero ══ */}
      <header className="cs-hero">
        <div className="cs-hero-inner">
          <Link href="/features" className="cs-back">
            <ArrowRight className="w-3.5 h-3.5" />
            الرجوع لكل المميزات
          </Link>
          <div className="cs-hero-badge">{data.hero.badge}</div>
          <h1>{data.hero.title}</h1>
          <p className="cs-hero-sub">{data.hero.subtitle}</p>
          <div className="cs-hero-stats">
            {data.hero.stats.map((s, i) => (
              <div key={s.l} className="cs-hero-stat" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div>
                  <span className="cs-hero-stat-n">{s.n}</span>
                  <span className="cs-hero-stat-l">{s.l}</span>
                </div>
                {i < data.hero.stats.length - 1 && <div className="cs-hero-divider" />}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ══ Overview ══ */}
      <section className="cs-section">
        <div className="cs-container">
          <motion.div {...fadeUp}>
            <div className="cs-section-label">{data.overview.label}</div>
            <h2 className="cs-section-title">{data.overview.title}</h2>
            <p className="cs-section-desc">{data.overview.desc}</p>
            <div className="cs-stats-row">
              {data.overview.statCards.map((s) => (
                <div key={s.l} className="cs-stat-card">
                  <span className="cs-stat-card-n">{s.n}</span>
                  <div className="cs-stat-card-l">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ Apps ══ */}
      {data.apps && (
        <section className="cs-section">
          <div className="cs-container">
            <motion.div {...fadeUp}>
              <div className="cs-section-label">{data.apps.label}</div>
              <h2 className="cs-section-title">{data.apps.title}</h2>
              <div className="cs-apps-grid">
                {data.apps.items.map((app) => (
                  <div key={app.name} className={`cs-card ${app.accent ? `accent-${app.accent}` : ''}`}>
                    <div className="cs-app-header">
                      <div className="cs-app-icon">{app.icon}</div>
                      <div>
                        <div className="cs-app-name">{app.name}</div>
                        <div className="cs-app-sub">{app.sub}</div>
                      </div>
                    </div>
                    <ul className="cs-feat-list">
                      {app.features.map((f) => (
                        <li key={f.title}>
                          <span>
                            <strong>{f.title}</strong> — {f.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══ Workflow ══ */}
      {data.workflow && (
        <section className="cs-section">
          <div className="cs-container">
            <motion.div {...fadeUp}>
              <div className="cs-section-label">قواعد العمل</div>
              <h2 className="cs-section-title">{data.workflow.title}</h2>
              <p className="cs-section-desc">{data.workflow.desc}</p>
              <div className="cs-flow">
                {data.workflow.steps.map((step, i) => (
                  <span key={step} style={{ display: 'contents' }}>
                    <div className="cs-flow-step">{step}</div>
                    {i < data.workflow!.steps.length - 1 && <div className="cs-flow-arrow">←</div>}
                  </span>
                ))}
              </div>
              {data.workflow.altPaths?.map((alt) => (
                <div key={alt.note} style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <div className="cs-flow-step">{alt.from}</div>
                  <div className="cs-flow-arrow">←</div>
                  <div className={`cs-flow-step ${alt.danger ? 'cancel' : ''}`}>{alt.to}</div>
                  <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{alt.note}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ══ Tech stack ══ */}
      {data.techStack && (
        <section className="cs-section">
          <div className="cs-container">
            <motion.div {...fadeUp}>
              <div className="cs-section-label">{data.techStack.label}</div>
              <h2 className="cs-section-title">{data.techStack.title}</h2>
              <div className="cs-tech-grid">
                {data.techStack.items.map((t) => (
                  <div key={t.name} className="cs-tech-item">
                    <div className="cs-tech-dot" style={{ background: t.color }} />
                    <div>
                      <div className="cs-tech-item-name">{t.name}</div>
                      <div className="cs-tech-item-desc">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══ Highlights ══ */}
      {data.highlights && (
        <section className="cs-section">
          <div className="cs-container">
            <motion.div {...fadeUp}>
              <div className="cs-section-label">{data.highlights.label}</div>
              <h2 className="cs-section-title">{data.highlights.title}</h2>
              <div className="cs-highlights-grid">
                {data.highlights.items.map((h) => (
                  <div key={h.title} className="cs-highlight-item">
                    <div className="cs-highlight-icon">{h.icon}</div>
                    <div className="cs-highlight-title">{h.title}</div>
                    <div className="cs-highlight-desc">{h.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══ Roadmap ══ */}
      {data.roadmap && (
        <section className="cs-section">
          <div className="cs-container">
            <motion.div {...fadeUp}>
              <div className="cs-section-label">{data.roadmap.label}</div>
              <h2 className="cs-section-title">{data.roadmap.title}</h2>
              <p className="cs-section-desc">{data.roadmap.desc}</p>
              <div className="cs-phases">
                {data.roadmap.phases.map((p) => (
                  <div key={p.phase} className="cs-phase">
                    <span className={`cs-phase-badge ${p.phase.toLowerCase()}`}>{p.phase}</span>
                    <div>
                      <div className="cs-phase-title">{p.title}</div>
                      <div className="cs-phase-desc">{p.desc}</div>
                      <span className={`cs-phase-status ${p.status}`}>
                        {p.status === 'done' ? '✅ مكتمل' : '⏳ قادم'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══ CTA ══ */}
      <footer className="cs-cta">
        <h2>{data.cta.title}</h2>
        <p>{data.cta.desc}</p>
        <a className="cs-cta-btn" href={data.cta.primaryHref}>
          {data.cta.primaryLabel}
        </a>
        {data.cta.footnote && <p className="cs-cta-footnote">{data.cta.footnote}</p>}
      </footer>
    </div>
  );
}
