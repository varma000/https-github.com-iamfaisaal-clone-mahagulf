/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, BookOpen, Shield, Users, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { healthAndSafety, trainingCourses } from "@/constants";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterCourses = (courses: any[]) => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredTrainingCourses = filterCourses(trainingCourses);
  const filteredHealthSafetyCourses = filterCourses(healthAndSafety);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-36 pb-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore Our Courses
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover comprehensive training programs designed to enhance your
            skills and advance your career
          </p>
          {/* <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">
                {trainingCourses.length + healthAndSafety.length}+
              </h3>
              <p className="text-gray-600">Total Courses</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">
                {healthAndSafety.length}+
              </h3>
              <p className="text-gray-600">Safety Courses</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">5000+</h3>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="training" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="training" className="text-base py-3">
                Occupational And Technical Skills Training
              </TabsTrigger>
              <TabsTrigger value="safety" className="text-base py-3">
                Health & Safety
              </TabsTrigger>
            </TabsList>

            <TabsContent value="training">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-center mb-4">
                  Occupational And Technical Skills Training
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                  Enhance your professional skills with our comprehensive
                  training programs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTrainingCourses.map((course, index) => (
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
                      <div className="absolute top-4 right-4">
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl transition-colors">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {course.content}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full transition-colors">
                        <Link href={course.slug}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="safety">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-center mb-4">
                  Health & Safety Training
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                  Comprehensive safety training programs to ensure workplace
                  safety and compliance
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHealthSafetyCourses.map((course, index) => (
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
                      <div className="absolute top-4 right-4">
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl transition-colors">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {course.content}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full transition-colors">
                        <Link href={course.slug}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* No Results */}
          {filteredTrainingCourses.length === 0 &&
            filteredHealthSafetyCourses.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who have advanced their careers with
            our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-blue-600 hover:text-blue-700"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
