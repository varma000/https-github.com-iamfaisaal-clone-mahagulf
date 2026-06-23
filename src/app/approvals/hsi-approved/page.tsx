import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Shield, Users, Award, HeartPulse } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSI First Aid, CPR & AED Training in Dubai, UAE | MAHA Gulf",
  description:
    "MAHA Gulf is HSI Approved to deliver First Aid, CPR, and AED certification courses in Dubai, UAE. Get internationally recognized emergency response and workplace safety training.",
};

const HSIApprovedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 mt-28">
            <Badge className="mb-6 px-6 py-3 text-lg">
              <Award className="w-5 h-5 mr-2" />
              HSI Approved Training Provider
            </Badge>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              HSI First Aid &{" "}
              <span className="text-primary block mt-2">
                CPR / AED Certification
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              MAHA Gulf is officially approved by HSI (Health & Safety
              Institute) to deliver internationally recognized First Aid, CPR,
              and AED training programs designed for workplaces, industries, and
              corporate teams across the UAE.
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
                Professional Emergency Response Training
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our HSI approval ensures globally recognized emergency care
                training. Participants gain life-saving skills, workplace
                readiness, and compliance with international safety standards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "First Aid & CPR Certification",
                  "Automated External Defibrillator (AED) Training",
                  "Workplace Emergency Preparedness",
                  "Globally Recognized HSI Certificate",
                  "Corporate & Industrial Safety Programs",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-xl border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-md">
                    <Image
                      src="/logos/5.jpg"
                      alt="HSI Approved Logo"
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    HSI Approved Provider
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    First Aid & Emergency Care Training
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <HeartPulse className="w-4 h-4" />
                      <span>Life-Saving Skills</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Workplace Compliance</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Corporate Training</span>
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

export default HSIApprovedPage;
