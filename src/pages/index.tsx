import React from "react";
import Navbar from "@/Navbar";
import HeroSection from "@/HeroSection";
import FeaturedProducts from "@/FeaturedProducts";
import SubscribeSection from "@/SubscribeSection";
import Footer from "@/Footer";

const Index: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;
