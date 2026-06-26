import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Menu from "../components/Sidebar";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elisa Lange — Frontend Developer & Visual Communicator",
  description:
    "Portfolio of Elisa Lange, frontend developer and graphic designer based in Switzerland. React, Next.js, branding and editorial design.",
  metadataBase: new URL("https://portfolio-elysas-projects.vercel.app"),
  openGraph: {
    title: "Elisa Lange — Frontend Developer & Visual Communicator",
    description: "React, Next.js, branding and editorial design.",
    type: "website",
    locale: "en_US",
    images: ["/img/profile.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="antialiased flex flex-col md:flex-row ">
        <Menu />
        <main className="md:ml-16 w-full flex flex-col">{children}</main>
      </body>
    </html>
  );
}
