"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Have a question? Ask me anything!",
  "Need help getting started?",
  "Chat with our taxi ops experts",
  "We usually reply in minutes",
];

export function WhatsAppBubble() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <a
      className="whatsapp-bubble"
      href="https://wa.me/442084558888"
      target="_blank"
      aria-label="Chat with MyCabify on WhatsApp"
    >
      <span key={index}>{MESSAGES[index]}</span>
    </a>
  );
}
