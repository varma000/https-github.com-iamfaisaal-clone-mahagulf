"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Globe,
  Users,
  Award,
  MessageSquare,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

// Define the form schema with Zod
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+971 54 351 5003",
    action: "Call Now",
    color: "from-green-500 to-emerald-600",
    onClick: () => window.open("tel:+971543515003", "_self"),
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    value: "info@ohs-maha.com",
    action: "Send Email",
    color: "from-blue-500 to-cyan-600",
    onClick: () => window.open("mailto:info@ohs-maha.com", "_self"),
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come to our office",
    value: "Dubai, United Arab Emirates",
    action: "Get Directions",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Chat with us on WhatsApp",
    value: "+971 54 351 5003",
    action: "Chat Now",
    color: "from-green-500 to-green-600",
    onClick: () => window.open("https://wa.me/971543515003", "_blank"),
  },
];

export default function ContactUs() {
  const officeFeatures = [
    { icon: Users, text: "Expert Consultation" },
    { icon: Award, text: "Certified Training" },
    { icon: Globe, text: "Global Standards" },
    { icon: CheckCircle, text: "Quality Assurance" },
  ];

  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Prepare the template parameters for EmailJS
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        to_name: "MAHA Gulf Team",
      };

      // Send the email using EmailJS
      await emailjs.send(
        "service_x371ruo",
        "template_lqbdtqd",
        templateParams,
        "XkAZdOtNTxGGi-PAO"
      );

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
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
      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="font-semibold text-gray-800 mb-4">
                    {method.value}
                  </p>
                  <Button
                    onClick={method.onClick}
                    className={`w-full bg-gradient-to-r ${method.color} hover:scale-105 transition-transform text-white`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-purple-100 text-purple-700 mb-4">
                  Send us a message
                </Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and our team will get back to you
                  within 24 hours. We&apos;re here to help you succeed.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-gray-700">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              className="h-12 border-gray-200 focus:border-primary focus:ring-primary rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              className="h-12 border-gray-200 focus:border-primary focus:ring-primary rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="h-12 border-gray-200 focus:border-primary focus:ring-primary rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+971 XX XXX XXXX"
                            className="h-12 border-gray-200 focus:border-primary focus:ring-primary rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What can we help you with?"
                            className="h-12 border-gray-200 focus:border-primary focus:ring-primary rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your requirements..."
                            className="min-h-32 border-gray-200 focus:border-primary focus:ring-primary rounded-xl resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl font-semibold text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-3xl transform rotate-3"></div>
                <Image
                  src="/contact.jpg"
                  alt="MAHA Gulf Office"
                  width={500}
                  height={300}
                  className="relative z-10 rounded-3xl object-cover shadow-2xl w-full"
                />
              </div>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Visit Our Office
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Address</h4>
                        <p className="text-gray-600">
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Business Hours
                        </h4>
                        <p className="text-gray-600">
                          Sunday - Thursday: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {officeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <feature.icon className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-gray-700">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828842949!2d54.89782!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-300"
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>

        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
              Take Action Today
            </Badge>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Success Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Starts Now
              </span>
            </h2>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t wait for the perfect moment. Take the first step
              towards your professional transformation today. Our expert team is
              ready to guide you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => router.push("/courses")}
                size="lg"
                variant="outline"
                className="border-white/30 hover:text-white text-black hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg"
              >
                Browse All Courses
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-purple-200">Support Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-purple-200">Successful Students</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-purple-200">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
