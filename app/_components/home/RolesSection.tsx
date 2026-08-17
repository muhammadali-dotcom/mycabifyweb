const roles = [
  [
    "OWNER",
    "See operational activity, performance and the information needed to make better decisions.",
  ],
  [
    "CONTROLLER",
    "Create bookings, allocate work and monitor live journeys from one clear workspace.",
  ],
  [
    "DRIVER",
    "Receive jobs, follow trip details and keep control updated through every journey stage.",
  ],
  [
    "PASSENGER",
    "Book more easily and stay informed from confirmation through arrival and completion.",
  ],
];

export function RolesSection() {
  return (
    <section className="roles">
      <div className="section-head">
        <div>
          <p className="kicker">BUILT FOR EVERY ROLE</p>
          <h2>
            One operation.
            <br />
            <em>The right view for everyone.</em>
          </h2>
        </div>
        <p>
          MyCabify connects the people running, delivering and using your
          service without overwhelming them with irrelevant information.
        </p>
      </div>
      <div className="role-grid">
        {roles.map((x, i) => (
          <article key={x[0]}>
            <span>0{i + 1}</span>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
