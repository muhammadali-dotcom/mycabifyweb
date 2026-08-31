import { featureIcons } from "../../_data/featureIcons";

const direction = [
  {
    title: "Understand taxi operations",
    copy: "Learn from the everyday reality of controllers, drivers and passengers.",
    icon: "clarity",
  },
  {
    title: "Build a connected platform",
    copy: "Bring booking, dispatch, drivers and passengers into one ecosystem.",
    icon: "connected",
  },
  {
    title: "Improve everyday usability",
    copy: "Keep the experience clear enough for teams to use with confidence.",
    icon: "gear",
  },
  {
    title: "Support customers through growth",
    copy: "Stay involved as fleets and requirements continue to change.",
    icon: "support",
  },
];

export function OurStory() {
  return (
    <section className="mc-section our-story">
      <p className="kicker">OUR STORY / WHY MYCABIFY</p>
      <h2>A simpler approach to complete taxi management.</h2>
      <p>
        MyCabify brings booking, dispatch, drivers and passengers together in one connected
        platform, built to stay practical as your fleet grows.
      </p>
      <div className="story-direction">
        <p className="kicker">OUR CONTINUING DIRECTION</p>
        <div className="direction-list">
          {direction.map((d) => (
            <article key={d.title}>
              <span>{featureIcons[d.icon]}</span>
              <b>{d.title}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
