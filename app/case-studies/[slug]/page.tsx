import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies, getCaseStudy } from '@/data/case-studies';
import CaseStudyView from '@/components/case-study/CaseStudyView';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) return {};
  return {
    title: `${data.hero.title} | معرض أعمال Laith Kallash`,
    description: data.hero.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCaseStudy(slug);

  if (!data) notFound();

  return <CaseStudyView data={data} />;
}
