import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCourses = [
  {
    title: "We are awarded the Best Fire Safety Course on Coursetakers.ae",
    img: "/hs-10.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/fire-safety",
    slug: "we-are-awarded-the-best-fire-safety",
  },
  {
    title:
      "We are awarded the Best Confined Space Entry, Rescue and Safety Course on Coursetakers.ae",
    img: "/hs-1.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/occupational-health-and-safety-ohsas/confined-space-entry",
    slug: "we-are-awarded-the-best-confined-space-entry-rescue-and-safety",
  },
  {
    title: "We are awarded the Best Risk Assessment Course on Coursetakers.ae",
    img: "/hs-1.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/occupational-health-and-safety-ohsas/risk-assessment",
    slug: "we-are-awarded-the-best-risk-assessment",
  },
  {
    title:
      "We are awarded the Best SIRA (Security Industry Regulatory Agency) Course on Coursetakers.ae",
    img: "/hs-11.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/sira-security-industry-regulatory-agency",
    slug: "we-are-awarded-the-best-sira-security-industry-regulatory-agency",
  },
  {
    title:
      "We are awarded the Best Defensive Driving Course on Coursetakers.ae",
    img: "/hs-19.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/defensive-driving",
    slug: "we-are-awarded-the-best-defensive-driving",
  },
  {
    title:
      "We are awarded the Best Crane Operator & Safety Course on Coursetakers.ae",
    img: "/hs-12.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/occupational-health-and-safety-ohsas/crane-operator-safety",
    slug: "we-are-awarded-the-best-crane-operator-and-safety",
  },
  {
    title: "We are awarded the Best Fire Marshal Course on Coursetakers.ae",
    img: "/hs-10.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/fire-safety/fire-marshal",
    slug: "we-are-awarded-the-best-fire-marshal",
  },
  {
    title:
      "We are awarded the Best Working At Height Course on Coursetakers.ae",
    img: "/hs-5.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/occupational-health-and-safety-ohsas/working-at-height",
    slug: "we-are-awarded-the-best-working-at-height",
  },
  {
    title:
      "We are awarded the Best Power Tools Safety Course on Coursetakers.ae",
    img: "/hs-6.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/occupational-health-and-safety-ohsas/power-tools-safety",
    slug: "we-are-awarded-the-best-power-tools-safety",
  },
  {
    title: "We are awarded the Best IOSH Course on Coursetakers.ae",
    img: "/hs-21.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/iosh",
    slug: "we-are-awarded-the-best-iosh",
  },
  {
    title:
      "We are awarded the Best Lifting Operation & Safety Course on Coursetakers.ae",
    img: "/hs-34.jpg",
    link: "https://www.coursetakers.ae/search/courses-in/professional/health-and-safety/occupational-health-and-safety-ohsas/lifting",
    slug: "we-are-awarded-the-best-lifting-operation-and-safety",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ">
      <section className="py-16 pt-48 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Award-Winning Courses
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our featured courses recognized as the best on
            Coursetakers.ae
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FeatureCourses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={course.img || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="w-full transition-colors">
                    <Link
                      target="_blank"
                      href={`/featured-courses/${course.slug}`}
                    >
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
