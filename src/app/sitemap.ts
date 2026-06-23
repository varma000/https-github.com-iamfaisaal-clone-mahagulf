import type { MetadataRoute } from "next";
import {
  healthAndSafety,
  trainingCourses,
  blogs,
  educationalCourses,
} from "@/constants";

const baseUrl = "https://www.mahagulf.com";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/key-staff`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/approvals`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/approvals/iosh`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/approvals/khda`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // Dynamic health and safety pages
  const healthSafetyPages: MetadataRoute.Sitemap = healthAndSafety.map(
    (item) => ({
      url: `${baseUrl}${item.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }),
  );

  // Dynamic training courses pages
  const trainingCoursePages: MetadataRoute.Sitemap = trainingCourses.map(
    (item) => ({
      url: `${baseUrl}${item.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }),
  );

  // Dynamic training courses pages
  const educationnalCoursesPages: MetadataRoute.Sitemap =
    educationalCourses.map((item) => ({
      url: `${baseUrl}/educational-courses/${item.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }));

  // Dynamic blog pages
  const blogPages: MetadataRoute.Sitemap = blogs.map((item) => ({
    url: `${baseUrl}/blogs/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...healthSafetyPages,
    ...trainingCoursePages,
    ...educationnalCoursesPages,
    ...blogPages,
  ];
}
