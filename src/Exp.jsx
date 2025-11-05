import React from "react";

// Icon untuk pengalaman kerja/magang
function IconBriefcase({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M10.5 3A2.25 2.25 0 0 0 8.25 5.25v.041l.528 1.135A3.75 3.75 0 0 1 12 6.25a3.75 3.75 0 0 1 3.222.176l.528-1.135V5.25A2.25 2.25 0 0 0 13.5 3h-3Z" />
      <path
        fillRule="evenodd"
        d="M6.75 7.5A3.75 3.75 0 0 1 10.5 3.75h3A3.75 3.75 0 0 1 17.25 7.5v1.019a.75.75 0 0 1-.31.625l-3.75 2.25a.75.75 0 0 1-.68 0l-3.75-2.25A.75.75 0 0 1 6.75 8.519V7.5Zm1.5 2.055 2.25 1.35a.75.75 0 0 0 .68 0l2.25-1.35V7.5a2.25 2.25 0 0 0-2.25-2.25h-3A2.25 2.25 0 0 0 8.25 7.5v2.055Z"
        clipRule="evenodd"
      />
      <path d="M3 12.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
      <path d="M6 15.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Z" />
      <path d="M8.25 18.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" />
    </svg>
  );
}

// Icon untuk pengalaman mengajar/sosial
function IconUsers({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M10.5 6A2.25 2.25 0 0 0 8.25 8.25v3.75a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25h-3Z" />
      <path
        fillRule="evenodd"
        d="M16.5 3.75a3 3 0 0 1 3 3V17.25a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V6.75a3 3 0 0 1 3-3h9Zm-9 1.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V6.75a1.5 1.5 0 0 0-1.5-1.5h-9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Komponen Item Timeline
const TimelineItem = ({ item, isLast }) => {
  const { institution, period, role, contributions, type } = item;

  const iconMap = {
    teaching: <IconBriefcase />,
    community: <IconUsers />,
  };

  const iconColorMap = {
    teaching: "bg-sky-400/15 text-sky-300",
    community: "bg-fuchsia-400/15 text-fuchsia-300",
  };

  return (
    <div className="relative">
      {/* Dot on timeline */}
      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-sky-400/50 ring-4 ring-slate-900" />

      {/* Card Content */}
      <div className={`ml-8 ${!isLast ? "pb-8" : ""}`}>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-sky-400/60">
          <div className="flex items-start gap-4">
            <span
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconColorMap[type]}`}
            >
              {iconMap[type]}
            </span>
            <div className="min-w-0 grow">
              <div className="text-sm font-semibold text-white/90">
                {institution}
              </div>
              <div className="mt-1 text-xs font-medium text-white/70">
                {period}
              </div>
              <div className="mt-3 space-y-2 text-xs text-white/80">
                <div>
                  <span className="font-semibold text-sky-300/80">Peran:</span>{" "}
                  {role}
                </div>
                <div>
                  <span className="font-semibold text-sky-300/80">
                    Kontribusi:
                  </span>
                  <ul className="mt-1 list-disc list-inside pl-2 space-y-1">
                    {contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Exp = ({ experiences }) => {
  const defaultExperiences = [
    {
      institution: "PLP SMAN 1 SAKRA",
      period: "Maret 2023 - Juni 2023",
      role: "Guru Bahasa Inggris kelas 10 dan 11",
      contributions: [
        "Membuat modul ajar sesuai kurikulum yang berlaku",
        "Mengembangkan materi pembelajaran",
      ],
      type: "teaching",
    },
    {
      institution: "Desa Mareje Timur Kab. Lombok Barat",
      period: "September 2023 - Desember 2023",
      role: "Guru les Bahasa Inggris untuk anak SD penerima PKH",
      contributions: [
        "Menyediakan pelatihan offline",
        "Membuat materi pembelajaran beserta soal dan pembahasan",
      ],
      type: "community",
    },
  ];

  const data = experiences?.length ? experiences : defaultExperiences;

  return (
    <section className="relative bg-slate-950 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_circle_at_90%_100%,rgba(88,101,242,0.08),transparent_50%)]" />

      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="mb-10 flex items-center gap-3">
          <IconBriefcase className="h-6 w-6 text-sky-300" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Riwayat Magang
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1.5 top-1 h-full w-0.5 bg-white/10" />
          <div className="space-y-4">
            {data.map((item, idx) => (
              <TimelineItem
                key={idx}
                item={item}
                isLast={idx === data.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
