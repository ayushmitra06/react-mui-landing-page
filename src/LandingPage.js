import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/navbar';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="feature-section">
        <FeatureSection />
      </div>
      <div id="service-section">
        <ServiceSection />
      </div>
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="gallery-section">
        <GallerySection />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
