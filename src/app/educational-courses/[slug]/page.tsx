import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { educationalCourses } from "@/constants";
import EducationComp from "../components/education";

export async function generateStaticParams() {
  return educationalCourses.map((course) => ({
    slug: course.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const courseData = educationalCourses.find(
    (course) => course.slug === params.slug,
  );

  if (!courseData) {
    return {
      title: "Course Not Found | MAHA Health & Safety Training",
      description:
        "The requested health and safety training course could not be found.",
    };
  }

  return {
    title: courseData.metaTitle,
    description: courseData.metaDescription,
    keywords: `${params.slug.replace(
      /-/g,
      " ",
    )}, health safety training UAE, MAHA Gulf, workplace safety, occupational health`,
    openGraph: {
      title: courseData.metaTitle,
      description: courseData.metaDescription,
      type: "website",
      siteName: "MAHA Health & Safety Training",
    },
    twitter: {
      card: "summary_large_image",
      title: courseData.metaTitle,
      description: courseData.metaDescription,
    },
    alternates: {
      canonical: `https://www.mahagulf.com/educational-courses/${params.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const courseData = educationalCourses.find(
    (course) => course.slug === params.slug,
  );

  if (!courseData) {
    notFound();
  }

  return <EducationComp course={courseData} />;
}
