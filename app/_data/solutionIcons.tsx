import type { ReactElement } from "react";

export const solutionIcons: Record<string, ReactElement> = {
  "dispatch-system": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M3 9h18M8 4v5" strokeLinecap="round" />
    </svg>
  ),
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
};
