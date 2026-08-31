import { createContext, useContext, useState, useEffect } from 'react';

export const colorThemes = [
  {
    id: 'violet',
    name: 'Royal Violet',
    tag: 'Default',
    // Accent
    primary: '#5865F2',
    secondary: '#7C83FF',
    light: '#A8B0FF',
    glow: 'rgba(88, 101, 242, 0.25)',
    gradient: 'linear-gradient(135deg, #5865F2, #7C83FF, #A8B0FF)',
    swatch: ['#5865F2', '#7C83FF', '#5B3FA6'],
    // Base dark surfaces
    navy900: '#0B132B',
    navy800: '#111C3D',
    navy700: '#172348',
    navy600: '#1C2B56',
    navy500: '#263253',
    // Container (vibrant mid-section)
    containerBg: '#5853A9',
    containerHover: '#4D4899',
    // Text on dark
    textPrimary: '#F8FAFF',
    textSecondary: '#A8B1C7',
    textMuted: '#6B7394',
    // Borders
    border: '#263253',
    borderHover: '#5865F2',
    // Light surfaces (white sections)
    surfaceLight: '#FFFFFF',
    surfaceCard: '#F8FAFC',
    textOnLight: '#0F172A',
    textOnLightSecondary: '#475569',
    textOnLightMuted: '#64748B',
    borderLight: '#E2E8F0',
    // Badges on light
    badgeBg: 'rgba(91, 63, 166, 0.1)',
    badgeText: '#5B3FA6',
    // Dark buttons on light
    buttonDark: '#0F172A',
    buttonDarkHover: '#1E293B',
  },
  {
    id: 'blue',
    name: 'Electric Blue',
    tag: 'Cosmic',
    primary: '#2563EB',
    secondary: '#60A5FA',
    light: '#93C5FD',
    glow: 'rgba(37, 99, 235, 0.25)',
    gradient: 'linear-gradient(135deg, #2563EB, #60A5FA, #93C5FD)',
    swatch: ['#2563EB', '#60A5FA', '#1E40AF'],
    navy900: '#080F1E',
    navy800: '#0D1830',
    navy700: '#122142',
    navy600: '#172A54',
    navy500: '#1D3366',
    containerBg: '#1E40AF',
    containerHover: '#1A37A0',
    textPrimary: '#F0F4FF',
    textSecondary: '#93ADCF',
    textMuted: '#5E7A9E',
    border: '#1D3366',
    borderHover: '#2563EB',
    surfaceLight: '#FFFFFF',
    surfaceCard: '#F8FAFC',
    textOnLight: '#0F172A',
    textOnLightSecondary: '#475569',
    textOnLightMuted: '#64748B',
    borderLight: '#E2E8F0',
    badgeBg: 'rgba(37, 99, 235, 0.1)',
    badgeText: '#1E40AF',
    buttonDark: '#0F172A',
    buttonDarkHover: '#1E293B',
  },
  {
    id: 'cyan',
    name: 'Ocean Cyan',
    tag: 'Tech',
    primary: '#0891B2',
    secondary: '#22D3EE',
    light: '#67E8F9',
    glow: 'rgba(8, 145, 178, 0.25)',
    gradient: 'linear-gradient(135deg, #0891B2, #22D3EE, #67E8F9)',
    swatch: ['#0891B2', '#22D3EE', '#0E7490'],
    navy900: '#081A1F',
    navy800: '#0E2830',
    navy700: '#143641',
    navy600: '#1A4452',
    navy500: '#205263',
    containerBg: '#0E7490',
    containerHover: '#0C6680',
    textPrimary: '#F0FDFA',
    textSecondary: '#8BBCC9',
    textMuted: '#5E8A96',
    border: '#205263',
    borderHover: '#0891B2',
    surfaceLight: '#FFFFFF',
    surfaceCard: '#F8FAFC',
    textOnLight: '#0F172A',
    textOnLightSecondary: '#475569',
    textOnLightMuted: '#64748B',
    borderLight: '#E2E8F0',
    badgeBg: 'rgba(8, 145, 178, 0.1)',
    badgeText: '#0E7490',
    buttonDark: '#0F172A',
    buttonDarkHover: '#1E293B',
  },
  {
    id: 'amber',
    name: 'Solar Amber',
    tag: 'Warm',
    primary: '#D97706',
    secondary: '#FBBF24',
    light: '#FDE68A',
    glow: 'rgba(217, 119, 6, 0.25)',
    gradient: 'linear-gradient(135deg, #D97706, #FBBF24, #FDE68A)',
    swatch: ['#D97706', '#FBBF24', '#B45309'],
    navy900: '#1A1408',
    navy800: '#28200E',
    navy700: '#362C14',
    navy600: '#44381A',
    navy500: '#524420',
    containerBg: '#B45309',
    containerHover: '#A04808',
    textPrimary: '#FFFBEB',
    textSecondary: '#C9B07A',
    textMuted: '#9A8050',
    border: '#524420',
    borderHover: '#D97706',
    surfaceLight: '#FFFFFF',
    surfaceCard: '#F8FAFC',
    textOnLight: '#0F172A',
    textOnLightSecondary: '#475569',
    textOnLightMuted: '#64748B',
    borderLight: '#E2E8F0',
    badgeBg: 'rgba(217, 119, 6, 0.1)',
    badgeText: '#B45309',
    buttonDark: '#0F172A',
    buttonDarkHover: '#1E293B',
  },
  {
    id: 'lavender',
    name: 'Lavender Mist',
    tag: 'Atmospheric',
    primary: '#7C3AED',
    secondary: '#A78BFA',
    light: '#C4B5FD',
    glow: 'rgba(124, 58, 237, 0.25)',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 40%, #C4B5FD 75%, #E9D5FF 100%)',
    swatch: ['#7C3AED', '#A78BFA', '#C4B5FD', '#E9D5FF'],
    navy900: '#0E0C1E',
    navy800: '#171330',
    navy700: '#201A44',
    navy600: '#2A2258',
    navy500: '#352B6E',
    containerBg: '#5853A9',
    containerHover: '#4D4899',
    textPrimary: '#FAF5FF',
    textSecondary: '#D8B4FE',
    textMuted: '#A855F7',
    border: '#352B6E',
    borderHover: '#7C3AED',
    surfaceLight: '#FFFFFF',
    surfaceCard: '#F5F3FF',
    textOnLight: '#1E1238',
    textOnLightSecondary: '#4C1D95',
    textOnLightMuted: '#6D28D9',
    borderLight: '#DDD6FE',
    badgeBg: 'rgba(124, 58, 237, 0.12)',
    badgeText: '#7C3AED',
    buttonDark: '#1E1238',
    buttonDarkHover: '#2E1065',
  },
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentColorTheme, setCurrentColorTheme] = useState(() => {
    try {
      const savedColor = localStorage.getItem('octastar_color_theme');
      if (savedColor && colorThemes.some((t) => t.id === savedColor)) {
        return savedColor;
      }
    } catch (e) {}
    return 'lavender';
  });

  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const t = colorThemes.find((th) => th.id === currentColorTheme) || colorThemes[0];

    root.setAttribute('data-color-theme', currentColorTheme);

    // ── Base dark surfaces ──
    root.style.setProperty('--color-navy-900', t.navy900);
    root.style.setProperty('--color-navy-800', t.navy800);
    root.style.setProperty('--color-navy-700', t.navy700);
    root.style.setProperty('--color-navy-600', t.navy600);
    root.style.setProperty('--color-navy-500', t.navy500);

    // ── Accent ──
    root.style.setProperty('--color-accent-primary', t.primary);
    root.style.setProperty('--color-accent-secondary', t.secondary);
    root.style.setProperty('--color-accent-light', t.light);
    root.style.setProperty('--color-accent-glow', t.glow);

    // ── Container ──
    root.style.setProperty('--color-theme-container', t.containerBg);
    root.style.setProperty('--color-theme-container-hover', t.containerHover);
    root.style.setProperty('--color-theme-gradient', t.gradient);

    // ── Text ──
    root.style.setProperty('--color-text-primary', t.textPrimary);
    root.style.setProperty('--color-text-secondary', t.textSecondary);
    root.style.setProperty('--color-text-muted', t.textMuted);

    // ── Borders ──
    root.style.setProperty('--color-border', t.border);
    root.style.setProperty('--color-border-hover', t.borderHover);

    // ── Light surfaces ──
    root.style.setProperty('--color-surface-light', t.surfaceLight);
    root.style.setProperty('--color-surface-card', t.surfaceCard);
    root.style.setProperty('--color-text-on-light', t.textOnLight);
    root.style.setProperty('--color-text-on-light-secondary', t.textOnLightSecondary);
    root.style.setProperty('--color-text-on-light-muted', t.textOnLightMuted);
    root.style.setProperty('--color-border-light', t.borderLight);

    // ── Badges ──
    root.style.setProperty('--color-badge-bg', t.badgeBg);
    root.style.setProperty('--color-badge-text', t.badgeText);

    // ── Dark buttons ──
    root.style.setProperty('--color-button-dark', t.buttonDark);
    root.style.setProperty('--color-button-dark-hover', t.buttonDarkHover);

    try {
      localStorage.setItem('octastar_color_theme', currentColorTheme);
    } catch (e) {}
  }, [currentColorTheme]);

  const selectColorTheme = (themeId) => {
    if (colorThemes.some((t) => t.id === themeId)) {
      setCurrentColorTheme(themeId);
    }
  };

  const activeTheme = colorThemes.find((t) => t.id === currentColorTheme) || colorThemes[0];

  return (
    <ThemeContext.Provider
      value={{
        colorTheme: currentColorTheme,
        activeTheme,
        colorThemes,
        selectColorTheme,
        isThemeModalOpen,
        setIsThemeModalOpen,
        toggleThemeModal: () => setIsThemeModalOpen((prev) => !prev),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
