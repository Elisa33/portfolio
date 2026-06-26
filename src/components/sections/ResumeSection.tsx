"use client";


import { TIMELINE, type TimelineGroup } from "../../data/resume-data";

interface ResumeSectionProps {
  title?: string;
  subtitle?: string;
  id?: string;
}



function StarRating({ value, color }: { value: number; color: string }) {
  return (
    <div className="inline-flex gap-0.5" style={{ color }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span
            key={i}
            className="relative inline-block w-4.5 h-4.5"
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
                className="w-4.5 h-4.5 block"
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
  const IconComponent = group.icon;
  return (
    <div>
      <h3
        className="
          flex items-center gap-[0.6rem]
          text-amber-400
          text-[1.4rem] font-medium
          m-0 mb-6
        "
      >
        {/* <span className="inline-flex w-[1.4rem] h-[1.4rem]">
          {ICONS[group.icon]}
        </span> */}
        <IconComponent className="w-[1.4rem] h-[1.4rem]" />
        {group.heading}
      </h3>

      <div className="relative pl-6">
        {/* vertical gradient line — var() + rgba() mixto, va como inline style */}
        <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-xs bg-amber-500" />

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
              shadow-(--little-shadow)
            "
          >
            <span
              className="
                absolute top-6 -left-6
                w-3.5 h-3.5
                rounded-full
                border-[3px] border-(--bg-color)
                -translate-x-1/2
                bg-amber-500
              "
            />
            <h4
              className="
                text-amber-400
                text-[1.05rem] font-medium
                m-0 mb-[0.2rem]
              "
            >
              {item.title}
            </h4>
            <p
              className="
                text-amber-400
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
  subtitle = "Profile, education and experience, a quick overview of my journey so far.",
}: ResumeSectionProps) {
  return (
    <section
      id="resume"
      className="
        
        py-20
        text-amber-400
        bg-linear-to-b from-amber-100 via-amber-100 via-75% to-purple-100
      "
    >
      <div
        className="w-[90%] max-w-275
        mx-auto"
      >
        <h2
          className="
          text-center
          text-amber-500
          text-3xl
          mx-0 mt-6 mb-1
        "
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-center text-base font-light text-amber-900 m-0 mb-12">
            {subtitle}
          </p>
        )}

        {/* ---------- Timeline: Education + Experience ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Columna izquierda: Profile + Education */}
          <div className="flex flex-col gap-10">
            {TIMELINE.filter(
              (g) => g.heading === "Profile" || g.heading === "Education",
            ).map((group) => (
              <TimelineColumn key={group.heading} group={group} />
            ))}
          </div>

          {/* Columna derecha: Experience */}
          <div>
            {TIMELINE.filter((g) => g.heading === "Experience").map((group) => (
              <TimelineColumn key={group.heading} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
