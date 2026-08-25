import Link from "next/link";
import { StoreBadges } from "./_components/StoreBadges";

const solutions = [
  { name: "Dispatch System", href: "/dispatch-system" },
  { name: "Driver App", href: "/driver-app" },
  { name: "Passenger App", href: "/passenger-app" },
  { name: "Web Booker", href: "/web-booker" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="logo inverse" href="/">
          <img src="/mycabify-logo.png" alt="MyCabify" />
          <b>MyCabify</b>
        </Link>
        <p>Complete taxi management, made simple for UK taxi and private-hire operators.</p>
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
        <span>
          Call now: <a href="tel:02084558888">020 8455 8888</a>
        </span>
        <a href="mailto:info@mycabify.com">info@mycabify.com</a>
        <span>
          66 Kingsley Road, Hounslow
          <br />
          Middlesex, TW3 1QA
        </span>
      </div>

      <div>
        <b>Download Apps</b>
        <div className="footer-app-group">
          <span>Driver App</span>
          <StoreBadges />
        </div>
      </div>

      <div className="legal">
        <span>© 2026 MyCabify. All rights reserved.</span>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/cookie-policy">Cookies</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}
