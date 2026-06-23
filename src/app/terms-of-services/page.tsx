import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Terms and Conditions | AL MAHA GULF Consultants FZC",
  description:
    "Legal terms and conditions for using AL MAHA GULF Consultants FZC services.",
};

export default function TermsAndConditions() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tableOfContents = [
    "OUR SERVICES",
    "INTELLECTUAL PROPERTY RIGHTS",
    "USER REPRESENTATIONS",
    "USER REGISTRATION",
    "PRODUCTS",
    "PURCHASES AND PAYMENT",
    "REFUNDS POLICY",
    "PROHIBITED ACTIVITIES",
    "USER GENERATED CONTRIBUTIONS",
    "CONTRIBUTION LICENSE",
    "SOCIAL MEDIA",
    "THIRD-PARTY WEBSITES AND CONTENT",
    "SERVICES MANAGEMENT",
    "PRIVACY POLICY",
    "TERM AND TERMINATION",
    "MODIFICATIONS AND INTERRUPTIONS",
    "GOVERNING LAW",
    "DISPUTE RESOLUTION",
    "CORRECTIONS",
    "DISCLAIMER",
    "LIMITATIONS OF LIABILITY",
    "INDEMNIFICATION",
    "USER DATA",
    "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
    "MISCELLANEOUS",
    "CONTACT US",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms and Conditions
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="text-sm">
              Last updated: {lastUpdated}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS TRAINING L.L.C
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#section-${index + 1}`}
                        className="block text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded transition-colors"
                      >
                        {index + 1}. {item}
                      </a>
                    ))}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">
                  Agreement to Our Legal Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-slate max-w-none">
                  {/* Introduction */}
                  <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-slate-700 leading-relaxed">
                      We are{" "}
                      <strong>
                        AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS TRAINING
                        L.L.C
                      </strong>{" "}
                      (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
                      &quot;our&quot;), a company registered in the Dubai,
                      United Arab Emirates. Our VAT number is 104613103100003.
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-4">
                      We operate the website{" "}
                      <a
                        href="https://www.mahagulf.com/"
                        className="text-blue-600 hover:underline"
                      >
                        https://www.mahagulf.com/
                      </a>{" "}
                      (the &quot;Site&quot;), as well as any other related
                      products and services that refer or link to these legal
                      terms (the &quot;Legal Terms&quot;) (collectively, the
                      &quot;Services&quot;).
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-4">
                      You can contact us by email at{" "}
                      <a
                        href="mailto:info@ohs-maha.com"
                        className="text-blue-600 hover:underline"
                      >
                        info@ohs-maha.com
                      </a>{" "}
                      or by mail at our address in Dubai, United Arab Emirates.
                    </p>
                  </div>

                  <div className="mb-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <p className="text-slate-700 leading-relaxed">
                      <strong>IMPORTANT:</strong> These Legal Terms constitute a
                      legally binding agreement made between you, whether
                      personally or on behalf of an entity (&quot;you&quot;),
                      and AL MAHA GULF, concerning your access to and use of the
                      Services. You agree that by accessing the Services, you
                      have read, understood, and agreed to be bound by all of
                      these Legal Terms.
                    </p>
                    <p className="text-red-600 font-semibold mt-4">
                      IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN
                      YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
                      YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>
                  </div>

                  <Separator className="my-8" />

                  {/* Section 1: Our Services */}
                  <section id="section-1" className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        1
                      </span>
                      OUR SERVICES
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <p className="text-slate-700 leading-relaxed">
                        The information provided when using the Services is not
                        intended for distribution to or use by any person or
                        entity in any jurisdiction or country where such
                        distribution or use would be contrary to law or
                        regulation or which would subject us to any registration
                        requirement within such jurisdiction or country.
                        Accordingly, those persons who choose to access the
                        Services from other locations do so on their own
                        initiative and are solely responsible for compliance
                        with local laws, if and to the extent local laws are
                        applicable.
                      </p>
                    </div>
                  </section>

                  {/* Section 2: Intellectual Property Rights */}
                  <section id="section-2" className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        2
                      </span>
                      INTELLECTUAL PROPERTY RIGHTS
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          Our intellectual property
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          We are the owner or the licensee of all intellectual
                          property rights in our Services, including all source
                          code, databases, functionality, software, website
                          designs, audio, video, text, photographs, and graphics
                          in the Services (collectively, the
                          &quot;Content&quot;), as well as the trademarks,
                          service marks, and logos contained therein (the
                          &quot;Marks&quot;).
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          Our Content and Marks are protected by copyright and
                          trademark laws (and various other intellectual
                          property rights and unfair competition laws) and
                          treaties in the United States and around the world.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          Your use of our Services
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          Subject to your compliance with these Legal Terms,
                          including the &quot;PROHIBITED ACTIVITIES&quot;
                          section below, we grant you a non-exclusive,
                          non-transferable, revocable license to:
                        </p>
                        <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                          <li>access the Services; and</li>
                          <li>
                            download or print a copy of any portion of the
                            Content to which you have properly gained access.
                          </li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mt-4">
                          solely for your personal, non-commercial use or
                          internal business purpose.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 8: Prohibited Activities */}
                  <section id="section-8" className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        8
                      </span>
                      PROHIBITED ACTIVITIES
                    </h2>
                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                      <p className="text-slate-700 leading-relaxed mb-4">
                        You may not access or use the Services for any purpose
                        other than that for which we make the Services
                        available. The Services may not be used in connection
                        with any commercial endeavors except those that are
                        specifically endorsed or approved by us.
                      </p>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        As a user of the Services, you agree not to:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                          <li>
                            Systematically retrieve data or other content from
                            the Services
                          </li>
                          <li>Trick, defraud, or mislead us and other users</li>
                          <li>
                            Circumvent, disable, or interfere with
                            security-related features
                          </li>
                          <li>
                            Disparage, tarnish, or otherwise harm us and/or the
                            Services
                          </li>
                          <li>
                            Use any information to harass, abuse, or harm
                            another person
                          </li>
                          <li>Make improper use of our support services</li>
                        </ul>
                        <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                          <li>
                            Use the Services in a manner inconsistent with
                            applicable laws
                          </li>
                          <li>
                            Engage in unauthorized framing of or linking to the
                            Services
                          </li>
                          <li>
                            Upload or transmit viruses, Trojan horses, or other
                            harmful material
                          </li>
                          <li>Engage in any automated use of the system</li>
                          <li>
                            Delete copyright or other proprietary rights notices
                          </li>
                          <li>Attempt to impersonate another user or person</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 17: Governing Law */}
                  <section id="section-17" className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        17
                      </span>
                      GOVERNING LAW
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <p className="text-slate-700 leading-relaxed">
                        These Legal Terms shall be governed by and defined
                        following the laws of the United Arab Emirates. MAHA
                        GULF and yourself irrevocably consent that the courts of
                        the United Arab Emirates shall have exclusive
                        jurisdiction to resolve any dispute which may arise in
                        connection with these Legal Terms.
                      </p>
                    </div>
                  </section>

                  {/* Section 20: Disclaimer */}
                  <section id="section-20" className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        20
                      </span>
                      DISCLAIMER
                    </h2>
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                      <p className="text-slate-700 leading-relaxed font-semibold mb-4">
                        THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE
                        BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE
                        AT YOUR SOLE RISK.
                      </p>
                      <p className="text-slate-700 leading-relaxed text-sm">
                        TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                        WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE
                        SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT
                        LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                      </p>
                    </div>
                  </section>

                  {/* Contact Section */}
                  <section id="section-26" className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        26
                      </span>
                      CONTACT US
                    </h2>
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <p className="text-slate-700 leading-relaxed mb-4">
                        In order to resolve a complaint regarding the Services
                        or to receive further information regarding use of the
                        Services, please contact us at:
                      </p>
                      <div className="bg-white p-4 rounded border">
                        <p className="font-semibold text-slate-900">
                          AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS TRAINING
                          LLC
                        </p>
                        <p className="text-slate-700">
                          RIGGA BUSINESS CENTRE Plot # 466-0,
                        </p>
                        <p className="text-slate-700">Dubai</p>
                        <p className="text-slate-700">United Arab Emirates</p>
                        <p className="text-slate-700 mt-2">
                          Phone:{" "}
                          <a
                            href="tel:+971543947252"
                            className="text-blue-600 hover:underline"
                          >
                            +971 (0) 54 351 5003
                          </a>
                        </p>
                        <p className="text-slate-700">
                          Email:{" "}
                          <a
                            href="mailto:info@ohs-maha.com"
                            className="text-blue-600 hover:underline"
                          >
                            info@ohs-maha.com
                          </a>
                        </p>
                        <p className="text-slate-700 mt-2 text-sm">
                          VAT Registration Number: 104613103100003
                        </p>
                      </div>
                    </div>
                  </section>

                  <Separator className="my-8" />

                  <div className="text-center text-sm text-slate-500">
                    <p>
                      © 2024 AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS
                      TRAINING L.L.C. All rights reserved.
                    </p>
                    <p className="mt-2">
                      These terms are effective as of {lastUpdated}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
