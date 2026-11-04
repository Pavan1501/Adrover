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
  BellRing,
  Sun,
  Moon,
} from 'lucide-react';

export default function HeroSection({ onEnquireClick, onExploreProcess, onWatchDemo }) {
  const [livePlayCount, setLivePlayCount] = useState(8492);
  const [customBrandName, setCustomBrandName] = useState('YOUR BRAND');
  const [customTagline, setCustomTagline] = useState('OWN CITY STREETS TODAY');
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [speed, setSpeed] = useState(28);
  const [isHonking, setIsHonking] = useState(false);
  const [screenDayNight, setScreenDayNight] = useState('day'); // 'day' | 'night'

  // Live play counter ticking simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePlayCount((prev) => (prev >= 10000 ? 8400 : prev + 1));
      setSpeed(Math.floor(24 + Math.random() * 8));
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const campaignPresets = [
    { brand: 'ZOMATO 10-MIN', tagline: 'HOT CRAVINGS DELIVERED FAST', themeColor: '#EF4444', bg: '#450A0A', category: 'Food Tech' },
    { brand: 'TATA EV NEXON', tagline: 'DRIVE THE ELECTRIC REVOLUTION', themeColor: '#10B981', bg: '#064E3B', category: 'Automotive' },
    { brand: 'SWIGGY INSTAMART', tagline: 'GROCERIES AT YOUR TRAFFIC SIGNAL', themeColor: '#F97316', bg: '#431407', category: 'Quick Commerce' },
    { brand: 'NIKE AIR MAX', tagline: 'SPEED MEETS UNSTOPPABLE STYLE', themeColor: '#FACC15', bg: '#1E1B4B', category: 'Lifestyle' },
  ];

  const handleApplyPreset = (idx) => {
    setSelectedPresetIndex(idx);
    setCustomBrandName(campaignPresets[idx].brand);
    setCustomTagline(campaignPresets[idx].tagline);
  };

  // Fun interactive truck horn sound via Web Audio API
  const playTruckHorn = () => {
    setIsHonking(true);
    setTimeout(() => setIsHonking(false), 500);
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(340, audioCtx.currentTime); // Dual tone truck horn
      osc2.frequency.setValueAtTime(420, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(audioCtx.currentTime + 0.45);
      osc2.stop(audioCtx.currentTime + 0.45);
    } catch (e) {
      // Audio context might be restricted before gesture
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '48px',
        paddingBottom: '36px',
      }}
      id="about"
    >
      {/* Ambient Mesh Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '560px',
          height: '560px',
          borderRadius: '280px',
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.16) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '200px',
          left: '-120px',
          width: '500px',
          height: '500px',
          borderRadius: '250px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />
      <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.5, pointerEvents: 'none' }} />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left Column: Hero Content */}
        <div style={{ flex: '1 1 540px', maxWidth: '640px' }}>
          {/* Top Pill with Shimmer effect */}
          <div className="shimmer-badge" style={{ display: 'inline-block', marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#ECFDF5',
                border: '1.5px solid #A7F3D0',
                padding: '6px 16px',
                borderRadius: '30px',
                boxShadow: '0 2px 10px rgba(16, 185, 129, 0.15)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981' }} />
              <Sparkles size={14} color="#065F46" />
              <span style={{ fontSize: 12, fontWeight: 800, color: '#065F46', letterSpacing: '0.4px' }}>
                India's #1 Mobile LED Transit DOOH Network
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 900,
              lineHeight: '56px',
              color: '#0F172A',
              marginBottom: '20px',
              letterSpacing: '-0.03em',
            }}
          >
            Turn High-Density City Roads into Your{' '}
            <span style={{ color: '#059669', textDecoration: 'underline', textDecorationColor: '#A7F3D0' }}>
              High-Converting
            </span>{' '}
            <span style={{ color: '#D97706' }}>
              Digital Billboard
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: '17px',
              lineHeight: '28px',
              color: '#475569',
              marginBottom: '28px',
            }}
          >
            Adover commands metropolitan traffic with double-sided, ultra-bright P3 LED display vans.
            Broadcast your brand video right in front of commuters at busy traffic junctions with verified{' '}
            <strong style={{ color: '#065F46', fontWeight: 800 }}>10,000+ daily screen plays</strong> and live GPS telemetry.
          </p>

          {/* CTA Row with Spring Micro-Interactions */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '26px' }}>
            <button
              onClick={onEnquireClick}
              style={{
                background: 'linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)',
                border: '2px solid #EAB308',
                borderRadius: '32px',
                padding: '15px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                fontWeight: 900,
                fontSize: '15px',
                color: '#064E3B',
                boxShadow: '0 8px 25px rgba(234, 179, 8, 0.45)',
              }}
            >
              <span>Book Campaign Enquiry</span>
              <div style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: '#FEF08A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={16} color="#064E3B" />
              </div>
            </button>

            <button
              onClick={onWatchDemo}
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #10B981',
                borderRadius: '32px',
                padding: '14px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: '14px',
                color: '#064E3B',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)',
              }}
            >
              <div style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={13} color="#059669" fill="#059669" />
              </div>
              <span>Watch Transit Reel</span>
            </button>

            {/* Fun Truck Horn Button */}
            <button
              onClick={playTruckHorn}
              style={{
                backgroundColor: isHonking ? '#FACC15' : '#FFFFFF',
                border: '2px solid #E2E8F0',
                borderRadius: '24px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: '13px',
                color: '#064E3B',
                boxShadow: isHonking ? '0 0 20px rgba(250, 204, 21, 0.6)' : '0 2px 8px rgba(0,0,0,0.04)',
                transform: isHonking ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.15s ease',
              }}
              title="Click to test authentic transit van horn"
            >
              <BellRing size={16} color={isHonking ? '#064E3B' : '#059669'} />
              <span>{isHonking ? 'HONK! 🎺' : 'Honk Horn'}</span>
            </button>
          </div>

          {/* Interactive "Try Your Brand Live On Screen" Mini Controller */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '2px solid #E2E8F0',
              padding: '20px 22px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sliders size={16} color="#059669" />
                <span style={{ fontSize: '13px', fontWeight: 900, color: '#0F172A', letterSpacing: '0.4px' }}>
                  TYPE YOUR BRAND ON THE MOVING SCREEN
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 800, background: '#ECFDF5', padding: '3px 8px', borderRadius: '6px' }}>
                ● Real-Time Simulator
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <input
                type="text"
                placeholder="Type brand name..."
                value={customBrandName}
                onChange={(e) => setCustomBrandName(e.target.value.toUpperCase())}
                style={{
                  flex: 1,
                  minWidth: '160px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '13px',
                  fontWeight: 900,
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
                  flex: 1.3,
                  minWidth: '180px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '13px',
                  color: '#334155',
                  backgroundColor: '#F8FAFC',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#64748B' }}>Preset Brands:</span>
              {campaignPresets.map((preset, idx) => (
                <button
                  key={preset.brand}
                  onClick={() => handleApplyPreset(idx)}
                  style={{
                    backgroundColor: selectedPresetIndex === idx ? '#FACC15' : '#F1F5F9',
                    border: selectedPresetIndex === idx ? '1.5px solid #EAB308' : '1px solid #E2E8F0',
                    color: selectedPresetIndex === idx ? '#064E3B' : '#475569',
                    padding: '5px 12px',
                    borderRadius: '10px',
                    fontSize: '11px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: selectedPresetIndex === idx ? '0 2px 8px rgba(234, 179, 8, 0.3)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {preset.brand.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 3D High-Tech LED Van Simulator with Driving Physics */}
        <div style={{ flex: '1 1 500px', maxWidth: '580px', position: 'relative' }}>
          {/* Floating Live Badge 1 */}
          <div
            className="float-badge"
            style={{
              position: 'absolute',
              top: '-18px',
              left: '20px',
              zIndex: 20,
              background: '#FFFFFF',
              border: '2px solid #10B981',
              padding: '6px 14px',
              borderRadius: '20px',
              boxShadow: '0 8px 20px rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981' }} />
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#064E3B' }}>
              LIVE GPS: BKC ARTERIAL
            </span>
          </div>

          {/* Floating Live Badge 2 */}
          <div
            className="float-badge-delayed"
            style={{
              position: 'absolute',
              top: '-18px',
              right: '20px',
              zIndex: 20,
              background: '#FFFFFF',
              border: '2px solid #FACC15',
              padding: '6px 14px',
              borderRadius: '20px',
              boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Flame size={14} color="#D97706" />
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#854D0E' }}>
              54,000+ COMMUTER EYES
            </span>
          </div>

          {/* Main Truck Housing with Suspension Rumble Animation */}
          <div className="truck-rumble glow-pulse" style={{ width: '100%' }}>
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '2px solid #E2E8F0',
                padding: '24px',
                boxShadow: '0 20px 50px -10px rgba(16, 185, 129, 0.2)',
              }}
            >
              {/* Telemetry Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      backgroundColor: '#ECFDF5',
                      padding: '4px 10px',
                      borderRadius: 12,
                      border: '1px solid #A7F3D0',
                    }}
                  >
                    <Radio size={14} color="#10B981" />
                    <span style={{ fontSize: 10, fontWeight: 900, color: '#059669', letterSpacing: '0.5px' }}>
                      LIVE ON TRANSIT
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={12} color="#059669" />
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#334155' }}>
                      Mumbai • BKC to Worli Sea Link
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    backgroundColor: '#FEF9C3',
                    padding: '4px 10px',
                    borderRadius: 10,
                    border: '1px solid #FDE68A',
                  }}
                >
                  <Gauge size={13} color="#B45309" />
                  <span style={{ fontSize: 11, fontWeight: 900, color: '#B45309' }}>{speed} km/h</span>
                </div>
              </div>

              {/* High-Resolution Simulated Mobile LED Display Screen Frame */}
              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: 18,
                  padding: 12,
                  border: '4px solid #10B981',
                  boxShadow: '0 0 35px rgba(16, 185, 129, 0.45)',
                }}
              >
                <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <div
                    className="led-pixel-overlay"
                    style={{
                      backgroundColor: campaignPresets[selectedPresetIndex]?.bg || '#064E3B',
                      padding: '26px 22px',
                      minHeight: '220px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.65)',
                      transition: 'background-color 0.4s ease',
                    }}
                  >
                    {/* Laser Scanline Beam Sweeping Across Screen */}
                    <div className="laser-scan-line" />

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
                        <span style={{ fontSize: 11, fontWeight: 900, color: '#FACC15', letterSpacing: '1px' }}>
                          ROTATION #12
                        </span>
                        <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981' }} />
                      </div>
                    </div>

                    {/* Central Brand Content Broadcasted On The LED Van */}
                    <div style={{ textAlign: 'center', margin: '14px 0' }}>
                      <div
                        style={{
                          fontSize: '32px',
                          fontWeight: 900,
                          color: '#FACC15',
                          letterSpacing: '1.5px',
                          textShadow: '0 0 25px rgba(250, 204, 21, 0.8), 0 3px 8px rgba(0,0,0,0.9)',
                          textTransform: 'uppercase',
                          fontFamily: 'system-ui, sans-serif',
                          wordBreak: 'break-word',
                          transition: 'all 0.3s ease',
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
                        120° Wide Viewing Angle
                      </span>
                    </div>
                  </div>
                </div>

                {/* Truck Chassis with Rotating Wheels & Moving Asphalt Road */}
                <div
                  className="animated-road"
                  style={{
                    paddingTop: '12px',
                    paddingBottom: '8px',
                    paddingHorizontal: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ backgroundColor: '#334155', padding: '4px 10px', borderRadius: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: '#CBD5E1' }}>ADOVER FLEET 01</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Compass size={13} color="#94A3B8" />
                    <span style={{ fontSize: 10, color: '#64748B', fontWeight: 800 }}>GPS: 19.0760° N, 72.8777° E</span>
                  </div>

                  {/* Rotating Wheels */}
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div className="rotating-wheel" style={wheelStyle}>
                      <div style={wheelHubStyle} />
                    </div>
                    <div className="rotating-wheel" style={wheelStyle}>
                      <div style={wheelHubStyle} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '18px', paddingTop: '14px', borderTop: '1px solid #F1F5F9' }}>
                <div>
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748B', marginBottom: 2 }}>Today's Verified Plays</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 20, fontWeight: 900, color: '#059669' }}>
                      {livePlayCount.toLocaleString()}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#94A3B8' }}>/ 10,000</span>
                  </div>
                </div>

                <div style={{ width: 1, height: 32, backgroundColor: '#E2E8F0' }} />

                <div>
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748B', marginBottom: 2 }}>Live Street Footfall</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <Eye size={16} color="#059669" />
                    <span style={{ fontSize: 18, fontWeight: 900, color: '#D97706' }}>54.2K+</span>
                  </div>
                </div>

                <div style={{ width: 1, height: 32, backgroundColor: '#E2E8F0' }} />

                <button
                  onClick={() => {
                    const nextIdx = (selectedPresetIndex + 1) % campaignPresets.length;
                    handleApplyPreset(nextIdx);
                  }}
                  style={{
                    backgroundColor: '#ECFDF5',
                    padding: '8px 16px',
                    borderRadius: 16,
                    border: '1.5px solid #10B981',
                    fontSize: 12,
                    fontWeight: 800,
                    color: '#065F46',
                    cursor: 'pointer',
                  }}
                >
                  Next Ad Reel ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stats Strip with Floating Hover Micro-Interactions */}
      <div style={{ maxWidth: 1280, margin: '40px auto 0', padding: '0 24px' }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '2px solid #E2E8F0',
            padding: '24px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 200, flex: 1 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={22} color="#059669" />
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#0F172A' }}>10,000+</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Guaranteed Daily Plays</div>
            </div>
          </div>

          <div style={{ width: 1, height: 40, backgroundColor: '#E2E8F0' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 200, flex: 1 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eye size={22} color="#D97706" />
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#0F172A' }}>2.5 Million+</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Daily Commuter Views</div>
            </div>
          </div>

          <div style={{ width: 1, height: 40, backgroundColor: '#E2E8F0' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 200, flex: 1 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={22} color="#059669" />
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#0F172A' }}>99.8%</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Audited Proof-of-Play Rate</div>
            </div>
          </div>

          <div style={{ width: 1, height: 40, backgroundColor: '#E2E8F0' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 200, flex: 1 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={22} color="#B45309" />
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#0F172A' }}>150+ Brands</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Trust Adover Transit Media</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const wheelStyle = {
  width: '26px',
  height: '26px',
  borderRadius: '13px',
  backgroundColor: '#0F172A',
  border: '3px solid #64748B',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const wheelHubStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '4px',
  backgroundColor: '#FACC15',
  border: '1px solid #0F172A',
};
