import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSplash from '../components/HeroSplash';
import HomeSection from '../components/HomeSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <HeroSplash />
      <HomeSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;