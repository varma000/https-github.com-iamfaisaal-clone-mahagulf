"use client";

import { useEffect } from "react";
import { motion, useSpring, animate } from "framer-motion";
import Image from "next/image";

export default function WhatsAppButton() {
  const springProgress = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const openWhatsApp = () => {
    const phoneNumber = "971543515003";
    const message = "Hi! I need support.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    animate(springProgress, 1, {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    });
  }, [springProgress]);

  return (
    <motion.div
      className="fixed bottom-24 right-8 z-[99]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={openWhatsApp}
        aria-label="Contact AL-Nawayath support on WhatsApp"
        className="relative h-12 w-12 cursor-pointer group"
      >
        {/* WhatsApp Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 1 }}
            // animate={{ scale: [1, 1.1, 1] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
            className="text-white"
          >
            <Image
              src="/whatsapp_5968841.png"
              alt="logo"
              width={100}
              height={100}
              className="w-12"
            />
          </motion.div>
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </button>
    </motion.div>
  );
}
