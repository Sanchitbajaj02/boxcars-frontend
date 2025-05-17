import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import BrandsSection from "@/components/home/brand-section";
import SellYourCarSection from "@/components/home/sell-your-car-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import Footer from "@/components/home/footer";
import Testimonials from "@/components/home/testimonials";
import PopularMakes from "@/components/home/popular-makes";
import ExploreAllVehicles from "@/components/home/explore-all-vehicles";
import BlogSection from "@/components/home/blogs";
import CtaSection from "@/components/home/cta-section";
import CarListSection from "@/components/home/car-list-section";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <SidebarInset>
          <Header />
          <HeroSection />
          <BrandsSection />
          <ExploreAllVehicles />
          <SellYourCarSection />
          <WhyChooseUs />
          <PopularMakes />
          <CarListSection />
          <Testimonials />
          <BlogSection />
          <CtaSection />
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
