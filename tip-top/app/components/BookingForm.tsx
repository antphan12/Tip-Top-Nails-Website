export default function BookingForm() {
  return (
    <section id="book">
      <div className="book-inner">
        <div className="book-info reveal-left">
          <div className="section-rule"><span>Book</span></div>
          <h3>
            Ready for your<br /><em>next appointment?</em>
          </h3>
          <p>
            Fill out the form and we&apos;ll confirm your booking within a few
            hours. For same-day appointments, please give us a call.
          </p>
          <div className="book-badges">
            <div className="book-badge">No booking fee</div>
            <div className="book-badge">Walk-ins always welcome</div>
            <div className="book-badge">Groups of 4+ — call ahead</div>
          </div>
        </div>
        <div className="book-form reveal-right">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="(563) 000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jane@email.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select id="service">
                <option>Classic Manicure</option>
                <option>Gel Manicure</option>
                <option>Acrylic Full Set</option>
                <option>Acrylic Fill</option>
                <option>Pedicure</option>
                <option>Gel Pedicure</option>
                <option>Dip Powder</option>
                <option>Nail Art</option>
                <option>Polish Change</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input id="date" type="date" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              placeholder="Any special requests, nail inspo, or accessibility needs..."
            />
          </div>
          <button className="form-submit">Request Appointment</button>
        </div>
      </div>
    </section>
  );
}
