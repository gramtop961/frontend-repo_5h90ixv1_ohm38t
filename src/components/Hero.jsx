import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(244,114,182,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-4 py-2 text-rose-600 backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Premium Digital Agency</span>
        </div>
        <h1 className="font-display text-5xl leading-tight text-slate-900 sm:text-6xl md:text-7xl">
          Elegant Experiences for
          <span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent"> Modern Brands</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          We craft high-end web, advertising, and presentation design. Immerse your audience with interactive storytelling that feels effortless and refined.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white transition hover:shadow-lg hover:shadow-rose-200/50"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-slate-900 backdrop-blur transition hover:border-slate-400 hover:bg-white"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
