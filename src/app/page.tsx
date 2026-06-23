import HeroSlider from "@/components/hero-slider";
import Training from "@/components/training";
import AboutUs from "@/components/about-us";
import WhyUs from "@/components/why-us";
import CustomerReviewsSlider from "@/components/customer-reviews-slider";
import SupportButton from "@/components/support-button";
import WhatsAppButton from "@/components/whatsapp-button";
import { SatisfactionPopup } from "@/components/satisfaction-popup";
import { InfiniteMovingCards } from "@/components/our-clients";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSlider />
      <AboutUs />
      <InfiniteMovingCards />
      <WhyUs />
      <Training />
      <CustomerReviewsSlider />
      <SupportButton />
      <WhatsAppButton />
      <SatisfactionPopup />
    </div>
  );
}
