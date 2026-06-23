"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { X } from 'lucide-react';

export function SatisfactionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Auto-close popup after 10 seconds
      const autoCloseTimer = setTimeout(() => {
        setIsOpen(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 gap-0 bg-white border-0 shadow-2xl">
        {/* Content */}
        <div className="p-12 text-center space-y-6">
          {/* Main Message */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
              If our proposed service does not meet your satisfaction,{" "}
              <span className="text-primary font-bold">MAHA</span> guarantees a{" "}
              <span className="text-primary font-bold">100% refund</span>. No
              questions will be posed.
            </p>

            <p className="text-lg text-gray-600 font-medium">
              Terms and conditions do apply.
            </p>
          </div>

          {/* Optional CTA Button */}
          <div className="pt-6">
            <Button
              onClick={handleClose}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start My Worry-Free Experience
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-lg"></div>
      </DialogContent>
    </Dialog>
  );
}
