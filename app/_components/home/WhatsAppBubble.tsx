"use client";

import { useEffect, useState } from "react";
import styles from "./WhatsAppBubble.module.css";

const MESSAGES = [
  "Have a question? Ask me anything!",
  "Need help getting started?",
  "Chat with our minicab ops experts",
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
      className={styles.whatsappBubble}
      href="https://wa.me/442084558888"
      target="_blank"
      aria-label="Chat with MyCabify on WhatsApp"
    >
      <span key={index}>{MESSAGES[index]}</span>
    </a>
  );
}
