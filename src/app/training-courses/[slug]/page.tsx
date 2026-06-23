import TrainingCourses from "../components/training-courses";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const trainingCoursesData = {
  "ms-office-basic": {
    title: "Learn MS Office, Word, Excel, PowerPoint course in UAE",
    description:
      "Master MS Office with our comprehensive course in UAE. Learn Word, Excel, and PowerPoint skills to boost your productivity and career",
  },
  "graphics-designing-basics": {
    title: "Graphic Designing Basic Course in UAE | MAHA Expertise",
    description:
      "Graphic Designing course in UAE. MAHA offers mastery of essential skills. Learn the fundamentals to produce eye-catching designs and graphics.",
  },
  tally: {
    title: "Master Tally Accounting Software Course in UAE | MAHA GULF",
    description:
      "Tally Basic in the UAE with MAHA GULF. Improve your accounting skills with our detailed Tally training & course in UAE. Now!",
  },
  "wordPress-website-designing": {
    title: "Master WordPress Website Design course in UAE",
    description:
      "Discover the best WordPress website design course in the UAE. Gain expertise and elevate your skills. Perfect for all skill levels! with MAHA GULF",
  },
  "vedic-maths": {
    title: "Vedic Maths course in UAE | MAHA Gulf",
    description:
      "Discover ancient Vedic techniques for mental calculations and problem-solving. Join now to enhance your math skills effortlessly. Course in UAE",
  },
  seo: {
    title: "SEO course in UAE | Enhance Online Visibility with MAHA",
    description:
      "Improve your online presence with our SEO course in UAE by MAHA GULF. Discover advanced ranking techniques to enhance your website traffic.",
  },
};

export async function generateStaticParams() {
  return Object.keys(trainingCoursesData).map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const courseData =
    trainingCoursesData[slug as keyof typeof trainingCoursesData];

  if (!courseData) {
    return {
      title: "Course Not Found | MAHA Training",
      description: "The requested training course could not be found.",
    };
  }

  return {
    title: courseData.title,
    description: courseData.description,
    keywords: `${slug.replace(
      /-/g,
      " "
    )}, training course UAE, MAHA Gulf, professional training`,
    openGraph: {
      title: courseData.title,
      description: courseData.description,
      type: "website",
      siteName: "MAHA Training Courses",
    },
    twitter: {
      card: "summary_large_image",
      title: courseData.title,
      description: courseData.description,
    },
    alternates: {
      canonical: `https://www.mahagulf.com/training-courses/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const courseData =
    trainingCoursesData[slug as keyof typeof trainingCoursesData];

  if (!courseData) {
    notFound();
  }

  return (
    <>
      <TrainingCourses slug={slug} />
    </>
  );
}
