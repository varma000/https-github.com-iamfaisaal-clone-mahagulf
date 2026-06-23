import Link from "next/link";
import {
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200">
      <div className="px-4 sm:px-6 lg:px:8 max-w-7xl mx-auto">
        <div className="py-16">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            {/* Logo and Description Section */}
            <div className="lg:col-span-4 md:col-span-12">
              <Link href="/" className="flex items-center w-fit mb-6">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <Image
                    src="/logo.jpg"
                    alt="Company Logo"
                    width={200}
                    height={80}
                    quality={100}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-300 leading-relaxed mb-6">
                AL MAHA GULF TECHNICAL & OCCUPATIONAL SKILLS TRAINING L.L.C aims
                to be a leading technology and business solutions provider in
                UAE, committed to helping clients achieve their objectives
                through strategic and technological excellence.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/maha_gulf01/"
                  target="_blank"
                  className="bg-slate-700 hover:bg-pink-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={20} className="text-white" />
                </Link>
                <Link
                  href="https://www.facebook.com/people/MAHA-GULF/61559827587692/"
                  target="_blank"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={20} className="text-white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/maha-gulf/"
                  target="_blank"
                  className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="lg:col-span-2 md:col-span-4">
              <h5 className="text-white font-bold text-lg mb-6 relative">
                Useful Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-2"></div>
              </h5>
              <ul className="space-y-3">
                {usefulLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links Section */}
            <div className="lg:col-span-2 md:col-span-4">
              <h5 className="text-white font-bold text-lg mb-6 relative">
                Resources
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-2"></div>
              </h5>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Links Section */}
            <div className="lg:col-span-2 md:col-span-4">
              <h5 className="text-white font-bold text-lg mb-6 relative">
                Learning
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-2"></div>
              </h5>
              <ul className="space-y-3">
                {learningLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="lg:col-span-2 md:col-span-4">
              <h5 className="text-white font-bold text-lg mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-2"></div>
              </h5>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 group">
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <Phone size={16} className="text-white" />
                  </div>
                  <Link
                    href="tel:+971543515003"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +971 (0) 54 351 5003
                  </Link>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <Mail size={16} className="text-white" />
                  </div>
                  <Link
                    href="mailto:info@ohs-maha.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@ohs-maha.com
                  </Link>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors mt-1">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">
                    Dubai, United Arab Emirates
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700 bg-slate-900 py-6">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AL MAHA GULF TECHNICAL & OCCUPATIONAL
              SKILLS TRAINING L.L.C. All rights reserved.
            </p>
            <Link
              href="https://www.konkantechnologies.in"
              target="_blank"
              className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
            >
              Developed with <span className="text-red-500 mx-1">❤️</span> by
              Konkantech​
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const resourcesLinks = [
  { title: "Blog", href: "/blogs" },
  { title: "eBooks", href: "/ebooks" },
  { title: "Events", href: "/events" },
  { title: "Terms of Services", href: "/terms-of-services" },
  // { title: "Case Studies", href: "/case-studies" },

  // { title: "Advisories", href: "/advisories" },
  // { title: "Forum", href: "/forum" },
];

const usefulLinks = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about-us" },
  { title: "Approvals", href: "/approvals" },
  { title: "Contact-us", href: "/contact-us" },
];

const learningLinks = [
  { title: "For Business", href: "#" },
  { title: "For Individuals", href: "#" },
];
