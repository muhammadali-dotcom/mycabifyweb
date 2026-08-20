"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const address = "MyCabify, 66 Kingsley Road, Hounslow, Middlesex, TW3 1QA";
const mapsHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
const officePosition: [number, number] = [51.4685, -0.3639];

export function OfficeAndMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapContainer.current || mapInstance.current) return;

      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      const map = L.map(mapContainer.current, { attributionControl: false }).setView(officePosition, 15);
      L.control.attribution({ prefix: false }).addTo(map);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);
      L.marker(officePosition, { icon }).addTo(map).bindPopup("MyCabify, Hounslow office");

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
      <div>
        <p className="kicker">OUR OFFICE</p>
        <h2>Visit or contact our Hounslow office.</h2>
        <p className="address-block">
          MyCabify
          <br />
          66 Kingsley Road
          <br />
          Hounslow, Middlesex
          <br />
          TW3 1QA
          <br />
          <a href="tel:02084558888">020 8455 8888</a>
          <br />
          <a href="mailto:info@mycabify.com">info@mycabify.com</a>
        </p>
        <a className="maps-link" href={mapsHref} target="_blank" rel="noopener noreferrer">
          Open in Google Maps ↗
        </a>
      </div>
      <div>
        <div className="map-placeholder">
          <div ref={mapContainer} className="leaflet-mount" />
        </div>
      </div>
    </section>
  );
}
