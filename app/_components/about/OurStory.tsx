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
        MyCabify was created with a clear purpose: to give taxi companies a modern
        and complete way to manage their operation without the unnecessary
        complexity often associated with larger dispatch systems.
      </p>
      <p>
        The platform brings booking, dispatch, drivers, passengers and operational
        management together, helping companies work through one connected
        ecosystem.
      </p>
      <p>
        As taxi businesses evolve, MyCabify continues to focus on practical
        technology, flexible configuration and dependable customer support.
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
