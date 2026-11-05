// src/components/SecondVideoEnquirySection.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme';
import {
  Video,
  Play,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Send,
  Zap,
  Sliders,
  Radio,
  Eye,
  Info,
} from 'lucide-react';

export default function SecondVideoEnquirySection({ onNavigateToEnquiry }) {
  const [luminosityLevel, setLuminosityLevel] = useState(6500); // 2500 (night) to 6500 (noon)
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (quickPhone.trim()) {
      setQuickSubmitted(true);
      setTimeout(() => {
        onNavigateToEnquiry();
      }, 900);
    }
  };

  // Compute ambient brightness based on slider
  const isNight = luminosityLevel < 4000;
  const brightnessFactor = (luminosityLevel / 6500) * 0.4 + 0.6; // 0.6 to 1.0

  return (
    <View style={styles.sectionWrapper} nativeID="visibility">
      <View style={styles.container}>
        {/* Section Header */}
        <View style={styles.headerBlock}>
          <div className="shimmer-badge" style={{ alignSelf: 'center', marginBottom: '12px' }}>
            <View style={styles.badgePill}>
              <Video size={14} color="#065F46" />
              <Text style={styles.badgePillText}>STREET LUMINOSITY & VISIBILITY LAB</Text>
            </View>
          </div>

          <Text style={styles.sectionTitle}>
            Unmissable Presence: <Text style={styles.highlightYellow}>Daylight to Midnight</Text>
          </Text>
          <Text style={styles.sectionSubtitle}>
            Unlike static hoardings hidden behind trees or digital web ads lost to ad-blockers,
            Adover's moving LED screens drive directly at eye-level with adaptive sunlight-cutting brightness.
          </Text>
        </View>

        {/* Video Reel Showcase 2 with Interactive Luminosity Slider */}
        <View style={styles.videoPlayerCard}>
          <View style={styles.videoHeaderBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <View style={styles.tagGreen}>
                <Text style={styles.tagGreenText}>VISIBILITY REEL</Text>
              </View>
              <Text style={styles.reelTitle}>
                {isNight ? 'Nightfall Neon Glow Mode' : 'High-Noon Sunlight Readable Mode'}
              </Text>
            </View>

            {/* Interactive Luminosity Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#F8FAFC', padding: '6px 14px', borderRadius: '14px', border: '1.5px solid #E2E8F0' }}>
              <Sun size={15} color="#D97706" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#334155' }}>
                  Luminosity: {luminosityLevel.toLocaleString()} Nits
                </span>
                <input
                  type="range"
                  min="2500"
                  max="6500"
                  step="500"
                  value={luminosityLevel}
                  onChange={(e) => setLuminosityLevel(Number(e.target.value))}
                  style={{ accentColor: '#10B981', cursor: 'pointer', width: '130px' }}
                />
              </div>
              <Moon size={15} color="#10B981" />
            </div>
          </View>

          {/* Interactive Screen Display Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 440,
              borderRadius: 20,
              overflow: 'hidden',
              backgroundColor: isNight ? '#020617' : '#0F172A',
              boxShadow: isNight
                ? '0 0 50px rgba(16, 185, 129, 0.4), inset 0 0 50px rgba(250, 204, 21, 0.2)'
                : '0 14px 40px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.5s ease',
            }}
          >
            {/* Background Urban Atmosphere */}
            <img
              src={
                isNight
                  ? 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80'
                  : 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80'
              }
              alt="Adover Street Visibility"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: isNight
                  ? `brightness(${brightnessFactor * 0.7}) contrast(125%)`
                  : `brightness(${brightnessFactor}) contrast(100%)`,
                transition: 'all 0.5s ease',
              }}
            />

            {/* Glowing Truck & Screen Simulation in Center */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '84%',
                maxWidth: 720,
                backgroundColor: isNight ? 'rgba(6, 78, 59, 0.9)' : 'rgba(15, 23, 42, 0.88)',
                border: isNight ? '3.5px solid #FACC15' : '3.5px solid #10B981',
                borderRadius: 20,
                padding: '32px 28px',
                boxShadow: isNight
                  ? '0 0 50px rgba(250, 204, 21, 0.7), inset 0 0 30px rgba(16, 185, 129, 0.4)'
                  : '0 12px 45px rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(8px)',
                textAlign: 'center',
                color: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <span
                  style={{
                    backgroundColor: '#FACC15',
                    color: '#064E3B',
                    padding: '5px 14px',
                    borderRadius: 20,
                    fontWeight: 900,
                    fontSize: 12,
                    letterSpacing: '0.6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <Sparkles size={15} /> ADOVER 360° HIGH-DENSITY COMMUTE TAKEOVER
                </span>
              </div>

              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  margin: '8px 0 12px',
                  color: isNight ? '#FEF08A' : '#A7F3D0',
                  letterSpacing: '0.5px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                94% DWELL-TIME PEDESTRIAN ATTENTION
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '23px',
                  color: '#E2E8F0',
                  maxWidth: '560px',
                  margin: '0 auto 20px',
                }}
              >
                While passengers sit at traffic signals, your dynamic video plays right outside their car and cab windows.
                Achieve 3.2x higher brand recall than static hoardings.
              </p>

              {/* Stat badges */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '14px',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.14)',
                    padding: '7px 16px',
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 800,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  ✔ Zero Ad-Blockers
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.14)',
                    padding: '7px 16px',
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 800,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  ✔ 120° Wide Angle Viewing
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.14)',
                    padding: '7px 16px',
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 800,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  ✔ Guaranteed 10,000 Screen Plays
                </div>
              </div>
            </div>
          </div>
        </View>

        {/* HIGH IMPACT ENQUIRY OPTION / BANNER */}
        <View style={styles.enquiryCtaBanner}>
          <View style={styles.bannerLeft}>
            <View style={styles.bannerBadge}>
              <Zap size={14} color="#065F46" />
              <Text style={styles.bannerBadgeText}>ROUTE AVAILABILITY ACTIVE</Text>
            </View>

            <Text style={styles.bannerTitle}>
              Get Custom Route Quotes & Lock Your <Text style={styles.bannerTitleAccent}>10,000 Plays</Text>
            </Text>

            <Text style={styles.bannerSubtitle}>
              Our transit media planners will map the highest-density routes for your brand
              and provide instant municipal clearance timelines.
            </Text>

            <View style={styles.bannerPerks}>
              <View style={styles.perkItem}>
                <CheckCircle2 size={16} color="#065F46" />
                <Text style={styles.perkText}>2-Hour Business Approval Guarantee</Text>
              </View>
              <View style={styles.perkItem}>
                <CheckCircle2 size={16} color="#065F46" />
                <Text style={styles.perkText}>Free Route & Traffic Density Audit</Text>
              </View>
              <View style={styles.perkItem}>
                <CheckCircle2 size={16} color="#065F46" />
                <Text style={styles.perkText}>Direct Fleet Manager Allocation</Text>
              </View>
            </View>
          </View>

          {/* Banner Right: Interactive Action & Redirect */}
          <View style={styles.bannerRight}>
            <View style={styles.actionCard}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <Text style={styles.actionCardHeading}>Campaign Enquiry Options</Text>
                <span style={{ fontSize: '11px', background: '#FEF08A', color: '#713F12', fontWeight: 800, padding: '2px 8px', borderRadius: 6 }}>
                  SLOTS OPEN
                </span>
              </div>
              <Text style={styles.actionCardSub}>
                Configure your media type, target city, daily play count, and budget.
              </Text>

              {/* Direct Redirect Button to Dedicated Enquiry Page */}
              <TouchableOpacity
                style={styles.redirectButton}
                onPress={onNavigateToEnquiry}
                activeOpacity={0.85}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Text style={styles.redirectButtonText}>Open Full Enquiry Form & Route Map</Text>
                  <View style={styles.redirectIconBubble}>
                    <ArrowRight size={18} color="#064E3B" />
                  </View>
                </View>
              </TouchableOpacity>

              {/* Quick phone callback simulation */}
              <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                  Or Get a 15-Minute Instant Callback:
                </span>
                {quickSubmitted ? (
                  <div
                    style={{
                      background: '#ECFDF5',
                      border: '1px solid #A7F3D0',
                      borderRadius: '10px',
                      padding: '10px',
                      color: '#065F46',
                      fontSize: '13px',
                      fontWeight: 800,
                      textAlign: 'center',
                    }}
                  >
                    ✓ Callback Requested! Redirecting to full enquiry form...
                  </div>
                ) : (
                  <form
                    onSubmit={handleQuickSubmit}
                    style={{ display: 'flex', gap: '8px' }}
                  >
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      required
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '13px',
                        outline: 'none',
                        fontFamily: 'inherit',
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#10B981',
                        border: 'none',
                        color: '#FFFFFF',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        fontWeight: 800,
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      <span>Call Me</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#FFFFFF',
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
    marginBottom: 40,
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
  highlightYellow: {
    color: '#D97706',
  },
  sectionSubtitle: {
    fontSize: 15,
    lineHeight: 25,
    color: '#64748B',
    textAlign: 'center',
  },
  videoPlayerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    padding: 24,
    marginBottom: 48,
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
  },
  videoHeaderBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginBottom: 18,
  },
  tagGreen: {
    backgroundColor: '#ECFDF5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  tagGreenText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#065F46',
  },
  reelTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  enquiryCtaBanner: {
    backgroundColor: '#FEFCE8',
    borderWidth: 2,
    borderColor: '#FACC15',
    borderRadius: 28,
    padding: 36,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 32,
    boxShadow: '0 15px 40px -10px rgba(250, 204, 21, 0.4)',
  },
  bannerLeft: {
    flex: 1,
    minWidth: 320,
    maxWidth: 620,
  },
  bannerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FEF08A',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 14,
  },
  bannerBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#713F12',
    letterSpacing: 0.8,
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 40,
    color: '#0F172A',
    marginBottom: 14,
    letterSpacing: -0.4,
  },
  bannerTitleAccent: {
    color: '#059669',
  },
  bannerSubtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: '#475569',
    marginBottom: 20,
  },
  bannerPerks: {
    gap: 10,
  },
  perkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  perkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#064E3B',
  },
  bannerRight: {
    flex: 1,
    minWidth: 320,
    maxWidth: 480,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 24,
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  },
  actionCardHeading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  actionCardSub: {
    fontSize: 13,
    lineHeight: 19,
    color: '#64748B',
    marginBottom: 20,
  },
  redirectButton: {
    backgroundColor: '#FACC15',
    borderWidth: 2,
    borderColor: '#EAB308',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 18px rgba(234, 179, 8, 0.4)',
  },
  redirectButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#064E3B',
  },
  redirectIconBubble: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FEF08A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
