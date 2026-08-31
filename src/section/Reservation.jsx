{/* RESERVATION */}
<section className="reservation" id="reservation">
  <div className="reservation-header">
    <p className="label">RESERVATIONS</p>

    <h2>
      Your table
      <span>is waiting.</span>
    </h2>

    <p className="reservation-text">
      Join us for an evening of exceptional food,
      intimate atmosphere and unforgettable moments.
    </p>
  </div>

  <form className="reservation-form">
    <div className="form-row">
      <label>
        <span>Date</span>
        <input type="date" />
      </label>

      <label>
        <span>Time</span>
        <select defaultValue="">
          <option value="" disabled>
            Select time
          </option>
          <option>18:00</option>
          <option>18:30</option>
          <option>19:00</option>
          <option>19:30</option>
          <option>20:00</option>
          <option>20:30</option>
          <option>21:00</option>
          <option>21:30</option>
        </select>
      </label>

      <label>
        <span>Guests</span>
        <select defaultValue="2">
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
          <option value="7">7 Guests</option>
          <option value="8">8 Guests</option>
        </select>
      </label>
    </div>

    <div className="form-row">
      <label>
        <span>Name</span>
        <input
          type="text"
          placeholder="Your name"
        />
      </label>

      <label>
        <span>Email</span>
        <input
          type="email"
          placeholder="your@email.com"
        />
      </label>
    </div>

    <label className="message-field">
      <span>Special requests</span>
      <textarea
        rows="4"
        placeholder="Birthday, anniversary, dietary requests..."
      />
    </label>

    <button type="submit" className="button reservation-button">
      Request a table
      <span>↗</span>
    </button>
  </form>
</section>