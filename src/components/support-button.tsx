"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  User,
  Mail,
  Phone,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function SupportButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("XkAZdOtNTxGGi-PAO");

      const result = await emailjs.sendForm(
        "service_x371ruo", // Your EmailJS service ID
        "template_lqbdtqd", // Your EmailJS template ID
        formRef.current
      );

      if (result.status === 200) {
        setIsSuccess(true);
        formRef.current.reset();
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Support Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[99]"
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <div className="relative">
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
            <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-10 animation-delay-1000" />
          </div>

          {/* Main button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-16 w-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Contact Support"
          >
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" />

            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
          >
            Need help? Chat with us!
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
          </motion.div>
        </div>
      </motion.div>

      {/* Support Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg"
            >
              <Card className="shadow-2xl border-0 overflow-hidden">
                {/* Header */}
                <CardHeader className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
                  <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-20' />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Image
                          src="/logo.png"
                          alt="Company Logo"
                          width={200}
                          height={80}
                          priority
                          quality={100}
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          ASSU - The Smart Assistant That Understands You!
                        </CardTitle>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Status badges */}
                  <div className="flex gap-2 mt-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      Quick Response
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Expert Support
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-white">
                  {isSuccess ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-slate-600">
                        Thank you for contacting us. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="grid grid-cols-2 gap-8"
                    >
                      {/* Name Field */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="flex items-center gap-2 text-slate-700 font-medium"
                        >
                          <User className="w-4 h-4 text-blue-600" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="from_name"
                          placeholder="Enter your full name"
                          required
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="flex items-center gap-2 text-slate-700 font-medium"
                        >
                          <Mail className="w-4 h-4 text-blue-600" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="from_email"
                          type="email"
                          placeholder="Enter your email address"
                          required
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="flex items-center gap-2 text-slate-700 font-medium"
                        >
                          <Phone className="w-4 h-4 text-blue-600" />
                          Phone Number
                          <span className="text-slate-400 text-sm">
                            (Optional)
                          </span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                        />
                      </div>

                      {/* Subject Field */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-slate-700 font-medium"
                        >
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What can we help you with?"
                          required
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2 col-span-2">
                        <Label
                          htmlFor="message"
                          className="text-slate-700 font-medium"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please describe your inquiry in detail..."
                          rows={4}
                          required
                          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="col-span-2 w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
