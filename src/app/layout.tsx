import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const GA_ID = "G-K3T87D40TW";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mahagulf.com"),
  title: {
    default: "MAHA | Top Health and Safety Training and Courses in UAE",
    template: "%s | Meatara",
  },
  description:
    "Explore MAHA's top health and safety training courses in the UAE for professional certification and skill enhancement.",
  keywords: [
    "Safety trainings near me",
    "Safety trainings in dubai UAE",
    "KHDA approved companies in Dubai UAE",
    "KHDA approved training courses in uae",
    "safety courses in uae",
    "occupational health and safety training",
    "professional training dubai",
    "management training courses",
    "facility management training",
    "hospitality training dubai",
    "certified training programs",
    "workplace safety training",
    "health and safety courses dubai",
    "KHDA approved training and courses in uae",
    "scaffolding inspector safety training in uae",
    "gap assesment process uae",
    "dangerous goods handling safety in uae",
    "risk awareness training in uae",
    "chemical handling training in uae",
    "operator safety training in uae",
    "electrical safety training in uae",
    "h2s awareness training in uae",
    "crane and rigging safety training in uae",
    "lifting and slinging course in uae",
    "manual handling awareness training in uae",
    "scaffolding erection and dismantling in uae",
    "multimedia course in uae",
    "fire warden course in uae",
    "fire warden safety training in uae",
    "working at heights safety training in uae",
    "manual handling training in uae",
    "lock out tag out in uae",
    "mobile crane safety training in uae",
    "eot crane training in uae",
    "concrete mixer training in uae",
    "Without Locatio Keywords",
    "gap assesment process uae",
    "manhole watcher",
  ].join(", "),
  alternates: {
    canonical: "https://www.mahagulf.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MAHA | Top Health and Safety Training and Courses in UAE",
    description:
      "Explore MAHA's top health and safety training courses in the UAE for professional certification and skill enhancement.",
    url: "https://www.mahagulf.com",
    siteName: "MAHA",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "MAHA Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MAHA",
    creator: "@MAHA",
    title: "MAHA | Top Health and Safety Training and Courses in UAE",
    description:
      "Explore MAHA's top health and safety training courses in the UAE for professional certification and skill enhancement.",
    images: {
      url: "/twitter-image.png",
      alt: "MAHA Training",
    },
  },
  verification: {
    google: "898ef5fbcf34a1e5", // just the token part
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ohs-maha.com" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}

// sudo /root/deploy-mahagulf.sh
