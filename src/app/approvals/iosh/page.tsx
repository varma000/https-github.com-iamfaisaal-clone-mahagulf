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
  title: "IOSH Managing Safely E-Learning Course in Dubai, UAE | MAHA Gulf",
  description:
    "MAHA Gulf is approved for IOSH Managing Safely E-Learning Course in Dubai, UAE. Learn workplace safety, risk management, and compliance with our certified courses.",
};

const IOSHPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 mt-28">
            <Badge className="mb-6 px-6 py-3 text-lg">
              <Award className="w-5 h-5 mr-2" />
              IOSH Approved Training Provider
            </Badge>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              IOSH Managing Safely{" "}
              <span className="text-primary block mt-2">E-Learning Course</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 text-pretty">
              Maha Gulf is an internationally recognized, IOSH-approved training provider delivering the IOSH Managing Safely E-Learning program. 
              This globally respected qualification equips managers and supervisors with the essential health and safety knowledge and skills needed to manage teams effectively — available entirely online, at your own pace, from anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* IOSH Details Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                Comprehensive Safety Management Training
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-pretty">
                Our approval ensures quality training that meets international
                standards. Professionals can enhance their skills in risk
                assessment, accident prevention, and workplace safety compliance
                through our flexible online learning platform. 
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Improves workplace safety knowledge",
                  "Builds confidence in managing risks",
                  "Helps reduce accidents and incidents",
                  "Ensures legal compliance with safety laws",
                  "Boosts productivity through safer practices",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-xl border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-md">
                    <Image
                      src="/dublicate iosh logo.png"
                      alt="IOSH Logo"
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    IOSH Managing Safely
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    E-Learning Program
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>For Managers & Supervisors</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>Risk Assessment & Prevention</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Workplace Safety Compliance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our IOSH Certificate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Official recognition from the Institution of Occupational Safety
              and Health
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center group">
              <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 border border-gray-100">
                <Image
                  src="/IOSH.png"
                  alt="IOSH Approved Training Provider Certificate"
                  width={300}
                  height={375}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 mt-6 font-medium text-center max-w-xs">
                Institution of Occupational Safety and Health Approved Provider
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IOSHPage;
