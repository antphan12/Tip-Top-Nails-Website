export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Davenport, Iowa — Est. 2018</p>
        <h1 className="hero-title">
          Nails done<br /><em>right.</em><br />Every time.
        </h1>
        <p className="hero-sub">
          Precision nail care in a calm, welcoming studio. From classic
          manicures to hand-crafted nail art — we take your nails seriously.
        </p>
        <div className="hero-cta-row">
          <a href="#book" className="btn-primary">Book Appointment</a>
          <a href="#services" className="btn-ghost">View Services</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-art">
          <div className="circle-large" />
          <div className="circle-small" />
        </div>
        <div className="hero-stat-block">
          <div className="hero-stat-num">500+</div>
          <div className="hero-stat-label">Happy clients served</div>
        </div>
      </div>
    </section>
  );
}
