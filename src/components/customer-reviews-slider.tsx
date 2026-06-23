"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "RAYMOND PATEL",
    title: "Senior JavaScript Engineer",
    image: "/person.jpg",
    rating: 5,
    review:
      "The direct correlation to the advancement of my career is amazing. The training programs are comprehensive and practical.",
    company: "Tech Solutions Inc.",
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    title: "Safety Manager",
    image: "/person.jpg",
    rating: 5,
    review:
      "Outstanding safety training programs. The instructors are knowledgeable and the content is up-to-date with industry standards.",
    company: "Construction Corp",
  },
  {
    id: 3,
    name: "AHMED AL-RASHID",
    title: "Project Manager",
    image: "/person.jpg",
    rating: 5,
    review:
      "Excellent training facility with modern equipment. The courses helped me advance my career significantly.",
    company: "Emirates Engineering",
  },
];

export default function CustomerReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-sm font-bold tracking-widest text-secondary uppercase">
                Customer Testimonials
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                <span className="text-primary">TRUSTED BY</span> PARTNERS AND
                CUSTOMERS.
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our mind-blowingly comprehensive training programs put a
                treasure trove of professional skills at your fingertips. Join
                thousands of satisfied students who have advanced their careers
                with our expert-led courses.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From occupational health and safety to technical skills
                development, we provide industry-leading training that meets
                international standards. Our experienced instructors and modern
                facilities ensure you receive the highest quality education for
                your professional growth.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Training Programs
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Card className="border-0 shadow-2xl bg-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-lg text-gray-700 text-center leading-relaxed font-medium">
                      &quot;{reviews[currentIndex].review}&quot;
                    </blockquote>

                    {/* Reviewer Info */}
                    <div className="flex flex-col items-center space-y-4 pt-6 border-t border-gray-100">
                      <div className="relative">
                        <Image
                          src={
                            reviews[currentIndex].image || "/placeholder.svg"
                          }
                          alt={reviews[currentIndex].name}
                          width={80}
                          height={80}
                          className="rounded-full border-4 border-blue-100"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {reviews[currentIndex].name}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {reviews[currentIndex].title}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {reviews[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
