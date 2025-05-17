import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import BrandsSection from "@/components/brand-section";
import SellYourCarSection from "@/components/sell-your-car-section";
import WhyChooseUs from "@/components/why-choose-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandsSection />
      <SellYourCarSection />
      <WhyChooseUs />

      <Footer />
    </>
  );
}
