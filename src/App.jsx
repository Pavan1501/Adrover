// src/App.jsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import PartnerLogosSection from './components/PartnerLogosSection';
import SecondVideoEnquirySection from './components/SecondVideoEnquirySection';
import Footer from './components/Footer';
import EnquiryScreen from './screens/EnquiryScreen';
import { THEME } from './styles/theme';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'enquiry'

  const handleScrollToSection = (sectionId) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToEnquiry = () => {
    setCurrentView('enquiry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <View style={styles.appContainer}>
      {/* Sticky Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onScrollToSection={handleScrollToSection}
      />

      {/* Screen Views */}
      {currentView === 'home' ? (
        <View style={styles.contentWrapper}>
          {/* 1. About & Hero */}
          <HeroSection
            onEnquireClick={navigateToEnquiry}
            onExploreProcess={() => handleScrollToSection('process')}
            onWatchDemo={() => handleScrollToSection('video')}
          />

          {/* 2. Process Section: Video, Business Approval, Payment, 10,000 Plays */}
          <ProcessSection onEnquireClick={navigateToEnquiry} />

          {/* 3. Partner Logos: Continuous Auto-Sliding Horizontal Marquee */}
          <PartnerLogosSection />

          {/* 4. Second Video & Enquiry Section */}
          <SecondVideoEnquirySection onNavigateToEnquiry={navigateToEnquiry} />

          {/* 5. Footer */}
          <Footer
            onNavigateSection={handleScrollToSection}
            onNavigateToEnquiry={navigateToEnquiry}
          />
        </View>
      ) : (
        <View style={styles.contentWrapper}>
          {/* Dedicated Campaign Enquiry Page */}
          <EnquiryScreen onBackToHome={navigateToHome} />

          {/* Footer */}
          <Footer
            onNavigateSection={handleScrollToSection}
            onNavigateToEnquiry={navigateToEnquiry}
          />
        </View>
      )}

      {/* Floating Quick Action Button */}
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
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 25px rgba(234, 179, 8, 0.45)',
            cursor: 'pointer',
            zIndex: 998,
            fontWeight: 800,
            fontSize: '14px',
            color: '#064E3B',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Sparkles size={16} color="#064E3B" />
          <span>Instant Enquiry</span>
        </div>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    minHeight: '100%',
  },
  contentWrapper: {
    width: '100%',
  },
});

