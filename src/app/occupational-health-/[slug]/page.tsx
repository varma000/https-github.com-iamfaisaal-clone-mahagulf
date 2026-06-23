import HealthSafety from "../components/health-safety";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { healthSafetyData } from "@/constants";

export async function generateStaticParams() {
  return Object.keys(healthSafetyData).map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const courseData = healthSafetyData[slug as keyof typeof healthSafetyData];

  if (!courseData) {
    return {
      title: "Course Not Found | MAHA Health & Safety Training",
      description:
        "The requested health and safety training course could not be found.",
    };
  }

  return {
    title: courseData.title,
    description: courseData.description,
    keywords: `${slug.replace(
      /-/g,
      " "
    )}, health safety training UAE, MAHA Gulf, workplace safety, occupational health`,
    openGraph: {
      title: courseData.title,
      description: courseData.description,
      type: "website",
      siteName: "MAHA Health & Safety Training",
    },
    twitter: {
      card: "summary_large_image",
      title: courseData.title,
      description: courseData.description,
    },
    alternates: {
      canonical: `https://www.mahagulf.com/occupational-health-/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const courseData = healthSafetyData[slug as keyof typeof healthSafetyData];

  if (!courseData) {
    notFound();
  }

  return (
    <>
      <HealthSafety slug={slug} />
    </>
  );
}
