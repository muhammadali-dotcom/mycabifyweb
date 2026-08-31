"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { solutionIcons } from "./_data/solutionIcons";

type HeaderMenuItem = {
  name: string;
  href: string;
  copy: string;
  icon: ReactNode;
};

const solutionItems: HeaderMenuItem[] = [
  {
    name: "Airport Transfers",
    href: "/airport-transfers",
    copy: "Flight-linked pickups and pre-booked returns.",
    icon: solutionIcons["airport-transfers"],
  },
  {
    name: "School Run",
    href: "/school-run",
    copy: "Recurring routes with real-time pickup tracking.",
    icon: solutionIcons["school-run"],
  },
  {
    name: "Corporate Travel",
    href: "/corporate-travel",
    copy: "Account billing and self-service booking for business clients.",
    icon: solutionIcons["corporate-travel"],
  },
  {
    name: "Private Hire & Taxi Firms",
    href: "/private-hire-taxi-firms",
    copy: "Multi-channel bookings and live driver allocation.",
    icon: solutionIcons["private-hire-taxi-firms"],
  },
  {
    name: "Special Educational Needs Transport (SEN)",
    href: "/sen-transport",
    copy: "Trained drivers and accessible vehicles for children with SEN.",
    icon: solutionIcons["sen-transport"],
  },
];

const featureItems: HeaderMenuItem[] = [
  {
    name: "Dispatch System",
    href: "/dispatch-system",
    copy: "Bookings, allocation and live operational control.",
    icon: solutionIcons["dispatch-system"],
  },
  {
    name: "Driver App",
    href: "/driver-app",
    copy: "Keep drivers connected through every journey.",
    icon: solutionIcons["driver-app"],
  },
  {
    name: "Passenger App",
    href: "/passenger-app",
    copy: "A simple branded passenger booking experience.",
    icon: solutionIcons["passenger-app"],
  },
  {
    name: "Web Booker",
    href: "/web-booker",
    copy: "Turn website visitors into direct bookings.",
    icon: solutionIcons["web-booker"],
  },
];
export default function SiteHeader({ onDemo }: { onDemo?: () => void }) {
  const [mobile, setMobile] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [newSolutionOpen, setNewSolutionOpen] = useState(false);
  const [canHover] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(hover: hover)").matches;
  });
  const wrap = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const isFeaturesActive = featureItems.some((s) => pathname === s.href);
  const isSolutionsActive = solutionItems.some((s) => pathname === s.href);
  const close = () => {
    setMobile(false);
    setSolutionsOpen(false);
    setNewSolutionOpen(false);
  };
  const renderMenu = ({
    label,
    items,
    open,
    setOpen,
    active,
  }: {
    label: string;
    items: HeaderMenuItem[];
    open: boolean;
    setOpen: (open: boolean) => void;
    active: boolean;
  }) => {
    const menuId = `mega-menu-${label.toLowerCase().replaceAll(" ", "-")}`;
    return (
      <div
        className={`solution-nav ${open ? "expanded" : ""}`}
        {...(canHover
          ? {
              onMouseEnter: () => setOpen(true),
              onMouseLeave: () => setOpen(false),
            }
          : {})}
      >
        <button
          type="button"
          className="solutions-trigger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`Toggle ${label.toLowerCase()} menu`}
        >
          <span className={active ? "active" : ""}>{label}</span>
          <i>
            <svg
              viewBox="0 0 16 16"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m3 5.5 5 5 5-5" />
            </svg>
          </i>
        </button>
        <div className="mega" id={menuId}>
          {items.map((s) => (
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
    );
  };

  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
        setNewSolutionOpen(false);
      }
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
        <Image src="/mycabify-logo.png" alt="MyCabify" width={44} height={44} priority />
        <b>MyCabify</b>
      </Link>
      <nav id="site-nav" className={mobile ? "open" : ""}>
        <Link href="/" onClick={close} className={isActive("/") ? "active" : ""}>
          Home
        </Link>
        {renderMenu({
          label: "Features",
          items: featureItems,
          open: solutionsOpen,
          setOpen: setSolutionsOpen,
          active: isFeaturesActive,
        })}
        {renderMenu({
          label: "Solutions",
          items: solutionItems,
          open: newSolutionOpen,
          setOpen: setNewSolutionOpen,
          active: isSolutionsActive,
        })}
        <Link
          href="/why-mycabify"
          onClick={close}
          className={isActive("/why-mycabify") ? "active" : ""}
        >
          Why MyCabify
        </Link>
        <Link href="/about" onClick={close} className={isActive("/about") ? "active" : ""}>
          About
        </Link>
        <Link href="/contact" onClick={close} className={isActive("/contact") ? "active" : ""}>
          Contact
        </Link>
        <div className="mobile-actions">
          <a className="phone-link" href="tel:02084558888">
            🇬🇧 020 8455 8888
          </a>
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
        <a className="phone-link" href="tel:02084558888">
          🇬🇧 020 8455 8888
        </a>
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
        aria-controls="site-nav"
      >
        {mobile ? "×" : "☰"}
      </button>
    </header>
  );
}
