import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'Web',
    title: 'Interactive product launch microsite',
    copy: 'A sculpted, scroll-driven narrative that reveals product features with subtle 3D motion and tactile haptics.',
    gradient: 'from-rose-400/20 via-fuchsia-400/20 to-sky-400/20',
  },
  {
    tag: 'Advertising',
    title: 'Global brand campaign visuals',
    copy: 'A cohesive visual system across display, social, and OOH—engineered for recall, clarity, and scale.',
    gradient: 'from-fuchsia-400/20 via-rose-400/20 to-purple-400/20',
  },
  {
    tag: 'Presentation',
    title: 'Investor deck for growth-stage startup',
    copy: 'Data storytelling with executive poise—balancing velocity with rigor to inspire confidence.',
    gradient: 'from-sky-400/20 via-cyan-400/20 to-indigo-400/20',
  },
];

const Showcase = () => {
  return (
    <section id="work" className="relative w-full bg-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_0%,rgba(125,211,252,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600">A glimpse into recent engagements—each tailored for impact, performance, and polish.</p>
        </div>

        <div className="mt-12 space-y-8">
          {cases.map((c, idx) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-1 shadow-sm"
            >
              <div className={`relative overflow-hidden rounded-[22px] bg-gradient-to-r ${c.gradient}`}>
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.65)_100%)]" />
                <div className="relative grid gap-6 p-8 sm:grid-cols-2 sm:items-center">
                  <div>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">{c.tag}</span>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">{c.title}</h3>
                    <p className="mt-2 text-slate-600">{c.copy}</p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-rose-600">
                      View case study
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 1.02 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className="aspect-[16/10] w-full rounded-2xl bg-white/60 shadow-inner backdrop-blur"
                  >
                    <div className="h-full w-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.9),rgba(255,255,255,0.6))]" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
