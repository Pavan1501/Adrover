// src/components/ProcessSection.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme';
import {
  Video as VideoIcon,
  CheckCircle,
  CreditCard,
  PlayCircle,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Clock,
  Sparkles,
  ArrowRight,
  Maximize2,
  Layers,
  Calculator,
  Sliders,
  Check,
  FileCheck,
  Radio,
  Camera,
  Activity,
} from 'lucide-react';
import { CAMPAIGN_STEPS } from '../data/mockData';

export default function ProcessSection({ onEnquireClick }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeCityRoute, setActiveCityRoute] = useState('mumbai');
  const [simulatedPlays, setSimulatedPlays] = useState(10480);
  const [screenFormat, setScreenFormat] = useState('side'); // 'side' | 'rear' | 'incab'

  // Interactive Compliance Audit Scanner State
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);

  // Interactive Live Rate Calculator State
  const [calcVans, setCalcVans] = useState(4);
  const [calcDays, setCalcDays] = useState(7);

  // Auto-increment simulated plays
  useEffect(() => {
    const playTimer = setInterval(() => {
      setSimulatedPlays((prev) => prev + 3);
    }, 1600);
    return () => clearInterval(playTimer);
  }, []);

  const routePresets = {
    mumbai: {
      name: 'Mumbai • Marine Drive, BKC & Worli Sea Link',
      density: 'Peak Arterial Flow (Index: 9.6/10)',
      estImpressions: '460,000 / day',
      vehicles: '12 LED Vans Active',
      videoUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    },
    bengaluru: {
      name: 'Bengaluru • Outer Ring Road & Indiranagar IT Corridor',
      density: 'High Tech Commuters (Index: 9.1/10)',
      estImpressions: '410,000 / day',
      vehicles: '10 LED Vans Active',
      videoUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
    },
    delhi: {
      name: 'Delhi NCR • CyberHub Gurgaon to Connaught Place',
      density: 'Massive Footfall & Traffic (Index: 9.8/10)',
      estImpressions: '520,000 / day',
      vehicles: '15 LED Vans Active',
      videoUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    },
  };

  const currentRoute = routePresets[activeCityRoute];

  const handleRunAuditScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1400);
  };

  // Calculator formulas
  const calculatedTotalPlays = calcVans * calcDays * 2500;
  const calculatedEstimatedViews = (calculatedTotalPlays * 28).toLocaleString();
  const estimatedCost = (calcVans * calcDays * 7500).toLocaleString('en-IN');

  return (
    <View style={styles.sectionWrapper} nativeID="process">
      <div className="bg-grid" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.5, pointerEvents: 'none' }} />

      <View style={styles.container}>
        {/* Section Header */}
        <View style={styles.headerBlock}>
          <div className="shimmer-badge" style={{ alignSelf: 'center', marginBottom: '14px' }}>
            <View style={styles.sectionBadge}>
              <Layers size={14} color="#065F46" />
              <Text style={styles.sectionBadgeText}>HOW ADOVER WORKS</Text>
            </View>
          </div>

          <Text style={styles.sectionTitle}>
            From Creative Video to <Text style={styles.greenText}>10,000+ Screen Plays</Text>
          </Text>
          <Text style={styles.sectionSubtitle}>
            A streamlined 4-step execution framework. Upload your brand video, receive rapid
            business compliance clearance, confirm your booking, and broadcast across city streets.
          </Text>
        </View>

        {/* STEP 1 & VIDEO SHOWCASE: The Transit Video Player */}
        <View style={styles.videoShowcaseCard} nativeID="video">
          <View style={styles.videoCardTop}>
            <View style={styles.videoInfoLeft}>
              <View style={styles.liveBadge}>
                <div style={{ position: 'relative', width: 10, height: 10 }}>
                  <div className="radar-ping" />
                  <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981', position: 'relative', zIndex: 2 }} />
                </div>
                <Text style={styles.liveBadgeText}>ON-ROAD BROADCAST REEL</Text>
              </View>
              <Text style={styles.videoTitleText}>{currentRoute.name}</Text>
            </View>

            {/* City Route Selector Tabs */}
            <View style={styles.routeTabs}>
              <TouchableOpacity
                style={[styles.routeTabBtn, activeCityRoute === 'mumbai' && styles.routeTabBtnActive]}
                onPress={() => setActiveCityRoute('mumbai')}
              >
                <Text style={[styles.routeTabText, activeCityRoute === 'mumbai' && styles.routeTabTextActive]}>
                  Mumbai Fleet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.routeTabBtn, activeCityRoute === 'bengaluru' && styles.routeTabBtnActive]}
                onPress={() => setActiveCityRoute('bengaluru')}
              >
                <Text style={[styles.routeTabText, activeCityRoute === 'bengaluru' && styles.routeTabTextActive]}>
                  Bengaluru Fleet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.routeTabBtn, activeCityRoute === 'delhi' && styles.routeTabBtnActive]}
                onPress={() => setActiveCityRoute('delhi')}
              >
                <Text style={[styles.routeTabText, activeCityRoute === 'delhi' && styles.routeTabTextActive]}>
                  Delhi NCR Fleet
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Video Mock Player Container */}
          <View style={styles.videoPlayerContainer}>
            <div
              style={{
                width: '100%',
                height: 420,
                position: 'relative',
                borderRadius: 18,
                overflow: 'hidden',
                backgroundColor: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={currentRoute.videoUrl}
                alt="Adover Transit Fleet in action"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: isPlaying ? 0.88 : 0.45,
                  transition: 'opacity 0.4s ease',
                  filter: 'contrast(105%) brightness(95%)',
                }}
              />

              {/* Glowing High Brightness Mobile Screen Overlay Simulation */}
              <div
                style={{
                  position: 'absolute',
                  top: '16%',
                  left: '10%',
                  right: '10%',
                  bottom: '22%',
                  border: '3px solid #10B981',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(6, 78, 59, 0.82)',
                  backdropFilter: 'blur(6px)',
                  boxShadow: '0 0 40px rgba(16, 185, 129, 0.65), inset 0 0 25px rgba(250, 204, 21, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px',
                  color: '#FFFFFF',
                  pointerEvents: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      background: '#FACC15',
                      color: '#0F172A',
                      fontWeight: 900,
                      fontSize: 12,
                      padding: '4px 10px',
                      borderRadius: 6,
                      letterSpacing: '0.5px',
                    }}
                  >
                    ★ ADOVER ULTRA-BRIGHT P3 LED DISPLAY
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#A7F3D0' }}>
                    LIVE ROTATION SLOT #4 • GPS SYNC ACTIVE
                  </span>
                </div>

                <div style={{ textAlign: 'center', margin: 'auto' }}>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 900,
                      color: '#FACC15',
                      textShadow: '0 2px 14px rgba(0,0,0,0.9)',
                      letterSpacing: '1px',
                    }}
                  >
                    YOUR 15s BRAND VIDEO RUNS HERE
                  </div>
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginTop: '8px',
                      textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                    }}
                  >
                    Direct Visibility to 45,000+ Drivers & Pedestrians Per Traffic Signal
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, opacity: 0.95 }}>
                  <span>📍 GPS Telemetry: {currentRoute.name}</span>
                  <span>⚡ 6,500 Nits Anti-Glare Daylight Display</span>
                </div>
              </div>

              {/* Player Bottom Control Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)',
                  padding: '16px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  zIndex: 10,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      background: '#FACC15',
                      border: 'none',
                      borderRadius: '50%',
                      width: 42,
                      height: 42,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 10px rgba(250, 204, 21, 0.5)',
                      transform: 'scale(1)',
                      transition: 'transform 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    {isPlaying ? <Pause size={20} color="#064E3B" /> : <Play size={20} color="#064E3B" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '10px',
                      padding: '8px 14px',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    <span>{isMuted ? 'Muted' : 'Sound Sync Active'}</span>

                    {/* Animated Equalizer Bars when Sound is Active */}
                    {!isMuted && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 18, marginLeft: 4 }}>
                        <div className="eq-bar-1" style={{ width: 3, backgroundColor: '#FACC15', borderRadius: 2 }} />
                        <div className="eq-bar-2" style={{ width: 3, backgroundColor: '#10B981', borderRadius: 2 }} />
                        <div className="eq-bar-3" style={{ width: 3, backgroundColor: '#FACC15', borderRadius: 2 }} />
                        <div className="eq-bar-4" style={{ width: 3, backgroundColor: '#10B981', borderRadius: 2 }} />
                      </div>
                    )}
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#E2E8F0', fontSize: 13, fontWeight: 700 }}>
                  <span>{currentRoute.estImpressions}</span>
                  <span style={{ color: '#10B981' }}>● {currentRoute.vehicles}</span>
                </div>
              </div>
            </div>
          </View>
        </View>

        {/* Luminous Connecting Progress Conduit Line */}
        <div
          className="flow-conduit"
          style={{
            height: '4px',
            width: '100%',
            borderRadius: '2px',
            marginBottom: '24px',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
          }}
        />

        {/* 4 INTERACTIVE STEP CARDS (Video -> Approval -> Payment -> 10,000 Plays) */}
        <View style={styles.stepsGrid}>
          {/* STEP 1: Video Submission */}
          <TouchableOpacity
            style={[styles.stepCard, activeStepIndex === 0 && styles.stepCardActive]}
            onPress={() => setActiveStepIndex(0)}
            activeOpacity={0.9}
          >
            <View style={styles.stepTopRow}>
              <View style={[styles.stepIconWrap, { backgroundColor: '#FEF3C7' }]}>
                <VideoIcon size={22} color="#B45309" />
              </View>
              <View style={styles.stepNumberBadge}>
                <Text style={styles.stepNumberText}>STEP 01</Text>
              </View>
            </View>

            <Text style={styles.stepCardTitle}>Video Submission</Text>
            <Text style={styles.stepCardDesc}>
              Upload your 15s or 30s creative video ad (Full HD / 4K). Specify your target routes,
              sound sync options, and broadcast time slots.
            </Text>

            <View style={styles.stepFeaturesList}>
              <View style={styles.stepFeatureItem}>
                <CheckCircle size={14} color="#059669" />
                <Text style={styles.stepFeatureText}>1080p / 4K 60FPS Video</Text>
              </View>
              <View style={styles.stepFeatureItem}>
                <CheckCircle size={14} color="#059669" />
                <Text style={styles.stepFeatureText}>Custom Audio Equalizer</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* STEP 2: Business Approval */}
          <TouchableOpacity
            style={[styles.stepCard, activeStepIndex === 1 && styles.stepCardActive]}
            onPress={() => setActiveStepIndex(1)}
            activeOpacity={0.9}
          >
            <View style={styles.stepTopRow}>
              <View style={[styles.stepIconWrap, { backgroundColor: '#D1FAE5' }]}>
                <ShieldCheck size={22} color="#065F46" />
              </View>
              <View style={[styles.stepNumberBadge, { backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }]}>
                <Text style={[styles.stepNumberText, { color: '#065F46' }]}>STEP 02</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Text style={styles.stepCardTitle}>Business Approval</Text>
              <View style={styles.quickApprovalPill}>
                <Clock size={11} color="#065F46" />
                <Text style={styles.quickApprovalText}>2-Hr SLA</Text>
              </View>
            </View>

            <Text style={styles.stepCardDesc}>
              Automated compliance check ensuring all municipal advertising permits, traffic RTO clearances,
              and brand safety guidelines are verified seamlessly.
            </Text>

            <View style={styles.stepFeaturesList}>
              <View style={styles.stepFeatureItem}>
                <CheckCircle size={14} color="#059669" />
                <Text style={styles.stepFeatureText}>100% RTO & Municipal Clearance</Text>
              </View>
              <View style={styles.stepFeatureItem}>
                <CheckCircle size={14} color="#059669" />
                <Text style={styles.stepFeatureText}>Instant Verification Scanner</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* STEP 3: Payment */}
          <TouchableOpacity
            style={[styles.stepCard, activeStepIndex === 2 && styles.stepCardActive]}
            onPress={() => setActiveStepIndex(2)}
            activeOpacity={0.9}
          >
            <View style={styles.stepTopRow}>
              <View style={[styles.stepIconWrap, { backgroundColor: '#FEF9C3' }]}>
                <CreditCard size={22} color="#854D0E" />
              </View>
              <View style={[styles.stepNumberBadge, { backgroundColor: '#FEF9C3', borderColor: '#FDE68A' }]}>
                <Text style={[styles.stepNumberText, { color: '#854D0E' }]}>STEP 03</Text>
              </View>
            </View>

            <Text style={styles.stepCardTitle}>Flexible Payment</Text>
            <Text style={styles.stepCardDesc}>
              Confirm your campaign schedule with transparent, upfront slot reservation. Split milestone
              payments with secure escrow protection and GST invoicing.
            </Text>

            <View style={styles.stepFeaturesList}>
              <View style={styles.stepFeatureItem}>
                <CheckCircle size={14} color="#059669" />
                <Text style={styles.stepFeatureText}>GST Invoicing & Tax Receipts</Text>
              </View>
              <View style={styles.stepFeatureItem}>
                <CheckCircle size={14} color="#059669" />
                <Text style={styles.stepFeatureText}>Escrow Proof Guarantee</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* STEP 4: 10,000 Plays */}
          <TouchableOpacity
            style={[
              styles.stepCard,
              activeStepIndex === 3 && styles.stepCardActive,
              styles.stepCardSpecial,
            ]}
            onPress={() => setActiveStepIndex(3)}
            activeOpacity={0.9}
            nativeID="plays"
          >
            <View style={styles.stepTopRow}>
              <View style={[styles.stepIconWrap, { backgroundColor: '#10B981' }]}>
                <PlayCircle size={22} color="#FFFFFF" />
              </View>
              <View style={[styles.stepNumberBadge, { backgroundColor: '#FEF08A', borderColor: '#EAB308' }]}>
                <Text style={[styles.stepNumberText, { color: '#713F12' }]}>★ STEP 04</Text>
              </View>
            </View>

            <Text style={[styles.stepCardTitle, { color: '#064E3B' }]}>
              10,000+ Screen Plays
            </Text>
            <Text style={styles.stepCardDesc}>
              High-intensity rotation across designated prime transit corridors. Guaranteed 10,000+ plays
              backed by millisecond timestamp audit logs and live GPS telemetry.
            </Text>

            {/* Live Counter Pill */}
            <View style={styles.playCounterPill}>
              <View>
                <Text style={styles.playCounterLabel}>Current Verified Plays</Text>
                <Text style={styles.playCounterValue}>
                  {simulatedPlays.toLocaleString()}+ Plays
                </Text>
              </View>
              <Sparkles size={20} color="#059669" />
            </View>
          </TouchableOpacity>
        </View>

        {/* DYNAMIC INTERACTIVE WIDGET FOR SELECTED STEP */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '2px solid #E2E8F0',
            padding: '32px',
            boxShadow: '0 10px 35px rgba(0, 0, 0, 0.05)',
            marginBottom: '10px',
          }}
        >
          {activeStepIndex === 0 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#B45309', background: '#FEF3C7', padding: '4px 10px', borderRadius: 6 }}>
                    STEP 1 SPECS
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 8 }}>
                    Creative Video Formats & Supported Displays
                  </h3>
                </div>
                <button
                  onClick={onEnquireClick}
                  style={interactiveCtaBtnStyle}
                >
                  <span>Submit Brand Video</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                <div style={stepWidgetBox}>
                  <h4 style={widgetBoxTitle}>1. Ultra-Wide P3 Side Panels</h4>
                  <p style={widgetBoxDesc}>12ft x 6ft full LED cabinet. 1920x1080 Landscape, 60fps, 6,500 Nits brightness.</p>
                  <span style={widgetTagGreen}>Recommended For Highway & City Roads</span>
                </div>
                <div style={stepWidgetBox}>
                  <h4 style={widgetBoxTitle}>2. Rear Billboard Display</h4>
                  <p style={widgetBoxDesc}>High dwell-time rear display targeting drivers stopped directly behind the transit van.</p>
                  <span style={widgetTagYellow}>100% Traffic Signal Focus</span>
                </div>
                <div style={stepWidgetBox}>
                  <h4 style={widgetBoxTitle}>3. In-Cab Interactive Tablet</h4>
                  <p style={widgetBoxDesc}>10.1-inch 2K touch screen placed behind headrests for QR clicks & direct lead capture.</p>
                  <span style={widgetTagGreen}>Direct Clickthrough & Coupons</span>
                </div>
              </div>
            </div>
          )}

          {activeStepIndex === 1 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#065F46', background: '#D1FAE5', padding: '4px 10px', borderRadius: 6 }}>
                    STEP 2 AUTOMATED COMPLIANCE
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 8 }}>
                    AI Regulatory & Municipal Clearance Checker
                  </h3>
                </div>
                <button
                  onClick={handleRunAuditScan}
                  disabled={isScanning}
                  style={{
                    ...interactiveCtaBtnStyle,
                    backgroundColor: isScanning ? '#CBD5E1' : '#10B981',
                    borderColor: '#059669',
                    color: '#FFFFFF',
                  }}
                >
                  <Sparkles size={16} />
                  <span>{isScanning ? 'Scanning City Bylaws...' : 'Run Compliance Scan'}</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                <div style={{ ...stepWidgetBox, borderLeft: '4px solid #10B981' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#065F46', fontWeight: 800 }}>
                    <CheckCircle size={18} />
                    <span>RTO Transit Safety Permit</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                    Standard vehicle modification certificate verified for commercial LED operation.
                  </p>
                  <span style={{ fontSize: 11, color: '#059669', fontWeight: 700 }}>STATUS: CLEARED ✓</span>
                </div>

                <div style={{ ...stepWidgetBox, borderLeft: '4px solid #10B981' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#065F46', fontWeight: 800 }}>
                    <CheckCircle size={18} />
                    <span>Municipal Advertising License</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                    Brihanmumbai / BBMP / MCD municipal outdoor media clearance certificates issued.
                  </p>
                  <span style={{ fontSize: 11, color: '#059669', fontWeight: 700 }}>STATUS: PRE-APPROVED ✓</span>
                </div>

                <div style={{ ...stepWidgetBox, borderLeft: '4px solid #10B981' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#065F46', fontWeight: 800 }}>
                    <CheckCircle size={18} />
                    <span>Luminosity & Anti-Glare Index</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                    Dynamic light sensors ensure nighttime dimming compliance with zero driver distraction.
                  </p>
                  <span style={{ fontSize: 11, color: '#059669', fontWeight: 700 }}>STATUS: 100% EYE SAFE ✓</span>
                </div>
              </div>
            </div>
          )}

          {activeStepIndex === 2 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#854D0E', background: '#FEF9C3', padding: '4px 10px', borderRadius: 6 }}>
                    STEP 3 INSTANT ESTIMATOR
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 8 }}>
                    Interactive Fleet & Pricing Calculator
                  </h3>
                </div>
                <button onClick={onEnquireClick} style={interactiveCtaBtnStyle}>
                  <span>Lock Slots At This Rate</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Sliders Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1.5px solid #E2E8F0' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#334155' }}>Allocated LED Vans:</span>
                    <span style={{ fontSize: 16, fontWeight: 900, color: '#065F46' }}>{calcVans} Vans</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={calcVans}
                    onChange={(e) => setCalcVans(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94A3B8', marginTop: 4 }}>
                    <span>1 Van</span>
                    <span>15 Vans (City Blitz)</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#334155' }}>Campaign Duration:</span>
                    <span style={{ fontSize: 16, fontWeight: 900, color: '#D97706' }}>{calcDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="30"
                    value={calcDays}
                    onChange={(e) => setCalcDays(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#FACC15', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94A3B8', marginTop: 4 }}>
                    <span>3 Days</span>
                    <span>30 Days (Full Month)</span>
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '12px 18px', borderRadius: '12px', border: '1.5px solid #CBD5E1' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: 11, color: '#64748B', fontWeight: 700, display: 'block' }}>TOTAL PLAYS</span>
                    <span style={{ fontSize: 20, fontWeight: 900, color: '#059669' }}>{calculatedTotalPlays.toLocaleString()}</span>
                  </div>
                  <div style={{ width: 1, height: 32, backgroundColor: '#E2E8F0' }} />
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: 11, color: '#64748B', fontWeight: 700, display: 'block' }}>EST. EYEBALLS</span>
                    <span style={{ fontSize: 20, fontWeight: 900, color: '#D97706' }}>{calculatedEstimatedViews}</span>
                  </div>
                  <div style={{ width: 1, height: 32, backgroundColor: '#E2E8F0' }} />
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: 11, color: '#64748B', fontWeight: 700, display: 'block' }}>EST. RATE</span>
                    <span style={{ fontSize: 20, fontWeight: 900, color: '#0F172A' }}>₹{estimatedCost}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStepIndex === 3 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#065F46', background: '#D1FAE5', padding: '4px 10px', borderRadius: 6 }}>
                    STEP 4 LIVE BROADCAST AUDIT
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginTop: 8 }}>
                    10,000+ Verified Plays: Tamper-Proof Audit System
                  </h3>
                </div>
                <button onClick={onEnquireClick} style={interactiveCtaBtnStyle}>
                  <span>Launch 10,000 Plays Campaign</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                <div style={{ ...stepWidgetBox, backgroundColor: '#FEFCE8', border: '1.5px solid #FEF08A' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#854D0E', fontWeight: 800 }}>
                    <Camera size={18} />
                    <span>Real-Time Photo Proof-of-Play</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#713F12', marginTop: 4 }}>
                    Automated vehicle cameras snapshot your ad every 50 plays with GPS location and time stamps.
                  </p>
                  <span style={{ fontSize: 11, color: '#A16207', fontWeight: 800 }}>
                    ✓ 100% AUDITABLE LOGS
                  </span>
                </div>

                <div style={{ ...stepWidgetBox, backgroundColor: '#ECFDF5', border: '1.5px solid #A7F3D0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#065F46', fontWeight: 800 }}>
                    <Radio size={18} />
                    <span>IoT Telemetry & Geo-Fencing</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#064E3B', marginTop: 4 }}>
                    Live GPS tracker ensures vans operate strictly within your contracted target corridors.
                  </p>
                  <span style={{ fontSize: 11, color: '#059669', fontWeight: 800 }}>
                    ✓ ZERO ROUTE LEAKAGE
                  </span>
                </div>

                <div style={{ ...stepWidgetBox, backgroundColor: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0F172A', fontWeight: 800 }}>
                    <TrendingUp size={18} />
                    <span>Audited Completion Certificate</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                    Receive a consolidated media certification detailing exact plays, route coverage, and footfall heatmaps.
                  </p>
                  <span style={{ fontSize: 11, color: '#0F172A', fontWeight: 800 }}>
                    ✓ DELIVERED AT CAMPAIGN END
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </View>
    </View>
  );
}

const interactiveCtaBtnStyle = {
  backgroundColor: '#FACC15',
  border: '2px solid #EAB308',
  borderRadius: '24px',
  padding: '10px 20px',
  fontWeight: 800,
  fontSize: '13px',
  color: '#064E3B',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  boxShadow: '0 4px 14px rgba(234, 179, 8, 0.4)',
};

const stepWidgetBox = {
  backgroundColor: '#F8FAFC',
  borderRadius: '14px',
  border: '1.5px solid #E2E8F0',
  padding: '18px',
};

const widgetBoxTitle = {
  fontSize: '15px',
  fontWeight: 800,
  color: '#0F172A',
  margin: '0 0 6px 0',
};

const widgetBoxDesc = {
  fontSize: '12px',
  lineHeight: '19px',
  color: '#64748B',
  margin: '0 0 10px 0',
};

const widgetTagGreen = {
  display: 'inline-block',
  fontSize: '10px',
  fontWeight: 800,
  color: '#065F46',
  backgroundColor: '#D1FAE5',
  padding: '3px 8px',
  borderRadius: '6px',
};

const widgetTagYellow = {
  display: 'inline-block',
  fontSize: '10px',
  fontWeight: 800,
  color: '#854D0E',
  backgroundColor: '#FEF9C3',
  padding: '3px 8px',
  borderRadius: '6px',
};

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    position: 'relative',
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
    marginBottom: 44,
  },
  sectionBadge: {
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
  sectionBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 14,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  greenText: {
    color: '#059669',
  },
  sectionSubtitle: {
    fontSize: 16,
    lineHeight: 25,
    color: '#64748B',
    textAlign: 'center',
  },
  videoShowcaseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    padding: 24,
    marginBottom: 32,
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.05)',
  },
  videoCardTop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 20,
  },
  videoInfoLeft: {
    gap: 6,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ECFDF5',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  liveBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 0.5,
  },
  videoTitleText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  routeTabs: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#F1F5F9',
    padding: 4,
    borderRadius: 14,
  },
  routeTabBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  routeTabBtnActive: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
  },
  routeTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  routeTabTextActive: {
    color: '#064E3B',
    fontWeight: '800',
  },
  videoPlayerContainer: {
    width: '100%',
    borderRadius: 18,
    overflow: 'hidden',
  },
  stepsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginBottom: 32,
  },
  stepCard: {
    flex: 1,
    minWidth: 260,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    padding: 22,
    transition: 'all 0.25s ease',
  },
  stepCardActive: {
    borderColor: '#10B981',
    backgroundColor: '#F0FDF4',
    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.15)',
  },
  stepCardSpecial: {
    borderColor: '#FACC15',
    backgroundColor: '#FEFCE8',
  },
  stepTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberBadge: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  stepNumberText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  stepCardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
  },
  quickApprovalPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#ECFDF5',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  quickApprovalText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#065F46',
  },
  stepCardDesc: {
    fontSize: 13,
    lineHeight: 20,
    color: '#64748B',
    marginBottom: 16,
  },
  stepFeaturesList: {
    gap: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  stepFeatureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepFeatureText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
  },
  playCounterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#10B981',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  playCounterLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
    textTransform: 'uppercase',
  },
  playCounterValue: {
    fontSize: 16,
    fontWeight: '900',
    color: '#065F46',
  },
});
