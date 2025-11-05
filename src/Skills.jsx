import React from "react";
import PropTypes from "prop-types";

const defaultAcademic = {
  title: "Keterampilan Akademis",
  english: {
    label: "Kemampuan berbahasa Inggris",
    lines: [
      "Speaking, Reading, Writing, Listening",
      "Vocabulary, Tenses, Grammar",
    ],
  },
};

const defaultNonAcademic = [
  "Teknik mengajar",
  "Pemecahan masalah",
  "Komunikasi yang baik",
  "Kesabaran",
];

const defaultHardSkills = ["Microsoft Office", "PowerPoint"];
const defaultHobbies = [
  "Memasak",
  "Baca Buku",
  "Menonton Film",
  "Mendengarkan musik",
];

function IconBook({ className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3.75 5.25A2.25 2.25 0 0 1 6 3h12a2.25 2.25 0 0 1 2.25 2.25v12A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25v-12Zm2.25-.75a.75.75 0 0 0-.75.75v11.25c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H6Z" />
    </svg>
  );
}

function IconSpark({ className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 3a.75.75 0 0 1 .67.42l1.78 3.56a.75.75 0 0 0 .43.37l3.93 1.31a.75.75 0 0 1 .25 1.28l-3.14 2.71a.75.75 0 0 0-.23.72l.69 4.06a.75.75 0 0 1-1.1.79L12 17.9l-3.29 1.52a.75.75 0 0 1-1.1-.79l.69-4.06a.75.75 0 0 0-.23-.72L4.93 9.94a.75.75 0 0 1 .25-1.28l3.93-1.31a.75.75 0 0 0 .43-.37l1.78-3.56A.75.75 0 0 1 12 3Z" />
    </svg>
  );
}

function IconCheck({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M9.55 16.45a.75.75 0 0 1-1.06 0l-3.24-3.24a.75.75 0 1 1 1.06-1.06l2.21 2.21 5.97-5.97a.75.75 0 0 1 1.06 1.06l-7 7Z" />
    </svg>
  );
}

function IconBolt({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-4 w-4 ${className}`}
    >
      <path d="M13.06 2.89a.75.75 0 0 1 1.35.53l-.53 5.32h5.57a.75.75 0 0 1 .56 1.27l-9.08 10.4a.75.75 0 0 1-1.3-.56l.53-5.32H4.2a.75.75 0 0 1-.56-1.27l9.42-10.77Z" />
    </svg>
  );
}

function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/3 px-3 py-2 ${className}`}
    >
      {children}
    </span>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <IconSpark className="h-5 w-5 text-cyan-300" />
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="mt-4 text-slate-300">{children}</div>
    </div>
  );
}

const skillsData = {
  title: "Keterampilan",
  academic: defaultAcademic,
  nonAcademic: {
    title: "Keterampilan non Akademis",
    skills: defaultNonAcademic,
  },
  hardSkills: {
    title: "Hard Skills",
    skills: defaultHardSkills,
  },
  hobbies: {
    title: "Hobi",
    hobbies: defaultHobbies,
  },
};

const Skills = ({ data = skillsData }) => {
  return (
    <section
      aria-label={data.title}
      className="relative bg-slate-950 text-white font-utama py-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08),transparent_60%)]" />

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {data.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          <div className="space-y-8">
            <AcademicSkills skills={data.academic} />
            <NonAcademicSkills skills={data.nonAcademic} />
            <HardSkills skills={data.hardSkills} />
            <Hobbies hobbies={data.hobbies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const HardSkills = ({ skills }) => (
  <SectionCard title={skills.title}>
    <div className="flex flex-wrap items-center gap-3">
      {skills.skills.map((item, idx) => (
        <Chip
          key={idx}
          className="text-cyan-300 border-cyan-400/30 bg-cyan-500/10"
        >
          <IconSpark className="h-4 w-4" />
          {item}
        </Chip>
      ))}
    </div>
  </SectionCard>
);

HardSkills.propTypes = {
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Hobbies = ({ hobbies }) => (
  <SectionCard title={hobbies.title}>
    <div className="flex flex-wrap items-center gap-3">
      {hobbies.hobbies.map((item, idx) => (
        <Chip
          key={idx}
          className="text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/10"
        >
          <IconSpark className="h-4 w-4" />
          {item}
        </Chip>
      ))}
    </div>
  </SectionCard>
);

Hobbies.propTypes = {
  hobbies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const NonAcademicSkills = ({ skills }) => (
  <SectionCard title={skills.title}>
    <ul className="grid grid-cols-1 gap-2">
      {skills.skills.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
          <IconBolt className="text-teal-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </SectionCard>
);

NonAcademicSkills.propTypes = {
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const AcademicSkills = ({ skills }) => (
  <SectionCard title={skills.title}>
    <div className="space-y-3">
      <div>
        <div className="flex items-center gap-2 text-white">
          <IconBook className="h-5 w-5 text-teal-300" />
          <span className="font-medium">{skills.english.label}</span>
        </div>
        <ul className="mt-2 space-y-1 text-sm md:text-base text-slate-300">
          {skills.english.lines.map((line, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <IconCheck />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionCard>
);

AcademicSkills.propTypes = {
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    english: PropTypes.shape({
      label: PropTypes.string.isRequired,
      lines: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
};
