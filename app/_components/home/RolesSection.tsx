import { featureIcons } from "../../_data/featureIcons";

const roles = [
  {
    role: "OWNER",
    copy: "See operational activity, performance and the information needed to make better decisions.",
    icon: "chart",
  },
  {
    role: "CONTROLLER",
    copy: "Create bookings, allocate work and monitor live journeys from one clear workspace.",
    icon: "dispatch",
  },
  {
    role: "DRIVER",
    copy: "Receive jobs, follow trip details and keep control updated through every journey stage.",
    icon: "navigation",
  },
  {
    role: "PASSENGER",
    copy: "Book more easily and stay informed from confirmation through arrival and completion.",
    icon: "location",
  },
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
        {roles.map((x) => (
          <article key={x.role}>
            <span>{featureIcons[x.icon]}</span>
            <h3>{x.role}</h3>
            <p>{x.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
