export function StoreBadges({ appStoreHref = "#" }: { appStoreHref?: string }) {
  return (
    <div className="store-badges">
      <a className="store-badge" href={appStoreHref}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M16.365 1.43c0 1.14-.415 2.06-1.244 2.76-.83.7-1.79 1.09-2.88 1.01-.14-1.1.33-2.06 1.15-2.79.82-.73 1.83-1.14 3.02-1.16-.03.06-.05.12-.05.18zM20.9 17.34c-.5 1.16-.75 1.68-1.4 2.7-.9 1.42-2.17 3.18-3.75 3.2-1.4.02-1.76-.92-3.66-.9-1.9.01-2.3.92-3.7.9-1.58-.02-2.78-1.6-3.68-3.02C2.13 16.94 1.5 12.6 3.4 9.63c1-1.57 2.7-2.56 4.5-2.59 1.42-.03 2.75.96 3.62.96.86 0 2.47-1.18 4.17-1.01.71.03 2.7.29 3.99 2.17-.1.06-2.38 1.4-2.36 4.16.03 3.3 2.9 4.4 2.93 4.42-.03.08-.42 1.46-1.35 2.6z" />
        </svg>
        <span>
          <small>Download on the</small>
          <b>App Store</b>
        </span>
      </a>
      <a className="store-badge" href="#">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M3.6 2.6c-.4.4-.6.9-.6 1.5v15.8c0 .6.2 1.1.6 1.5l.1.1L13 12.2v-.4L3.7 2.5l-.1.1z" />
          <path
            d="M16.2 15.4l-3.2-3.2v-.4l3.2-3.2 3.6 2.1c1 .6 1 1.6 0 2.2l-3.6 2.5z"
            opacity=".6"
          />
          <path d="M16.2 15.4L13 12.2 3.7 21.5c.4.4 1 .4 1.7 0l10.8-6.1z" opacity=".8" />
          <path d="M16.2 8.6L5.4 2.5c-.7-.4-1.3-.4-1.7 0L13 12l3.2-3.4z" opacity=".9" />
        </svg>
        <span>
          <small>Get it on</small>
          <b>Google Play</b>
        </span>
      </a>
    </div>
  );
}
