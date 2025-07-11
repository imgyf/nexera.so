import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { LogoMarquee } from "@/components/LogoMarquee";
import FeatureSection from "@/components/FeatureSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <FeatureSection />
    </>
  );
};

export default Index;
