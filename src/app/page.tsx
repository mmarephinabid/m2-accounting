import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import AreasWeService from "@/components/sections/AreasWeService";
import IndustriesWeHelp from "@/components/sections/IndustriesWeHelp";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import LeadForm from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <WhyChooseUs />
      <ServicesOverview />
      <AboutPreview />
      <AreasWeService />
      <IndustriesWeHelp />
      <Testimonials />
      <LeadForm />
      <CTASection />
    </>
  );
}
