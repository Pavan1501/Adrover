// src/components/Navbar.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme';
import { Truck, ArrowRight, Menu, X, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', target: 'about' },
    { label: '4-Step Process', target: 'process' },
    { label: '10,000 Plays', target: 'plays' },
    { label: 'Clients', target: 'clients' },
    { label: 'Live Video', target: 'video' },
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
    <header
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        width: '100%',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 24px',
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #FACC15, #10B981)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)',
              position: 'relative',
            }}
          >
            <Truck size={22} color="#064E3B" strokeWidth={2.4} />
            <div
              style={{
                position: 'absolute',
                top: -3,
                right: -3,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#10B981',
                border: '2px solid #FFFFFF',
              }}
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: '#0F172A',
                  letterSpacing: '0.8px',
                  lineHeight: '24px',
                }}
              >
                ADOVER
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: '#065F46',
                  backgroundColor: '#ECFDF5',
                  padding: '2px 8px',
                  borderRadius: 6,
                  border: '1px solid #A7F3D0',
                  letterSpacing: '0.5px',
                }}
              >
                DOOH NETWORK
              </span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#64748B' }}>
              Transit & Mobile LED Advertising
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
          }}
          className="desktop-nav-links"
        >
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 14,
                fontWeight: 700,
                color: '#334155',
                cursor: 'pointer',
                padding: '6px 2px',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="tel:+919003170100"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 14px',
              backgroundColor: '#F8FAFC',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              textDecoration: 'none',
              fontSize: 12,
              fontWeight: 800,
              color: '#065F46',
            }}
          >
            <PhoneCall size={14} color="#059669" />
            <span>+91 90031 70100</span>
          </a>

          <button
            onClick={() => {
              if (currentView === 'enquiry') {
                setCurrentView('home');
              } else {
                setCurrentView('enquiry');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            style={{
              background: 'linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)',
              border: '2px solid #EAB308',
              borderRadius: 24,
              padding: '10px 20px',
              fontWeight: 900,
              fontSize: 13,
              color: '#064E3B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 4px 14px rgba(234, 179, 8, 0.35)',
            }}
          >
            <Sparkles size={15} color="#064E3B" />
            <span>{currentView === 'enquiry' ? 'Back to Home' : 'Campaign Enquiry'}</span>
            <ArrowRight size={15} color="#064E3B" />
          </button>
        </div>
      </div>
    </header>
  );
}
