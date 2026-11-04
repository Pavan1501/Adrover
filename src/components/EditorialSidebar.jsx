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
    { id: 'video-reel', number: '01', label: 'Fleet Video & P3 Specs' },
    { id: 'process-engine', number: '02', label: '4-Step Campaign Engine' },
    { id: 'client-marquee', number: '03', label: '150+ Brand Partners' },
    { id: 'luminosity-lab', number: '04', label: 'Daylight & Street Visibility' },
    { id: 'enquiry-planner', number: '05', label: 'Route Planning & Enquiry' },
  ];

  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(28px, 4.5vw, 56px) clamp(28px, 4vw, 56px)',
        borderRight: '1px solid var(--hairline)',
        backgroundColor: '#FFFFFF',
        minHeight: '100%',
        position: 'relative',
      }}
    >
      <div>
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectSection('video-reel');
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 4,
                border: '1.5px solid var(--fg)',
                backgroundColor: '#FACC15',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(9,9,7,0.08)',
              }}
            >
              <Truck size={20} color="#090907" strokeWidth={2.4} />
            </span>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.04em', color: 'var(--fg)', display: 'block', lineHeight: 1.1 }}>
                ADOVER
              </span>
              <span className="font-mono" style={{ fontSize: '10px', uppercase: true, letterSpacing: '0.06em', color: 'var(--action)', fontWeight: 700 }}>
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
              padding: '4px 10px',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
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
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            marginBottom: '18px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 16px',
          }}
        >
          <span>Fleet: Active</span>
          <span>•</span>
          <span style={{ color: 'var(--action)', fontWeight: 700 }}>10,000+ Daily Plays</span>
          <span>•</span>
          <span>6 Metro Corridors</span>
        </div>

        {/* Big Editorial Headline */}
        <h1
          style={{
            fontSize: 'clamp(32px, 3.4vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: 'var(--fg)',
            marginBottom: '22px',
          }}
        >
          Why Urban Commutes Command India's <span style={{ textDecoration: 'underline', textDecorationColor: '#FACC15' }}>Most Unmissable</span> Brand Attention.
        </h1>

        {/* Editorial Body / Manifesto */}
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.65,
            color: 'rgba(13, 13, 11, 0.78)',
            marginBottom: '32px',
            maxWidth: '520px',
          }}
        >
          Adover turns daily metropolitan congestion into your brand's biggest stage.
          Double-sided P3 Ultra-Bright LED screen vans move through high-density urban corridors,
          delivering guaranteed, GPS-audited video broadcasts directly at eye-level.
        </p>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <button
            onClick={onOpenEnquiry}
            style={{
              backgroundColor: '#FACC15',
              border: '1.5px solid #EAB308',
              borderRadius: '2px',
              padding: '13px 22px',
              fontWeight: 800,
              fontSize: '13px',
              color: '#090907',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 14px rgba(234, 179, 8, 0.35)',
              transition: 'all 0.18s ease',
            }}
          >
            <span>Request Route Booking</span>
            <ArrowRight size={15} />
          </button>

          <a
            href="tel:+919003170100"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--hairline)',
              borderRadius: '2px',
              padding: '13px 18px',
              fontWeight: 700,
              fontSize: '13px',
              color: 'var(--fg)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <PhoneCall size={14} color="var(--action)" />
            <span>+91 90031 70100</span>
          </a>
        </div>

        {/* Table of Contents / Section Index (PodPolite Style) */}
        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '28px', marginBottom: '32px' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--muted)',
              marginBottom: '16px',
            }}
          >
            Index of Study & Capabilities
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                    alignItems: 'baseline',
                    gap: '12px',
                    textDecoration: 'none',
                    padding: '6px 0',
                    borderBottom: isActive ? '1px solid var(--fg)' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: isActive ? 'var(--action)' : 'var(--muted)',
                      fontWeight: 700,
                    }}
                  >
                    {link.number}
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: isActive ? 800 : 600,
                      color: isActive ? 'var(--fg)' : 'rgba(13, 13, 11, 0.72)',
                    }}
                  >
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Sidebar Base Telemetry Note */}
      <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '20px' }}>
        <div
          className="font-mono"
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>Audit Status: 100% Compliant</span>
          <span style={{ color: 'var(--action)', fontWeight: 800 }}>GPS Sync 24 FPS</span>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '8px', lineHeight: 1.5 }}>
          Pre-cleared with Municipal Corporations & RTO Transport Authorities across 6 tier-1 metros.
        </p>
      </div>
    </aside>
  );
}
