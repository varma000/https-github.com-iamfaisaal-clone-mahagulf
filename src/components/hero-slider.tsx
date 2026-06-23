"use client";
import { type CSSProperties, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import "swiper/css/autoplay";
import Link from "next/link";
import getScrollAnimation from "@/lib/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { sliderData } from "@/constants";

const Slider = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar, A11y, Navigation]}
        slidesPerView={1}
        speed={500}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="width: 30px; height: 4px; border-radius: 0; background: #7c3aed;"></span>`,
        }}
        className="mySwiper hero-slider"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.ID}>
            <div
              style={
                {
                  "--image-url": `url(${slide.imageSrc})`,
                } as CSSProperties
              }
              className="bg-[image:var(--image-url)] relative z-0 w-full h-[400px] sm:h-[500px] md:h-[650px] bg-center bg-cover flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="relative mt-20 sm:mt-7 z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                  <motion.h1
                    custom={{ duration: 2 }}
                    variants={scrollAnimation}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  >
                    {slide.tagline}
                  </motion.h1>
                  <motion.p
                    custom={{ duration: 2.2 }}
                    variants={scrollAnimation}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl leading-relaxed"
                  >
                    {slide.desc}
                  </motion.p>
                  <motion.div
                    custom={{ duration: 2.4 }}
                    variants={scrollAnimation}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href="/contact-us"
                      className="sm:px-6 sm:py-3 px-4 py-2 relative rounded-lg group overflow-hidden font-semibold bg-primary text-white inline-block text-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-3/5  sm:w-auto"
                    >
                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-800 group-hover:h-full opacity-90"></span>
                      <span className="relative group-hover:text-white">
                        Contact Us Today
                      </span>
                    </Link>
                    <Link
                      href="/courses"
                      className="sm:px-6 sm:py-3 px-4 py-2 relative rounded-lg group overflow-hidden font-semibold border-2 border-white text-white inline-block text-center hover:bg-white hover:text-primary transition-all duration-300 w-3/5 sm:w-auto"
                    >
                      View Our Courses
                    </Link>
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-slider .swiper-pagination {
          bottom: 10px !important;
        }
        .hero-slider .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
        }
        .hero-slider .swiper-pagination-bullet-active {
          background: #7c3aed !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
