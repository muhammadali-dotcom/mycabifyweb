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
        <span>
          <a href="tel:02084558888">020 8455 8888</a>
        </span>
        <a href="mailto:info@mycabify.com">info@mycabify.com</a>
        <span>
          66 Kingsley Road, Hounslow
          <br />
          Middlesex, TW3 1QA
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
