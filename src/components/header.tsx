// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Mail, ChevronDown, Phone, Menu } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { navItems } from "@/constants";

// export default function Header() {
//   const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
//   const [isOpenSheet, setIsOpenSheet] = useState(false);

//   return (
//     <div className="w-full absolute z-50">
//       {/* Top Bar */}
//       <div className="bg-primary py-2">
//         <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <div className="flex items-center gap-x-5 text-sm">
//             <div className="items-center hidden sm:flex">
//               <Phone size={15} className="text-white" />
//               <span className="text-white ml-2">+971 (0) 54 351 5003</span>
//             </div>
//             <div className="flex items-center">
//               <Mail size={15} className="text-white" />
//               <span className="text-white ml-2">info@ohs-maha.com</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-x-4">
//             <Link
//               href="https://www.instagram.com/maha_gulf01/"
//               target="_blank"
//               className="text-white hover:text-secondary transition-colors"
//             >
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </Link>
//             <Link
//               href="https://www.linkedin.com/company/maha-gulf/"
//               target="_blank"
//               className="text-white hover:text-secondary transition-colors"
//             >
//               <svg
//                 className="w-4 h-4"
//                 viewBox="0 0 13 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </Link>
//             <Link
//               href="https://www.facebook.com/people/MAHA-GULF/61559827587692/"
//               target="_blank"
//               className="text-white hover:text-secondary transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="bg-white shadow-md py-4 relative">
//         <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between items-center">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/logo.jpg"
//               alt="Company Logo"
//               width={200}
//               height={80}
//               priority
//               quality={100}
//               className="h-16 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-8">
//             {navItems.map((item, index) => (
//               <NavItem
//                 key={index}
//                 item={item}
//                 index={index}
//                 activeDropdown={activeDropdown}
//                 setActiveDropdown={setActiveDropdown}
//               />
//             ))}
//           </nav>

//           {/* Mobile Navigation */}
//           <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon" className="lg:hidden">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Toggle navigation menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-80 overflow-y-auto">
//               <div className="flex items-center justify-between mb-6">
//                 <Link href="/" className="flex items-center">
//                   <Image
//                     src="/logo.jpg"
//                     alt="Company Logo"
//                     width={160}
//                     height={64}
//                     priority
//                     quality={100}
//                     className="h-12 w-auto object-contain"
//                   />
//                 </Link>
//                 {/* <SheetClose asChild>
//                   <Button variant="ghost" size="icon">
//                     <X className="h-6 w-6" />
//                   </Button>
//                 </SheetClose> */}
//               </div>
//               <nav className="space-y-2">
//                 {navItems.map((item, index) => (
//                   <MobileNavItem
//                     key={index}
//                     item={item}
//                     setIsOpenSheet={setIsOpenSheet}
//                   />
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>

//         {/* Full Width Dropdown Overlay */}
//         {activeDropdown !== null && navItems[activeDropdown]?.subItems && (
//           <div
//             className="absolute left-0 right-0 top-full w-full bg-primary text-white shadow-xl border-t-primary border-b-primary z-50"
//             onMouseEnter={() => setActiveDropdown(activeDropdown)}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
//                 {navItems[activeDropdown].subItems?.map((subItem, index) => (
//                   <Link
//                     onClick={() => setActiveDropdown(null)}
//                     key={index}
//                     href={subItem.href}
//                     className="block text-sm hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
//                   >
//                     {subItem.text}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function NavItem({
//   item,
//   index,
//   setActiveDropdown,
// }: {
//   item: {
//     text: string;
//     href: string;
//     subItems?: { text: string; href: string }[];
//   };
//   index: number;
//   activeDropdown: number | null;
//   setActiveDropdown: (index: number | null) => void;
// }) {
//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => item.subItems && setActiveDropdown(index)}
//     >
//       <Link
//         href={item.href}
//         className="text-gray-800 hover:text-primary uppercase text-sm font-medium flex items-center transition-colors"
//       >
//         {item.text} {item.subItems && <ChevronDown className="h-3 w-3 ml-1" />}
//       </Link>
//     </div>
//   );
// }

// function MobileNavItem({
//   item,
//   setIsOpenSheet,
// }: {
//   item: {
//     text: string;
//     href: string;
//     subItems?: { text: string; href: string }[];
//   };
//   setIsOpenSheet: any;
// }) {
//   const [isOpen, setIsOpen] = useState(false);

//   if (!item.subItems) {
//     return (
//       <Link
//         onClick={() => setIsOpenSheet(false)}
//         href={item.href}
//         className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
//       >
//         {item.text}
//       </Link>
//     );
//   }

//   return (
//     <Collapsible open={isOpen} onOpenChange={setIsOpen}>
//       <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
//         {item.text}
//         <ChevronDown
//           className={`h-4 w-4 transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </CollapsibleTrigger>
//       <CollapsibleContent className="mt-2">
//         <div className="grid grid-cols-1 gap-1 pl-4">
//           {item.subItems.map((subItem, index) => (
//             <Link
//               onClick={() => setIsOpenSheet(false)}
//               key={index}
//               href={subItem.href}
//               className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-colors"
//             >
//               {subItem.text}
//             </Link>
//           ))}
//         </div>
//       </CollapsibleContent>
//     </Collapsible>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, ChevronDown, Phone, Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { navItems } from "@/constants";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isOpenSheet, setIsOpenSheet] = useState(false);

  return (
    <div className="w-full absolute z-50">
      {/* Top Bar */}
      <div className="bg-primary py-2">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-x-5 text-sm">
            <div className="items-center hidden sm:flex">
              <Phone size={15} className="text-white" />
              <span className="text-white ml-2">+971 (0) 54 351 5003</span>
            </div>
            <div className="flex items-center">
              <Mail size={15} className="text-white" />
              <span className="text-white ml-2">info@ohs-maha.com</span>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Link
              href="https://www.instagram.com/maha_gulf01/"
              target="_blank"
              className="text-white hover:text-secondary transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/maha-gulf/"
              target="_blank"
              className="text-white hover:text-secondary transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/people/MAHA-GULF/61559827587692/"
              target="_blank"
              className="text-white hover:text-secondary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md relative py-4">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Company Logo"
              width={200}
              height={80}
              priority
              quality={100}
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation — single row, compact spacing */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                item={item}
                index={index}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.jpg"
                    alt="Company Logo"
                    width={160}
                    height={64}
                    priority
                    quality={100}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </div>
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <MobileNavItem
                    key={index}
                    item={item}
                    setIsOpenSheet={setIsOpenSheet}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Full-width Dropdown */}
        {activeDropdown !== null && navItems[activeDropdown]?.subItems && (
          <div
            className="absolute left-0 right-0 top-full w-full bg-primary text-white shadow-xl z-50"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
                {navItems[activeDropdown].subItems?.map((subItem, index) => (
                  <Link
                    onClick={() => setActiveDropdown(null)}
                    key={index}
                    href={subItem.href}
                    className="block text-sm text-white hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
                  >
                    {subItem.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NavItem({
  item,
  index,
  setActiveDropdown,
}: {
  item: {
    text: string;
    href: string;
    subItems?: { text: string; href: string }[];
  };
  index: number;
  activeDropdown: number | null;
  setActiveDropdown: (index: number | null) => void;
}) {
  return (
    <div
      className="relative h-16 flex items-center"
      onMouseEnter={() => item.subItems && setActiveDropdown(index)}
      onMouseLeave={() => !item.subItems && setActiveDropdown(null)}
    >
      <Link
        href={item.href}
        className="text-gray-800 hover:text-primary uppercase text-xs font-semibold flex items-center gap-0.5 px-3 whitespace-nowrap tracking-wide transition-colors"
      >
        {item.text}
        {item.subItems && <ChevronDown className="h-3 w-3 flex-shrink-0" />}
      </Link>
    </div>
  );
}

function MobileNavItem({
  item,
  setIsOpenSheet,
}: {
  item: {
    text: string;
    href: string;
    subItems?: { text: string; href: string }[];
  };
  setIsOpenSheet: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.subItems) {
    return (
      <Link
        onClick={() => setIsOpenSheet(false)}
        href={item.href}
        className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {item.text}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
        {item.text}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="grid grid-cols-1 gap-1 pl-4">
          {item.subItems.map((subItem, index) => (
            <Link
              onClick={() => setIsOpenSheet(false)}
              key={index}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-colors"
            >
              {subItem.text}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
