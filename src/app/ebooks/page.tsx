// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { FileText, Download, CheckCircle, Clock, Users } from "lucide-react";
// import { useState } from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free eBook Download – Maha Gulf Training Institute UAE",
  description:
    "Get free training eBooks from Maha Gulf Institute in UAE. Learn industry skills with easy guides. Download now to boost your knowledge and career!",
};

export default function EbooksPage() {
  // const [downloadingId, setDownloadingId] = useState<number | null>(null);

  // const ebooks = [
  //   {
  //     id: 1,
  //     title: "STRUCTURAL ENGINEERING CONSULTANCY TOPIC 1",
  //     description:
  //       "Comprehensive guide to structural engineering principles and consultancy practices",
  //     size: "2.4 MB",
  //     pages: 45,
  //     downloads: 1250,
  //     category: "Engineering",
  //     pdf: "/Structural-Engineering-Consultancy-Topic-No.-1.pdf",
  //   },
  //   {
  //     id: 2,
  //     title: "TORQUE CONSULTANCY TOPIC NO. 2",
  //     description:
  //       "Advanced torque analysis and consultancy methodologies for engineering applications",
  //     size: "3.1 MB",
  //     pages: 62,
  //     downloads: 980,
  //     category: "Mechanical",
  //     pdf: "/Torque-Consultancy-TOPIC-NO.-2.pdf",
  //   },
  //   {
  //     id: 3,
  //     title: "PULL-OUT CONSULTANCY TOPIC NO. 3",
  //     description:
  //       "Pull-out testing procedures and analysis techniques for construction projects",
  //     size: "1.8 MB",
  //     pages: 38,
  //     downloads: 756,
  //     category: "Construction",
  //     pdf: "/Pull-out-topic-no.-3-1.pdf",
  //   },
  //   {
  //     id: 4,
  //     title: "MATERIAL SELECTION & FAILURE ANALYSIS TOPIC NO. 4",
  //     description:
  //       "Material science fundamentals and failure analysis methodologies",
  //     size: "4.2 MB",
  //     pages: 78,
  //     downloads: 1420,
  //     category: "Materials",
  //     pdf: "/Material-Selection-topic-no.-4.pdf",
  //   },
  //   {
  //     id: 5,
  //     title: "COMPREHENSIVE ENGINEERING TOPIC NO. 5",
  //     description:
  //       "Integrated engineering approaches and comprehensive project management",
  //     size: "3.7 MB",
  //     pages: 65,
  //     downloads: 892,
  //     category: "Engineering",
  //     pdf: "/Comprehensive-Engineering-Topic-No.5.pdf",
  //   },
  //   {
  //     id: 6,
  //     title: "COMPREHENSIVE ENGINEERING TOPIC NO. 6",
  //     description:
  //       "Advanced engineering concepts and practical implementation strategies",
  //     size: "2.9 MB",
  //     pages: 52,
  //     downloads: 634,
  //     category: "Engineering",
  //     pdf: "/Comprehensive-Engineering-topic-no.-6.pdf",
  //   },
  //   {
  //     id: 7,
  //     title: "COMPREHENSIVE ENGINEERING TOPIC NO. 7",
  //     description:
  //       "Modern engineering solutions and innovative problem-solving techniques",
  //     size: "3.3 MB",
  //     pages: 58,
  //     downloads: 721,
  //     category: "Engineering",
  //     pdf: "/Comprehensive-Engineering-topic-no.-7.pdf",
  //   },
  //   {
  //     id: 8,
  //     title: "MATERIAL SELECTION & FAILURE ANALYSIS: TOPIC NO. 8",
  //     description:
  //       "Advanced material selection criteria and comprehensive failure analysis",
  //     size: "4.8 MB",
  //     pages: 85,
  //     downloads: 1156,
  //     category: "Materials",
  //     pdf: "/Material-Selection-topic-no.-8.pdf",
  //   },
  // ];

  // const handleDownload = async (ebook: any) => {
  //   setDownloadingId(ebook.id);

  //   try {
  //     // Pass the PDF filename as a query parameter
  //     const response = await fetch(
  //       `/api/download-pdf?filename=${encodeURIComponent(ebook.pdf)}`
  //     );
  //     if (!response.ok) throw new Error("Download failed");

  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.style.display = "none";
  //     a.href = url;
  //     // Use the original filename from the ebook object
  //     a.download = ebook.pdf.startsWith("/") ? ebook.pdf.slice(1) : ebook.pdf;
  //     document.body.appendChild(a);
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     document.body.removeChild(a);
  //   } catch (error) {
  //     console.error("Error downloading PDF:", error);
  //     // You might want to show a toast notification or alert here
  //     alert("Failed to download PDF. Please try again.");
  //   } finally {
  //     setDownloadingId(null);
  //   }
  // };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] py-36 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
              Free Resources
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {/* Engineering */}Ebooks
              {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                
              </span> */}
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Download our comprehensive collection of engineering guides,
              consultancy topics, and technical resources - completely free.
            </p>
            {/* <div className="flex items-center justify-center space-x-8 text-purple-200">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>8 Ebooks Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>7,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Authored</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Ebooks Grid */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ebooks.map((ebook) => (
              <Card
                key={ebook.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FileText className="text-white w-8 h-8" />
                      </div>
                      <div>
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-700 mb-2"
                        >
                          {ebook.category}
                        </Badge>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{ebook.size}</span>
                          <span>•</span>
                          <span>{ebook.pages} pages</span>
                          <span>•</span>
                          <span>{ebook.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                    {ebook.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {ebook.description}
                  </p>

                  <Button
                    onClick={() => handleDownload(ebook)}
                    disabled={downloadingId === ebook.id}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white group-hover:scale-105 transition-transform font-semibold"
                  >
                    {downloadingId === ebook.id ? (
                      <>
                        <Clock className="mr-2 w-5 h-5 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 w-5 h-5" />
                        Download PDF
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Want More
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Advanced Resources?
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our premium courses for exclusive content, expert guidance,
              and hands-on training.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Explore Premium Courses
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
