"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  ArrowRight,
  Clock,
  Users,
  Award,
  Shield,
  Zap,
  Wrench,
  HardHat,
  AlertTriangle,
  ConeIcon as Crane,
  Monitor,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Training() {
  const programs = [
    {
      image: "/hs-1.jpg",
      title: "Risk Assessment Awareness Training",
      description:
        "Comprehensive training on identifying, evaluating, and controlling workplace hazards through systematic risk assessment methodologies.",
      icon: <Shield size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "50+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Hazard Identification",
        "Risk Evaluation",
        "Control Measures",
        "Documentation",
      ],
      slug: "/occupational-health-/risk-assessment-awareness-training",
    },
    {
      image: "/hs-11.jpg",
      title: "Electrical Safety Training",
      description:
        "Essential electrical safety training covering lockout/tagout procedures, electrical hazards, and safe work practices around electrical equipment.",
      icon: <Zap size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "45+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Electrical Hazards",
        "LOTO Procedures",
        "PPE Requirements",
        "Emergency Response",
      ],
      slug: "/occupational-health-/electrical-safety-training",
    },
    {
      image: "/hs-5.jpg",
      title: "Work at Height Safety Training",
      description:
        "Specialized training for working at elevated positions, covering fall protection systems, ladder safety, and scaffolding procedures.",
      icon: <HardHat size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "40+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Fall Protection",
        "Ladder Safety",
        "Scaffolding Use",
        "Rescue Procedures",
      ],
      slug: "/occupational-health-/work-at-height-safety-training",
    },
    {
      image: "/hs-1.jpg",
      title: "Confined Spaces Awareness Training",
      description:
        "Critical safety training for entry into confined spaces, covering atmospheric testing, ventilation, and emergency procedures.",
      icon: <AlertTriangle size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "35+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Space Classification",
        "Atmospheric Testing",
        "Entry Procedures",
        "Emergency Rescue",
      ],
      slug: "/occupational-health-/confined-spaces-awareness-training",
    },
    {
      image: "/hs-12.jpg",
      title: "Crane and Rigging Safety",
      description:
        "Comprehensive training on crane operations, rigging techniques, load calculations, and safety protocols for lifting operations.",
      icon: <Crane size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "30+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Load Calculations",
        "Rigging Techniques",
        "Signal Communication",
        "Inspection Procedures",
      ],
      slug: "/occupational-health-/crane-and-rigging-safety",
    },
    {
      image: "/hs-14.jpg",
      title: "Emergency Response Procedure",
      description:
        "Essential training on emergency preparedness, evacuation procedures, first aid response, and crisis management protocols.",
      icon: <AlertTriangle size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "55+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Evacuation Plans",
        "First Aid Response",
        "Fire Safety",
        "Communication",
      ],
      slug: "/occupational-health-/emergency-response-procedure",
    },
    {
      image: "/hs-19.jpg",
      title: "Forklift Safety",
      description:
        "Professional forklift operation training covering pre-operation inspection, safe driving techniques, and load handling procedures.",
      icon: <Wrench size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "42+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Pre-Operation Checks",
        "Safe Operation",
        "Load Handling",
        "Maintenance Basics",
      ],
      slug: "/occupational-health-/forklift-safety",
    },
    {
      image: "/hs-23.png",
      title: "Personal Protective Equipment",
      description:
        "Comprehensive PPE training covering selection, proper use, maintenance, and limitations of personal protective equipment.",
      icon: <Shield size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "48+ Enrolled",
      certification: "KHDA Approved",
      features: ["PPE Selection", "Proper Usage", "Maintenance", "Inspection"],
      slug: "/occupational-health-/personal-protective-equipment",
    },
    {
      image: "/hs-10.jpg",
      title: "Chemical Handling Safety Training",
      description:
        "Specialized training on safe handling, storage, and disposal of hazardous chemicals, including SDS interpretation and spill response.",
      icon: <AlertTriangle size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "38+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Chemical Hazards",
        "SDS Reading",
        "Safe Storage",
        "Spill Response",
      ],
      slug: "/occupational-health-/checmical-handling-safety-training",
    },
    {
      image: "/hs-39.jpg",
      title: "MS Office Basic Training",
      description:
        "Essential computer skills training covering Microsoft Word, Excel, and PowerPoint for workplace productivity and documentation.",
      icon: <Monitor size={24} className="text-white" />,
      duration: "40 Hours",
      fee: "500 AED",
      students: "65+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Word Processing",
        "Spreadsheet Skills",
        "Presentations",
        "Data Management",
      ],
      slug: "/training-courses/ms-office-basic",
    },
    {
      image: "/hs-13.jpg",
      title: "Scaffolding Erection & Dismantling",
      description:
        "Professional scaffolding training covering safe erection, inspection, use, and dismantling of scaffolding systems.",
      icon: <Building2 size={24} className="text-white" />,
      duration: "6 Hours",
      fee: "100 AED",
      students: "32+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Erection Procedures",
        "Safety Inspections",
        "Load Limits",
        "Dismantling Safety",
      ],
      slug: "/occupational-health-/scaffolding-erection-dismantling",
    },
    {
      image: "/hs-44.jpg",
      title: "SEO Training",
      description:
        "Digital marketing training focused on Search Engine Optimization techniques, keyword research, and website optimization strategies.",
      icon: <Search size={24} className="text-white" />,
      duration: "40 Hours",
      fee: "500 AED",
      students: "28+ Enrolled",
      certification: "KHDA Approved",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Link Building",
        "Analytics",
      ],
      slug: "/training-courses/seo",
    },
  ];

  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
              TRAINING & COURSES
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Boost your skills with our{" "}
              <span className="text-primary">KHDA approved</span> courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get practical knowledge and succeed in your field. From career
              advancement to personal growth, our certified courses offer
              practical skills and expert guidance to help you thrive in
              today&apos;s competitive market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            onClick={() => router.push("/courses")}
            className="font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  index,
}: {
  program: {
    image: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    duration: string;
    fee: string;
    students: string;
    certification: string;
    slug: string;
    features: string[];
  };
  index: number;
}) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={`${program.title} training program`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Icon */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
          {program.icon}
        </div>

        {/* Certification Badge */}
        <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {program.certification}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {program.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {program.description}
        </p>

        {/* Course Info */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {program.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {program.students}
          </div>
        </div>

        {/* Fee */}
        <div className="mb-4">
          <span className="text-lg font-bold text-primary">{program.fee}</span>
          <span className="text-sm text-gray-500 ml-1">per course</span>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {program.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-600">
              <Award className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() => router.push(program.slug)}
          className="w-full transition-all duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
