import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Shield, Users, Award, Target } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSI Authorized Safety Training Center in Dubai, UAE | MAHA Gulf",
  description:
    "MAHA Gulf is an HSI Authorized Training Center in Dubai, UAE providing certified safety, compliance, and occupational health training programs for industries and corporate sectors.",
};

const HSIAuthorizedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 mt-28">
            <Badge className="mb-6 px-6 py-3 text-lg">
              <Award className="w-5 h-5 mr-2" />
              HSI Authorized Training Center
            </Badge>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              HSI Authorized{" "}
              <span className="text-primary block mt-2">
                Safety & Compliance Programs
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              As an HSI Authorized training center, MAHA Gulf delivers certified
              occupational health, safety, and compliance programs tailored for
              construction, oil & gas, manufacturing, and corporate sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Industry-Focused Safety Certification
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our authorized status ensures training programs that align with
                international standards including OSHA-based safety practices,
                risk assessment strategies, and compliance management systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Certified HSI Training Partner",
                  "OSHA-Aligned Safety Programs",
                  "Risk Assessment & Hazard Control",
                  "Industrial & Construction Safety",
                  "Corporate Compliance Solutions",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-xl border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-md">
                    <Image
                      src="/logos/6.jpg"
                      alt="HSI Authorized Logo"
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    HSI Authorized Center
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Safety & Compliance Certification
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Industry Professionals</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>Risk & Compliance Focused</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>International Standards</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSIAuthorizedPage;
