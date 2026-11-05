// src/components/PageTransition.jsx
import React, { useState, useEffect } from 'react';
import { Truck, Sparkles, Compass, Radio, ArrowRight } from 'lucide-react';

export default function PageTransition({
  isActive,
  targetView = 'enquiry',
  onTransitionMiddle,
  onTransitionComplete,
}) {
  // Initial preloader state on site first load
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Dynamic route transition state
  const [phase, setPhase] = useState('idle'); // 'idle' | 'covering' | 'revealing'

  // 1. Initial Page Load (Art of Documentary cinematic preloader)
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 12;
      if (progress >= 100) {
        progress = 100;
        setLoadProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setInitialLoading(false);
        }, 400);
      } else {
        setLoadProgress(progress);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // 2. Route/Page Switch Transition (Art of Documentary shutter / layered curtain wipe)
  useEffect(() => {
    if (isActive) {
      setPhase('covering');

      // Halfway point: swap the underlying view while covered
      const midTimer = setTimeout(() => {
        if (onTransitionMiddle) onTransitionMiddle();
        setPhase('revealing');
      }, 550);

      // Finish transition
      const endTimer = setTimeout(() => {
        setPhase('idle');
        if (onTransitionComplete) onTransitionComplete();
      }, 1100);

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
      {/* INITIAL CINEMATIC PRELOADER (Runs once on first load) */}
      {initialLoading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#090D16',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px clamp(24px, 5vw, 64px)',
            transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.6s ease',
            transform: loadProgress === 100 ? 'translateY(-100%)' : 'translateY(0%)',
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
              ● Fleet Vol. 2026 // SOTD Motion
            </div>
          </div>

          {/* Central Animated Film Title */}
          <div style={{ textAlign: 'center', margin: 'auto 0' }}>
            <div
              className="font-mono"
              style={{
                fontSize: 12,
                color: '#10B981',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              [ Transit DOOH Architecture & Broadcast Study ]
            </div>

            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#FFFFFF',
                maxWidth: 900,
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
                fontSize: 13,
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
                Loading Mobile LED Screen Shaders...
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
              backgroundColor: 'rgba(255,255,255,0.1)',
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
      )}

      {/* DYNAMIC AWWWARDS PAGE-TO-PAGE TRANSITION CURTAIN */}
      {phase !== 'idle' && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99998,
            pointerEvents: 'all',
          }}
        >
          {/* Layer 1: Leading Yellow Accent Blade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#FACC15',
              transform:
                phase === 'covering'
                  ? 'translateY(0%)'
                  : 'translateY(-100%)',
              transition: 'transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          />

          {/* Layer 2: Main Emerald Deep Curtain */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#064E3B',
              color: '#FFFFFF',
              transform:
                phase === 'covering'
                  ? 'translateY(0%)'
                  : 'translateY(-100%)',
              transition: 'transform 0.65s cubic-bezier(0.76, 0, 0.24, 1) 0.06s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            {/* Center Stage Box */}
            <div
              style={{
                animation: 'fadeScaleIn 0.35s ease forwards',
                maxWidth: 600,
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
                  boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)',
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
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                ● LIVE CORRIDOR ROUTING // TRANSITION
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

              {/* Animated Equalizer Waveform Indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
                <span className="equalizer-bar" style={{ animationDelay: '0s' }} />
                <span className="equalizer-bar" style={{ animationDelay: '0.15s' }} />
                <span className="equalizer-bar" style={{ animationDelay: '0.3s' }} />
                <span className="equalizer-bar" style={{ animationDelay: '0.45s' }} />
                <span className="equalizer-bar" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transition Keyframes */}
      <style>{`
        @keyframes fadeScaleIn {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        .equalizer-bar {
          width: 4px;
          height: 18px;
          background-color: #FACC15;
          border-radius: 2px;
          animation: eqBounce 0.8s ease-in-out infinite alternate;
        }
        @keyframes eqBounce {
          0% { height: 6px; }
          100% { height: 26px; }
        }
      `}</style>
    </>
  );
}
