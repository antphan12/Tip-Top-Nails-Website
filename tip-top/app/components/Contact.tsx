export default function Contact() {
  return (
    <section id="contact">
      <div className="reveal">
        <div className="section-rule"><span>Find Us</span></div>
        <h2 className="section-title">Contact &amp; <em>Hours</em></h2>
      </div>
      <div className="contact-grid">
        <div className="contact-col reveal" style={{ transitionDelay: "0s" }}>
          <h3>Location</h3>
          <address>
            902 W Kimberly Rd, Suite 57<br />
            Davenport, Iowa 52806<br /><br />
            <a href="tel:+15631234567">(563) 449-6533</a><br />
            {/* <a href="mailto:hello@tiptopnailsdavenport.com">
              hello@tiptopnailsdavenport.com
            </a> */}
          </address>
        </div>
        <div className="contact-col reveal" style={{ transitionDelay: "0.15s" }}>
          <h3>Hours</h3>
          <div className="hours-row">
            <span className="day">Monday – Friday</span>
            <span>9:30 AM – 7 PM</span>
          </div>
          <div className="hours-row">
            <span className="day">Saturday</span>
            <span>9:30 AM – 7 PM</span>
          </div>
          <div className="hours-row">
            <span className="day">Sunday</span>
            <span>CLOSED</span>
          </div>
        </div>
        <div className="contact-col reveal" style={{ transitionDelay: "0.3s" }}>
          <h3>Good to Know</h3>
          <p>
            To ensure every clinet get out full attention, we kindly ask that you book an appointment in advance<br />
            We accept cash, card,
            Venmo, and Apple Pay.
          </p>
        </div>
      </div>
    </section>
  );
}
