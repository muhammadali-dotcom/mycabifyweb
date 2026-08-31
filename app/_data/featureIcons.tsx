import type { ReactElement } from "react";

export const featureIcons: Record<string, ReactElement> = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  ),
  dispatch: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M3 9h18M8 4v5" strokeLinecap="round" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M16 14.5h2.5" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
      <path d="M3 20h18" strokeLinecap="round" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 0 0 4 0" strokeLinecap="round" />
    </svg>
  ),
  route: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="18" cy="18" r="2.3" />
      <path d="M8.2 6.8C13 8 12 15 15.8 16.2" strokeLinecap="round" />
    </svg>
  ),
  navigation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5 19.5 20 12 16.5 4.5 20 12 3.5z" strokeLinejoin="round" />
    </svg>
  ),
  booking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8 12.5l2.6 2.6L16.5 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  ),
  history: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12a8 8 0 1 0 2.6-5.9" strokeLinecap="round" />
      <path d="M3 4v4.5h4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8v4.3l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="6.5" y="3" width="11" height="18" rx="2" />
      <path d="M11 18.5h2" strokeLinecap="round" />
    </svg>
  ),
  sync: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6" strokeLinecap="round" />
      <path d="M17 3v4h-4M7 21v-4h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Problem Section Icons
  scattered: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="5" cy="5" r="1.5" />
      <circle cx="19" cy="7" r="1.5" />
      <circle cx="8" cy="18" r="1.5" />
      <circle cx="16" cy="15" r="1.5" />
      <circle cx="12" cy="11" r="1.5" />
      <path d="M5 5l7 6M12 11l7 4M8 18l8-3M5 5l11 10" opacity="0.3" strokeLinecap="round" />
    </svg>
  ),
  duplicate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 4v12h12V8M4 8h12v12H4z" strokeLinejoin="round" />
      <path d="M9 9h6M9 13h6" strokeLinecap="round" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" strokeLinejoin="round" />
    </svg>
  ),
  heavy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4v12" strokeLinecap="round" />
      <rect x="6" y="16" width="12" height="3" rx="1" />
      <path d="M8 8l-3 2M16 8l3 2" strokeLinecap="round" />
    </svg>
  ),
  // Why Section Icons
  connected: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8 11.5h8M7 9l8-3M7 15l8 3" strokeLinecap="round" />
    </svg>
  ),
  clarity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path
        d="M3.5 10.5c1-3 3.5-5 8.5-5s7.5 2 8.5 5M3.5 13.5c1 3 3.5 5 8.5 5s7.5-2 8.5-5"
        strokeLinecap="round"
      />
    </svg>
  ),
  flexible: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="6" width="5" height="12" rx="1" />
      <rect x="15" y="4" width="5" height="14" rx="1" />
      <path d="M9.5 12h5" strokeLinecap="round" />
    </svg>
  ),
  valueIcon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M5 21v-8l3-6h8l3 6v8M9 9l3-4l3 4M6 21h12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  clock247: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Support Section Icons
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  package: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2L3 6v10c0 5 9 7 9 7s9-2 9-7V6l-9-4z" strokeLinejoin="round" />
      <path d="M3 6l9 5l9-5" strokeLinecap="round" />
    </svg>
  ),
  graduation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3L3 8v4c0 3 4 5 9 6.5 5-1.5 9-3.5 9-6.5V8l-9-5z" strokeLinejoin="round" />
      <path d="M12 10v8M12 18l6-4" strokeLinecap="round" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 2v12m-3-1h6m-1.5 7l-2-3h4l-2 3M6 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3M12 14v2" strokeLinecap="round" />
    </svg>
  ),
  // FAQ Category Icons
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path
        d="M9 9c0-1.5 1-2.5 3-2.5s3 1 3 2c0 1.5-1.5 2-2.5 3.5M12 18h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pricing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10M9 9h6l-1 8H10l-1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.1 19.1l-2.1-2.1M7 7l-2.1-2.1M19.1 4.9l-2.1 2.1M7 17l-2.1 2.1"
        strokeLinecap="round"
      />
    </svg>
  ),
  integration: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M6 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm6 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM9 12h6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Why MyCabify / Product benefits icons
  understand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 6c-1.8-1.3-4-2-6.5-2v13.5c2.5 0 4.7.7 6.5 2m0-13.5c1.8-1.3 4-2 6.5-2v13.5c-2.5 0-4.7.7-6.5 2m0-13.5v13.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M11.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v6.5L13 21l8-8-9.5-9.5z" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.5" />
    </svg>
  ),
};
