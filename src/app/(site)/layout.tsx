import Menu from "@/components/Sidebar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      <main className="md:ml-16 w-full flex flex-col">{children}</main>
    </>
  );
}
