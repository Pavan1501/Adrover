// src/components/EditorialSidebar.jsx
import React, { useState, useEffect } from 'react';
import {
  Truck,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Flame,
  Radio,
  FileText,
  Compass,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

export default function EditorialSidebar({ activeSection, onSelectSection, onOpenEnquiry }) {
  const [livePlayCount, setLivePlayCount] = useState(8492);

  useEffect(() => {
    const timer = setInterval(() => {
      setLivePlayCount((prev) => (prev >= 10000 ? 8400 : prev + 1));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { id: 'video-reel', number: '01', label: 'Fleet Reel & P3 Specs', tag: 'Live Screen' },
    { id: 'process-engine', number: '02', label: '4-Step Campaign Engine', tag: '2h SLA' },
    { id: 'client-marquee', number: '03', label: '150+ Brand Partners', tag: 'Marquee' },
    { id: 'luminosity-lab', number: '04', label: 'Daylight & Street Visibility', tag: '6500 Nits' },
    { id: 'enquiry-planner', number: '05', label: 'Route Planning & Enquiry', tag: 'Instant' },
  ];

  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 28px',
        backgroundColor: '#FFFFFF',
        minHeight: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div>
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectSection('video-reel');
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 4,
                border: '1.5px solid var(--fg)',
                backgroundColor: '#FACC15',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(9,9,7,0.06)',
                flexShrink: 0,
              }}
            >
              <Truck size={18} color="#090907" strokeWidth={2.4} />
            </span>
            <div>
              <span style={{ fontSize: '17px', fontWeight: 900, letterSpacing: '0.04em', color: 'var(--fg)', display: 'block', lineHeight: 1.1 }}>
                ADOVER
              </span>
              <span className="font-mono" style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--action)', fontWeight: 700 }}>
                TRANSIT MEDIA STUDY
              </span>
            </div>
          </a>

          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              backgroundColor: '#ECFDF5',
              color: '#065F46',
              border: '1px solid #A7F3D0',
              padding: '3px 8px',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontWeight: 700,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981' }} />
            <span>Vol. 2026</span>
          </div>
        </div>

        {/* Monospace Metadata Tag */}
        <div
          className="font-mono"
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '6px 12px',
            paddingBottom: '10px',
            borderBottom: '1px solid var(--hairline)',
          }}
        >
          <span style={{ color: 'var(--action)', fontWeight: 800 }}>● FLEET ACTIVE</span>
          <span>•</span>
          <span style={{ color: 'var(--fg)', fontWeight: 700 }}>10,000+ DAILY PLAYS</span>
          <span>•</span>
          <span>6 METRO HUBS</span>
        </div>

        {/* Big Editorial Headline */}
        <h1
          style={{
            fontSize: 'clamp(24px, 2.3vw, 32px)',
            fontWeight: 800,
            lineHeight: 1.18,
            letterSpacing: '-0.025em',
            color: 'var(--fg)',
            margin: '0 0 12px 0',
          }}
        >
          Why Urban Commutes Command India's <span style={{ textDecoration: 'underline', textDecorationColor: '#FACC15', textUnderlineOffset: '4px' }}>Most Unmissable</span> Brand Attention.
        </h1>

        {/* Editorial Body / Manifesto */}
        <p
          style={{
            fontSize: '13.5px',
            lineHeight: 1.55,
            color: 'rgba(13, 13, 11, 0.78)',
            margin: '0 0 16px 0',
          }}
        >
          Adover transforms prime metropolitan congestion into high-dwell cinematic stages.
          Dual-sided P3 Ultra-Bright LED screen vans navigate high-density arterial corridors,
          delivering guaranteed, GPS-audited video broadcasts directly at eye-level.
        </p>

        {/* Quick Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <button
            onClick={onOpenEnquiry}
            style={{
              backgroundColor: '#FACC15',
              border: '1.5px solid #EAB308',
              borderRadius: '2px',
              padding: '10px 18px',
              fontWeight: 800,
              fontSize: '12.5px',
              color: '#090907',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 10px rgba(234, 179, 8, 0.3)',
              transition: 'all 0.15s ease',
            }}
          >
            <span>Request Route Booking</span>
            <ArrowRight size={14} />
          </button>

          <a
            href="tel:+919003170100"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--hairline)',
              borderRadius: '2px',
              padding: '10px 14px',
              fontWeight: 700,
              fontSize: '12.5px',
              color: 'var(--fg)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <PhoneCall size={13} color="var(--action)" />
            <span>+91 90031 70100</span>
          </a>
        </div>

        {/* Compact Live Telemetry Grid - Tight & informational */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
            backgroundColor: '#FAFAFA',
            padding: '12px',
            borderRadius: '3px',
            border: '1px solid var(--hairline)',
            marginBottom: '18px',
          }}
        >
          <div>
            <div className="font-mono" style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
              LED DISPLAY SPEC
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--fg)', marginTop: '2px' }}>
              6,500 Nits P3 HD
            </div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
              SLA PERMIT CLEARANCE
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--action)', marginTop: '2px' }}>
              Under 2 Hours
            </div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
              GUARANTEED FREQUENCY
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--fg)', marginTop: '2px' }}>
              10,000+ Plays / Day
            </div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
              SIGNAL INTERSECTION DWELL
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#D97706', marginTop: '2px' }}>
              94% Unmissable
            </div>
          </div>
        </div>

        {/* Table of Contents / Section Index (PodPolite Style) */}
        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '16px', marginBottom: '16px' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--muted)',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>Index of Capabilities</span>
            <span>5 Sections</span>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectSection(link.id);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    padding: '8px 10px',
                    borderRadius: '2px',
                    backgroundColor: isActive ? '#FEF9C3' : 'transparent',
                    border: isActive ? '1px solid #FACC15' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '11px',
                        color: isActive ? 'var(--fg)' : 'var(--muted)',
                        fontWeight: 800,
                      }}
                    >
                      {link.number}
                    </span>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: isActive ? 800 : 600,
                        color: isActive ? 'var(--fg)' : 'rgba(13, 13, 11, 0.78)',
                      }}
                    >
                      {link.label}
                    </span>
                  </div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--action)' : 'var(--muted)',
                      fontWeight: 700,
                      backgroundColor: isActive ? '#FFFFFF' : '#FAFAFA',
                      padding: '2px 6px',
                      borderRadius: '2px',
                      border: '1px solid var(--hairline)',
                    }}
                  >
                    {link.tag}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* WhatsApp & Instant Route Planning Help */}
        <div
          style={{
            backgroundColor: '#ECFDF5',
            border: '1px solid #A7F3D0',
            borderRadius: '3px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#064E3B' }}>
              Need Same-Day Fleet Activation?
            </div>
            <div className="font-mono" style={{ fontSize: '10px', color: '#047857', marginTop: '2px' }}>
              Direct Line with Transit Operations Lead
            </div>
          </div>
          <a
            href="https://wa.me/919003170100?text=Hi%20Adover%2C%20I%20would%20like%20to%20plan%20a%20mobile%20LED%20transit%20campaign."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '11px',
              padding: '6px 12px',
              borderRadius: '2px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              flexShrink: 0,
            }}
          >
            <MessageSquare size={12} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Sidebar Base Telemetry Note - Compact & Flush */}
      <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '14px' }}>
        <div
          className="font-mono"
          style={{
            fontSize: '9.5px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <CheckCircle2 size={12} color="var(--action)" />
            RTO & Municipal Certified
          </span>
          <span style={{ color: 'var(--action)', fontWeight: 800 }}>GPS SYNC 24 FPS</span>
        </div>
        <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '6px 0 0 0', lineHeight: 1.45 }}>
          Pre-cleared with Municipal Corporations & RTO Transport Authorities across 6 tier-1 metros.
        </p>
      </div>
    </aside>
  );
}
