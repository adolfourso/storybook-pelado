// Design Tokens for educ.ar inspired components
export const tokens = {
  // Colors based on educ.ar palette
  colors: {
    // Primary colors
    primary: {
      blue: '#3C5FA9',
      orange: '#EC662A', 
      purple: '#8E348B',
      red: '#E7295A'
    },
    
    // Secondary variations
    secondary: {
      blueLight: '#5A7BC4',
      blueDark: '#2D4680',
      orangeLight: '#FF7E47',
      orangeDark: '#C8531E',
      purpleLight: '#A653A8',
      purpleDark: '#6D2A68',
      redLight: '#F04D77',
      redDark: '#C21E42'
    },
    
    // Neutral colors
    neutral: {
      white: '#FFFFFF',
      black: '#000000',
      gray100: '#F8F9FA',
      gray200: '#E9ECEF',
      gray300: '#DEE2E6',
      gray400: '#CED4DA',
      gray500: '#ADB5BD',
      gray600: '#6C757D',
      gray700: '#495057',
      gray800: '#343A40',
      gray900: '#212529'
    },
    
    // Status colors
    status: {
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545',
      info: '#17A2B8'
    }
  },
  
  // Typography based on Encode Sans
  typography: {
    fontFamily: {
      primary: "'Encode Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', Consolas, 'Courier New', monospace"
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem'   // 60px
    },
    
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    }
  },
  
  // Spacing system
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem'      // 96px
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '50%'
  },
  
  // Shadows
  boxShadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  
  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060
  }
};

// CSS Custom Properties generator
export const generateCSSProperties = () => {
  const cssProps = {};
  
  // Colors
  Object.entries(tokens.colors).forEach(([category, colors]) => {
    Object.entries(colors).forEach(([name, value]) => {
      cssProps[`--color-${category}-${name}`] = value;
    });
  });
  
  // Typography
  Object.entries(tokens.typography.fontSize).forEach(([name, value]) => {
    cssProps[`--font-size-${name}`] = value;
  });
  
  // Spacing
  Object.entries(tokens.spacing).forEach(([name, value]) => {
    cssProps[`--spacing-${name}`] = value;
  });
  
  return cssProps;
};