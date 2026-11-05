// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import PartnerLogosSection from './components/PartnerLogosSection';
import SecondVideoEnquirySection from './components/SecondVideoEnquirySection';
import Footer from './components/Footer';
import EnquiryScreen from './screens/EnquiryScreen';
import PageTransition from './components/PageTransition';
import { Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'enquiry'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetView, setTargetView] = useState('home');

  const triggerTransitionTo = (nextView) => {
    if (nextView === currentView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setTargetView(nextView);
    setIsTransitioning(true);
  };

  const handleTransitionMiddle = () => {
    setCurrentView(targetView);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  const handleScrollToSection = (sectionId) => {
    if (currentView !== 'home') {
      triggerTransitionTo('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 700);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navigateToEnquiry = () => {
    triggerTransitionTo('enquiry');
  };

  const navigateToHome = () => {
    triggerTransitionTo('home');
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* Awwwards "Art of Documentary" Style Cinematic Preloader & Page Transition Overlay */}
      <PageTransition
        isActive={isTransitioning}
        targetView={targetView}
        onTransitionMiddle={handleTransitionMiddle}
        onTransitionComplete={handleTransitionComplete}
      />

      {/* Sticky High-End Glass Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={triggerTransitionTo}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Flow */}
      {currentView === 'home' ? (
        <main style={{ width: '100%' }} className="view-reveal-container">
          {/* 1. About & Hero with Live Truck LED Simulator */}
          <HeroSection
            onEnquireClick={navigateToEnquiry}
            onExploreProcess={() => handleScrollToSection('process')}
            onWatchDemo={() => handleScrollToSection('video')}
          />

          {/* 2. 4-Step Campaign Execution Engine & Live Rate Calculator */}
          <ProcessSection onEnquireClick={navigateToEnquiry} />

          {/* 3. 150+ Verified Brand Partners Continuous Auto-Sliding Marquee */}
          <PartnerLogosSection />

          {/* 4. Street Visibility Lab (2,500-6,500 Nits) & Quick Route Booking */}
          <SecondVideoEnquirySection onNavigateToEnquiry={navigateToEnquiry} />

          {/* 5. Clean Bright Daylight Footer */}
          <Footer
            onNavigateSection={handleScrollToSection}
            onNavigateToEnquiry={navigateToEnquiry}
          />
        </main>
      ) : (
        <main style={{ width: '100%' }} className="view-reveal-container">
          {/* Dedicated High-Converting Route Planning & Campaign Booking Portal */}
          <EnquiryScreen onBackToHome={navigateToHome} />

          {/* Clean Daylight Footer */}
          <Footer
            onNavigateSection={handleScrollToSection}
            onNavigateToEnquiry={navigateToEnquiry}
          />
        </main>
      )}

      {/* Floating Instant Route Enquiry Pill (Available on Home View) */}
      {currentView === 'home' && (
        <div
          onClick={navigateToEnquiry}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#FACC15',
            border: '2px solid #EAB308',
            borderRadius: '50px',
            padding: '12px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 25px rgba(234, 179, 8, 0.45)',
            cursor: 'pointer',
            zIndex: 998,
            fontWeight: 900,
            fontSize: '14px',
            color: '#064E3B',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(234, 179, 8, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(234, 179, 8, 0.45)';
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: '#059669',
              boxShadow: '0 0 8px #059669',
            }}
          />
          <Sparkles size={16} color="#064E3B" />
          <span>Book Route Slots</span>
        </div>
      )}

      {/* Page Content Cascading Inward Animation */}
      <style>{`
        .view-reveal-container {
          animation: pageContentReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes pageContentReveal {
          0% {
            opacity: 0.2;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
