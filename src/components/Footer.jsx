// src/components/Footer.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme';
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Globe,
  Share2,
} from 'lucide-react';

export default function Footer({ onNavigateSection, onNavigateToEnquiry }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer style={{ backgroundColor: '#0B1320', color: '#E2E8F0', paddingTop: '64px', borderTop: '4px solid #10B981' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
        {/* Top Highlight Banner */}
        <div
          style={{
            backgroundColor: '#131F33',
            border: '1.5px solid #1E293B',
            borderRadius: '20px',
            padding: '28px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#FACC15', fontWeight: 800, fontSize: 13, marginBottom: 4 }}>
              <ShieldCheck size={18} />
              <span>100% REGULATORY & MUNICIPAL COMPLIANCE GUARANTEE</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              Deploy High-Impact Transit Media With Zero Legal Friction
            </h3>
          </div>

          <button
            onClick={onNavigateToEnquiry}
            style={{
              backgroundColor: '#FACC15',
              color: '#064E3B',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '24px',
              fontWeight: 800,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(250, 204, 21, 0.3)',
            }}
          >
            <span>Book Campaign Slots</span>
            <span>→</span>
          </button>
        </div>

        {/* 4-Column Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '16px' }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  backgroundColor: '#FACC15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #10B981',
                }}
              >
                <Truck size={20} color="#064E3B" />
              </div>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '1px' }}>
                  ADOVER
                </span>
                <span style={{ display: 'block', fontSize: '10px', color: '#10B981', fontWeight: 700, letterSpacing: '0.5px' }}>
                  LED TRANSIT MEDIA
                </span>
              </div>
            </div>

            <p style={{ fontSize: '13px', lineHeight: '22px', color: '#94A3B8', marginBottom: '20px' }}>
              Adover is India’s premier digital out-of-home (DOOH) transit network.
              We command high-traffic city streets through synchronized P3/P4 LED mobile display vans,
              guaranteeing unmissable 10,000+ daily screen plays.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={socialIconStyle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.37 9.74v-8.37H5.09v8.37h2.74Z"/>
                </svg>
              </div>
              <div style={socialIconStyle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
              <div style={socialIconStyle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
              </div>
              <div style={socialIconStyle}>
                <Globe size={16} />
              </div>
            </div>
          </div>

          {/* Col 2: Solutions & Fleet */}
          <div>
            <h4 style={footerColHeading}>Fleet & Solutions</h4>
            <ul style={footerListStyle}>
              <li style={footerListItem}>
                <a href="#about" onClick={() => onNavigateSection('about')} style={footerLinkStyle}>
                  Mobile LED Van Advertising (12x6 P3)
                </a>
              </li>
              <li style={footerListItem}>
                <a href="#process" onClick={() => onNavigateSection('process')} style={footerLinkStyle}>
                  High-Frequency 10,000 Plays Loops
                </a>
              </li>
              <li style={footerListItem}>
                <a href="#video" onClick={() => onNavigateSection('video')} style={footerLinkStyle}>
                  Moving Digital Street Hoardings
                </a>
              </li>
              <li style={footerListItem}>
                <a href="#enquiry" onClick={onNavigateToEnquiry} style={footerLinkStyle}>
                  In-Cab Interactive Tablet Displays
                </a>
              </li>
              <li style={footerListItem}>
                <a href="#enquiry" onClick={onNavigateToEnquiry} style={footerLinkStyle}>
                  Roadshow & Election Campaign Fleets
                </a>
              </li>
              <li style={footerListItem}>
                <a href="#enquiry" onClick={onNavigateToEnquiry} style={footerLinkStyle}>
                  Airport & IT Corridor Geo-Targeting
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Metro Hubs & Hours */}
          <div>
            <h4 style={footerColHeading}>Operational Corridors</h4>
            <ul style={footerListStyle}>
              <li style={footerListItem}>
                <span style={{ color: '#FACC15', fontWeight: 700 }}>Mumbai (HQ):</span> Bandra Kurla Complex & Marine Drive
              </li>
              <li style={footerListItem}>
                <span style={{ color: '#FACC15', fontWeight: 700 }}>Bengaluru:</span> MG Road, Indiranagar, Electronic City
              </li>
              <li style={footerListItem}>
                <span style={{ color: '#FACC15', fontWeight: 700 }}>Delhi NCR:</span> Connaught Place, CyberHub Gurgaon
              </li>
              <li style={footerListItem}>
                <span style={{ color: '#FACC15', fontWeight: 700 }}>Chennai:</span> Velachery, Camp Road Junction, OMR
              </li>
              <li style={footerListItem}>
                <span style={{ color: '#FACC15', fontWeight: 700 }}>Hyderabad:</span> Hitec City & Jubilee Hills
              </li>
              <li style={footerListItem}>
                <span style={{ color: '#FACC15', fontWeight: 700 }}>Pune:</span> Viman Nagar & Koregaon Park
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div>
            <h4 style={footerColHeading}>Direct Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#CBD5E1', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={16} color="#10B981" />
                <span>+91 90031 70100 / +91 73585 70999</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={16} color="#10B981" />
                <span>campaigns@adover.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={16} color="#10B981" style={{ marginTop: 2 }} />
                <span>231/911, Velachery Road & BKC Media Tower, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Clock size={16} color="#FACC15" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
              </div>
            </div>

            {/* Newsletter input */}
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                Receive Weekly Transit Traffic Rate Cards:
              </span>
              {newsletterSuccess ? (
                <div style={{ background: '#064E3B', color: '#A7F3D0', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 700 }}>
                  ✓ You're subscribed to Adover updates!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      backgroundColor: '#1E293B',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#10B981',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #1E293B',
            padding: '24px 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '12px',
            color: '#64748B',
          }}
        >
          <div>
            © 2026 Adover Transit Media Pvt. Ltd. Inspired by AdOnWheelz. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: '#94A3B8' }}>Transit Compliance Policy</span>
            <span style={{ color: '#94A3B8' }}>Terms of Service</span>
            <span style={{ color: '#94A3B8' }}>Privacy Guidelines</span>
            <span style={{ color: '#94A3B8' }}>Route Clearance FAQs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerColHeading = {
  fontSize: '15px',
  fontWeight: 800,
  color: '#FFFFFF',
  marginBottom: '16px',
  letterSpacing: '0.5px',
};

const footerListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const footerListItem = {
  fontSize: '13px',
  color: '#94A3B8',
  lineHeight: '20px',
};

const footerLinkStyle = {
  color: '#94A3B8',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
};

const socialIconStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  backgroundColor: '#1E293B',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#A7F3D0',
  textDecoration: 'none',
  cursor: 'pointer',
};
