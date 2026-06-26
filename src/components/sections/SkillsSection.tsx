import { LuPencil, LuStar, LuCodeXml } from "react-icons/lu";
import {
  TIMELINE,
  SKILLS,
  LANGUAGES,
  type TimelineGroup,
  type SkillGroup,
  type LanguageItem,
} from "../../data/resume-data";

/* ---------- Skill chip (sin porcentaje) ---------- */

function SkillChip({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="
        inline-flex items-center gap-2
        px-[0.95rem] py-2
        rounded-full
        text-[0.88rem] font-medium
        text-emerald-500
        bg-emerald-200/75
        transition-[box-shadow,transform] duration-200 ease-out
       
        cursor-default select-none
      "
    >
      <span
        className="w-2 h-2 rounded-full shrink-0 bg-emerald-500"
        aria-hidden
      />
      {name}
    </span>
  );
}

/* * ---------- Star rating (decimal soportado, p.ej. 4.5) ---------- */

function StarRating({ value }: { value: number }) {
  return (
    <div className="inline-flex gap-0.5 text-emerald-400">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block w-4 h-4" aria-hidden>
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex flex-col gap-14 items-center py-8 lg:py-20 bg-linear-to-b from-emerald-100 via-emerald-100 via-75% to-lime-100 justify-center"
    >
      <h2 className="text-emerald-500 text-3xl">Skills</h2>
      <div
        className="w-[90%] max-w-275
        mx-auto"
      >
        {/* ---------- Skills chips ------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {SKILLS.map((group: SkillGroup) => (
            <div key={group.heading}>
              <h3
                className="
                text-emerald-500
                text-xl
                m-0 mb-6
              "
              >
                {group.heading}
                {group.accent && (
                  <span className="text-emerald-500">{group.accent}</span>
                )}
              </h3>
              <div
                className="
                flex flex-wrap gap-[0.6rem]
                p-6
                rounded-xl
                shadow-(--down-shadow)
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
            text-emerald-500
            text-xl
            m-0 mb-6
          "
          >
            Language
            <span className="text-emerald-400"> Skills</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {LANGUAGES.map((lang: LanguageItem) => (
              <div
                key={lang.name}
                className="
                flex items-center justify-between
                px-4 py-[0.85rem]
                rounded-lg
                shadow-(--down-shadow)
                transition-[box-shadow,transform] duration-200 ease-out
                hover:shadow-(--shadow) active:translate-y-px
              "
              >
                <p className="text-sm uppercase font-medium text-emerald-500 m-0">
                  {lang.name}
                  <span
                    className="
                    text-emerald-500
                    text-xs font-normal
                    ml-1
                     tracking-[0.04em]
                     lowercase
                  "
                  >
                    {lang.level}
                  </span>
                </p>
                <StarRating value={lang.stars} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
