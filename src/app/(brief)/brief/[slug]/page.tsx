import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BriefForm from "@/components/brief/BriefForm";
import { briefs, getBrief } from "@/data/briefs";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return briefs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brief = getBrief(slug);
  if (!brief) return {};
  return {
    title: brief.title,
    description: "Brief interactivo para responder a tu ritmo.",
    // Los briefs son para quien recibe el link: que Google no los indexe.
    robots: { index: false, follow: false },
    openGraph: {
      title: brief.title,
      description: "Brief interactivo para responder a tu ritmo.",
      locale: "es_ES",
    },
    twitter: { card: "summary" },
  };
}

export default async function BriefPage({ params }: Props) {
  const { slug } = await params;
  const brief = getBrief(slug);
  if (!brief) notFound();
  return <BriefForm brief={brief} />;
}
