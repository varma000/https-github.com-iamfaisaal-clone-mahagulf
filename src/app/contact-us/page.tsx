import ContactUs from "@/components/contact";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Users } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MAHA | Get in Touch for Expert Guidance",
  description:
    "Reach out to Maha Gulf for top-notch IT training and courses. Our expert team is here to help you with inquiries, support, and more. Get in Touch",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 py-36">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
              Contact MAHA Gulf
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Let&apos;s Start a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your career? Get in touch with our expert team
              and discover how we can help you achieve your professional goals.
            </p>
            <div className="grid md:grid-cols-3 gap-8 items-center justify-center text-purple-200">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Personalized Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
