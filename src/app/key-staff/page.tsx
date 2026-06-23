"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { teamMembers } from "@/constants";
import { GraduationCap, Mail, User } from "lucide-react";
import Image from "next/image";

const TeamPage = () => {
  const formatQualifications = (qualification: string) => {
    return qualification
      .split("||")
      .map((qual) => qual.trim())
      .filter((qual) => qual);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="pt-36 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <Badge className="mb-6 px-4 py-2">
            <User className="w-4 h-4 mr-2" />
            Meet Our Team
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Experts Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              {" "}
              Our Success
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of professionals brings years of experience and
            expertise to guide you on your learning journey
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="pb-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const qualifications = formatQualifications(member.qualification);

              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    {/* Profile Image */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={288}
                        className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <Badge className="text-white border-0">
                          {member.role}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Qualifications */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-semibold text-gray-700">
                            Qualifications
                          </span>
                        </div>

                        <div className="grid gap-2">
                          {qualifications.map((qual, qualIndex) => (
                            <div
                              key={qualIndex}
                              className="bg-primary px-3 py-2 rounded-lg hover:shadow-sm transition-shadow"
                            >
                              <span className="text-xs text-white font-medium leading-relaxed">
                                {qual}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {member.description}
                        </p>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto"
                            >
                              Read More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-gray-900">
                                {member.name}
                              </DialogTitle>
                              <Badge className="w-fit">{member.role}</Badge>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                                  <GraduationCap className="w-4 h-4 mr-2" />
                                  Qualifications
                                </h4>
                                <div className="space-y-1">
                                  {qualifications.map((qual, qualIndex) => (
                                    <div
                                      key={qualIndex}
                                      className="bg-primary px-3 py-2 rounded text-sm text-white"
                                    >
                                      {qual}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-700 mb-2">
                                  About
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                  {member.description}
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>

                      {/* Contact */}
                      {member.email !== "-" && (
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <a
                              href={`mailto:${member.email}`}
                              className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
