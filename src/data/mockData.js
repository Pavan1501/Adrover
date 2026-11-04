// src/data/mockData.js

export const PARTNER_COMPANIES = [
  { name: 'Tata Motors', category: 'Automotive', logoText: 'TATA MOTORS', color: '#1E40AF', metric: '4.2M Views' },
  { name: 'Zomato', category: 'Food & Dining', logoText: 'zomato', color: '#E11D48', metric: '+48% Orders' },
  { name: 'Swiggy', category: 'Quick Commerce', logoText: 'SWIGGY', color: '#EA580C', metric: '+62% Installs' },
  { name: 'Amazon', category: 'E-Commerce', logoText: 'amazon.in', color: '#D97706', metric: '10M+ Reach' },
  { name: 'Reliance Jio', category: 'Telecom & Tech', logoText: 'Jio', color: '#2563EB', metric: '3.8M Clicks' },
  { name: 'Flipkart', category: 'Retail', logoText: 'Flipkart', color: '#0284C7', metric: '5X Lift' },
  { name: 'Mahindra', category: 'Automotive', logoText: 'Mahindra', color: '#DC2626', metric: '8 Cities' },
  { name: 'Paytm', category: 'Fintech', logoText: 'Paytm', color: '#0EA5E9', metric: '25K Stores' },
  { name: 'PhonePe', category: 'Fintech', logoText: 'PhonePe', color: '#7C3AED', metric: '+35% Usage' },
  { name: 'Uber', category: 'Mobility', logoText: 'Uber', color: '#111827', metric: 'Transit Sync' },
  { name: 'Titan', category: 'Luxury Retail', logoText: 'TITAN', color: '#4B5563', metric: 'Premium Footfall' },
  { name: 'Coca-Cola', category: 'Beverages', logoText: 'Coca-Cola', color: '#B91C1C', metric: 'Summer Splash' },
];

export const CAMPAIGN_STEPS = [
  {
    step: '01',
    title: 'Campaign Pitch & Video Submission',
    short: 'Submit Video',
    badge: 'Upload & Review',
    desc: 'Upload your high-definition motion video or creative visual (15s / 30s formats). Select target metropolitan clusters, routes, and peak-hour time slots.',
    features: ['4K / Full HD 60FPS Support', 'Custom Audio & Sound Sync', 'Automated Aspect Ratio Formatting', 'Smart Geo-zone Planning'],
    icon: 'Video',
    accentColor: '#F59E0B',
  },
  {
    step: '02',
    title: 'Business & Regulatory Approval',
    short: 'Business Approval',
    badge: 'Fast-Track 2hr Clearance',
    desc: 'Automated compliance check combined with our municipal liaison network verifies transit permissions, traffic department clearances, and route eligibility.',
    features: ['100% Municipal & RTO Compliant', 'Automated Content Verification', 'Zero Route Interruption Guarantee', 'Legal Advertising Permit Issued'],
    icon: 'CheckCircle2',
    accentColor: '#10B981',
  },
  {
    step: '03',
    title: 'Secure Payment & Slot Reservation',
    short: 'Payment',
    badge: 'Escrow Protected',
    desc: 'Lock in your campaign slots with upfront transparent pricing. Split payment milestones with verified proof-of-start escrow guarantees.',
    features: ['GST Invoices & Corporate Billing', 'Real-time Slot Locking', 'Flexible Payment Gateways', 'Zero Hidden Route Charges'],
    icon: 'CreditCard',
    accentColor: '#FACC15',
  },
  {
    step: '04',
    title: '10,000+ Guaranteed Screen Plays',
    short: '10,000 Plays',
    badge: 'Live Broadcast',
    desc: 'High-frequency broadcast across designated prime transit corridors. Track every single play in real time with GPS coordinates, timestamps, and camera proof.',
    features: ['Guaranteed 10,000+ Screen Plays', 'Live Fleet GPS Telemetry', 'Tamper-Proof Proof-of-Play Logs', 'Interactive QR Traffic Tracking'],
    icon: 'PlayCircle',
    accentColor: '#059669',
  },
];

export const CITIES_SERVED = [
  { name: 'Mumbai', vehicles: 45, dailyImpressions: '2.8M', hotspot: 'Marine Drive & Bandra-Kurla Complex' },
  { name: 'Bengaluru', vehicles: 40, dailyImpressions: '2.4M', hotspot: 'MG Road, Indiranagar, Electronic City' },
  { name: 'Delhi NCR', vehicles: 55, dailyImpressions: '3.6M', hotspot: 'Connaught Place, Cyber Hub, Noida' },
  { name: 'Chennai', vehicles: 35, dailyImpressions: '2.1M', hotspot: 'Velachery, Anna Nagar, OMR IT Corridor' },
  { name: 'Hyderabad', vehicles: 30, dailyImpressions: '1.9M', hotspot: 'Hitec City, Jubilee Hills, Gachibowli' },
  { name: 'Pune', vehicles: 25, dailyImpressions: '1.4M', hotspot: 'Koregaon Park, Viman Nagar, Hinjawadi' },
];

export const FAQS = [
  {
    q: 'What is Adover Mobile LED Van advertising?',
    a: 'Adover operates modern transit vehicles equipped with ultra-bright P3/P4 LED digital screens (up to 12ft x 6ft) and high-fidelity sound systems that drive through high-density urban corridors, business parks, and shopping avenues, delivering unmissable video advertising to pedestrian and commuter traffic.',
  },
  {
    q: 'How is the 10,000+ plays metric guaranteed and audited?',
    a: 'Every Adover vehicle is equipped with an IoT telemetry unit connected to our central broadcast server. The unit logs GPS coordinates, exact millisecond timestamps, and captures automated screen camera snapshots. Advertisers access a live dashboard with proof-of-play logs and receive an audited play certificate.',
  },
  {
    q: 'How fast is the business approval process?',
    a: 'Once you submit your creative video and campaign details, our compliance team reviews the content against local municipal and transit guidelines within 2 hours during business hours. All traffic clearances are pre-arranged.',
  },
  {
    q: 'Can we choose specific routes and operational times?',
    a: 'Yes! You can choose peak office hours (8:00 AM - 12:00 PM), evening rush & entertainment hours (5:00 PM - 10:00 PM), or full-day 12-hour continuous rotations covering tech parks, colleges, malls, and major traffic intersections.',
  },
];

