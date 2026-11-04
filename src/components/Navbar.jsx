// src/components/Navbar.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { THEME } from '../styles/theme';
import { Truck, ArrowRight, Menu, X, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Campaign Journey', target: 'process' },
    { label: '10,000 Plays', target: 'plays' },
    { label: 'Clients', target: 'clients' },
    { label: 'Live Video', target: 'video' },
    { label: 'Network Cities', target: 'cities' },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        onScrollToSection(target);
      }, 100);
    } else {
      onScrollToSection(target);
    }
  };

  return (
    <View style={styles.navContainer}>
      <View style={styles.innerNav}>
        {/* Brand Logo */}
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          activeOpacity={0.8}
        >
          <View style={styles.logoIconWrapper}>
            <Truck size={22} color="#064E3B" strokeWidth={2.4} />
            <View style={styles.activePill} />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Text style={styles.brandTitle}>ADOVER</Text>
              <View style={styles.tagBadge}>
                <Text style={styles.tagText}>LED TRANSIT</Text>
              </View>
            </View>
            <Text style={styles.brandSubtitle}>High-Impact Screen Network</Text>
          </View>
        </TouchableOpacity>

        {/* Desktop Navigation Links */}
        <View style={styles.desktopLinks}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.target}
              style={styles.navLink}
              onPress={() => handleNavClick(item.target)}
              activeOpacity={0.7}
            >
              <Text style={styles.navLinkText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Right CTA Actions */}
        <View style={styles.navActions}>
          <TouchableOpacity
            style={styles.callButton}
            onPress={() => window.open('tel:+919003170100', '_self')}
            activeOpacity={0.8}
          >
            <PhoneCall size={16} color={THEME.colors.primaryGreenDark} />
            <Text style={styles.callButtonText}>+91 90031 70100</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.enquiryCtaBtn,
              currentView === 'enquiry' && styles.enquiryCtaBtnActive,
            ]}
            onPress={() => {
              if (currentView === 'enquiry') {
                setCurrentView('home');
              } else {
                setCurrentView('enquiry');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            activeOpacity={0.85}
          >
            <View style={styles.enquiryBtnInner}>
              <Sparkles size={16} color="#064E3B" />
              <Text style={styles.enquiryBtnText}>
                {currentView === 'enquiry' ? 'Back to Home' : 'Campaign Enquiry'}
              </Text>
              <ArrowRight size={16} color="#064E3B" />
            </View>
          </TouchableOpacity>

          {/* Mobile Hamburger Button */}
          <TouchableOpacity
            style={styles.hamburgerBtn}
            onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
            activeOpacity={0.8}
          >
            {mobileMenuOpen ? (
              <X size={24} color={THEME.colors.textPrimary} />
            ) : (
              <Menu size={24} color={THEME.colors.textPrimary} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <View style={styles.mobileDropdown}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.target}
              style={styles.mobileNavItem}
              onPress={() => handleNavClick(item.target)}
            >
              <Text style={styles.mobileNavText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.mobileEnquiryBtn}
            onPress={() => {
              setMobileMenuOpen(false);
              setCurrentView('enquiry');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Text style={styles.mobileEnquiryBtnText}>Book Campaign Enquiry</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    width: '100%',
    boxShadow: '0 4px 20px -2px rgba(16, 185, 129, 0.08)',
  },
  innerNav: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: THEME.colors.primaryYellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.colors.primaryGreen,
    position: 'relative',
    boxShadow: '0 4px 10px rgba(250, 204, 21, 0.4)',
  },
  activePill: {
    position: 'absolute',
    top: -3,
    right: -3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: THEME.colors.primaryGreen,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#064E3B',
    letterSpacing: 1.5,
  },
  tagBadge: {
    backgroundColor: THEME.colors.primaryGreenLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: THEME.colors.borderGreen,
  },
  tagText: {
    fontSize: 9,
    fontWeight: '700',
    color: THEME.colors.primaryGreenDeep,
    letterSpacing: 0.5,
  },
  brandSubtitle: {
    fontSize: 11,
    fontWeight: '500',
    color: THEME.colors.textMuted,
  },
  desktopLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
    // Hide on very small screens via media query simulation
  },
  navLink: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    position: 'relative',
  },
  navLinkText: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.colors.textSecondary,
    transition: 'color 0.2s ease',
  },
  navActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: THEME.colors.primaryGreenSoft,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: THEME.colors.borderGreen,
  },
  callButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: THEME.colors.primaryGreenDark,
  },
  enquiryCtaBtn: {
    backgroundColor: THEME.colors.primaryYellow,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#EAB308',
    boxShadow: '0 4px 14px rgba(234, 179, 8, 0.4)',
  },
  enquiryCtaBtnActive: {
    backgroundColor: THEME.colors.primaryGreenLight,
    borderColor: THEME.colors.primaryGreen,
  },
  enquiryBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  enquiryBtnText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#064E3B',
    letterSpacing: 0.3,
  },
  hamburgerBtn: {
    padding: 6,
    display: 'none', // Shown conditionally on mobile via web styling
  },
  mobileDropdown: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    padding: 16,
    gap: 12,
  },
  mobileNavItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  mobileNavText: {
    fontSize: 15,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
  },
  mobileEnquiryBtn: {
    backgroundColor: THEME.colors.primaryYellow,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  mobileEnquiryBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#064E3B',
  },
});

