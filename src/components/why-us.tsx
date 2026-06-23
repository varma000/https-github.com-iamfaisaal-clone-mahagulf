"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Award,
  Lightbulb,
  Shield,
  Target,
  Zap,
  GraduationCap,
} from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

// Counter component for animating numbers
const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [inView, value]);

  return (
    <span ref={ref} className="inline-block">
      {displayValue}
      {suffix}
    </span>
  );
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1], // Custom easing
    },
  }),
};

export default function DesignTwo() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">
              WHY CHOOSE US?
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">MASTER YOUR SKILLS</span>
              WITH<span className="text-primary"> MAHA</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-600">
              MAHA stands out as a leading training & courses company for
              several reasons:
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {[
              {
                icon: <Award />,
                title: "EXPERTISE",
                description:
                  "Our trainers are highly trained and certified, with extensive experience in various training techniques and industries.",
              },
              {
                icon: <Lightbulb />,
                title: "CUTTING-EDGE TECHNOLOGY",
                description:
                  "We work closely with our clients to understand their specific needs and provide customized training and courses solutions.",
              },
              {
                icon: <Shield />,
                title: "COMPLIANCE AND SAFETY",
                description:
                  "We understand the importance of compliance with regulations, and our training and courses are designed to help you meet safety requirements.",
              },
              {
                icon: <Target />,
                title: "CLIENT-FOCUSED APPROACH",
                description:
                  "We work closely with our clients to understand their specific needs and provide customized training and courses solutions.",
              },
              {
                icon: <Zap />,
                title: "QUICK RESPONSE",
                description:
                  "We offer rapid response times to meet your training and courses needs and minimize downtime.",
              },
              {
                icon: <GraduationCap />,
                title: "CERTIFIED TRAINING",
                description:
                  "Our courses are certified by leading industry bodies, ensuring that your qualifications are recognized and respected worldwide.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={featureVariants}
                className="flex"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-md bg-primary text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Looking for Professional Growth?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our Teachers Upskilling Training in Dubai and master modern
              teaching techniques.
            </p>
            <Button
              onClick={() =>
                router.push(
                  "/educational-courses/teachers-upskilling-training-in-dubai-uae",
                )
              }
              className="font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Course
            </Button>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                value: 86,
                suffix: "%",
                description:
                  "of learners report improved job performance with us",
                color: "from-primary to-purple-950",
              },
              {
                value: 97,
                suffix: "%",
                description: "of users say our content helped in their careers",
                color: "from-primary to-purple-950",
              },
              {
                value: 100,
                suffix: "+",
                description:
                  "certification courses and training programs offered",
                color: "from-primary to-purple-950",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={statCardVariants}
                className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${stat.color} p-8 text-white`}
              >
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.4 + i * 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    <p className="text-6xl font-bold mb-4">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </p>
                  </motion.div>
                  <p className="text-lg font-medium">{stat.description}</p>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-white opacity-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
