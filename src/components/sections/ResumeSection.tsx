"use client";

import {
  TIMELINE,
  SKILLS,
  LANGUAGES,
  type TimelineGroup,
  type SkillGroup,
  type LanguageItem,
} from "../../data/resume-data";

interface ResumeSectionProps {
  title?: string;
  subtitle?: string;
  id?: string;
}

/* ---------- Iconos inline (fill = main-color) ---------- */

const ICONS = {
  graduation: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
        fill="var(--main-color)"
        stroke="none"
      />
    </svg>
  ),
  pencil: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        fill="var(--main-color)"
        stroke="none"
      />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
        fill="var(--main-color)"
        stroke="none"
      />
    </svg>
  ),
} as const;

/* ---------- Skill chip (sin porcentaje) ---------- */

function SkillChip({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="
        inline-flex items-center gap-2
        px-[0.95rem] py-2
        rounded-full
        text-[0.88rem] font-medium
        text-fuchsia-500
        shadow-[var(--little-shadow)]
        transition-[box-shadow,transform] duration-200 ease-out
        hover:shadow-[var(--down-shadow)] hover:-translate-y-px
        cursor-default select-none
      "
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {name}
    </span>
  );
}

/* ---------- Star rating (decimal soportado, p.ej. 4.5) ---------- */

function StarRating({ value, color }: { value: number; color: string }) {
  return (
    <div className="inline-flex gap-[2px]" style={{ color }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span
            key={i}
            className="relative inline-block w-[18px] h-[18px]"
            aria-hidden
          >
            {/* empty star (fondo tenue) */}
            <svg
              className="absolute inset-0 w-full h-full text-current opacity-[0.18]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            {/* filled star (clipado por width %) */}
            <span
              className="absolute top-0 left-0 h-full overflow-hidden text-current"
              style={{ width: `${fill * 100}%` }}
            >
              <svg
                className="w-[18px] h-[18px] block"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}

/* ---------- Timeline column ---------- */

function TimelineColumn({ group }: { group: TimelineGroup }) {
  return (
    <div>
      <h3
        className="
          flex items-center gap-[0.6rem]
          text-fuchsia-500
          text-[1.4rem] font-medium
          m-0 mb-6
        "
      >
        <span className="inline-flex w-[1.4rem] h-[1.4rem]">
          {ICONS[group.icon]}
        </span>
        {group.heading}
      </h3>

      <div className="relative pl-6">
        {/* vertical gradient line — var() + rgba() mixto, va como inline style */}
        <div
          className="absolute left-0 top-2 bottom-2 w-[2px] rounded-[2px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--main-color) 0%, rgba(0, 202, 238, 0.2) 100%)",
          }}
        />

        {group.items.map((item, i) => (
          <div
            key={i}
            className="
              relative
              rounded-[10px]
              px-[1.4rem] py-[1.1rem]
              mb-5 last:mb-0
              transition-transform duration-200 ease-out
              hover:translate-x-1
              shadow-[var(--little-shadow)]
            "
          >
            <span
              className="
                absolute top-6 -left-6
                w-[14px] h-[14px]
                rounded-full
                border-[3px] border-[var(--bg-color)]
                -translate-x-1/2
              "
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 0 2px ${item.color}, var(--little-shadow)`,
              }}
            />
            <h4
              className="
                text-fuchsia-500
                text-[1.05rem] font-medium
                m-0 mb-[0.2rem]
              "
            >
              {item.title}
            </h4>
            <p
              className="
                text-fuchsia-500
                opacity-70
                text-[0.85rem] font-normal
                m-0 mb-[0.65rem]
                tracking-[0.03em]
              "
            >
              {item.year}
            </p>
            <p className="m-0 text-[0.92rem] leading-[1.55]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Main component ---------- */

export default function ResumeSection({
  title = "Resume",
  subtitle = "Education, experience, skills and languages — a quick overview of my journey so far.",
  id = "resume",
}: ResumeSectionProps) {
  return (
    <section
      id={id}
      className="
        
        pt-8 pb-20
        text-fuchsia-500
        bg-linear-to-b from-fuchsia-100 via-fuchsia-100 via-75% to-lime-200
      "
    >
      <div
        className="w-[90%] max-w-[1100px]
        mx-auto"
      >
        <h2
          className="
          text-center
          text-fuchsia-500
          text-[2.2rem] font-normal
          mx-0 mt-6 mb-1
        "
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-center text-base font-light opacity-75 m-0 mb-12">
            {subtitle}
          </p>
        )}

        {/* ---------- Timeline: Education + Experience ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {TIMELINE.map((group) => (
            <TimelineColumn key={group.heading} group={group} />
          ))}
        </div>

        {/* ---------- Skills chips (sin porcentajes) ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {SKILLS.map((group: SkillGroup) => (
            <div key={group.heading}>
              <h3
                className="
                text-fuchsia-500
                text-[1.4rem] font-medium
                m-0 mb-6
              "
              >
                {group.heading}
                {group.accent && (
                  <span className="text-fuchsia-500">{group.accent}</span>
                )}
              </h3>
              <div
                className="
                flex flex-wrap gap-[0.6rem]
                p-6
                rounded-xl
                shadow-[var(--down-shadow)]
              "
              >
                {group.skills.map((s) => (
                  <SkillChip key={s.name} name={s.name} color={s.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Languages ---------- */}
        <div>
          <h3
            className="
            text-fuchsia-500
            text-[1.4rem] font-medium
            m-0 mb-6
          "
          >
            Language
            <span className="text-fuchsia-500"> Skills</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {LANGUAGES.map((lang: LanguageItem) => (
              <div
                key={lang.name}
                className="
                flex items-center justify-between
                px-4 py-[0.85rem]
                rounded-lg
                neu-shadow-little
                transition-[box-shadow,transform] duration-200 ease-out
                hover:shadow-[var(--down-shadow)] active:translate-y-px
              "
              >
                <p className="text-[0.95rem] font-medium text-fuchsia-500 m-0">
                  {lang.name}
                  <span
                    className="
                    text-fuchsia-500
                    text-[0.8rem] font-normal
                    ml-1
                    uppercase tracking-[0.04em]
                  "
                  >
                    {lang.level}
                  </span>
                </p>
                <StarRating value={lang.stars} color={lang.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
