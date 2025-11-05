import LightRays from "./komponen/LightRays.jsx";
import React from "react";

const Hero = () => {
  return (
    <section
      aria-label="Hero Dina"
      className="relative min-h-screen overflow-hidden bg-slate-950 font-utama text-white"
    >
      {/* Decorative Light Rays */}
      <div className="pointer-events-none absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.06}
          distortion={0.04}
          className="opacity-70 z-0"
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/30 to-slate-950" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-10 z-50">
        {/* Top badge */}
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur">
            Available for collaboration
          </span>
        </div>

        {/* Centered Avatar + Heading */}
        <div className="mt-8 md:mt-12 flex flex-col items-center text-center">
          {/* Avatar image centered */}
          <div className="relative">
            <div className="rounded-full p-[3px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,0.4),rgba(16,185,129,0.4),rgba(6,182,212,0.4))] shadow-[0_0_40px_rgba(0,255,255,0.25)]">
              <div className="rounded-full bg-slate-900/70">
                <img
                  src="/img/hero.png"
                  alt="Foto DINA MULIANA"
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Name and title */}
          <h1 className="mt-6 text-2xl md:text-6xl font-semibold tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-teal-300 to-emerald-300">
              DINA MULIANA S.Pd.
            </span>
          </h1>
          <div className="mt-3 text-xs md:text-base text-slate-300">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-teal-300 to-emerald-300">
              S1 Pendidikan Bahasa Inggris <br />— UNDIKMA Mataram
            </span>
          </div>
          <p className="mt-4 text-sm md:text-lg text-slate-300 max-w-2xl">
            Mengajar dan berkomunikasi dengan pendekatan yang modern, empatik,
            dan efektif. Berkomitmen pada pengalaman belajar yang engaging,
            terstruktur, dan penuh perhatian terhadap detail.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {/* <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Lihat Proyek
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-6.97 6.97a.75.75 0 1 1-1.06-1.06l6.97-6.97h-3.44a.75.75 0 0 1-.75-.75Z" />
              <path d="M20.25 18a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1 0-1.5h14.25a.75.75 0 0 1 .75.75Z" />
            </svg>
          </a> */}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-medium text-slate-200 hover:border-slate-600 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            Hubungi Saya
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.1-.75a.75.75 0 0 0-.75.75v.364l7.5 4.286 7.5-4.286V6.75a.75.75 0 0 0-.75-.75h-13.5Zm14.658 2.57-6.97 3.983a.75.75 0 0 1-.726 0L4.34 8.57v8.68c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75V8.57Z" />
            </svg>
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-14 flex justify-center gap-2 text-xs text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 3.75a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5Zm0 12a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm0-5.625a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Z" />
            <path d="M12 18.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z" />
          </svg>
          <span>Scroll untuk melihat lebih banyak</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
