// src/components/InteractiveFeed.jsx
import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Tv,
  Zap,
  Gauge,
  MapPin,
  Radio,
  Sliders,
  CheckCircle,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  PlayCircle,
  Clock,
  Camera,
  TrendingUp,
  Award,
  Sun,
  Moon,
  Send,
  Upload,
  FileText,
  PhoneCall,
  Check,
  Compass,
  BellRing,
  Quote,
} from 'lucide-react';
import { CAMPAIGN_STEPS, PARTNER_COMPANIES } from '../data/mockData';

export default function InteractiveFeed({ activeSection, onSectionInView }) {
  // 1. Live Simulator State
  const [customBrandName, setCustomBrandName] = useState('YOUR BRAND');
  const [customTagline, setCustomTagline] = useState('COMMAND CITY ROADS');
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [speed, setSpeed] = useState(28);
  const [livePlayCount, setLivePlayCount] = useState(8492);
  const [isHonking, setIsHonking] = useState(false);

  // 2. Video Player State
  const [activeCityRoute, setActiveCityRoute] = useState('mumbai');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // 3. Process Engine State
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [calcVans, setCalcVans] = useState(4);
  const [calcDays, setCalcDays] = useState(7);
  const [simulatedPlays, setSimulatedPlays] = useState(10480);

  // 4. Partner Marquee State
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 5. Luminosity State
  const [luminosityLevel, setLuminosityLevel] = useState(6500);

  // 6. Enquiry Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    mediaType: 'Mobile LED Van (12ft x 6ft P3)',
    dailyPlays: '10,000 Plays / Day',
    duration: '7 Days (1 Week)',
    routes: ['Commercial & Financial Hubs (BKC, CyberHub)', 'High-Traffic Arterial Roads & Flyovers'],
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Live tickers
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePlayCount((prev) => (prev >= 10000 ? 8400 : prev + 1));
      setSimulatedPlays((prev) => prev + 3);
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
      osc1.frequency.setValueAtTime(340, audioCtx.currentTime);
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
    } catch (e) {}
  };

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
    setTimeout(() => setIsScanning(false), 1400);
  };

  const calculatedTotalPlays = calcVans * calcDays * 2500;
  const calculatedEstimatedViews = (calculatedTotalPlays * 28).toLocaleString();
  const estimatedCost = (calcVans * calcDays * 7500).toLocaleString('en-IN');

  const categories = ['All', 'Automotive', 'Food & Dining', 'Quick Commerce', 'Fintech', 'Retail'];
  const filteredCompanies = selectedCategory === 'All'
    ? PARTNER_COMPANIES
    : PARTNER_COMPANIES.filter((c) => c.category.toLowerCase().includes(selectedCategory.toLowerCase()));
  
  // Create 2 tracks for rich continuous sliding without dead gaps
  const marqueeList1 = [...filteredCompanies, ...filteredCompanies];
  const marqueeList2 = [...filteredCompanies.slice().reverse(), ...filteredCompanies.slice().reverse()];

  const handleRouteToggle = (route) => {
    setFormData((prev) => {
      const exists = prev.routes.includes(route);
      return {
        ...prev,
        routes: exists ? prev.routes.filter((r) => r !== route) : [...prev.routes, route],
      };
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setBookingId(`ADV-2026-${randomNum}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const isNight = luminosityLevel < 4000;
  const brightnessFactor = (luminosityLevel / 6500) * 0.4 + 0.6;

  return (
    <div
      style={{
        padding: '24px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* SECTION 01: Fleet Video Reel & P3 Specs */}
      <section id="video-reel" style={feedSectionStyle}>
        <div style={sectionTagHeader}>
          <span className="font-mono" style={sectionTagMono}>[01] Capabilities & Live Screen</span>
          <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--action)', fontWeight: 700 }}>
            ● P3 Ultra HD 6,500 Nits Active
          </span>
        </div>

        <h2 style={sectionTitleStyle}>
          On-Road Fleet Broadcast Reel & Screen Simulator
        </h2>
        <p style={sectionDescStyle}>
          Experience how brand video loops broadcast seamlessly at high-traffic intersections.
          Dual-sided P3 LED display van driving live across prime urban arteries.
        </p>

        {/* Live Simulator Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1.5px solid var(--hairline)',
            borderRadius: '3px',
            padding: '16px 18px',
            boxShadow: '0 4px 20px rgba(9, 9, 7, 0.03)',
            marginBottom: '16px',
          }}
        >
          {/* Top Status */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'var(--action)' }} />
              <span className="font-mono" style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--action)', fontWeight: 800 }}>
                Live Transit: BKC to Worli Sea Link
              </span>
            </div>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--amber)', fontWeight: 800 }}>
              {speed} KM/H • GPS LOCK ACTIVE
            </div>
          </div>

          {/* LED Screen Mockup */}
          <div
            style={{
              backgroundColor: '#090907',
              borderRadius: '4px',
              padding: '8px',
              border: '2px solid #10B981',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.25)',
            }}
          >
            <div
              className="led-pixel-overlay"
              style={{
                backgroundColor: campaignPresets[selectedPresetIndex]?.bg || '#064E3B',
                padding: '24px 20px',
                minHeight: '170px',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease',
              }}
            >
              <div className="laser-scan-line" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '9.5px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.06em', background: 'rgba(255,255,255,0.2)', padding: '2px 7px', borderRadius: 2 }}>
                  P3 ULTRA HD • 6,500 NITS
                </span>
                <span className="font-mono" style={{ fontSize: '10px', color: '#FACC15', fontWeight: 800 }}>
                  ROTATION #12 • LIVE PLAY
                </span>
              </div>

              <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <div style={{ fontSize: '26px', fontWeight: 900, color: '#FACC15', letterSpacing: '1px', textTransform: 'uppercase', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  {customBrandName || 'YOUR BRAND'}
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#FFFFFF', marginTop: '4px', letterSpacing: '0.02em' }}>
                  {customTagline || 'COMMAND URBAN STREETS'}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10.5px', color: '#A7F3D0' }}>
                <span className="font-mono">★ 120° Wide Viewing Arc</span>
                <span className="font-mono">10,000+ Verified Screen Plays</span>
              </div>
            </div>

            {/* Driving Road Beneath Truck */}
            <div
              className="animated-road"
              style={{
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#1E293B',
                marginTop: '4px',
                borderRadius: '2px',
              }}
            >
              <span className="font-mono" style={{ fontSize: '9.5px', fontWeight: 800, color: '#CBD5E1' }}>
                ADOVER FLEET 01 • REAL-TIME ROAD TELEMETRY
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div className="rotating-wheel" style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#090907', border: '2px solid #64748B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#FACC15' }} />
                </div>
                <div className="rotating-wheel" style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#090907', border: '2px solid #64748B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#FACC15' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Typewriter mini-inputs */}
          <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--hairline)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div className="font-mono" style={{ fontSize: '9.5px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
                Test Your Brand On Screen:
              </div>
              <div style={{ display: 'flex', gap: '5px' }}>
                {campaignPresets.map((preset, idx) => (
                  <button
                    key={preset.brand}
                    onClick={() => handleApplyPreset(idx)}
                    className="font-mono"
                    style={{
                      fontSize: '9px',
                      padding: '2px 6px',
                      borderRadius: '2px',
                      border: selectedPresetIndex === idx ? '1px solid var(--fg)' : '1px solid var(--hairline)',
                      backgroundColor: selectedPresetIndex === idx ? '#FACC15' : '#FAFAFA',
                      color: '#090907',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {preset.category}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Brand name..."
                value={customBrandName}
                onChange={(e) => setCustomBrandName(e.target.value.toUpperCase())}
                style={miniInputStyle}
              />
              <input
                type="text"
                placeholder="Tagline / offer..."
                value={customTagline}
                onChange={(e) => setCustomTagline(e.target.value.toUpperCase())}
                style={{ ...miniInputStyle, flex: 1.4 }}
              />
              <button
                onClick={playTruckHorn}
                style={{
                  backgroundColor: isHonking ? '#FACC15' : '#FFFFFF',
                  border: '1.5px solid var(--hairline)',
                  padding: '7px 12px',
                  borderRadius: '2px',
                  fontSize: '11px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <BellRing size={13} color="var(--action)" />
                <span>{isHonking ? 'HONK!' : 'Horn 🎺'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Reel Showcase */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid var(--hairline)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--hairline)', backgroundColor: '#FAFAFA' }}>
            <span className="font-mono" style={{ fontSize: '10.5px', fontWeight: 800, textTransform: 'uppercase' }}>
              📍 {currentRoute.name}
            </span>
            <div style={{ display: 'flex', gap: '5px' }}>
              {['mumbai', 'bengaluru', 'delhi'].map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCityRoute(c)}
                  className="font-mono"
                  style={{
                    backgroundColor: activeCityRoute === c ? 'var(--fg)' : '#FFFFFF',
                    color: activeCityRoute === c ? '#FFFFFF' : 'var(--fg)',
                    border: '1px solid var(--hairline)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    fontSize: '9.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '260px', backgroundColor: '#090907' }}>
            <img
              src={currentRoute.videoUrl}
              alt="Adover Fleet"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isPlaying ? 0.85 : 0.45 }}
            />
            <div style={{ position: 'absolute', bottom: 10, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{ backgroundColor: '#FACC15', border: 'none', width: 30, height: 30, borderRadius: '2px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  style={{ backgroundColor: 'rgba(0,0,0,0.65)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)', padding: '0 8px', borderRadius: '2px', cursor: 'pointer', fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: 5 }}
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  <span className="font-mono">{isMuted ? 'Muted' : 'Sound Sync'}</span>
                </button>
              </div>
              <span className="font-mono" style={{ fontSize: '10.5px', color: '#A7F3D0', fontWeight: 700, backgroundColor: 'rgba(0,0,0,0.65)', padding: '3px 8px', borderRadius: 2 }}>
                EST: {currentRoute.estImpressions}
              </span>
            </div>
          </div>

          {/* Quick specs strip below video */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--hairline)', backgroundColor: '#FAFAFA' }}>
            <div style={{ padding: '8px 12px', borderRight: '1px solid var(--hairline)' }}>
              <div className="font-mono" style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>PANEL SIZE</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--fg)', marginTop: 2 }}>Dual 12ft x 6ft</div>
            </div>
            <div style={{ padding: '8px 12px', borderRight: '1px solid var(--hairline)' }}>
              <div className="font-mono" style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>PIXEL PITCH</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--action)', marginTop: 2 }}>P3 Ultra HD</div>
            </div>
            <div style={{ padding: '8px 12px', borderRight: '1px solid var(--hairline)' }}>
              <div className="font-mono" style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>FRAME RATE</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--fg)', marginTop: 2 }}>60 FPS Sync</div>
            </div>
            <div style={{ padding: '8px 12px' }}>
              <div className="font-mono" style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>AUDIO SYSTEM</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#D97706', marginTop: 2 }}>85 dB Directional</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: 4-Step Campaign Engine */}
      <section id="process-engine" style={feedSectionStyle}>
        <div style={sectionTagHeader}>
          <span className="font-mono" style={sectionTagMono}>[02] Campaign Execution Model</span>
          <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--action)', fontWeight: 700 }}>
            4-Step SLA Architecture
          </span>
        </div>

        <h2 style={sectionTitleStyle}>
          From Creative Video to 10,000+ Screen Plays
        </h2>
        <p style={sectionDescStyle}>
          A deterministic 4-stage pipeline ensuring compliance verification, transparent slot allocation,
          and tamper-proof timestamped proof-of-play logs.
        </p>

        {/* 4 Step Cards in Flush Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', marginBottom: '14px' }}>
          {CAMPAIGN_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                style={{
                  backgroundColor: isSelected ? '#FFFFFF' : '#FAFAFA',
                  border: isSelected ? '1.5px solid var(--fg)' : '1px solid var(--hairline)',
                  padding: '12px 14px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span className="font-mono" style={{ fontSize: '9.5px', fontWeight: 800, color: isSelected ? 'var(--action)' : 'var(--muted)' }}>
                    STEP {step.step}
                  </span>
                  {isSelected && <span style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: 'var(--action)' }} />}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--fg)', marginBottom: 2 }}>
                  {step.short}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.35 }}>
                  {step.badge}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Container */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid var(--hairline)', borderRadius: '3px', padding: '16px 20px' }}>
          {activeStepIndex === 0 && (
            <div>
              <div className="font-mono" style={{ fontSize: '10px', color: 'var(--action)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 2 }}>
                01 / Video Creative Specifications
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--fg)', margin: '0 0 6px 0' }}>
                Ultra-Wide P3 Side Displays, Tailgate Screens & In-Cab Units
              </h3>
              <p style={{ fontSize: '12.5px', lineHeight: 1.55, color: 'var(--muted)', margin: '0 0 12px 0' }}>
                Accepted resolutions: 1920x1080 (Landscape P3 screen) and 1080x1920 (Rear billboard). Recommended duration: 15 seconds or 30 seconds loop. High fidelity 60 FPS video playback with synchronized directional audio.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="font-mono" style={badgeChipStyle}>✔ MP4 / MOV 60 FPS</span>
                <span className="font-mono" style={badgeChipStyle}>✔ 6,500 Nits Anti-Glare</span>
                <span className="font-mono" style={badgeChipStyle}>✔ Sound Sync 85dB Clean</span>
                <span className="font-mono" style={badgeChipStyle}>✔ Automated Aspect Scaling</span>
              </div>
            </div>
          )}

          {activeStepIndex === 1 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <div className="font-mono" style={{ fontSize: '10px', color: 'var(--action)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 2 }}>
                    02 / Regulatory Clearance Scanner
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
                    2-Hour SLA Municipal & RTO Transit Audit
                  </h3>
                </div>
                <button
                  onClick={handleRunAuditScan}
                  disabled={isScanning}
                  className="font-mono"
                  style={{
                    backgroundColor: isScanning ? '#CBD5E1' : '#FACC15',
                    border: '1px solid #EAB308',
                    padding: '6px 12px',
                    borderRadius: '2px',
                    fontSize: '10.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  {isScanning ? 'Scanning Bylaws...' : 'Run Compliance Scan ➔'}
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                <div style={complianceBoxStyle}>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--action)', fontWeight: 800 }}>RTO PERMIT</div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--fg)', marginTop: 2 }}>Certified Fitment ✓</div>
                </div>
                <div style={complianceBoxStyle}>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--action)', fontWeight: 800 }}>MUNICIPAL WARD</div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--fg)', marginTop: 2 }}>Pre-Approved ✓</div>
                </div>
                <div style={complianceBoxStyle}>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--action)', fontWeight: 800 }}>LUMINOSITY</div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--fg)', marginTop: 2 }}>Anti-Glare Safe ✓</div>
                </div>
              </div>
            </div>
          )}

          {activeStepIndex === 2 && (
            <div>
              <div className="font-mono" style={{ fontSize: '10px', color: 'var(--action)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 2 }}>
                03 / Live Fleet & Rate Estimator
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--fg)', margin: '0 0 10px 0' }}>
                Dynamic Transparent Rate Calculator
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', backgroundColor: '#FAFAFA', padding: '12px 14px', borderRadius: '3px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: 700 }}>
                    <span>Vans: {calcVans}</span>
                    <span className="font-mono">{calcVans * 2500} Plays/Day</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={calcVans}
                    onChange={(e) => setCalcVans(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--action)', marginTop: 4 }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: 700 }}>
                    <span>Days: {calcDays}</span>
                    <span className="font-mono">{calcDays} Days Duration</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="30"
                    value={calcDays}
                    onChange={(e) => setCalcDays(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#D97706', marginTop: 4 }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '8px', borderTop: '1px solid var(--hairline)' }}>
                <div>
                  <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--muted)' }}>TOTAL GUARANTEED PLAYS: </span>
                  <span className="font-mono" style={{ fontSize: '13.5px', fontWeight: 900, color: 'var(--action)' }}>{calculatedTotalPlays.toLocaleString()}</span>
                </div>
                <div>
                  <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--muted)' }}>EST. RATE: </span>
                  <span className="font-mono" style={{ fontSize: '14px', fontWeight: 900, color: 'var(--fg)' }}>₹{estimatedCost}</span>
                </div>
              </div>
            </div>
          )}

          {activeStepIndex === 3 && (
            <div>
              <div className="font-mono" style={{ fontSize: '10px', color: 'var(--action)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 2 }}>
                04 / 10,000+ Screen Plays Guarantee
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--fg)', margin: '0 0 6px 0' }}>
                High-Frequency Corridor Broadcast with Tamper-Proof Audit
              </h3>
              <p style={{ fontSize: '12.5px', lineHeight: 1.55, color: 'var(--muted)', margin: '0 0 10px 0' }}>
                Every single video rotation is audited with millisecond timestamps, speed metrics, and automated proof-of-play vehicle camera snapshots uploaded to your central campaign portal.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ECFDF5', padding: '10px 14px', borderRadius: '3px', border: '1px solid #A7F3D0' }}>
                <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800, color: '#065F46' }}>
                  CURRENT ACTIVE NETWORK BROADCASTS:
                </span>
                <span className="font-mono" style={{ fontSize: '14px', fontWeight: 900, color: '#065F46' }}>
                  {simulatedPlays.toLocaleString()}+ PLAYS
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 03: 150+ Brand Partners & Continuous Sliding Logos */}
      <section id="client-marquee" style={feedSectionStyle}>
        <div style={sectionTagHeader}>
          <span className="font-mono" style={sectionTagMono}>[03] Verified Client Network</span>
          <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--action)', fontWeight: 700 }}>
            150+ Brands Deployed
          </span>
        </div>

        <h2 style={sectionTitleStyle}>
          Companies That Scale on Adover Streets
        </h2>
        <p style={sectionDescStyle}>
          India’s leading quick-commerce unicorns, automotive leaders, and consumer giants
          leverage Adover’s mobile LED displays for maximum street attention.
        </p>

        {/* Category Filter Chips */}
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="font-mono"
              style={{
                backgroundColor: selectedCategory === cat ? 'var(--fg)' : '#FFFFFF',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--fg)',
                border: '1px solid var(--hairline)',
                padding: '3px 10px',
                borderRadius: '2px',
                fontSize: '10px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Infinite Seamless Horizontal Marquee Track 1 (Leftwards) */}
        <div style={{ overflow: 'hidden', width: '100%', padding: '6px 0', borderTop: '1px solid var(--hairline)' }}>
          <div className="marquee-track" style={{ display: 'flex', gap: '10px', width: 'max-content' }}>
            {marqueeList1.map((company, index) => (
              <div
                key={`client-1-${index}`}
                style={{
                  width: '190px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--hairline)',
                  borderRadius: '2px',
                  padding: '9px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--fg)' }}>{company.name}</div>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>{company.category}</div>
                </div>
                <span className="font-mono" style={{ fontSize: '9.5px', fontWeight: 800, color: 'var(--action)', backgroundColor: '#ECFDF5', padding: '2px 5px', borderRadius: 2 }}>
                  {company.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Seamless Horizontal Marquee Track 2 (Rightwards) */}
        <div style={{ overflow: 'hidden', width: '100%', padding: '6px 0', borderBottom: '1px solid var(--hairline)' }}>
          <div className="marquee-track-reverse" style={{ display: 'flex', gap: '10px', width: 'max-content' }}>
            {marqueeList2.map((company, index) => (
              <div
                key={`client-2-${index}`}
                style={{
                  width: '190px',
                  backgroundColor: '#FAFAFA',
                  border: '1px solid var(--hairline)',
                  borderRadius: '2px',
                  padding: '9px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--fg)' }}>{company.name}</div>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>{company.category}</div>
                </div>
                <span className="font-mono" style={{ fontSize: '9.5px', fontWeight: 800, color: '#047857', backgroundColor: '#D1FAE5', padding: '2px 5px', borderRadius: 2 }}>
                  {company.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Case Study Quote */}
        <div style={{ marginTop: '14px', padding: '12px 16px', backgroundColor: '#FAFAFA', borderLeft: '3px solid var(--fg)', display: 'flex', gap: '10px' }}>
          <Quote size={18} color="var(--muted)" style={{ flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: '12.5px', lineHeight: 1.55, color: 'var(--fg)', fontStyle: 'italic', margin: 0 }}>
              "Adover's LED transit vans delivered 4.2X higher brand lift across BKC and CyberHub compared to traditional static hoardings. Eye-level visibility at red lights generated massive instant QR traffic."
            </p>
            <span className="font-mono" style={{ fontSize: '9.5px', color: 'var(--action)', fontWeight: 800, marginTop: 4, display: 'block' }}>
              — VP OF MARKETING, LEADING QUICK-COMMERCE BRAND
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 04: Daylight & Street Visibility Lab */}
      <section id="luminosity-lab" style={feedSectionStyle}>
        <div style={sectionTagHeader}>
          <span className="font-mono" style={sectionTagMono}>[04] Visual Precision Study</span>
          <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--action)', fontWeight: 700 }}>
            94% Dwell Attention
          </span>
        </div>

        <h2 style={sectionTitleStyle}>
          Street Luminosity: Sunlight to Midnight
        </h2>
        <p style={sectionDescStyle}>
          Our P3 LED panels are engineered with 6,500 Nits brightness and automatic anti-glare ambient dimming sensors, ensuring your video remains legible in broad daylight and glowing at dusk.
        </p>

        <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid var(--hairline)', borderRadius: '3px', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span className="font-mono" style={{ fontSize: '10.5px', fontWeight: 800 }}>
              LUMINOSITY SLIDER: {luminosityLevel.toLocaleString()} NITS
            </span>
            <span className="font-mono" style={{ fontSize: '10.5px', color: isNight ? 'var(--action)' : 'var(--amber)', fontWeight: 800 }}>
              {isNight ? '● Night Neon Mode' : '● Direct Sunlight Mode'}
            </span>
          </div>

          <input
            type="range"
            min="2500"
            max="6500"
            step="500"
            value={luminosityLevel}
            onChange={(e) => setLuminosityLevel(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--action)', marginBottom: 14 }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px' }}>
            <div style={statBoxStyle}>
              <span className="font-mono" style={statBoxLabel}>SIGNAL DWELL RECALL</span>
              <span style={statBoxValue}>94% Recall Rate</span>
            </div>
            <div style={statBoxStyle}>
              <span className="font-mono" style={statBoxLabel}>VIEWING ARC</span>
              <span style={statBoxValue}>120° Wide Lateral</span>
            </div>
            <div style={statBoxStyle}>
              <span className="font-mono" style={statBoxLabel}>MONSOON WEATHERPROOF</span>
              <span style={statBoxValue}>IP65 Certified</span>
            </div>
            <div style={statBoxStyle}>
              <span className="font-mono" style={statBoxLabel}>AMBIENT RESPONSE</span>
              <span style={statBoxValue}>0.2s Auto Sensor</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: Campaign Planning & Enquiry */}
      <section id="enquiry-planner" style={{ ...feedSectionStyle, borderBottom: 'none' }}>
        <div style={sectionTagHeader}>
          <span className="font-mono" style={sectionTagMono}>[05] Slot Reservation & Planning</span>
          <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--action)', fontWeight: 700 }}>
            Instant Booking Desk
          </span>
        </div>

        <h2 style={sectionTitleStyle}>
          Campaign Enquiry & Route Reservation
        </h2>
        <p style={sectionDescStyle}>
          Select your media format, target city, daily play volume, and desired corridors.
          Our media planning desk issues compliance clearances and verified route quotes in under 2 hours.
        </p>

        {isSubmitted ? (
          <div style={{ backgroundColor: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '3px', padding: '24px', textAlign: 'center' }}>
            <CheckCircle2 size={36} color="#059669" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#064E3B', margin: '0 0 6px 0' }}>
              Campaign Enquiry Registered
            </h3>
            <p style={{ fontSize: '12.5px', color: '#064E3B', margin: '0 0 14px 0' }}>
              Your inquiry has been assigned to our Transit Media Operations Lead. Same-day route quote sent to your email & WhatsApp.
            </p>
            <div className="font-mono" style={{ fontSize: '13px', fontWeight: 800, color: '#090907', background: '#FFFFFF', padding: '8px 14px', display: 'inline-block', borderRadius: '2px', border: '1px solid #A7F3D0' }}>
              BOOKING REF: {bookingId}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#FFFFFF', border: '1.5px solid var(--hairline)', borderRadius: '3px', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={formInputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Company / Brand Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Brand Ltd."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  style={formInputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="rahul@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={formInputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>WhatsApp Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={formInputStyle}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <div>
                <label style={labelStyle}>Metropolitan City *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={formInputStyle}
                >
                  {['Mumbai', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Guaranteed Daily Plays *</label>
                <select
                  value={formData.dailyPlays}
                  onChange={(e) => setFormData({ ...formData, dailyPlays: e.target.value })}
                  style={formInputStyle}
                >
                  <option value="5,000 Plays / Day">5,000 Plays / Day (Basic)</option>
                  <option value="10,000 Plays / Day">10,000 Plays / Day (Recommended)</option>
                  <option value="25,000 Plays / Day">25,000 Plays / Day (Full Blitz)</option>
                </select>
              </div>
            </div>

            {/* Video file upload */}
            <div>
              <label style={labelStyle}>Creative Brand Video (Optional)</label>
              <div style={{ border: '1.5px dashed var(--hairline)', padding: '12px', textAlign: 'center', backgroundColor: '#FAFAFA', borderRadius: '2px', cursor: 'pointer', position: 'relative' }}>
                <input
                  type="file"
                  accept="video/mp4,video/quicktime"
                  onChange={handleFileChange}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                />
                <span className="font-mono" style={{ fontSize: '10.5px', color: 'var(--fg)', fontWeight: 700 }}>
                  {uploadedFile ? uploadedFile.name : '+ Drag & Drop 15s/30s Video File (MP4/MOV)'}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: '#FACC15',
                border: '1.5px solid #EAB308',
                borderRadius: '2px',
                padding: '12px',
                fontWeight: 900,
                fontSize: '13px',
                color: '#090907',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '4px',
              }}
            >
              <span>{isSubmitting ? 'Processing Route Clearance...' : 'Submit Route Enquiry & Request Slot'}</span>
              <Send size={14} />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

const feedSectionStyle = {
  borderBottom: '1px solid var(--hairline)',
  paddingBottom: '20px',
};

const sectionTagHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
};

const sectionTagMono = {
  fontSize: '10.5px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--muted)',
  fontWeight: 700,
};

const sectionTitleStyle = {
  fontSize: '21px',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  color: 'var(--fg)',
  margin: '0 0 6px 0',
};

const sectionDescStyle = {
  fontSize: '13px',
  lineHeight: 1.5,
  color: 'rgba(13, 13, 11, 0.72)',
  margin: '0 0 14px 0',
};

const miniInputStyle = {
  flex: 1,
  padding: '6px 10px',
  borderRadius: '2px',
  border: '1px solid var(--hairline)',
  fontSize: '11.5px',
  outline: 'none',
  fontFamily: 'inherit',
  backgroundColor: '#FFFFFF',
};

const badgeChipStyle = {
  fontSize: '10.5px',
  fontWeight: 700,
  color: 'var(--action)',
  backgroundColor: '#ECFDF5',
  padding: '3px 7px',
  borderRadius: '2px',
};

const complianceBoxStyle = {
  backgroundColor: '#FAFAFA',
  padding: '10px 12px',
  borderRadius: '2px',
  border: '1px solid var(--hairline)',
};

const statBoxStyle = {
  backgroundColor: '#FAFAFA',
  padding: '10px 12px',
  borderRadius: '2px',
  border: '1px solid var(--hairline)',
};

const statBoxLabel = {
  fontSize: '9.5px',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  display: 'block',
  marginBottom: 2,
};

const statBoxValue = {
  fontSize: '13px',
  fontWeight: 800,
  color: 'var(--fg)',
};

const labelStyle = {
  display: 'block',
  fontSize: '10.5px',
  fontWeight: 700,
  color: 'var(--fg)',
  marginBottom: '3px',
};

const formInputStyle = {
  width: '100%',
  padding: '8px 10px',
  borderRadius: '2px',
  border: '1px solid var(--hairline)',
  fontSize: '12.5px',
  outline: 'none',
  fontFamily: 'inherit',
  backgroundColor: '#FAFAFA',
  color: 'var(--fg)',
  boxSizing: 'border-box',
};
