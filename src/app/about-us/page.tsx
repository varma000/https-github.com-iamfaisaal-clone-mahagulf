import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Award,
  Target,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
} from "lucide-react";
import { teamMembers } from "@/constants";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MAHA Gulf: Learn about our to safety training",
  description:
    "We offer specialized training in occupational safety, technical skills for workplace compliance and individual development.  About Us",
};

export default function Page() {
  const stats = [
    { number: "500+", label: "Students Trained", icon: Users },
    { number: "50+", label: "Courses Offered", icon: Award },
    { number: "15+", label: "Years Experience", icon: TrendingUp },
    { number: "25+", label: "Countries Served", icon: Globe },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every training program and course we deliver.",
    },
    {
      icon: Users,
      title: "Innovation",
      description:
        "Cutting-edge training methodologies and modern learning approaches.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "Honest, transparent, and ethical practices in all our business dealings.",
    },
    {
      icon: Star,
      title: "Quality",
      description:
        "Premium quality education and training that exceeds industry standards.",
    },
  ];

  const courses = [
    {
      title: "Communication Excellence",
      description:
        "Master the art of confident and effective communication in any professional setting.",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.9,
    },
    {
      title: "Data Analysis & Visualization",
      description:
        "From Excel to Python, learn to transform data into actionable business insights.",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.8,
    },
    {
      title: "Project Management Mastery",
      description:
        "Complete project lifecycle management from planning to successful execution.",
      duration: "10 weeks",
      level: "Professional",
      rating: 4.9,
    },
    {
      title: "Sustainable Energy Solutions",
      description:
        "Explore renewable energy technologies and sustainable power solutions.",
      duration: "12 weeks",
      level: "Expert",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        {/* <div className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center opacity-20"></div> */}

        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-36">
            <div className="text-white space-y-6">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 px-4 py-2">
                About AL MAHA GULF
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Empowering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Excellence
                </span>
                Through Education
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed max-w-lg">
                AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS TRAINING L.L.C is a
                dynamic and innovative firm specializing in professional
                services, training, and comprehensive educational solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full flex items-center"
                >
                  Contact Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/courses"
                  className="border-purple-400 text-black hover:text-white hover:bg-purple-500/10 px-8 py-3 rounded-full bg-white"
                >
                  View Courses
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <Image
                  src="/about.jpg"
                  alt="AL MAHA GULF Team"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-purple-900 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-purple-100 text-primary hover:text-white mb-4">
                  Our Mission
                </Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Transforming Lives Through
                  <span className="text-primary"> Professional Excellence</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS TRAINING L.L.C
                  stands at the forefront of professional development, offering
                  world-class training programs that bridge the gap between
                  theoretical knowledge and practical application.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our comprehensive approach combines cutting-edge technology,
                  industry expertise, and personalized learning experiences to
                  ensure our students achieve their professional goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-3xl transform rotate-6"></div>
              <Image
                src="/about1.jpg"
                alt="Professional training environment"
                width={600}
                height={500}
                className="relative z-10 rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-primary hover:text-white mb-4">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Experts Behind our Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings years of experience and
              expertise to guide you on your learning journey
            </p>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => {
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
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Qualifications */}
                        <div className="space-y-3">
                          <Badge className="text-white border-0">
                            {member.role}
                          </Badge>
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
                                <Badge className="bg-blue-100 text-blue-700 w-fit">
                                  {member.role}
                                </Badge>
                              </DialogHeader>
                              <div className="space-y-4">
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
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-primary hover:text-white mb-4">
              AL MAHA GULF Certified
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses designed to accelerate your
              professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-700"
                    >
                      {course.level}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      Duration: {course.duration}
                    </span>
                  </div>

                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full group-hover:scale-105 transition-transform"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        {/* <div className="absolute inset-0 bg-[url('/3.jpg')] bg-cover bg-center opacity-10"></div> */}

        {/* Animated background elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div> */}

        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
              Ready to Start Your Journey?
            </Badge>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Career
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                With AL MAHA GULF
              </span>
            </h2>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have advanced their careers
              with AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS TRAINING L.L.C
              through our comprehensive training programs. Your success story
              starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/courses"
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-2 rounded-full font-semibold text-lg flex items-center"
              >
                Explore All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-white border-white/30 hover:text-white text-black hover:bg-white/10 px-8 py-2 rounded-full font-semibold text-lg"
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-purple-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Flexible Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Career Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
