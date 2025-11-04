import React from 'react';
import { Monitor, Megaphone, PenTool } from 'lucide-react';

const services = [
  {
    title: 'Web Experiences',
    desc: 'Custom websites and product interfaces with immersive micro-interactions that guide users intuitively.',
    icon: Monitor,
    gradient: 'from-rose-100 via-rose-50 to-white',
  },
  {
    title: 'Advertising Design',
    desc: 'Campaign concepts and high-impact visuals designed to perform across screens and platforms.',
    icon: Megaphone,
    gradient: 'from-fuchsia-100 via-pink-50 to-white',
  },
  {
    title: 'Presentation Design',
    desc: 'Executive storytelling decks that turn complex narratives into clear, compelling visuals.',
    icon: PenTool,
    gradient: 'from-sky-100 via-indigo-50 to-white',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_0%,rgba(244,114,182,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">High-touch, senior craft across web, advertising, and presentations—designed to convert and delight.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon, gradient }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br ${gradient} p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-2xl" />
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/70 p-3 text-rose-600 shadow-sm backdrop-blur">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-rose-600">
                  Explore capability
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
