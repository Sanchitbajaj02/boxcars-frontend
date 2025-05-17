import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import BrandsSection from "@/components/brand-section";
import SellYourCarSection from "@/components/sell-your-car-section";
import WhyChooseUs from "@/components/why-choose-us";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import PopularMakes from "@/components/popular-makes";
import ExploreAllVehicles from "@/components/explore-all-vehicles";
import BlogSection from "@/components/blogs";
import CtaSection from "@/components/cta-section";
import CarListSection from "@/components/car-list-section";

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
