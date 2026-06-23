/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Phone, Globe } from "lucide-react";
import { blogs } from "@/constants";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Title and Meta */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {blog.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {blog.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline">Professional Development</Badge>
            <Badge variant="outline">UAE Training</Badge>
            <Badge variant="outline">Certification</Badge>
          </div>
        </div>

        {blog.content.QandA &&
          blog.content.QandA.map((itm, idx) => (
            <section key={idx} className="mb-8">
              <h2 className="text-xl text-foreground leading-relaxed font-semibold mb-4">
                {itm.h1}
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                {itm.desc}
              </p>
              {itm.q && (
                <p className="text-lg text-foreground leading-relaxed">
                  Q: {itm.q}
                </p>
              )}
              {itm.a && (
                <p className="text-lg text-foreground leading-relaxed">
                  A: {itm.a}
                </p>
              )}
            </section>
          ))}

        {blog.content.desc1 && (
          <section className="mb-8">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {blog.content.desc1}
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {blog.content.desc2}
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {blog.content.desc3}
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {blog.content.desc4}
            </p>
          </section>
        )}

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-4">
            {blog.content.introduction ? blog.content.introduction : ""}
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            {blog.content.importance ? blog.content.importance : ""}
          </p>
        </section>

        {/* Applications/Key Trends */}
        {blog.content.applications && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What Will You Learn?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blog.content.applications.map((item: string, idx: number) => (
                <Card key={idx} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-foreground">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Benefits */}
        {blog.content.benefits && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Key Benefits
            </h2>
            <div className="space-y-3">
              {blog.content.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Best Practices / Course Modules */}
        {blog.content.bestPractices && (
          <section className="mb-12 bg-secondary/5 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Course Modules
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blog.content.bestPractices.map(
                (practice: string, idx: number) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-foreground">{practice}</span>
                  </div>
                ),
              )}
            </div>
          </section>
        )}

        {/* Case Studies */}
        {blog.content.caseStudies && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blog.content.caseStudies.map((study, idx) => (
                <Card
                  key={idx}
                  className="border-border hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <h3 className="font-semibold text-primary">
                      {study.industry}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">
                      {study.example}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Future Outlook */}
        {blog.content.futureOutlook && (
          <section className="mb-12 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-xl font-bold text-foreground mb-3">
              Future Outlook
            </h2>
            <p className="text-foreground leading-relaxed">
              {blog.content.futureOutlook}
            </p>
          </section>
        )}

        {/* Conclusion */}
        {blog.content.conclusion && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {blog.content.conclusion}
            </p>
          </section>
        )}

        {/* Contact CTA */}
        {blog.contactInfo && (
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-foreground mb-6 leading-relaxed">
              Contact MAHA Gulf today to enroll in this course and transform
              your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={`tel:${blog.contactInfo.phone}`}
                className="flex items-center gap-3 text-primary hover:text-primary/80 font-semibold"
              >
                <Phone className="w-5 h-5" />
                {blog.contactInfo.phone}
              </a>
              <a
                href={`https://${blog.contactInfo.website}`}
                className="flex items-center gap-3 text-primary hover:text-primary/80 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5" />
                {blog.contactInfo.website}
              </a>
            </div>
          </div>
        )}
      </article>

      {/* Related Courses */}
      <section className="bg-secondary/5 border-t border-border mt-16 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Explore More Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs
              .filter((b) => b.slug !== blog.slug)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blogs/${relatedBlog.slug}`}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 cursor-pointer overflow-hidden">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={relatedBlog.image || "/placeholder.svg"}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <h3 className="font-bold text-foreground line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedBlog.description}
                      </p>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
