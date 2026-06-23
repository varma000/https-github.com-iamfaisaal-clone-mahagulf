import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Grid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events in UAE | Host Unforgettable Gatherings with MAHA",
  description:
    "Plan and execute memorable events in UAE with MAHA. From corporate conferences to social gatherings, our expert team ensures seamless coordination and exceptional experiences.",
};

export default function Page() {
  const eventCategories = [
    "Business & Professional",
    "Charity & Causes",
    "Community & Culture",
    "Family & Education",
    "Fashion & Beauty",
    "Film, Media & Entertainment",
    "Food & Drink",
  ];

  const eventTypes = [
    "Appearance or Signing",
    "Attraction",
    "Camp, Trip, or Retreat",
    "Class, Training, or Workshop",
    "Concert or Performance",
    "Conference",
    "Convention",
  ];

  const safetyEvents = [
    {
      id: 1,
      title: "Risk Assessment Awareness Training Workshop",
      startDate: "2025-02-15",
      endDate: "2025-02-16",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      location: "Dubai Training Center",
      image: "/hs-1.jpg",
      category: "Safety Training",
      description:
        "Comprehensive workshop on identifying, assessing, and managing workplace risks.",
    },
    {
      id: 2,
      title: "Confined Spaces Safety & Emergency Response",
      startDate: "2025-03-20",
      endDate: "2025-03-22",
      startTime: "08:00 AM",
      endTime: "04:00 PM",
      location: "Abu Dhabi Industrial Zone",
      image: "/hs-2.jpg",
      category: "Safety Training",
      description:
        "Essential training for workers entering confined spaces and emergency procedures.",
    },
    {
      id: 3,
      title: "Work at Height Safety Certification Program",
      startDate: "2025-04-10",
      endDate: "2025-04-12",
      startTime: "08:30 AM",
      endTime: "04:30 PM",
      location: "Sharjah Construction Academy",
      image: "/hs-5.jpg",
      category: "Safety Training",
      description:
        "Comprehensive certification program for safe working at heights including scaffolding and fall protection.",
    },
    {
      id: 4,
      title: "Electrical Safety & LOTO Training Conference",
      startDate: "2025-05-25",
      endDate: "2025-05-26",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      location: "Online Event",
      image: "/hs-11.jpg",
      category: "Safety Training",
      description:
        "Advanced training on electrical hazards, safety procedures, and Lock Out Tag Out (LOTO) systems.",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/2.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-32">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-2">
              <span className="text-purple-400">OUR </span>
              EVENTS
            </h1>
            <div className="w-20 h-1 bg-purple-400"></div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <Input
            placeholder="Keywords"
            className="border-gray-300 rounded-md"
          />
          <Input
            placeholder="Location"
            className="border-gray-300 rounded-md"
          />
          <Select>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="SELECT DATE RANGE" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Choose an Event Category" />
            </SelectTrigger>
            <SelectContent>
              {eventCategories.map((category) => (
                <SelectItem
                  key={category}
                  value={category.toLowerCase().replace(/\s+/g, "-")}
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Choose an Event Type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type.toLowerCase().replace(/\s+/g, "-")}
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Events Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            UPCOMING SAFETY TRAINING EVENTS
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-blue-500 hover:bg-blue-600"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Event Cards */}
        <div className="space-y-6">
          {safetyEvents.map((event) => {
            const startDate = formatDate(event.startDate);
            const endDate = formatDate(event.endDate);

            return (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-center bg-purple-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                              {startDate.day}
                            </div>
                            <div className="text-sm text-purple-500 font-medium">
                              {startDate.month}
                            </div>
                          </div>
                          {event.startDate !== event.endDate && (
                            <>
                              <div className="text-sm text-gray-400">-</div>
                              <div className="text-center bg-purple-50 p-3 rounded-lg">
                                <div className="text-2xl font-bold text-purple-600">
                                  {endDate.day}
                                </div>
                                <div className="text-sm text-purple-500 font-medium">
                                  {endDate.month}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {event.startDate} @ {event.startTime} –{" "}
                              {event.endDate} @ {event.endTime}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="mt-3">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 hidden sm:flex">
                        <Link
                          href="/contact-us"
                          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded-lg"
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
