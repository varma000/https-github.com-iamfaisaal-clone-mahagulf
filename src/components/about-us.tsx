"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Clock, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const highlights = [
    "Expert trainers with industry experience",
    "Customized training programs",
    "Hands-on practical learning approach",
    "Post-training support and resources",
  ];

  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Students Trained" },
    { icon: Clock, value: "50+", label: "Training Programs" },
    { icon: Shield, value: "100%", label: "KHDA Approved" },
  ];

  const router = useRouter();

  return (
    <section className="sm:py-24 py-16 bg-gradient-to-br from-white via-purple-50/30 to-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-tl-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary rounded-br-3xl -z-10"></div>
            <div className="relative ml-6 mt-6 mb-6 mr-6">
              <Image
                src="/about.jpg"
                alt="Professional training session with engaged students"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  {/* <div className="text-primary font-bold text-4xl">10+</div> */}
                  <div className="text-gray-700 font-medium">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-sm font-bold tracking-widest text-secondary uppercase">
                WHO WE ARE
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-primary">MAHA</span> is a leading
                Knowledge And Human Development Authority (KHDA) Approved
                Training Center In Dubai, U.A.E.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our expert trainers specialize in safety training, management
                development, hospitality, and facility management. We work with
                organizations of all sizes, providing actionable insights and
                hands-on support through comprehensive training programs that
                meet international standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => router.push("/about-us")}
                className="bg-primary hover:bg-purple-900 text-white font-semibold px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Learn More About Us
              </Button>
              <Button
                onClick={() => router.push("/courses")}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-purple-50 font-semibold px-8 py-6 rounded-lg transition-all duration-200"
              >
                View Our Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
