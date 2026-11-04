// src/styles/theme.js

export const THEME = {
  colors: {
    // Green palette
    primaryGreen: '#10B981',
    primaryGreenDark: '#059669',
    primaryGreenDeep: '#065F46',
    primaryGreenLight: '#D1FAE5',
    primaryGreenSoft: '#ECFDF5',

    // Yellow palette
    primaryYellow: '#FACC15',
    primaryYellowDark: '#EAB308',
    primaryYellowDeep: '#B45309',
    primaryYellowLight: '#FEF08A',
    primaryYellowSoft: '#FEF9C3',

    // Neutral palette (Bright, clean, daylight - NOT dark!)
    bgLight: '#FAFAFA',
    bgWhite: '#FFFFFF',
    bgSoftGray: '#F8FAFC',
    bgMuted: '#F1F5F9',

    // Typography
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#64748B',
    textLight: '#94A3B8',
    textWhite: '#FFFFFF',

    // Borders & Dividers
    borderSubtle: '#E2E8F0',
    borderGreen: '#A7F3D0',
    borderYellow: '#FDE68A',

    // Accents
    accentRed: '#EF4444',
    accentBlue: '#3B82F6',
  },
  shadows: {
    sm: {
      shadowColor: '#0F172A',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#0F172A',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 4,
    },
    lg: {
      shadowColor: '#10B981',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 20,
      elevation: 8,
    },
    yellowGlow: {
      shadowColor: '#EAB308',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 16,
      elevation: 6,
    },
  },
};

