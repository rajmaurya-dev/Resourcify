import React from "react";
import HeroSection from "@/components/HeroSection";
import LanguageSection from "@/components/LanguageSection";
import Features from "@/components/Features";
import Community from "@/components/Community";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Team from "./team";
const Homepage = () => {
  return (
    <>
      <HeroSection />
      <LanguageSection />
      <Features />
      <Community />
      <WhyChooseUs />
      <Team />
      <Footer />
    </>
  );
};

export default Homepage;
