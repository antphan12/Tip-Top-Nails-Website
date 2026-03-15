const services = [
  {
    num: "01",
    name: "Classic Manicure",
    desc: "Shape, cuticle care, buff, and polish with your choice of color from our full collection.",
    price: "$22",
    unit: "& up",
  },
  {
    num: "02",
    name: "Gel Manicure",
    desc: "Long-lasting gel polish cured under UV for up to 3 weeks of chip-free wear.",
    price: "$38",
    unit: "& up",
  },
  {
    num: "03",
    name: "Acrylic Full Set",
    desc: "Full acrylic extension set with custom length and shape. Gel color included.",
    price: "$55",
    unit: "& up",
  },
  {
    num: "04",
    name: "Acrylic Fill",
    desc: "Two-week maintenance fill to keep your acrylics looking fresh and flawless.",
    price: "$35",
    unit: "& up",
  },
  {
    num: "05",
    name: "Pedicure",
    desc: "Soak, scrub, cuticle care, massage, and polish for perfectly pampered feet.",
    price: "$35",
    unit: "& up",
  },
  {
    num: "06",
    name: "Nail Art",
    desc: "Custom designs, French tips, ombré, chrome, or full hand-painted nail art — per nail or full set.",
    price: "$5",
    unit: "/ nail & up",
  },
  {
    num: "07",
    name: "Dip Powder",
    desc: "Lightweight, durable color that lasts 3–4 weeks without UV. Gentle on natural nails.",
    price: "$45",
    unit: "& up",
  },
  {
    num: "08",
    name: "Gel Pedicure",
    desc: "All the benefits of a classic pedicure paired with long-wearing gel polish on your toes.",
    price: "$50",
    unit: "& up",
  },
  {
    num: "09",
    name: "Polish Change",
    desc: "A quick refresh — remove old polish and apply a fresh coat of your chosen color.",
    price: "$12",
    unit: "& up",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="services-header reveal">
        <div>
          <div className="section-rule"><span>Our Services</span></div>
          <h2 className="section-title">
            Everything your<br />nails <em>deserve</em>
          </h2>
        </div>
        <p className="services-desc">
          From a quick shape and polish to a full gel set, our skilled
          technicians deliver meticulous results in a relaxed atmosphere. All
          prices listed are starting rates.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card reveal" key={s.num} style={{ transitionDelay: `${i * 0.07}s` }}>
            <div className="service-number">{s.num}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-price">
              {s.price} <span>{s.unit}</span>
            </div>
            <div className="service-hover-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
