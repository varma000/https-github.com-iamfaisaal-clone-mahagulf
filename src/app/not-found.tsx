"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Search,
  ArrowLeft,
  BookOpen,
  Users,
  Mail,
  Compass,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  const popularPages = [
    {
      title: "About Us",
      href: "/about-us",
      icon: Users,
      description: "Learn about MAHA Gulf",
    },
    {
      title: "Courses",
      href: "/courses",
      icon: BookOpen,
      description: "Browse our training programs",
    },
    {
      title: "Contact",
      href: "/contact-us",
      icon: Mail,
      description: "Get in touch with us",
    },
    {
      title: "Ebooks",
      href: "/ebooks",
      icon: BookOpen,
      description: "Download free resources",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary"></div>
      {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div> */}

      {/* Animated background elements */}
      {/* <div className="absolute top-20 left-20 w-64 h-64 bg-purple-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div> */}

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-32">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* 404 Animation */}
          <div className="mb-8 relative">
            <div className="text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-none">
              404
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center animate-bounce">
                <AlertTriangle className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Oops! Page
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Not Found
            </span>
          </h1>

          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the
            digital void. Don&apos;t worry, we&apos;ll help you find your way
            back to the right path.
          </p>

          {/* Search Bar */}
          <div className="mb-12 max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for courses, resources, or pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400 rounded-full pl-12 pr-32 py-4 text-lg"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 rounded-full"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>

          {/* Quick Actions */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Go Home
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:text-white text-black hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:text-white text-black hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="mr-2 w-5 h-5" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Popular Pages */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-purple-200">
              Popular Pages
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {popularPages.map((page, index) => (
                <Link key={index} href={page.href}>
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <page.icon className="w-8 h-8 text-purple-300" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {page.title}
                      </h4>
                      <p className="text-purple-200 leading-relaxed flex-1">
                        {page.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Compass className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold text-white mb-4">
                Still Lost?
              </h4>
              <p className="text-purple-200 mb-6 leading-relaxed">
                If you can&apos;t find what you&apos;re looking for, our support
                team is here to help. Contact us and we&apos;ll guide you to the
                right place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full">
                    <Mail className="mr-2 w-5 h-5" />
                    Contact Support
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white/30 hover:text-white text-black hover:bg-white/10 px-6 py-3 rounded-full"
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  Browse Courses
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Error Code */}
          <div className="mt-12 text-purple-300 text-sm">
            Error Code: 404 | Page Not Found | MAHA Gulf
          </div>
        </div>
      </div>
    </div>
  );
}
