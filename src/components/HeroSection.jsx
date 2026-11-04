// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme';
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  MapPin,
  Eye,
  Radio,
  Tv,
  Zap,
  TrendingUp,
  Volume2,
  VolumeX,
  Compass,
  Gauge,
  Sliders,
  Flame,
} from 'lucide-react';

export default function HeroSection({ onEnquireClick, onExploreProcess, onWatchDemo }) {
  const [livePlayCount, setLivePlayCount] = useState(8492);
  const [customBrandName, setCustomBrandName] = useState('YOUR BRAND HERE');
  const [customTagline, setCustomTagline] = useState('OWN CITY STREETS TODAY');
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [speed, setSpeed] = useState(26);

  // Live play counter ticking simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePlayCount((prev) => (prev >= 10000 ? 8400 : prev + 1));
      setSpeed(Math.floor(22 + Math.random() * 8));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const campaignPresets = [
    { brand: 'ZOMATO EXPRESS', tagline: 'HOT CRAVINGS IN 10 MINS', themeColor: '#EF4444', bg: '#450A0A', category: 'Food Tech' },
    { brand: 'TATA EV NEXON', tagline: 'DRIVE THE ELECTRIC REVOLUTION', themeColor: '#10B981', bg: '#064E3B', category: 'Automotive' },
    { brand: 'SWIGGY INSTAMART', tagline: 'GROCERIES DELIVERED AT RED LIGHT', themeColor: '#F97316', bg: '#431407', category: 'Quick Commerce' },
    { brand: 'NIKE AIR MAX', tagline: 'SPEED MEETS UNSTOPPABLE STYLE', themeColor: '#FACC15', bg: '#1E1B4B', category: 'Lifestyle' },
  ];

  const handleApplyPreset = (idx) => {
    setSelectedPresetIndex(idx);
    setCustomBrandName(campaignPresets[idx].brand);
    setCustomTagline(campaignPresets[idx].tagline);
  };

  // Subtle web audio beep for tactile feedback
  const playTactileClick = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 note
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      // Ignore if audio context not allowed
    }
  };

  return (
    <View style={styles.heroWrapper} nativeID="about">
      {/* Background Animated Blobs */}
      <View style={styles.glowBlobYellow} />
      <View style={styles.glowBlobGreen} />
      <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.6, pointerEvents: 'none' }} />

      <View style={styles.container}>
        {/* Left Column: Headline, Trust & Live Interactive Test */}
        <View style={styles.heroLeft}>
          {/* Top Pill with Shimmer effect */}
          <div className="shimmer-badge" style={{ alignSelf: 'flex-start', marginBottom: '20px' }}>
            <View style={styles.badgePill}>
              <View style={styles.pulsingDot} />
              <Sparkles size={14} color="#065F46" />
              <Text style={styles.badgePillText}>
                India's Next-Gen Mobile LED Transit Network
              </Text>
            </View>
          </div>

          {/* Main Headline */}
          <Text style={styles.heroHeadline}>
            Turn High-Density City Roads into Your{' '}
            <Text style={styles.headlineHighlightGreen}>High-Converting</Text>{' '}
            <Text style={styles.headlineHighlightYellow}>Digital Billboard</Text>
          </Text>

          {/* Subtext */}
          <Text style={styles.heroSubtext}>
            Adover brings brand videos to eye-level on bustling streets.
            Our fleet of double-sided P3 Ultra-Bright LED display vans delivers verified
            <Text style={styles.boldText}> 10,000+ daily screen plays</Text> across prime metropolitan hotspots.
          </Text>

          {/* CTA Row */}
          <View style={styles.ctaRow}>
            <TouchableOpacity
              style={styles.primaryCta}
              onPress={() => {
                playTactileClick();
                onEnquireClick();
              }}
              activeOpacity={0.85}
            >
              <Text style={styles.primaryCtaText}>Start Campaign Enquiry</Text>
              <View style={styles.ctaArrowCircle}>
                <ArrowRight size={18} color="#064E3B" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryCta}
              onPress={() => {
                playTactileClick();
                onWatchDemo();
              }}
              activeOpacity={0.85}
            >
              <View style={styles.playIconBox}>
                <Play size={14} color="#059669" fill="#059669" />
              </View>
              <Text style={styles.secondaryCtaText}>Watch Transit Reel</Text>
            </TouchableOpacity>
          </View>

          {/* Interactive "Try Your Brand Live On Screen" Mini Controller */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '2px solid #E2E8F0',
              padding: '16px 18px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              marginTop: '4px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sliders size={15} color="#059669" />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A', letterSpacing: '0.3px' }}>
                  TEST YOUR BRAND ON THE TRUCK SCREEN
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>
                ● Real-Time Simulator
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <input
                type="text"
                placeholder="Type brand name..."
                value={customBrandName}
                onChange={(e) => setCustomBrandName(e.target.value.toUpperCase())}
                style={{
                  flex: 1,
                  minWidth: '160px',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '13px',
                  fontWeight: 800,
                  color: '#064E3B',
                  backgroundColor: '#F8FAFC',
                  outline: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Type offer / tagline..."
                value={customTagline}
                onChange={(e) => setCustomTagline(e.target.value.toUpperCase())}
                style={{
                  flex: 1.2,
                  minWidth: '180px',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '13px',
                  color: '#334155',
                  backgroundColor: '#F8FAFC',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>Preset Brands:</span>
              {campaignPresets.map((preset, idx) => (
                <button
                  key={preset.brand}
                  onClick={() => {
                    playTactileClick();
                    handleApplyPreset(idx);
                  }}
                  style={{
                    backgroundColor: selectedPresetIndex === idx ? '#ECFDF5' : '#F1F5F9',
                    border: selectedPresetIndex === idx ? '1px solid #10B981' : '1px solid #E2E8F0',
                    color: selectedPresetIndex === idx ? '#065F46' : '#475569',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {preset.brand.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </View>

        {/* Right Column: 3D High-Tech LED Van Simulator */}
        <View style={styles.heroRight}>
          <div className="glow-pulse" style={{ width: '100%', maxWidth: '580px' }}>
            <View style={styles.ledVanCard}>
              {/* Telemetry Bar */}
              <View style={styles.vanTopBar}>
                <View style={styles.vanStatusLeft}>
                  <View style={styles.liveIndicator}>
                    <Radio size={14} color="#10B981" />
                    <Text style={styles.liveIndicatorText}>LIVE ON TRANSIT</Text>
                  </View>
                  <View style={styles.routeTag}>
                    <MapPin size={12} color="#059669" />
                    <Text style={styles.routeTagText}>Mumbai • BKC Arterial to Worli Sea Link</Text>
                  </View>
                </View>
                <View style={styles.speedTag}>
                  <Gauge size={12} color="#B45309" />
                  <Text style={styles.speedTagText}>{speed} km/h</Text>
                </View>
              </View>

              {/* High-Resolution Simulated Mobile LED Display Screen Frame */}
              <View style={styles.ledScreenFrame}>
                <View style={styles.ledScreenBorder}>
                  <div
                    className="led-pixel-overlay"
                    style={{
                      backgroundColor: campaignPresets[selectedPresetIndex]?.bg || '#064E3B',
                      padding: '24px 20px',
                      minHeight: '220px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)',
                      transition: 'background-color 0.4s ease',
                    }}
                  >
                    {/* Screen Header Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          padding: '3px 8px',
                          borderRadius: 8,
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        <Tv size={13} color="#FFFFFF" />
                        <span style={{ fontSize: 10, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.6px' }}>
                          P3 ULTRA HD 6,500 NITS
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#FACC15', letterSpacing: '1px' }}>
                          ROTATION #12
                        </span>
                        <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981' }} />
                      </div>
                    </div>

                    {/* Central Brand Content Broadcasted On The LED Van */}
                    <div style={{ textAlign: 'center', margin: '14px 0' }}>
                      <div
                        style={{
                          fontSize: '30px',
                          fontWeight: 900,
                          color: '#FACC15',
                          letterSpacing: '1.5px',
                          textShadow: '0 0 20px rgba(250, 204, 21, 0.7), 0 3px 6px rgba(0,0,0,0.8)',
                          textTransform: 'uppercase',
                          fontFamily: 'system-ui, sans-serif',
                          wordBreak: 'break-word',
                        }}
                      >
                        {customBrandName || 'YOUR BRAND'}
                      </div>
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          marginTop: '6px',
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {customTagline || 'UNSTOPPABLE ATTENTION'}
                      </div>
                    </div>

                    {/* Bottom Screen Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          backgroundColor: '#FACC15',
                          padding: '4px 10px',
                          borderRadius: 6,
                        }}
                      >
                        <Zap size={13} color="#0F172A" />
                        <span style={{ fontSize: 10, fontWeight: 900, color: '#0F172A', letterSpacing: '0.5px' }}>
                          SCAN VEHICLE QR TO REDEEM
                        </span>
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#A7F3D0' }}>
                        120° Wide Angle Viewing
                      </span>
                    </div>
                  </div>
                </View>

                {/* Truck Chassis & Heavy Duty Mobile Van Frame */}
                <View style={styles.truckChassis}>
                  <View style={styles.chassisCabin}>
                    <Text style={styles.cabinText}>ADOVER FLEET 01</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <Compass size={13} color="#94A3B8" />
                    <Text style={{ fontSize: 10, color: '#94A3B8', fontWeight: '700' }}>GPS: 19.0760° N, 72.8777° E</Text>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={styles.wheelLeft}>
                      <View style={styles.wheelHub} />
                    </View>
                    <View style={styles.wheelRight}>
                      <View style={styles.wheelHub} />
                    </View>
                  </View>
                </View>
              </View>

              {/* Bottom Metrics Bar */}
              <View style={styles.vanFooterStats}>
                <View style={styles.vanStatCol}>
                  <Text style={styles.statLabel}>Today's Verified Plays</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
                    <Text style={styles.statValueGreen}>
                      {livePlayCount.toLocaleString()}
                    </Text>
                    <Text style={styles.statSubText}>/ 10,000</Text>
                  </View>
                </View>

                <View style={styles.dividerVertical} />

                <View style={styles.vanStatCol}>
                  <Text style={styles.statLabel}>Live Street Footfall</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
                    <Eye size={16} color="#059669" />
                    <Text style={styles.statValueYellow}>54.2K+</Text>
                  </View>
                </View>

                <View style={styles.dividerVertical} />

                <TouchableOpacity
                  style={styles.simNextBtn}
                  onPress={() => {
                    playTactileClick();
                    const nextIdx = (selectedPresetIndex + 1) % campaignPresets.length;
                    handleApplyPreset(nextIdx);
                  }}
                >
                  <Text style={styles.simNextBtnText}>Next Ad Reel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </div>
        </View>
      </View>

      {/* KPI Stats Strip */}
      <View style={styles.kpiContainer}>
        <View style={styles.kpiInner}>
          <View style={styles.kpiItem}>
            <View style={[styles.kpiIconWrapper, { backgroundColor: THEME.colors.primaryGreenSoft }]}>
              <TrendingUp size={22} color={THEME.colors.primaryGreenDark} />
            </View>
            <View>
              <Text style={styles.kpiNumber}>10,000+</Text>
              <Text style={styles.kpiLabel}>Guaranteed Daily Plays</Text>
            </View>
          </View>

          <View style={styles.kpiDivider} />

          <View style={styles.kpiItem}>
            <View style={[styles.kpiIconWrapper, { backgroundColor: THEME.colors.primaryYellowSoft }]}>
              <Eye size={22} color={THEME.colors.primaryYellowDark} />
            </View>
            <View>
              <Text style={styles.kpiNumber}>2.5 Million+</Text>
              <Text style={styles.kpiLabel}>Daily Pedestrian & Driver Views</Text>
            </View>
          </View>

          <View style={styles.kpiDivider} />

          <View style={styles.kpiItem}>
            <View style={[styles.kpiIconWrapper, { backgroundColor: THEME.colors.primaryGreenSoft }]}>
              <CheckCircle2 size={22} color={THEME.colors.primaryGreenDark} />
            </View>
            <View>
              <Text style={styles.kpiNumber}>99.8%</Text>
              <Text style={styles.kpiLabel}>Audited Proof-of-Play Rate</Text>
            </View>
          </View>

          <View style={styles.kpiDivider} />

          <View style={styles.kpiItem}>
            <View style={[styles.kpiIconWrapper, { backgroundColor: THEME.colors.primaryYellowSoft }]}>
              <Sparkles size={22} color={THEME.colors.primaryYellowDeep} />
            </View>
            <View>
              <Text style={styles.kpiNumber}>150+ Brands</Text>
              <Text style={styles.kpiLabel}>Trust Adover Transit Network</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    backgroundColor: '#FAFAFA',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 44,
    paddingBottom: 28,
  },
  glowBlobYellow: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 520,
    height: 520,
    borderRadius: 260,
    backgroundColor: 'rgba(250, 204, 21, 0.16)',
    filter: 'blur(90px)',
  },
  glowBlobGreen: {
    position: 'absolute',
    top: 220,
    left: -120,
    width: 480,
    height: 480,
    borderRadius: 240,
    backgroundColor: 'rgba(16, 185, 129, 0.14)',
    filter: 'blur(90px)',
  },
  container: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 36,
  },
  heroLeft: {
    flex: 1,
    minWidth: 320,
    maxWidth: 620,
    paddingVertical: 8,
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
    borderRadius: 30,
    boxShadow: '0 2px 10px rgba(16, 185, 129, 0.15)',
  },
  pulsingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  badgePillText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 0.3,
  },
  heroHeadline: {
    fontSize: 44,
    fontWeight: '900',
    lineHeight: 52,
    color: '#0F172A',
    marginBottom: 18,
    letterSpacing: -0.6,
  },
  headlineHighlightGreen: {
    color: '#059669',
  },
  headlineHighlightYellow: {
    color: '#D97706',
    textDecorationLine: 'underline',
    textDecorationColor: '#FACC15',
  },
  heroSubtext: {
    fontSize: 16,
    lineHeight: 26,
    color: '#475569',
    marginBottom: 26,
  },
  boldText: {
    fontWeight: '800',
    color: '#065F46',
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 22,
  },
  primaryCta: {
    backgroundColor: '#FACC15',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#EAB308',
    boxShadow: '0 8px 24px rgba(234, 179, 8, 0.45)',
  },
  primaryCtaText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#064E3B',
  },
  ctaArrowCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FEF08A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#10B981',
    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)',
  },
  playIconBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryCtaText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#064E3B',
  },
  heroRight: {
    flex: 1,
    minWidth: 320,
    maxWidth: 580,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ledVanCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    padding: 22,
    boxShadow: '0 20px 50px -10px rgba(16, 185, 129, 0.22)',
  },
  vanTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  vanStatusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#ECFDF5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  liveIndicatorText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#059669',
    letterSpacing: 0.5,
  },
  routeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  routeTagText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
  speedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FEF9C3',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  speedTagText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#B45309',
  },
  ledScreenFrame: {
    backgroundColor: '#0F172A',
    borderRadius: 18,
    padding: 12,
    borderWidth: 4,
    borderColor: '#10B981',
    boxShadow: '0 0 35px rgba(16, 185, 129, 0.45)',
  },
  ledScreenBorder: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  truckChassis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  chassisCabin: {
    backgroundColor: '#334155',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  cabinText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#CBD5E1',
  },
  wheelLeft: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#1E293B',
    borderWidth: 3,
    borderColor: '#64748B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheelRight: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#1E293B',
    borderWidth: 3,
    borderColor: '#64748B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheelHub: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FACC15',
  },
  vanFooterStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  vanStatCol: {
    flex: 1,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 2,
  },
  statValueGreen: {
    fontSize: 19,
    fontWeight: '900',
    color: '#059669',
  },
  statValueYellow: {
    fontSize: 17,
    fontWeight: '900',
    color: '#D97706',
  },
  statSubText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
  },
  dividerVertical: {
    width: 1,
    height: 32,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 12,
  },
  simNextBtn: {
    backgroundColor: '#ECFDF5',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#10B981',
  },
  simNextBtnText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#065F46',
  },
  kpiContainer: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 36,
  },
  kpiInner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    padding: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
  },
  kpiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    minWidth: 220,
    flex: 1,
  },
  kpiIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kpiNumber: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
  },
  kpiLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  kpiDivider: {
    width: 1,
    height: 44,
    backgroundColor: '#E2E8F0',
  },
});
