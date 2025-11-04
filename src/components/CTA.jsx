import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(244,114,182,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-rose-200/60 bg-white p-10 text-center shadow-sm">
        <h3 className="font-display text-3xl text-slate-900">Let’s shape what’s next</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          We partner with ambitious teams to craft digital experiences that move markets and minds.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#" className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:shadow-lg hover:shadow-rose-200/50">Book a discovery call</a>
          <a href="#" className="rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-slate-900 backdrop-blur transition hover:border-slate-400 hover:bg-white">Download credentials</a>
        </div>
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-sky-200/40 blur-3xl" />
      </div>
      <p className="relative mx-auto mt-8 max-w-5xl text-center text-xs text-slate-500">
        © {new Date().getFullYear()} — Crafted with care. All rights reserved.
      </p>
    </section>
  );
};

export default CTA;
