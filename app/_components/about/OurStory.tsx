const direction = [
  { title: "Understand taxi operations", copy: "Learn from the everyday reality of controllers, drivers and passengers." },
  { title: "Build a connected platform", copy: "Bring booking, dispatch, drivers and passengers into one ecosystem." },
  { title: "Improve everyday usability", copy: "Keep the experience clear enough for teams to use with confidence." },
  { title: "Support customers through growth", copy: "Stay involved as fleets and requirements continue to change." },
];

export function OurStory() {
  return (
    <section className="mc-section our-story">
      <p className="kicker">OUR STORY / WHY MYCABIFY</p>
      <h2>A simpler approach to complete taxi management.</h2>
      <p>
        MyCabify brings booking, dispatch, drivers and passengers together in
        one connected platform, built to stay practical as your fleet grows.
      </p>
      <div className="story-direction">
        <p className="kicker">OUR CONTINUING DIRECTION</p>
        <div className="direction-list">
          {direction.map((d, i) => (
            <article key={d.title}>
              <span>0{i + 1}</span>
              <b>{d.title}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
