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
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: 'var(--fg)' }}>
      {/* PodPolite-style Split Grid Layout */}
      <div
        className="podpolite-grid"
        style={{
          display: 'grid',
          minHeight: '100vh',
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* Left Column: Persistent Editorial Thesis, Index & Brand Manifest */}
        <div className="podpolite-left" style={{ position: 'relative' }}>
          <EditorialSidebar
            activeSection={activeSection}
            onSelectSection={scrollToSection}
            onOpenEnquiry={openEnquiry}
          />
        </div>

        {/* Right Column: Interactive Transit Media Lab & Action Feed */}
        <div className="podpolite-right" style={{ backgroundColor: '#FFFFFF' }}>
          <InteractiveFeed
            activeSection={activeSection}
            onSectionInView={setActiveSection}
          />
        </div>
      </div>

      {/* Clean Editorial Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--hairline)',
          backgroundColor: '#FAFAFA',
          padding: '32px 24px',
          color: 'var(--muted)',
          fontSize: '12px',
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 800, color: 'var(--fg)', letterSpacing: '0.04em' }}>ADOVER</span>
            <span>•</span>
            <span className="font-mono" style={{ textTransform: 'uppercase', fontSize: '11px' }}>
              Transit DOOH & Mobile LED Broadcast Network © 2026
            </span>
          </div>

          <div className="font-mono" style={{ display: 'flex', gap: '20px', fontSize: '11px', textTransform: 'uppercase' }}>
            <a href="#video-reel" onClick={() => scrollToSection('video-reel')} style={{ color: 'var(--muted)', textDecoration: 'none' }}>Specs</a>
            <a href="#process-engine" onClick={() => scrollToSection('process-engine')} style={{ color: 'var(--muted)', textDecoration: 'none' }}>4-Step SLA</a>
            <a href="#client-marquee" onClick={() => scrollToSection('client-marquee')} style={{ color: 'var(--muted)', textDecoration: 'none' }}>Clients</a>
            <a href="#enquiry-planner" onClick={openEnquiry} style={{ color: 'var(--action)', fontWeight: 800, textDecoration: 'none' }}>Book Slots ➔</a>
          </div>
        </div>
      </footer>

      {/* Responsive Styles for the Grid */}
      <style>{`
        .podpolite-grid {
          grid-template-columns: minmax(420px, 0.82fr) minmax(500px, 1fr);
        }
        @media (max-width: 980px) {
          .podpolite-grid {
            grid-template-columns: 1fr;
          }
          .podpolite-left {
            border-right: none !important;
            border-bottom: 1px solid var(--hairline);
          }
        }
      `}</style>
    </div>
  );
}
