"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const address = "MyCabify, 66 Kingsley Road, Hounslow, Middlesex, TW3 1QA";
const mapsHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
const officePosition: [number, number] = [51.4685, -0.3639];
const phone = "020 8455 8888";
const email = "info@mycabify.com";
const officeHours = "Mon–Fri · 9:00–17:30";

const pinIconHtml = `
  <span class="office-map-pin">
    <img src="/mycabify-logo.png" alt="" />
  </span>
`;

const popupHtml = `
  <div class="office-popup">
    <b>MyCabify HQ</b>
    <span>66 Kingsley Road, Hounslow</span>
    <a href="${mapsHref}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a>
  </div>
`;

export function OfficeAndMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapContainer.current || mapInstance.current) return;

      const icon = L.divIcon({
        html: pinIconHtml,
        className: "office-map-pin-icon",
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [-4, -30],
      });

      const map = L.map(mapContainer.current, { attributionControl: false }).setView(officePosition, 15);
      L.control.attribution({ prefix: false }).addTo(map);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker(officePosition, { icon }).addTo(map);
      marker.bindPopup(popupHtml, { closeButton: false, autoClose: false, closeOnClick: false });
      marker.openPopup();

      mapInstance.current = map;
    });

    return () => {
      cancelled = true;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <section className="office-map">
      <div className="office-map-heading">
        <div className="office-map-heading-left">
          <p className="kicker">OUR HOUNSLOW OFFICE</p>
          <h2>
            Visit, call or
            <br />
            simply say hello.
          </h2>
        </div>
        
      </div>

      <div className="office-info-strip">
        <div className="office-info-item">
          <span className="office-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="8.5" />
              <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <div>
            <b>Address</b>
            <span>
              66 Kingsley Road,
              <br />
              Hounslow, Middlesex
            </span>
          </div>
        </div>
        <div className="office-info-item">
          <span className="office-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4.5 4.5c0-.7.6-1.3 1.3-1.3h2.2c.6 0 1.1.4 1.3 1l1 2.9c.2.5 0 1.1-.4 1.4L8.4 9.8c1 2.1 2.7 3.9 4.9 4.9l1.3-1.5c.4-.4 1-.5 1.4-.4l2.9 1c.6.2 1 .7 1 1.3v2.2c0 .7-.6 1.3-1.3 1.3C10.9 18.6 5.4 13.1 4.5 4.5z" />
            </svg>
          </span>
          <div>
            <b>Call us</b>
            <span>{phone}</span>
          </div>
        </div>
        <div className="office-info-item">
          <span className="office-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </span>
          <div>
            <b>Email us</b>
            <span>{email}</span>
          </div>
        </div>
        <div className="office-info-item">
          <span className="office-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 7v5l3.2 1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <b>Office hours</b>
            <span>{officeHours}</span>
          </div>
        </div>
      </div>

      <div className="map-placeholder">
        <div ref={mapContainer} className="leaflet-mount" />
      </div>
    </section>
  );
}
