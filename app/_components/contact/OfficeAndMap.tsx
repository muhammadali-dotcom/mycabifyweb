"use client";
import { useState } from "react";

const address = "MyCabify, 66 Kingsley Road, Hounslow, Middlesex, TW3 1QA";
const mapsHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
const embedSrc = "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";

export function OfficeAndMap() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="office-map">
      <div>
        <p className="kicker">OUR OFFICE / HOUNSLOW</p>
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
          {mapLoaded ? (
            <iframe
              title="MyCabify office location"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <>
              <div className="map-pin">
                <span />
              </div>
              <b>66 Kingsley Road, Hounslow</b>
              <small>
                Loading the map requests content from Google Maps. Click to
                load it.
              </small>
              <button className="line" type="button" onClick={() => setMapLoaded(true)}>
                Load map
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
