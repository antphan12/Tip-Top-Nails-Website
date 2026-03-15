const items = ["Nail Art", "Gel Set", "Ombré", "French Tips", "Chrome"];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-header reveal">
        <div className="section-rule"><span>Gallery</span></div>
        <h2 className="section-title">Our <em>work</em></h2>
      </div>
      <div className="gallery-grid">
        {items.map((label, i) => (
          <div className="gallery-item reveal" key={label} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="gallery-dot">◦</div>
            <span className="gallery-label">{label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-note reveal">
        Photos coming soon — follow us on Instagram @tiptopnails.davenport
      </p>
    </section>
  );
}
