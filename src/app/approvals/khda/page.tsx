import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Shield, Users, Award } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KHDA Approved Training And Courses in Dubai | MAHA Gulf",
  description:
    "AL MAHA Gulf is a KHDA approved training And Courses in Dubai. We offer government-recognized training programs for professionals and organizations in UAE.",
};

const KHDAPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 mt-28">
            <Badge className="mb-6 px-6 py-3 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              KHDA Approved Training Provider
            </Badge>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              KHDA Approved{" "}
              <span className="text-primary mt-2">Training & Courses</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 text-pretty">
              MAHA Gulf is proud to be approved by KHDA (Knowledge and Human
              Development Authority) in Dubai. This approval demonstrates our
              commitment to providing high-quality, government-recognized
              training courses for individuals and businesses across UAE. maha gulf now a internoational institude hai
            </p>
          </div>
        </div>
      </section>

      {/* KHDA Details Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-xl border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-md">
                    <Image
                      src="/KHDA.png"
                      alt="KHDA Logo"
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    KHDA Approved
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Government Recognition
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>Government Recognized</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Quality Assured Training</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Professional Development</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                Why KHDA Approval Matters
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-pretty">
                With KHDA approval, our training certifications hold strong
                value and credibility in professional development. This
                government recognition ensures that our courses meet the highest
                educational standards in the UAE.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {[
                    "Government recognition and credibility",
                    "Quality assurance in training delivery",
                    "Professional development value",
                    "Compliance with UAE education standards",
                    "Enhanced career advancement opportunities",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our KHDA Certificate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Official recognition from the Knowledge and Human Development
              Authority
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center group">
              <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 border border-gray-100">
                <Image
                  src="/KHDA.png"
                  alt="KHDA Licensed & Approved Certificate"
                  width={300}
                  height={375}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 mt-6 font-medium text-center max-w-xs">
                Knowledge and Human Development Authority Official Approval
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KHDAPage;
