import Image from "next/image";
import Link from "next/link";
import { StoreBadges } from "./_components/StoreBadges";

const features = [
  { name: "Dispatch System", href: "/dispatch-system" },
  { name: "Driver App", href: "/driver-app" },
  { name: "Passenger App", href: "/passenger-app" },
  { name: "Web Booker", href: "/web-booker" },
];

const solutions = [
  { name: "Airport Transfers", href: "/airport-transfers" },
  { name: "School Run", href: "/school-run" },
  { name: "Corporate Travel", href: "/corporate-travel" },
  { name: "Private Hire & Minicab Firms", href: "/private-hire-taxi-firms" },
  { name: "SEN Transport", href: "/sen-transport" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M6.5 3.5c1 0 2.5 2 2.5 3s-1 1.5-1 2.5 2.5 5 4.5 6 1.5-1 2.5-1 3 1.5 3 2.5-1.5 3.5-3 3.5c-2.5 0-11-3.5-11-13 0-1.5 1-3.5 2.5-3.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="logo inverse" href="/">
          <Image src="/mycabify-logo.png" alt="MyCabify" width={48} height={48} />
          <b>MyCabify</b>
        </Link>
        <p>Complete minicab management, made simple for UK minicab and private-hire operators.</p>
      </div>

      <div>
        <b>Features</b>
        {features.map((f) => (
          <Link key={f.name} href={f.href}>
            {f.name}
          </Link>
        ))}
      </div>

      <div>
        <b>Solutions</b>
        {solutions.map((s) => (
          <Link key={s.name} href={s.href}>
            {s.name}
          </Link>
        ))}
      </div>

      <div>
        <b>Company</b>
        <Link href="/why-mycabify">Why MyCabify</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div>
        <b>Contact</b>
        <span className="footer-contact-item">
          <PhoneIcon />
          <a href="tel:02084558888">020 8455 8888</a>
        </span>
        <span className="footer-contact-item">
          <MailIcon />
          <a href="mailto:info@mycabify.com">info@mycabify.com</a>
        </span>
        <span className="footer-contact-item">
          <PinIcon />
          <span>
            66 Kingsley Road, Hounslow
            <br />
            Middlesex, TW3 1QA
          </span>
        </span>
      </div>

      <div className="footer-apps">
        <b>Download Apps</b>
        <div className="footer-app-group">
          <span>Driver App</span>
          <StoreBadges appStoreHref="https://apps.apple.com/pk/app/mycabify-driver/id1661506382" />
        </div>
      </div>

      <div className="legal">
        <span>© 2026 MyCabify. All rights reserved.</span>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}
