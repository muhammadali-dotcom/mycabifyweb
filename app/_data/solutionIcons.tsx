import type { ReactElement } from "react";
import { featureIcons } from "./featureIcons";

export const solutionIcons: Record<string, ReactElement> = {
  "dispatch-system": featureIcons.dispatch,
  "driver-app": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 6v3.6M12 14.4V18M6 12h3.6M14.4 12H18" strokeLinecap="round" />
    </svg>
  ),
  "passenger-app": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" strokeLinecap="round" />
    </svg>
  ),
  "web-booker": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5z" />
    </svg>
  ),
  "airport-transfers": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5 19.5 20 12 16.5 4.5 20 12 3.5z" strokeLinejoin="round" />
    </svg>
  ),
  "school-run": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3L3 8v4c0 3 4 5 9 6.5 5-1.5 9-3.5 9-6.5V8l-9-5z" strokeLinejoin="round" />
      <path d="M12 10v8M12 18l6-4" strokeLinecap="round" />
    </svg>
  ),
  "corporate-travel": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="8" width="18" height="12" rx="1.5" />
      <path d="M8 8V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V8M3 13h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "private-hire-taxi-firms": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 16.5V13l2-5h12l2 5v3.5" strokeLinejoin="round" />
      <rect x="2.5" y="16.5" width="19" height="3.5" rx="1.2" />
      <circle cx="7" cy="16.5" r="1.2" />
      <circle cx="17" cy="16.5" r="1.2" />
    </svg>
  ),
  "sen-transport": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="17" cy="18.5" r="3.2" />
      <circle cx="10" cy="6" r="1.6" />
      <path d="M10 8v5l3.2 2.2M10 13H6.5M13 8.5h4l2 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
