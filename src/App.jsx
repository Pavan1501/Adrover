// src/App.jsx
import React, { useState } from 'react';
import EditorialSidebar from './components/EditorialSidebar';
import InteractiveFeed from './components/InteractiveFeed';

export default function App() {
  const [activeSection, setActiveSection] = useState('video-reel');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openEnquiry = () => {
    scrollToSection('enquiry-planner');
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: 'var(--fg)', width: '100%', overflowX: 'hidden' }}>
      {/* PodPolite-style Split Grid Layout - Flush Full-Width with Zero Wasted Space */}
      <div
        className="podpolite-grid"
        style={{
          display: 'grid',
          minHeight: '100vh',
          backgroundColor: '#FFFFFF',
          width: '100%',
        }}
      >
        {/* Left Column: Persistent Editorial Thesis, Index & Brand Manifest (Sticky on desktop) */}
        <div className="podpolite-left">
          <EditorialSidebar
            activeSection={activeSection}
            onSelectSection={scrollToSection}
            onOpenEnquiry={openEnquiry}
          />
        </div>

        {/* Right Column: Interactive Transit Media Lab & Action Feed */}
        <div className="podpolite-right" style={{ backgroundColor: '#FFFFFF', minWidth: 0, width: '100%' }}>
          <InteractiveFeed
            activeSection={activeSection}
            onSectionInView={setActiveSection}
          />
        </div>
      </div>

      {/* Clean Editorial Footer - Tight, compact & informational */}
      <footer
        style={{
          borderTop: '1px solid var(--hairline)',
          backgroundColor: '#FAFAFA',
          padding: '18px 24px',
          color: 'var(--muted)',
          fontSize: '12px',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 800, color: 'var(--fg)', letterSpacing: '0.04em' }}>ADOVER</span>
            <span>•</span>
            <span className="font-mono" style={{ textTransform: 'uppercase', fontSize: '11px' }}>
              Transit DOOH & Mobile LED Broadcast Network © 2026
            </span>
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--action)', fontWeight: 700, backgroundColor: '#ECFDF5', padding: '2px 6px', borderRadius: 2 }}>
              ● ALL FLEET UNITS GPS ACTIVE
            </span>
          </div>

          <div className="font-mono" style={{ display: 'flex', gap: '16px', fontSize: '11px', textTransform: 'uppercase', flexWrap: 'wrap' }}>
            <a href="#video-reel" onClick={() => scrollToSection('video-reel')} style={{ color: 'var(--muted)', textDecoration: 'none' }}>01 Specs</a>
            <a href="#process-engine" onClick={() => scrollToSection('process-engine')} style={{ color: 'var(--muted)', textDecoration: 'none' }}>02 4-Step SLA</a>
            <a href="#client-marquee" onClick={() => scrollToSection('client-marquee')} style={{ color: 'var(--muted)', textDecoration: 'none' }}>03 Clients</a>
            <a href="#luminosity-lab" onClick={() => scrollToSection('luminosity-lab')} style={{ color: 'var(--muted)', textDecoration: 'none' }}>04 Visibility</a>
            <a href="#enquiry-planner" onClick={openEnquiry} style={{ color: 'var(--action)', fontWeight: 800, textDecoration: 'none' }}>05 Book Slots ➔</a>
          </div>
        </div>
      </footer>

      {/* Responsive Styles for the Grid - PodPolite Sticky Split Architecture */}
      <style>{`
        .podpolite-grid {
          grid-template-columns: 440px 1fr;
        }
        @media (min-width: 1440px) {
          .podpolite-grid {
            grid-template-columns: 480px 1fr;
          }
        }
        @media (min-width: 981px) {
          .podpolite-left {
            position: sticky;
            top: 0;
            height: 100vh;
            overflow-y: auto;
            border-right: 1px solid var(--hairline);
          }
        }
        @media (max-width: 980px) {
          .podpolite-grid {
            grid-template-columns: 1fr;
          }
          .podpolite-left {
            border-right: none !important;
            border-bottom: 1px solid var(--hairline);
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
