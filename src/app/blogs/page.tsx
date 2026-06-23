import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogs } from "@/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essential Guide to Blog Page : Boost Your SEO Today",
  description:
    "Optimize your blog page for better SEO with these essential tips. Improve keyword use, content layout, and SEO techniques with Maha Gulf",
};

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16 py-32">
        <section className="space-y-6 sm:space-y-8 text-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Our Latest Insights
              </h2>
              <p className="text-sm sm:text-base text-gray-800 max-w-xl">
                Explore our comprehensive range of professional training courses
                designed to elevate your career and business in Dubai, UAE.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4 sm:p-6">
                  <CardTitle className="mb-2 text-xl sm:text-2xl text-primary">
                    {blog.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-gray-800">
                    {blog.description.length > 200
                      ? `${blog.description.slice(0, 200)}...`
                      : blog.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0">
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/blogs/${blog.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
