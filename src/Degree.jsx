import React from "react";

// Ikon tetap sama
function IconCap({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M2.25 8.75 12 4l9.75 4.75-3 1.46v5.04a2 2 0 0 1-1.22 1.84c-2.23.9-4.67 1.35-7.53 1.35s-5.3-.45-7.53-1.35A2 2 0 0 1 4.5 15.25v-5.04l-2.25-1.46Zm6.75 7.44c.94.15 1.95.23 3 .23s2.06-.08 3-.23v-4.28l-3 .95-3-.95v4.28Z" />
    </svg>
  );
}

function IconSchool({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M12 3 2.25 8.25v.75H3.5v10h5v-5h7v5h5v-10h1.25v-.75L12 3Zm0 2.12 6.5 3.13v.5H5.5v-.5L12 5.12Z" />
    </svg>
  );
}

// Komponen Badge untuk "Cum Laude"
const CumLaudeBadge = () => (
  <span className="absolute top-0 right-0 -mt-2 -mr-2 flex h-6 w-auto items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-lg">
    Cum Laude
  </span>
);

// Komponen Item Timeline
const TimelineItem = ({ item, isLast }) => {
  const { title, place, years, note, isHigher } = item;
  const isS1 = isHigher && note;

  return (
    <div className="relative">
      {/* Dot on timeline */}
      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-emerald-400/50 ring-4 ring-slate-900" />

      {/* Card Content */}
      <div className={`ml-8 ${!isLast ? "pb-8" : ""}`}>
        <div
          className={`relative rounded-xl border ${
            isS1 ? "border-emerald-400/50" : "border-white/10"
          } bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-emerald-400/60`}
        >
          {isS1 && <CumLaudeBadge />}
          <div className="flex items-start gap-3">
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
                isHigher
                  ? "bg-emerald-400/15 text-emerald-300"
                  : "bg-sky-400/15 text-sky-300"
              }`}
            >
              {isHigher ? <IconCap /> : <IconSchool />}
            </span>
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-semibold text-white/90">
                {title}
              </div>
              {place && (
                <div className="text-xs sm:text-sm text-white/60">{place}</div>
              )}
              <div className="mt-1 text-xs font-medium text-white/70">
                {years}
              </div>
              {note && (
                <div className="mt-2 text-xs text-emerald-300/90">
                  <span className="font-semibold">Catatan:</span> {note}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Degree = ({ items }) => {
  const defaultItems = [
    {
      title: "S1 Pendidikan Bahasa Inggris",
      place: "UNDIKMA Mataram",
      years: "2020 - 2025",
      note: "Lulus dengan predikat pujian (IPK 3.63)",
      isHigher: true,
    },
    {
      title: "SMAN 2 SELONG",
      place: "Lombok Timur",
      years: "2017 - 2020",
      isHigher: false,
    },
    {
      title: "SMPN 2 SAKRA",
      place: "Lombok Timur",
      years: "2014 - 2017",
      isHigher: false,
    },
    {
      title: "SDN 2 RUMBUK",
      place: "Lombok Timur",
      years: "2008 - 2014",
      isHigher: false,
    },
  ];

  const data = items?.length ? items : defaultItems;

  return (
    <section className="relative bg-slate-950 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_circle_at_10%_0%,rgba(16,185,129,0.08),transparent_50%)]" />

      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="mb-10 flex items-center gap-3">
          <IconCap className="h-6 w-6 text-emerald-300" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Riwayat Pendidikan
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* The vertical line */}
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

export default Degree;
