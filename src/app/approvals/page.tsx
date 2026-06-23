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
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approvals – Get Certified with KHDA Approved Company in UAE	approvals",
  description:
    "Learn about businesses and training in UAE. Ensure compliance with certified services. Get expert guidance today!",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 mt-20">
            <Badge className="mb-6 px-6 py-3 text-lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              Officially Approved Training Provider
            </Badge>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Approved by{" "}
              <span className="text-primary mt-2">
                Knowledge and Human Development Authority{" "}
              </span>
              <span className="text-4xl font-semibold text-gray-700">
                (KHDA)
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Our institution is officially recognized and approved by the
              Knowledge and Human Development Authority, ensuring the highest
              standards of educational excellence and quality assurance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Official Approvals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Click on each approval to learn more about our certified training
              programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* KHDA Approval Card */}
            <Link href="/approvals/khda" className="group">
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-orange-50 to-orange-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 bg-white rounded-full shadow-md">
                    <Image
                      src="/KHDA.png"
                      alt="KHDA Logo"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    KHDA Approved
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Government Recognition in Dubai
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Approved by Knowledge and Human Development Authority for
                    high-quality, government-recognized training courses across
                    UAE.
                  </p>
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
                  <div className="mt-6 text-orange-600 font-medium group-hover:text-orange-700">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
            {/* IOSH Approval Card */}
            <Link href="/approvals/iosh" className="group">
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 bg-white rounded-full shadow-md">
                    <Image
                      src="/IOSH.png"
                      alt="IOSH Logo"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    IOSH Approved
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Managing Safely E-Learning
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Officially approved to deliver IOSH Managing Safely
                    E-Learning program for workplace safety management and risk
                    assessment training.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>For Managers & Supervisors</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Workplace Safety Compliance</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>Globally Recognized</span>
                    </div>
                  </div>
                  <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
            {/* hsi-approved Card */}
            <Link href="/approvals/hsi-approved" className="group">
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-orange-50 to-orange-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 bg-white rounded-full shadow-md">
                    <Image
                      src="/logos/5.jpg"
                      alt="hsi-approved"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    HSI Approved
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Emergency Care & Safety Training Provider
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Officially approved by Health & Safety Institute (HSI) to
                    deliver internationally recognized First Aid, CPR, AED, and
                    emergency response training programs that meet global safety
                    and workplace compliance standards.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>First Aid, CPR & AED Certification</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Workplace & Corporate Safety Training</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>Internationally Recognized Certification</span>
                    </div>
                  </div>
                  <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
            {/* hsi-authorized Card */}
            <Link href="/approvals/hsi-authorized" className="group">
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 bg-white rounded-full shadow-md">
                    <Image
                      src="/logos/6.jpg"
                      alt="hsi-authorized"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    HSI Authorized
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Certified Safety & Compliance Programs
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Authorized HSI training center delivering certified safety,
                    emergency response, and occupational health programs
                    tailored for industries and organizations across the UAE.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Certified HSI Training Partner</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>OSHA & International Compliance Programs</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>Industrial & Construction Safety Training</span>
                    </div>
                  </div>
                  <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
            {/* IPAF MEMBER Card */}
            <Link href="#" className="group">
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 bg-white rounded-full shadow-md">
                    <Image
                      src="/logos/7.jpeg"
                      alt="IPAF MEMBER"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    IPAF MEMBER
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    International Powered Access Federation (IPAF)
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Official member of the International Powered Access
                    Federation (IPAF), committed to promoting the safe and
                    effective use of Mobile Elevating Work Platforms (MEWPS) and
                    powered access equipment through professional training,
                    safety awareness, and industry best practices.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>
                        For Operators, Supervisors & Safety Professionals
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Powered Access Safety & Compliance</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span> Globally Recognized Safety Organization</span>
                    </div>
                  </div>
                  <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
                    Member ID: MEMB4897
                  </div>
                  <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* AT CIVIL DEFENSE APPROY Card */}
            <Link href="#" className="group">
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 bg-white rounded-full shadow-md">
                    <Image
                      src="/logos/8.jpeg"
                      alt="AT CIVIL DEFENSE APPROY"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    DUBAI CIVIL DEFENSE APPROVED
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Certificate of Fire & Life Safety Compliance
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Officially certified by Dubai Civil Defense (DCD) confirming
                    compliance with the preventive safety and fire protection
                    requirements in accordance with UAE Civil Defense
                    regulations.
                  </p>
                  <p className="text-gray-700 mb-6">
                    This certification verifies that the organization has
                    implemented the required fire safety systems, emergency
                    preparedness measure and preventive safety standards to
                    ensure th protection of people, property, and workplace
                    environments.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Fire & Life Safety Compliance</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Approved for Workplace Safety Requirements</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>Issued by Dubai Civil Defense - UAE</span>
                    </div>
                  </div>
                  <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
                    Certificate No: LCA0000431601-2025
                  </div>
                  <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Right — Certificate Image */}
          {/* <div className="relative group mt-8">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-orange-100/40 to-red-100/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200">
              <Image
                src="/certificate/certificate.jpg"
                alt="Dubai Civil Defence Safety Certificate – LCA0000431601-2025"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                quality={95}
              />

              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-green-200 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Verified & Active
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
