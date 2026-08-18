"use client";

import { useState } from "react";
import Link from "next/link";

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-banner">
      <p>
        Book a free demo with us. <span>See MyCabify in action.</span>
      </p>
      <Link href="/contact" className="announcement-banner-cta">
        Book a Demo →
      </Link>
      <button
        type="button"
        className="announcement-banner-close"
        aria-label="Dismiss announcement"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
}
