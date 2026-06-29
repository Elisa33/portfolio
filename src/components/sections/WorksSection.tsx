"use client";

import { useEffect, useState, useCallback } from "react";
import {
  WORKS,
  //ICONS,
  type WorkProject,
  // type IconType,
} from "../../data/works-data";
import { FaGithub } from "react-icons/fa";
import { HiEye } from "react-icons/hi2";


interface WorksProps {
  title?: string;
  subtitle?: string;
  id?: string;
}

/* ---------- Helpers ---------- */


// Efecto hover de la imagen según el tipo de proyecto
const IMG_HOVER: Record<WorkProject["hover"], string> = {
  translate:
    "group-hover:-translate-y-[61%] transition-transform duration-[4s] ease-out",
  scale: "group-hover:scale-[1.3] transition-transform duration-[2s] ease-out",
};

// Contenedor de la imagen según variante
const CONTAIN: Record<WorkProject["variant"], string> = {
  web: "h-[240px] sm:h-[300px] xl:h-[320px]",
  brand: "aspect-[4/3] flex items-center justify-center",
  graphic: "aspect-[4/3] flex items-center justify-center",
};

/* ---------- Component ---------- */

export default function Works({
  title = "Works",
  subtitle = "A selection of recent projects: code, layout, branding & graphic design.",
  id = "works",
}: WorksProps) {
  const [active, setActive] = useState<WorkProject | null>(null);
  const closeModal = useCallback(() => setActive(null), []);

  // Cerrar con Escape + bloquear scroll del body
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, closeModal]);

  return (
    <section
      id="works"
      className="w-full py-8 lg:py-20 text-slate-700 bg-linear-to-l from-sky-100 to-sky-200  "
    >
      <div className="w-[90%] xl:max-w-5xl mx-auto">
        <h2 className="text-center text-(--works-main) text-3xl font-normal mt-6 mb-1">
          Works
        </h2>
        {subtitle && (
          <p className="text-center text-sky-800 font-light opacity-75 mt-0 mb-12">
            {subtitle}
          </p>
        )}

        {WORKS.map((group) => (
          <div key={group.group}>
            <h3 className="text-center text-(--works-main) text-xl mt-12 mb-6">
              {group.group}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
              {group.items.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p)}
                  aria-label={`Ver detalles de ${p.client}`}
                  className="group works-shadow flex flex-col rounded-[10px] bg-(--works-bg) p-3.5 relative overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-0.75 focus-visible:outline-2 focus-visible:outline-(--works-main) focus-visible:outline-offset-2 border-none text-left"
                >
                  <div
                    className={`overflow-hidden rounded-md ${CONTAIN[p.variant]}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/${p.img}`}
                      alt={p.client}
                      loading="lazy"
                      className={`block w-full ${IMG_HOVER[p.hover]}`}
                    />
                  </div>

                  <div className="mt-4 mb-1.5 mx-0.75 flex items-center justify-between gap-2">
                    <span className="text-(--works-main) text-[1.05rem] font-medium uppercase tracking-[0.02em]">
                      {p.client}
                    </span>
                    <div className="flex justify-end items-center gap-2">
                      {p.icons.map((IconComponent, index) => (
                        <IconComponent
                          key={index}
                          className="w-5 h-5 text-(--works-main) opacity-80"
                        />
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* ---------- Modal ---------- */}
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          aria-hidden={!active}
          className={`fixed inset-0 flex items-center justify-center p-4 z-1000 bg-[rgba(1,34,32,0.8)] transition-[opacity,visibility] duration-200 ${
            active ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {active && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="works-modal-title"
              className="bg-sky-200 text-(--works-text) shadow-[0_8px_32px_rgba(0,0,0,0.35)] rounded-[10px] p-6 w-full max-w-140 max-h-[90vh] overflow-y-auto relative"
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Cerrar"
                className="absolute top-3 right-4 text-[1.2rem] leading-none text-[#bbb] font-medium cursor-pointer transition-colors duration-200 hover:text-sky-600 bg-transparent border-none"
              >
                ✕
              </button>

              <h3
                id="works-modal-title"
                className="text-(--works-main) text-[1.4rem] font-medium mt-0 mb-4"
              >
                {active.client}
              </h3>

              <div className="mb-[0.85rem]">
                <h4 className="text-(--works-main) text-[0.85rem] font-medium uppercase tracking-[0.04em] mt-0 mb-1">
                  Rol
                </h4>
                <p className="mt-0 text-[0.95rem] leading-normal">
                  {active.rol}
                </p>
              </div>
              <div className="mb-[0.85rem]">
                <h4 className="text-(--works-main) text-[0.85rem] font-medium uppercase tracking-[0.04em] mt-0 mb-1">
                  Techs
                </h4>
                <p className="mt-0 text-[0.95rem] leading-normal">
                  {active.techs}
                </p>
              </div>
              <div className="mb-[0.85rem]">
                <h4 className="text-(--works-main) text-[0.85rem] font-medium uppercase tracking-[0.04em] mt-0 mb-1">
                  Mode
                </h4>
                <p className="mt-0 text-[0.95rem] leading-normal">
                  {active.mode}
                </p>
              </div>
              <div className="mb-[0.85rem]">
                <h4 className="text-(--works-main) text-[0.85rem] font-medium uppercase tracking-[0.04em] mt-0 mb-1">
                  Description
                </h4>
                <p className="mt-0 text-[0.95rem] leading-normal">
                  {active.description}
                </p>
              </div>

              {(active.site || active.code) && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {active.site && (
                    <a
                      href={active.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="works-btn inline-flex items-center gap-2 font-medium text-(--works-main) bg-(--works-bg) py-[0.7rem] px-[1.4rem] rounded-lg no-underline text-[0.95rem]"
                    >
                      <HiEye />
                      Site
                    </a>
                  )}
                  {active.code && (
                    <a
                      href={active.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="works-btn inline-flex items-center gap-2 font-medium text-(--works-main) bg-(--works-bg) py-[0.7rem] px-[1.4rem] rounded-lg no-underline text-[0.95rem]"
                    >
                      Code
                      <FaGithub />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
