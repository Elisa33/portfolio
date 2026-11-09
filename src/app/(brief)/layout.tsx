export default function BriefLayout({ children }: { children: React.ReactNode }) {
  // Los briefs están en español; el sitio principal está en inglés.
  return (
    <main lang="es" className="w-full min-h-screen bg-linear-to-br from-sky-200 to-sky-100 text-slate-600">
      {children}
    </main>
  );
}
