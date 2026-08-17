const values = [
  { title: "Simplicity", copy: "Make powerful technology easier to understand and use." },
  { title: "Flexibility", copy: "Adapt the platform around different operational requirements." },
  { title: "Reliability", copy: "Treat taxi operations as the business-critical services they are." },
  { title: "Partnership", copy: "Work with customers during implementation and ongoing use." },
  { title: "Continuous improvement", copy: "Keep developing the platform around changing business and customer needs." },
];

export function OurValues() {
  return (
    <section className="mc-section our-values">
      <p className="kicker">OUR VALUES / HOW WE WORK</p>
      <h2>The principles behind MyCabify.</h2>
      <div className="values-list">
        {values.map((v, i) => (
          <div className="value-row" key={v.title}>
            <span>0{i + 1}</span>
            <h3>{v.title}</h3>
            <p>{v.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
