"use client";

import { useEffect, useMemo, useState } from "react";
import type { Brief } from "@/data/briefs/types";

type State = { picks: Record<string, string[]>; notes: Record<string, string> };
const EMPTY: State = { picks: {}, notes: {} };

const card = "rounded-3xl bg-sky-50 shadow-(--shadow)";
const field =
  "w-full resize-y rounded-xl bg-sky-50 px-3 py-2 text-sm text-slate-700 shadow-(--down-shadow) outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-sky-400";
const action =
  "rounded-full bg-sky-50 px-7 py-3 font-semibold text-sky-600 shadow-(--little-shadow) transition-[box-shadow,transform] duration-200 hover:shadow-(--down-shadow) focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none";

export default function BriefForm({ brief }: { brief: Brief }) {
  const storageKey = `brief:${brief.slug}`;
  const [s, setS] = useState<State>(EMPTY);
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setS(JSON.parse(raw));
    } catch (e) {
      console.warn("No se pudo leer el avance guardado", e);
    }
    setLoaded(true);
  }, [storageKey]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(s));
      setSaveError(false);
    } catch (e) {
      console.warn("No se pudo guardar el avance", e);
      setSaveError(true);
    }
  }, [s, loaded, storageKey]);

  const allQ = brief.sections.flatMap((x) => x.questions);
  const answered = allQ.filter(
    (q) => (s.picks[q.id]?.length ?? 0) > 0 || s.notes[q.id]?.trim(),
  ).length;
  const pct = Math.round((answered / allQ.length) * 100);

  const toggle = (id: string, opt: string) =>
    setS((p) => {
      const cur = p.picks[id] ?? [];
      return {
        ...p,
        picks: {
          ...p.picks,
          [id]: cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt],
        },
      };
    });
  const note = (id: string, v: string) =>
    setS((p) => ({ ...p, notes: { ...p.notes, [id]: v } }));

  const summary = useMemo(
    () =>
      `${brief.title}\n\n` +
      brief.sections
        .map((sec, i) => {
          const extra = s.notes[`sec${i + 1}`]?.trim();
          return (
            `${i + 1}. ${sec.title}\n` +
            sec.questions
              .map((q) => {
                const n = s.notes[q.id]?.trim();
                return `- ${q.q}\n  ${(s.picks[q.id] ?? []).join(", ") || "—"}${n ? `\n  Notas: ${n}` : ""}`;
              })
              .join("\n") +
            (extra ? `\n- Extra: ${extra}` : "")
          );
        })
        .join("\n\n"),
    [s, brief],
  );

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(summary);
      ok = true;
    } catch {
      // Plan B para navegadores que bloquean el portapapeles (ej. el de WhatsApp)
      try {
        const ta = document.createElement("textarea");
        ta.value = summary;
        ta.setAttribute("readonly", "");
        ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setCopyError(!ok);
    setCopied(ok);
    if (ok) setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 bg-sky-50/90 shadow backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-3">
          <span className="text-sm font-medium text-slate-500">{brief.title}</span>
          <div
            role="progressbar"
            aria-label="Avance del brief"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2.5 flex-1 overflow-hidden rounded-full bg-sky-50 shadow-(--down-shadow)"
          >
            <div
              className="h-full rounded-full bg-sky-400 transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm font-semibold tabular-nums text-sky-600">{pct}%</span>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-10 pt-28 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
          {brief.eyebrow}
        </p>
        <h1 className="mt-4 text-[2.2rem] font-normal leading-tight text-slate-700 md:text-5xl">
          {brief.heading}
          {brief.headingAccent && (
            <>
              {" "}
              <span className="text-sky-500">{brief.headingAccent}</span>
            </>
          )}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-light text-slate-500">{brief.intro}</p>
      </section>

      <div className="mx-auto max-w-3xl space-y-12 px-6 pb-24">
        {saveError && (
          <p role="alert" className="rounded-2xl bg-sky-50 p-4 text-sm text-red-600 shadow-(--shadow)">
            No se puede guardar el avance en este navegador. Si cierras la página se pierden las
            respuestas: cópialas antes de salir.
          </p>
        )}

        {brief.sections.map((sec, i) => (
          <section key={sec.title} className={`${card} p-6 md:p-10`}>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-50 text-xl font-semibold text-sky-500 shadow-(--little-shadow)">
                {i + 1}
              </span>
              <h2 className="text-2xl font-normal text-slate-700 md:text-3xl">{sec.title}</h2>
            </div>

            <div className="mt-8 space-y-10">
              {sec.questions.map((q) => (
                <div key={q.id}>
                  <h3 className="text-lg font-medium text-slate-700">{q.q}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {q.options.map((o) => {
                      const on = s.picks[q.id]?.includes(o);
                      return (
                        <button
                          key={o}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggle(q.id, o)}
                          className={`rounded-full bg-sky-50 px-4 py-2 text-sm transition-[box-shadow,color] duration-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none ${
                            on
                              ? "font-semibold text-sky-600 shadow-(--down-shadow)"
                              : "font-medium text-slate-600 shadow-(--little-shadow) hover:text-sky-600"
                          }`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                  <textarea
                    value={s.notes[q.id] ?? ""}
                    onChange={(e) => note(q.id, e.target.value)}
                    rows={2}
                    aria-label={`Respuesta libre: ${q.q}`}
                    placeholder="Espacio para respuesta libre…"
                    className={`mt-4 ${field}`}
                  />
                </div>
              ))}

              <div className="rounded-2xl bg-sky-100 p-5">
                <p className="text-sm font-medium text-slate-600">📌 {sec.note}</p>
                <textarea
                  value={s.notes[`sec${i + 1}`] ?? ""}
                  onChange={(e) => note(`sec${i + 1}`, e.target.value)}
                  rows={3}
                  aria-label={`Links y comentarios: ${sec.title}`}
                  placeholder="Links, listas, comentarios…"
                  className={`mt-3 ${field}`}
                />
              </div>
            </div>
          </section>
        ))}

        <section className={`${card} p-8 text-center md:p-12`}>
          <h2 className="text-3xl font-normal text-slate-700">¿Ya está completo?</h2>
          <p className="mx-auto mt-3 max-w-md font-light text-slate-500">
            Las respuestas se pueden copiar y enviar para revisarlas y avanzar con el proyecto.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={copy} className={action}>
              {copied ? "¡Copiado!" : "Copiar las respuestas"}
            </button>
            <a
              href={`mailto:?subject=${encodeURIComponent(brief.title)}&body=${encodeURIComponent(summary)}`}
              className={action}
            >
              Enviar por email
            </a>
            <button
              type="button"
              onClick={() => confirm("¿Borrar todas las respuestas?") && setS(EMPTY)}
              className="rounded-full px-6 py-3 text-slate-500 transition-colors hover:text-red-600 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
            >
              Empezar de nuevo
            </button>
          </div>
          {copyError && (
            <div role="alert" className="mt-8 text-left">
              <p className="text-sm font-medium text-red-600">
                No se pudo copiar automáticamente. Mantén presionado el texto de abajo,
                selecciónalo todo y cópialo a mano.
              </p>
              <textarea
                readOnly
                value={summary}
                rows={10}
                onFocus={(e) => e.currentTarget.select()}
                className={`mt-3 ${field}`}
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
}
