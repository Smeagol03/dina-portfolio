const About = () => {
  return (
    <section
      aria-label="Tentang Dina"
      className="relative bg-slate-950 text-white py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08),transparent_60%)]" />

        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            ABOUT
            <span className="ml-2 text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-teal-300 to-emerald-300">
              ME
            </span>
          </h2>

          <div className="mt-8 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm shadow-lg shadow-cyan-500/10 p-6 md:p-8">
            <p className="mt-4 text-xs md:text-lg text-slate-300 leading-relaxed">
              Seorang fresh graduated lulusan S1 Pendidikan Bahasa Inggris,
              dimana saya ingin menerapkan pengetahuan dan keterampilan saya di
              dunia kerja khususnya bidang Pendidikan. Saya bisa memberikan
              pembelajaran yg seru melalui keterampilan saya yg kreatif dan
              interaktif dimana saya bisa terapkan sesuai karakter masing-masing
              peserta didik.
            </p>

            {/* Informasi personal modern */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group rounded-xl border border-white/10 bg-white/3 p-4 backdrop-blur-sm hover:border-cyan-400/40 hover:bg-white/6 transition">
                <div className="flex items-center gap-2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-cyan-300"
                  >
                    <path d="M6.75 2.25a.75.75 0 0 1 .75.75V4.5h9V3a.75.75 0 0 1 1.5 0v1.5h.75A2.25 2.25 0 0 1 21.75 6.75v12A2.25 2.25 0 0 1 19.5 21h-15A2.25 2.25 0 0 1 2.25 18.75v-12A2.25 2.25 0 0 1 4.5 4.5h.75V3a.75.75 0 0 1 1.5 0v1.5Zm0 4.5h-2.25a.75.75 0 0 0-.75.75v2.25h18V7.5a.75.75 0 0 0-.75-.75h-2.25v1.5a.75.75 0 0 1-1.5 0v-1.5h-9v1.5a.75.75 0 0 1-1.5 0v-1.5Z" />
                  </svg>
                  <span className="text-[10px] tracking-wide">
                    Tempat/Tgl Lahir
                  </span>
                </div>
                <div className="mt-2 text-xs text-white">
                  Rumbuk, 12 Mei 2001
                </div>
              </div>

              <div className="group rounded-xl border border-white/10 bg-white/3 p-4 backdrop-blur-sm hover:border-emerald-400/40 hover:bg-white/6 transition">
                <div className="flex items-center gap-2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-emerald-300"
                  >
                    <path d="M12 2.25a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 10.5c-4.142 0-7.5 2.628-7.5 5.875v1.375a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75V18.625c0-3.247-3.358-5.875-7.5-5.875Z" />
                  </svg>
                  <span className="text-xs tracking-wide">Jenis Kelamin</span>
                </div>
                <div className="mt-2 text-xs text-white">Perempuan</div>
              </div>

              <div className="group rounded-xl border border-white/10 bg-white/3 p-4 backdrop-blur-sm hover:border-fuchsia-400/40 hover:bg-white/6 transition">
                <div className="flex items-center gap-2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-fuchsia-300"
                  >
                    <path d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5Zm0 6a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
                  </svg>
                  <span className="text-xs uppercase tracking-wide">Agama</span>
                </div>
                <div className="mt-2 text-sm md:text-base text-white">
                  Islam
                </div>
              </div>

              <div className="group rounded-xl border border-white/10 bg-white/3 p-4 backdrop-blur-sm hover:border-sky-400/40 hover:bg-white/6 transition">
                <div className="flex items-center gap-2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-sky-300"
                  >
                    <path d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5Zm0 5.25a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm0 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
                  </svg>
                  <span className="text-xs uppercase tracking-wide">
                    Kewarganegaraan
                  </span>
                </div>
                <div className="mt-2 text-sm md:text-base text-white">
                  Indonesia
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-cyan-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M11.7 2.43a.75.75 0 0 1 .6 0l7.5 3.33a.75.75 0 0 1 .45.69v8.25a.75.75 0 0 1-.45.69l-7.5 3.33a.75.75 0 0 1-.6 0l-7.5-3.33a.75.75 0 0 1-.45-.69V6.45a.75.75 0 0 1 .45-.69l7.5-3.33Z" />
                </svg>
                Kreatif
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-emerald-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M11.25 3a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V3.75A.75.75 0 0 1 11.25 3Z" />
                </svg>
                Interaktif
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-2 text-fuchsia-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 3.75A8.25 8.25 0 1 1 3.75 12 8.25 8.25 0 0 1 12 3.75Zm0 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
                </svg>
                Empatik
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-400/30 bg-sky-500/10 px-3 py-2 text-sky-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M21 8.25a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75Zm-3 4.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h13.5a.75.75 0 0 1 .75.75Zm-3 4.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 .75.75Z" />
                </svg>
                Adaptif
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
