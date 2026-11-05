// src/components/PageTransition.jsx
import React, { useState, useEffect } from 'react';
import { Truck, Sparkles, Compass, Radio, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

export default function PageTransition({
  isActive,
  targetView = 'enquiry',
  onTransitionMiddle,
  onTransitionComplete,
}) {
  // Initial preloader state on site first load
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Dynamic route transition state for Elementis shutter
  const [phase, setPhase] = useState('idle'); // 'idle' | 'covering' | 'revealing'

  const SLAT_COUNT = 5;
  const slats = Array.from({ length: SLAT_COUNT }, (_, i) => i);

  // 1. Initial Page Load (Elementis Architectural Slat Preloader)
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 16) + 12;
      if (progress >= 100) {
        progress = 100;
        setLoadProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setInitialLoading(false);
        }, 500);
      } else {
        setLoadProgress(progress);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  // 2. Elementis Multi-Slat Staggered Shutter Transition
  useEffect(() => {
    if (isActive) {
      setPhase('covering');

      // Halfway point: swap the underlying view while all slats are closed
      const midTimer = setTimeout(() => {
        if (onTransitionMiddle) onTransitionMiddle();
        setPhase('revealing');
      }, 650);

      // Finish transition after all slats have peeled off
      const endTimer = setTimeout(() => {
        setPhase('idle');
        if (onTransitionComplete) onTransitionComplete();
      }, 1250);

      return () => {
        clearTimeout(midTimer);
        clearTimeout(endTimer);
      };
    }
  }, [isActive]);

  const transitionLabel =
    targetView === 'enquiry'
      ? 'CAMPAIGN BOOKING & ROUTE RESERVATION'
      : 'ADOVER TRANSIT BROADCAST NETWORK';

  const transitionSubtext =
    targetView === 'enquiry'
      ? 'Allocating P3 Fleet Slots Across 6 Tier-1 Metros...'
      : 'Initializing Eye-Level DOOH Fleet Telemetry...';

  return (
    <>
      {/* 1. INITIAL ELEMENTIS MULTI-SLAT SHUTTER PRELOADER */}
      {initialLoading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            pointerEvents: 'all',
          }}
        >
          {/* 5 Vertical Staggered Slats */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', width: '100%', height: '100%' }}>
            {slats.map((i) => (
              <div
                key={`init-slat-${i}`}
                style={{
                  flex: 1,
                  height: '100%',
                  backgroundColor: '#090D16',
                  borderRight: i < SLAT_COUNT - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                  transform: loadProgress === 100 ? 'translateY(-100%)' : 'translateY(0%)',
                  transition: `transform 0.75s cubic-bezier(0.77, 0, 0.175, 1) ${i * 0.08}s`,
                  willChange: 'transform',
                }}
              />
            ))}
          </div>

          {/* Central Content Box (Fades out just before slats pull up) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px clamp(24px, 5vw, 64px)',
              color: '#FFFFFF',
              opacity: loadProgress === 100 ? 0 : 1,
              transition: 'opacity 0.25s ease',
              pointerEvents: 'none',
            }}
          >
            {/* Top Brand Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    backgroundColor: '#FACC15',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(250, 204, 21, 0.4)',
                  }}
                >
                  <Truck size={20} color="#064E3B" strokeWidth={2.4} />
                </div>
                <span className="font-mono" style={{ fontSize: 16, fontWeight: 900, letterSpacing: '0.12em', color: '#FFFFFF' }}>
                  ADOVER
                </span>
              </div>

              <div className="font-mono" style={{ fontSize: 11, color: '#A7F3D0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ● Elementis Shutter // SOTD Motion
              </div>
            </div>

            {/* Central Animated Film Title */}
            <div style={{ textAlign: 'center', margin: 'auto 0' }}>
              <div
                className="font-mono"
                style={{
                  fontSize: 11.5,
                  color: '#10B981',
                  fontWeight: 800,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                [ Transit DOOH Architecture & Broadcast Network ]
              </div>

              <h1
                style={{
                  fontSize: 'clamp(32px, 4.8vw, 64px)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: '#FFFFFF',
                  maxWidth: 920,
                  margin: '0 auto 20px',
                }}
              >
                Commanding City Streets at{' '}
                <span style={{ color: '#FACC15', textDecoration: 'underline', textDecorationColor: '#10B981' }}>
                  Eye-Level Attention.
                </span>
              </h1>

              <div
                className="font-mono"
                style={{
                  fontSize: 12.5,
                  color: '#94A3B8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
              >
                <span>GPS: 19.0760° N, 72.8777° E</span>
                <span>•</span>
                <span style={{ color: '#FACC15' }}>6,500 NITS P3 PANELS</span>
                <span>•</span>
                <span>10,000+ DAILY VERIFIED PLAYS</span>
              </div>
            </div>

            {/* Bottom Progress Counter */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <span className="font-mono" style={{ fontSize: 11, color: '#64748B', display: 'block', marginBottom: 4 }}>
                  SYSTEM CALIBRATION
                </span>
                <span className="font-mono" style={{ fontSize: 12, color: '#CBD5E1', fontWeight: 700 }}>
                  Initializing Multi-Slat DOOH Shutter...
                </span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 'clamp(48px, 6vw, 76px)',
                    fontWeight: 900,
                    color: '#10B981',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  {loadProgress}%
                </span>
              </div>
            </div>

            {/* Bottom Loading Progress Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
                backgroundColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${loadProgress}%`,
                  background: 'linear-gradient(90deg, #10B981, #FACC15)',
                  transition: 'width 0.1s linear',
                  boxShadow: '0 0 12px #10B981',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. DYNAMIC ELEMENTIS MULTI-SLAT VIEW-TO-VIEW TRANSITION */}
      {phase !== 'idle' && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99998,
            pointerEvents: 'all',
          }}
        >
          {/* Layer 1: Leading Sunshine Yellow Accent Edge Slats */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', width: '100%', height: '100%' }}>
            {slats.map((i) => (
              <div
                key={`yellow-slat-${i}`}
                style={{
                  flex: 1,
                  height: '100%',
                  backgroundColor: '#FACC15',
                  transform:
                    phase === 'covering'
                      ? 'translateY(0%)'
                      : 'translateY(-100%)',
                  transition: `transform 0.55s cubic-bezier(0.77, 0, 0.175, 1) ${i * 0.06}s`,
                  willChange: 'transform',
                }}
              />
            ))}
          </div>

          {/* Layer 2: Main Emerald Deep Slats Following Closely */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', width: '100%', height: '100%' }}>
            {slats.map((i) => (
              <div
                key={`green-slat-${i}`}
                style={{
                  flex: 1,
                  height: '100%',
                  backgroundColor: '#064E3B',
                  borderRight: i < SLAT_COUNT - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                  transform:
                    phase === 'covering'
                      ? 'translateY(0%)'
                      : 'translateY(-100%)',
                  transition: `transform 0.6s cubic-bezier(0.77, 0, 0.175, 1) ${i * 0.06 + 0.05}s`,
                  willChange: 'transform',
                }}
              />
            ))}
          </div>

          {/* Central Staging Content during the Elementis Shutter Hold */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              textAlign: 'center',
              color: '#FFFFFF',
              opacity: phase === 'covering' ? 1 : 0,
              transition: 'opacity 0.25s ease',
            }}
          >
            <div
              style={{
                animation: 'elementisCenterPop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                maxWidth: 620,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: '#FACC15',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 35px rgba(250, 204, 21, 0.55)',
                }}
              >
                <Truck size={28} color="#064E3B" strokeWidth={2.4} />
              </div>

              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  color: '#A7F3D0',
                  fontWeight: 800,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                ● ELEMENTIS SHUTTER DISPATCH
              </div>

              <h2
                style={{
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {transitionLabel}
              </h2>

              <p
                className="font-mono"
                style={{
                  fontSize: 13,
                  color: '#CBD5E1',
                  margin: 0,
                }}
              >
                {transitionSubtext}
              </p>

              {/* Slat Equalizer Metric Pulse */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 22 }}>
                {slats.map((s) => (
                  <span
                    key={`eq-${s}`}
                    className="elementis-slat-bar"
                    style={{ animationDelay: `${s * 0.12}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Elementis CSS Keyframes */}
      <style>{`
        @keyframes elementisCenterPop {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .elementis-slat-bar {
          width: 5px;
          height: 20px;
          background-color: #FACC15;
          border-radius: 3px;
          animation: slatBarPulse 0.75s ease-in-out infinite alternate;
        }

        @keyframes slatBarPulse {
          0% { height: 6px; opacity: 0.4; }
          100% { height: 28px; opacity: 1; }
        }
      `}</style>
    </>
  );
}
