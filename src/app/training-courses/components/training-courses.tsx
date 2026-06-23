"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { trainingCourses } from "@/constants";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PageProps {
  slug: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TrainingCourses = ({ slug }: PageProps) => {
  const [trainingDetails, setTrainingDetails] = useState<
    (typeof trainingCourses)[0] | undefined
  >();

  const router = useRouter();

  useEffect(() => {
    const filterData = trainingCourses.find(
      (solution) => solution.slug === `/training-courses/${slug}`
    );
    setTrainingDetails(filterData);
  }, [slug]);

  if (!trainingDetails) {
    return <div className="py-48 text-center">Loading...</div>;
  }

  return (
    <div>
      <main className="overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative w-full py-20 flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/training-courses.jpg"
              alt="background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-transparent"></div>
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="container relative z-10 mx-auto px-4"
          >
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <motion.div
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30"
              >
                <span className="text-primary font-medium">
                  Professional Training Course
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              >
                {trainingDetails.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
              >
                {trainingDetails.content}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button
                  onClick={() => router.push("/contact-us")}
                  className="px-8 py-3 transition-all flex items-center gap-2"
                >
                  Enroll Now <ArrowRight size={18} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Overview Section with Scroll Animation */}
        <section className="py-32 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
          >
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-5xl text-gray-800 font-bold tracking-tight">
                    {trainingDetails.title}
                  </h2>
                  <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {trainingDetails.content}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-2xl opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={trainingDetails.img || "/placeholder.svg"}
                    alt={`${trainingDetails.title} Overview`}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default TrainingCourses;
