"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  course: any;
}

export default function EducationComp({ course }: Props) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  /* Determine which module/topic array exists on this course */
  const moduleList: { title: string; description: string }[] =
    course.modules ?? course.topics ?? [];

  return (
    <div className="bg-white overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/training-courses.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/40 text-primary font-semibold text-sm tracking-wider uppercase backdrop-blur-sm"
          >
            Professional Training Course
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl"
          >
            {course.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
          >
            {course.introduction}
          </motion.p>
        </motion.div>
      </section>

      {/* ── WHY / IMPORTANCE ─────────────────────────────────────────────── */}
      {(course.whyUpskilling || course.importance) && (
        <section className="bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-1 gap-10 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              {/* <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-3">
                Why It Matters
              </span> */}
              <h2 className="text-3xl font-bold text-gray-900 mb-5 leading-snug">
                {course.whyUpskilling
                  ? "Why Teachers Need Upskilling"
                  : "The Importance of This Training"}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {course.whyUpskilling ?? course.importance}
              </p>
            </motion.div>

            {/* Decorative stat block */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { label: "Expert Facilitators", value: "20+" },
                { label: "Certified Outcomes", value: "100%" },
                { label: "Modules Covered", value: `${moduleList.length}+` },
                {
                  label: "Key Objectives",
                  value: `${course.objectives?.length ?? 0}`,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white border border-primary/15 shadow-sm p-6 flex flex-col items-center text-center"
                >
                  <span className="text-4xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div> */}
          </div>
        </section>
      )}

      {/* ── OBJECTIVES ───────────────────────────────────────────────────── */}
      {course.objectives?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-3">
                Course Goals
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Objectives of the Training
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {course.objectives.map((obj: string, idx: number) => (
                <motion.div
                  key={idx}
                  variants={cardVariant}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-gray-700 font-medium leading-snug text-sm">
                    {obj}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ── MODULES / TOPICS ─────────────────────────────────────────────── */}
      {moduleList.length > 0 && (
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-14">
                <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-3">
                  What You&apos;ll Learn
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {course.modules ? "Key Topics Covered" : "Key Topics Covered"}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-7">
                {moduleList.map(
                  (
                    item: { title: string; description: string },
                    idx: number,
                  ) => (
                    <motion.div
                      key={idx}
                      variants={cardVariant}
                      className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300 p-7 group"
                    >
                      {/* Accent stripe */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-bold text-gray-900 text-base">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      {course.benefits && (
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-3">
                Outcomes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Benefits of Teachers Upskilling Training
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {course.benefits}
              </p>
            </motion.div>

            {/* Visual card */}
            <motion.div
              variants={fadeInUp}
              className="rounded-3xl bg-primary p-10 text-white shadow-xl relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Ready to Level Up?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Join professionals who have already transformed their practice
                  through our certified training programs.
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/90 transition-colors duration-200"
                >
                  Enroll Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* ── WHO SHOULD ATTEND ────────────────────────────────────────────── */}
      {course.whoShouldAttend?.length > 0 && (
        <section className="bg-primary/5 border-t border-primary/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-3">
                  Who It&apos;s For
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Who Should Attend
                </h2>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-4">
                {course.whoShouldAttend.map((role: string, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={cardVariant}
                    className="flex items-center gap-3 bg-white border border-primary/20 rounded-full px-6 py-3 shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-primary hover:text-white transition-all duration-300 cursor-default group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors duration-300" />
                    <span className="font-semibold text-sm text-gray-800 group-hover:text-white transition-colors duration-300">
                      {role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
