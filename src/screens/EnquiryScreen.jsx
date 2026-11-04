// src/screens/EnquiryScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme';
import {
  ArrowLeft,
  CheckCircle2,
  Upload,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
  MapPin,
  Truck,
  Eye,
  FileText,
  PhoneCall,
  Check,
  Send,
  Building2,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Tv,
  Zap,
} from 'lucide-react';

export default function EnquiryScreen({ onBackToHome }) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    mediaType: 'Mobile LED Van (12ft x 6ft P3)',
    dailyPlays: '10,000 Plays / Day',
    duration: '7 Days (1 Week)',
    budgetRange: '₹1.5 Lakh - ₹3 Lakh',
    routes: ['Commercial & Financial Hubs (BKC, CyberHub, Nariman Pt)', 'High-Traffic Arterial Roads & Flyovers'],
    notes: '',
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const cityOptions = [
    'Mumbai',
    'Delhi NCR',
    'Bengaluru',
    'Hyderabad',
    'Chennai',
    'Pune',
    'Kolkata',
    'Ahmedabad',
  ];

  const mediaTypes = [
    {
      id: 'led-van',
      title: 'Mobile LED Van (12ft x 6ft P3)',
      desc: 'Double-sided 4K screens with sound sync. Best for high-impact city coverage.',
      badge: '★ Most Popular',
    },
    {
      id: 'in-cab',
      title: 'In-Cab Smart Tablet Displays',
      desc: 'Eye-level interactive screens inside premium cabs with QR clickthrough.',
      badge: 'Direct Engagement',
    },
    {
      id: 'transit-billboard',
      title: 'Moving Digital Billboard Truck',
      desc: 'Triple-sided large format LED screen for massive 360° visibility.',
      badge: 'Maximum Reach',
    },
  ];

  const playOptions = [
    { label: '5,000 Plays / Day', multiplier: 1, desc: 'Targeted single-corridor run' },
    { label: '10,000 Plays / Day', multiplier: 2, desc: '★ Guaranteed multi-hub blitz (Recommended)' },
    { label: '25,000 Plays / Day', multiplier: 5, desc: 'Mega city-wide dominate rotation' },
  ];

  const durationOptions = [
    { label: '3 Days (Weekend Launch)', days: 3 },
    { label: '7 Days (1 Week)', days: 7 },
    { label: '14 Days (2 Weeks)', days: 14 },
    { label: '30 Days (1 Month)', days: 30 },
  ];

  const availableRoutes = [
    'Commercial & Financial Hubs (BKC, CyberHub, Nariman Pt)',
    'High-Traffic Arterial Roads & Flyovers',
    'Tech Corridors & IT Parks (Indiranagar, OMR, Hitec City)',
    'Shopping Districts & Premium Malls',
    'Airport Expressways & Commuter Interchanges',
  ];

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

    // Simulate API call and booking creation
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setBookingId(`ADV-2026-${randomNum}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  // Estimator Calculations
  const calculatedDays =
    formData.duration.includes('3 Days') ? 3 :
    formData.duration.includes('7 Days') ? 7 :
    formData.duration.includes('14 Days') ? 14 : 30;

  const dailyPlaysCount =
    formData.dailyPlays.includes('5,000') ? 5000 :
    formData.dailyPlays.includes('10,000') ? 10000 : 25000;

  const totalPlays = dailyPlaysCount * calculatedDays;
  const estimatedImpressions = (totalPlays * 28).toLocaleString();
  const fleetVans = dailyPlaysCount >= 25000 ? 12 : dailyPlaysCount >= 10000 ? 6 : 3;

  return (
    <View style={styles.screenWrapper}>
      {/* Top Header & Breadcrumb */}
      <View style={styles.topNavigation}>
        <View style={styles.topNavInner}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBackToHome}
            activeOpacity={0.8}
          >
            <ArrowLeft size={18} color="#064E3B" />
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>

          <View style={styles.breadcrumbTrail}>
            <Text style={styles.breadcrumbInactive}>Adover Home</Text>
            <Text style={styles.breadcrumbDivider}>/</Text>
            <Text style={styles.breadcrumbActive}>Campaign Enquiry & Route Booking</Text>
          </View>
        </View>
      </View>

      <View style={styles.mainContainer}>
        {isSubmitted ? (
          /* SUCCESS CONFIRMATION VIEW */
          <View style={styles.successCard}>
            <View style={styles.successIconBubble}>
              <CheckCircle2 size={44} color="#059669" />
            </View>

            <Text style={styles.successHeading}>Campaign Enquiry Submitted!</Text>
            <Text style={styles.successSubtext}>
              Your campaign inquiry has been registered with Adover Transit Operations.
              Our Media Planner is verifying slot availability and route clearances.
            </Text>

            {/* Reference Ticket Box */}
            <View style={styles.ticketBox}>
              <View style={styles.ticketRow}>
                <Text style={styles.ticketLabel}>Booking Reference ID</Text>
                <Text style={styles.ticketId}>{bookingId}</Text>
              </View>
              <View style={styles.ticketRow}>
                <Text style={styles.ticketLabel}>Brand / Advertiser</Text>
                <Text style={styles.ticketValue}>{formData.companyName || 'Registered Advertiser'}</Text>
              </View>
              <View style={styles.ticketRow}>
                <Text style={styles.ticketLabel}>Estimated 2-Hr SLA Callback</Text>
                <Text style={styles.ticketValue}>Within 30-45 Minutes</Text>
              </View>
              <View style={styles.ticketRow}>
                <Text style={styles.ticketLabel}>Target City & Route Fleet</Text>
                <Text style={styles.ticketValue}>{formData.city} • {fleetVans} Dedicated LED Vans</Text>
              </View>
              <View style={styles.ticketRow}>
                <Text style={styles.ticketLabel}>Total Guaranteed Screen Plays</Text>
                <Text style={styles.ticketValueGreen}>{totalPlays.toLocaleString()} Plays</Text>
              </View>
            </View>

            <View style={styles.successActions}>
              <TouchableOpacity
                style={styles.backHomeBtn}
                onPress={onBackToHome}
                activeOpacity={0.85}
              >
                <Text style={styles.backHomeBtnText}>Return to Homepage</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.downloadPdfBtn}
                onPress={() => window.print()}
                activeOpacity={0.85}
              >
                <FileText size={16} color="#064E3B" />
                <Text style={styles.downloadPdfBtnText}>Print / Save Confirmation</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          /* ENQUIRY FORM & ESTIMATOR VIEW */
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', width: '100%' }}>
            {/* Left Column: Form */}
            <div style={{ flex: '1 1 640px', minWidth: '320px' }}>
              <View style={styles.formCard}>
                <View style={styles.formHeader}>
                  <div className="shimmer-badge" style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>
                    <View style={styles.badgePill}>
                      <Sparkles size={14} color="#065F46" />
                      <Text style={styles.badgePillText}>INSTANT ROUTE RESERVATION</Text>
                    </View>
                  </div>
                  <Text style={styles.formTitle}>Campaign Enquiry & Slot Booking</Text>
                  <Text style={styles.formDesc}>
                    Fill in your campaign parameters below. We’ll generate your verified route plan,
                    estimate reach, and secure business compliance approvals.
                  </Text>
                </View>

                {/* The HTML Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* SECTION 1: Advertiser Information */}
                  <div style={formSectionStyle}>
                    <h4 style={sectionHeadingStyle}>1. Contact & Business Details</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Brand / Company Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Zepto Retail Ltd."
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Official Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number (WhatsApp Active) *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Media Type & City */}
                  <div style={formSectionStyle}>
                    <h4 style={sectionHeadingStyle}>2. Target City & Media Format</h4>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Select Metropolitan City *</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={inputStyle}
                      >
                        {cityOptions.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label style={labelStyle}>Choose Media Format *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                      {mediaTypes.map((type) => {
                        const isSelected = formData.mediaType === type.title;
                        return (
                          <div
                            key={type.id}
                            onClick={() => setFormData({ ...formData, mediaType: type.title })}
                            style={{
                              border: isSelected ? '2px solid #10B981' : '1.5px solid #E2E8F0',
                              backgroundColor: isSelected ? '#F0FDF4' : '#FFFFFF',
                              padding: '16px',
                              borderRadius: '14px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: isSelected ? '0 4px 14px rgba(16, 185, 129, 0.15)' : 'none',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                              <span style={{ fontSize: '11px', fontWeight: 800, color: '#065F46', background: '#D1FAE5', padding: '2px 8px', borderRadius: 6 }}>
                                {type.badge}
                              </span>
                              {isSelected && <Check size={16} color="#059669" />}
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>
                              {type.title}
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748B', lineHeight: '18px' }}>
                              {type.desc}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 3: Guaranteed Plays & Duration */}
                  <div style={formSectionStyle}>
                    <h4 style={sectionHeadingStyle}>3. Daily Plays Target & Duration</h4>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Daily Guaranteed Screen Plays *</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                        {playOptions.map((opt) => {
                          const isSel = formData.dailyPlays === opt.label;
                          return (
                            <div
                              key={opt.label}
                              onClick={() => setFormData({ ...formData, dailyPlays: opt.label })}
                              style={{
                                border: isSel ? '2px solid #FACC15' : '1.5px solid #E2E8F0',
                                backgroundColor: isSel ? '#FEFCE8' : '#FFFFFF',
                                padding: '14px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                              }}
                            >
                              <div style={{ fontSize: '14px', fontWeight: 800, color: isSel ? '#854D0E' : '#0F172A' }}>
                                {opt.label}
                              </div>
                              <div style={{ fontSize: '11px', color: '#64748B', marginTop: 4 }}>
                                {opt.desc}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Campaign Duration *</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                        {durationOptions.map((dur) => {
                          const isSel = formData.duration === dur.label;
                          return (
                            <div
                              key={dur.label}
                              onClick={() => setFormData({ ...formData, duration: dur.label })}
                              style={{
                                border: isSel ? '2px solid #10B981' : '1.5px solid #E2E8F0',
                                backgroundColor: isSel ? '#ECFDF5' : '#FFFFFF',
                                padding: '12px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                fontWeight: 800,
                                fontSize: '13px',
                                color: isSel ? '#065F46' : '#334155',
                              }}
                            >
                              {dur.label}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 4: Preferred Routes Checklist */}
                  <div style={formSectionStyle}>
                    <h4 style={sectionHeadingStyle}>4. Target Corridors & Hotspots</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {availableRoutes.map((route) => {
                        const checked = formData.routes.includes(route);
                        return (
                          <div
                            key={route}
                            onClick={() => handleRouteToggle(route)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '10px 14px',
                              borderRadius: '10px',
                              backgroundColor: checked ? '#F0FDF4' : '#F8FAFC',
                              border: checked ? '1.5px solid #10B981' : '1px solid #E2E8F0',
                              cursor: 'pointer',
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              readOnly
                              style={{ cursor: 'pointer', accentColor: '#10B981' }}
                            />
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#334155' }}>
                              {route}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 5: Video Creative Upload Simulation */}
                  <div style={formSectionStyle}>
                    <h4 style={sectionHeadingStyle}>5. Brand Video Creative Upload</h4>
                    <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '10px' }}>
                      Accepted formats: MP4, MOV. Resolution: 1080x1920 or 1920x1080. Recommended duration: 15s or 30s.
                    </p>

                    <div
                      style={{
                        border: '2px dashed #CBD5E1',
                        borderRadius: '14px',
                        padding: '28px',
                        textAlign: 'center',
                        backgroundColor: '#F8FAFC',
                        cursor: 'pointer',
                        position: 'relative',
                      }}
                    >
                      <input
                        type="file"
                        accept="video/mp4,video/quicktime"
                        onChange={handleFileChange}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          cursor: 'pointer',
                        }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <Upload size={28} color="#059669" />
                        <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                          {uploadedFile ? uploadedFile.name : 'Click or Drag & Drop Brand Video File'}
                        </span>
                        <span style={{ fontSize: '12px', color: '#64748B' }}>
                          {uploadedFile ? `Ready for inspection (${uploadedFile.size})` : 'Max size 250MB (Optional at enquiry stage)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: '#FACC15',
                      border: '2px solid #EAB308',
                      color: '#064E3B',
                      padding: '16px 28px',
                      borderRadius: '16px',
                      fontWeight: 900,
                      fontSize: '16px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      boxShadow: '0 8px 24px rgba(234, 179, 8, 0.45)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{isSubmitting ? 'Verifying Routes & Reserving...' : 'Submit Campaign Enquiry & Request Slots'}</span>
                    <Send size={18} />
                  </button>
                </form>
              </View>
            </div>

            {/* Right Column: Live Campaign Estimator & Simulated Brand Preview */}
            <div style={{ flex: '1 1 360px', minWidth: '300px' }}>
              <div style={sidebarCardStyle}>
                {/* Live Brand Van Mockup Card */}
                <div
                  style={{
                    backgroundColor: '#0F172A',
                    borderRadius: '16px',
                    padding: '16px',
                    border: '3px solid #10B981',
                    marginBottom: '20px',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: '10px', background: '#FACC15', color: '#0F172A', fontWeight: 900, padding: '2px 6px', borderRadius: 4 }}>
                      LIVE FLEET PREVIEW
                    </span>
                    <span style={{ fontSize: '10px', color: '#A7F3D0', fontWeight: 700 }}>
                      📍 {formData.city} Fleet
                    </span>
                  </div>

                  <div style={{ textAlign: 'center', padding: '14px 6px', backgroundColor: '#064E3B', borderRadius: '10px', border: '1px solid #10B981' }}>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: '#FACC15', letterSpacing: '1px' }}>
                      {formData.companyName ? formData.companyName.toUpperCase() : 'YOUR BRAND HERE'}
                    </div>
                    <div style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 700, marginTop: 4 }}>
                      {formData.dailyPlays} • 100% P3 4K LED
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <Sparkles size={18} color="#059669" />
                  <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', margin: 0 }}>
                    Live Campaign Estimate
                  </h4>
                </div>
                <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '18px' }}>
                  Real-time projections for {formData.city} network.
                </p>

                {/* Key Numbers */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={statBoxStyle}>
                    <span style={statBoxLabel}>Total Guaranteed Plays</span>
                    <span style={statBoxValueGreen}>{totalPlays.toLocaleString()} Screen Plays</span>
                  </div>

                  <div style={statBoxStyle}>
                    <span style={statBoxLabel}>Estimated Road Eyeballs</span>
                    <span style={statBoxValueYellow}>{estimatedImpressions} Impressions</span>
                  </div>

                  <div style={statBoxStyle}>
                    <span style={statBoxLabel}>Allocated Fleet Size</span>
                    <span style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
                      {fleetVans} Dedicated LED Vans
                    </span>
                  </div>
                </div>

                {/* Guarantees List */}
                <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontWeight: 700, color: '#064E3B' }}>
                    <CheckCircle2 size={15} color="#059669" />
                    <span>2-Hour Business & RTO Clearance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontWeight: 700, color: '#064E3B' }}>
                    <CheckCircle2 size={15} color="#059669" />
                    <span>Live GPS Telemetry Dashboard Access</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontWeight: 700, color: '#064E3B' }}>
                    <CheckCircle2 size={15} color="#059669" />
                    <span>Tamper-Proof Proof-of-Play Audit</span>
                  </div>
                </div>

                {/* Direct Phone Support */}
                <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#FEFCE8', borderRadius: '14px', border: '1.5px solid #FEF08A' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#713F12', fontWeight: 800, fontSize: '12px', marginBottom: 4 }}>
                    <PhoneCall size={14} />
                    <span>NEED IMMEDIATE ROUTE BOOKING?</span>
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 900, color: '#064E3B' }}>
                    +91 90031 70100 / +91 73585 70999
                  </div>
                  <div style={{ fontSize: '11px', color: '#854D0E', marginTop: 2 }}>
                    Transit Media Desks open 9:00 AM – 8:00 PM IST
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </View>
    </View>
  );
}

const formSectionStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  border: '1.5px solid #E2E8F0',
  padding: '22px',
};

const sectionHeadingStyle = {
  fontSize: '16px',
  fontWeight: 800,
  color: '#0F172A',
  margin: '0 0 16px 0',
};

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 700,
  color: '#475569',
  marginBottom: '6px',
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  border: '1.5px solid #CBD5E1',
  fontSize: '14px',
  fontFamily: 'inherit',
  color: '#0F172A',
  backgroundColor: '#FAFAFA',
  outline: 'none',
  boxSizing: 'border-box',
};

const sidebarCardStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  border: '2px solid #E2E8F0',
  padding: '24px',
  position: 'sticky',
  top: '90px',
  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
};

const statBoxStyle = {
  backgroundColor: '#F8FAFC',
  borderRadius: '12px',
  padding: '14px',
  border: '1px solid #E2E8F0',
};

const statBoxLabel = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 700,
  color: '#64748B',
  textTransform: 'uppercase',
  marginBottom: '4px',
};

const statBoxValueGreen = {
  fontSize: '20px',
  fontWeight: 900,
  color: '#059669',
};

const statBoxValueYellow = {
  fontSize: '20px',
  fontWeight: 900,
  color: '#D97706',
};

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: '#FAFAFA',
    minHeight: '100%',
    paddingBottom: 64,
  },
  topNavigation: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingVertical: 14,
  },
  topNavInner: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ECFDF5',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  backButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#064E3B',
  },
  breadcrumbTrail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  breadcrumbInactive: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  breadcrumbDivider: {
    fontSize: 12,
    color: '#CBD5E1',
  },
  breadcrumbActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
  },
  mainContainer: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    padding: 32,
    boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
  },
  formHeader: {
    marginBottom: 24,
  },
  badgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#ECFDF5',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
  },
  badgePillText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 0.8,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 8,
    letterSpacing: -0.4,
  },
  formDesc: {
    fontSize: 14,
    lineHeight: 22,
    color: '#64748B',
  },
  successCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#A7F3D0',
    padding: 44,
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 680,
    alignSelf: 'center',
    boxShadow: '0 16px 45px rgba(16, 185, 129, 0.15)',
  },
  successIconBubble: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#A7F3D0',
    marginBottom: 20,
  },
  successHeading: {
    fontSize: 28,
    fontWeight: '900',
    color: '#064E3B',
    marginBottom: 10,
    textAlign: 'center',
  },
  successSubtext: {
    fontSize: 15,
    lineHeight: 24,
    color: '#475569',
    marginBottom: 28,
    textAlign: 'center',
  },
  ticketBox: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 20,
    gap: 12,
    marginBottom: 28,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 8,
  },
  ticketLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  ticketId: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 1,
  },
  ticketValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
  },
  ticketValueGreen: {
    fontSize: 16,
    fontWeight: '900',
    color: '#059669',
  },
  successActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    justifyContent: 'center',
  },
  backHomeBtn: {
    backgroundColor: '#FACC15',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#EAB308',
  },
  backHomeBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#064E3B',
  },
  downloadPdfBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ECFDF5',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
  },
  downloadPdfBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#064E3B',
  },
});
