// src/components/PartnerLogosSection.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../styles/theme';
import { Building2, Award, Star, Flame, Quote, Sparkles } from 'lucide-react';
import { PARTNER_COMPANIES } from '../data/mockData';

export default function PartnerLogosSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Automotive', 'Food & Dining', 'Quick Commerce', 'Fintech', 'Retail'];

  const filteredCompanies = selectedFilter === 'All'
    ? PARTNER_COMPANIES
    : PARTNER_COMPANIES.filter((c) => c.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  // Double the list for infinite marquee
  const marqueeList = [...filteredCompanies, ...filteredCompanies];

  return (
    <View style={styles.sectionWrapper} nativeID="clients">
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerBlock}>
          <div className="shimmer-badge" style={{ alignSelf: 'center', marginBottom: '12px' }}>
            <View style={styles.badgePill}>
              <Award size={14} color="#065F46" />
              <Text style={styles.badgePillText}>POWERING INDIA'S BIGGEST BRANDS</Text>
            </View>
          </div>

          <Text style={styles.sectionTitle}>
            Trusted by <Text style={styles.brandAccent}>150+ Market Leaders</Text>
          </Text>
          <Text style={styles.sectionSubtitle}>
            From automotive giants to high-growth tech unicorns, India's most ambitious
            brands rely on Adover's mobile LED vans to dominate prime urban avenues.
          </Text>

          {/* Interactive Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  backgroundColor: selectedFilter === cat ? '#FACC15' : '#FFFFFF',
                  color: selectedFilter === cat ? '#064E3B' : '#475569',
                  border: selectedFilter === cat ? '2px solid #EAB308' : '1.5px solid #E2E8F0',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedFilter === cat ? '0 4px 12px rgba(234, 179, 8, 0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </View>

        {/* Marquee Row 1 - Sliding Horizontally Left */}
        <div style={marqueeContainerStyle}>
          <div className="marquee-track" style={trackStyle}>
            {marqueeList.map((company, index) => (
              <div
                key={`row1-${index}`}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.borderColor = '#10B981';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                    {company.category}
                  </span>
                  <span style={{ background: '#ECFDF5', color: '#065F46', fontSize: 10, fontWeight: 900, padding: '3px 8px', borderRadius: 6 }}>
                    {company.metric}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      backgroundColor: company.color + '18',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      color: company.color,
                      fontSize: 16,
                      border: `1.5px solid ${company.color}40`,
                    }}
                  >
                    {company.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: '#0F172A' }}>
                      {company.name}
                    </div>
                    <div style={{ fontSize: 11, color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span>● Verified 10,000 Plays</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - Reverse Direction Slide for Rich Multi-layer look */}
        <div style={{ ...marqueeContainerStyle, marginTop: 14 }}>
          <div
            className="marquee-track"
            style={{
              ...trackStyle,
              animationDirection: 'reverse',
              animationDuration: '34s',
            }}
          >
            {marqueeList.map((company, index) => (
              <div
                key={`row2-${index}`}
                style={{ ...cardStyle, borderColor: '#FEF08A', backgroundColor: '#FEFCE8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.borderColor = '#EAB308';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(234, 179, 8, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = '#FEF08A';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#854D0E', textTransform: 'uppercase' }}>
                    {company.category}
                  </span>
                  <span style={{ background: '#FEF9C3', color: '#A16207', fontSize: 10, fontWeight: 900, padding: '3px 8px', borderRadius: 6 }}>
                    ★ High Street Recall
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      backgroundColor: '#FACC15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      color: '#713F12',
                      fontSize: 16,
                      border: '1.5px solid #EAB308',
                    }}
                  >
                    {company.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: '#0F172A' }}>
                      {company.name}
                    </div>
                    <div style={{ fontSize: 11, color: '#854D0E', fontWeight: 700 }}>
                      Annual Fleet Partner
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Study Quote Card */}
        <div
          style={{
            marginTop: '36px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '2px solid #E2E8F0',
            padding: '24px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '720px' }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: '50%',
                backgroundColor: '#ECFDF5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
                flexShrink: 0,
              }}
            >
              <Quote size={22} />
            </div>
            <div>
              <p style={{ fontSize: '14px', lineHeight: '22px', color: '#1E293B', fontWeight: 600, margin: 0 }}>
                "Adover’s LED display vans gave us 4.2X higher brand lift in BKC and CyberHub compared to regular hoardings.
                Pedestrians at red lights were literally taking pictures of the screen."
              </p>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669', marginTop: '6px', display: 'block' }}>
                — VP of Growth, Leading Quick-Commerce Brand
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#064E3B' }}>+340%</div>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>Weekend Footfall Lift</div>
            </div>
            <div style={{ width: 1, height: 32, backgroundColor: '#E2E8F0' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#D97706' }}>98.4%</div>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>Client Renewal Rate</div>
            </div>
          </div>
        </div>
      </View>
    </View>
  );
}

const marqueeContainerStyle = {
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
  padding: '12px 0',
  maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
};

const trackStyle = {
  display: 'flex',
  gap: '20px',
  width: 'max-content',
};

const cardStyle = {
  width: '260px',
  flexShrink: 0,
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  border: '2px solid #E2E8F0',
  padding: '16px 18px',
  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  cursor: 'pointer',
};

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  container: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  headerBlock: {
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 780,
    alignSelf: 'center',
    marginBottom: 36,
  },
  badgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ECFDF5',
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  badgePillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  brandAccent: {
    color: '#059669',
  },
  sectionSubtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: '#64748B',
    textAlign: 'center',
  },
});
