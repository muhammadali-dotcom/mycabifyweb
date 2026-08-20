"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { solutionIcons } from "./_data/solutionIcons";
const solutions = [
  {
    no: "01",
    name: "Dispatch System",
    href: "/dispatch-system",
    copy: "Bookings, allocation and live operational control.",
    icon: solutionIcons["dispatch-system"],
  },
  {
    no: "02",
    name: "Driver App",
    href: "/driver-app",
    copy: "Keep drivers connected through every journey.",
    icon: solutionIcons["driver-app"],
  },
  {
    no: "03",
    name: "Passenger App",
    href: "/passenger-app",
    copy: "A simple branded passenger booking experience.",
    icon: solutionIcons["passenger-app"],
  },
  {
    no: "04",
    name: "Web Booker",
    href: "/web-booker",
    copy: "Turn website visitors into direct bookings.",
    icon: solutionIcons["web-booker"],
  },
];
export default function SiteHeader({ onDemo }: { onDemo?: () => void }) {
  const [mobile, setMobile] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const wrap = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const isSolutionsActive = solutions.some((s) => pathname === s.href);
  const close = () => {
    setMobile(false);
    setSolutionsOpen(false);
  };
  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node))
        setSolutionsOpen(false);
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", key);
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [mobile]);
  return (
    <header ref={wrap} className="shared-header">
      <Link className="logo" href="/" onClick={close}>
        <img src="/mycabify-logo.png" alt="MyCabify" />
        <b>MyCabify</b>
      </Link>
      <nav className={mobile ? "open" : ""}>
        <Link href="/" onClick={close} className={isActive("/") ? "active" : ""}>
          Home
        </Link>
        <div
          className={`solution-nav ${solutionsOpen ? "expanded" : ""}`}
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}
        >
          <div className="solutions-trigger">
            <span className={isSolutionsActive ? "active" : ""}>Solutions</span>
            <button onClick={() => setSolutionsOpen(!solutionsOpen)} aria-expanded={solutionsOpen} aria-label="Toggle solutions menu">
              <i>
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m3 5.5 5 5 5-5" />
                </svg>
              </i>
            </button>
          </div>
          <div className="mega">
            {solutions.map((s) => (
              <Link key={s.name} href={s.href} onClick={close}>
                <span className="mega-icon">{s.icon}</span>
                <div>
                  <b>{s.name}</b>
                  <small>{s.copy}</small>
                </div>
                <i>↗</i>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/why-mycabify" onClick={close} className={isActive("/why-mycabify") ? "active" : ""}>
          Why MyCabify
        </Link>
        <Link href="/about" onClick={close} className={isActive("/about") ? "active" : ""}>
          About
        </Link>
        <Link href="/contact" onClick={close} className={isActive("/contact") ? "active" : ""}>
          Contact
        </Link>
        <div className="mobile-actions">
          <a className="phone-link" href="tel:02084558888">🇬🇧 020 8455 8888</a>
          {onDemo ? (
            <button
              className="pill"
              onClick={() => {
                close();
                onDemo();
              }}
            >
              Book a Demo <i>↗</i>
            </button>
          ) : (
            <Link className="pill" href="/contact" onClick={close}>
              Book a Demo <i>↗</i>
            </Link>
          )}
        </div>
      </nav>
      <div className="header-cta">
        <a className="phone-link" href="tel:02084558888">🇬🇧 020 8455 8888</a>
        {onDemo ? (
          <button className="pill" onClick={onDemo}>
            Book a Demo <i>↗</i>
          </button>
        ) : (
          <Link className="pill" href="/contact">
            Book a Demo <i>↗</i>
          </Link>
        )}
      </div>
      <button
        className="hamburger"
        onClick={() => setMobile(!mobile)}
        aria-label="Toggle navigation"
        aria-expanded={mobile}
      >
        {mobile ? "×" : "☰"}
      </button>
    </header>
  );
}
