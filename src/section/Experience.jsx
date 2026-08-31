
function Experience() {
  return (
    <section
      className="experience"
      id="experience"
    >

      <div className="experience-visual">

        <img
          src="/images/dish-3.jpg"
          alt="L'ÉCLAT dining experience"
        />

        <div className="experience-overlay">

          <span>03</span>

          <p>
            CRAFT · ATMOSPHERE · DETAIL
          </p>

        </div>

      </div>


      <div className="experience-content">

        <p className="label">
          THE EXPERIENCE
        </p>

        <h2>
          An evening
          <span>to remember.</span>
        </h2>

        <p className="text">
          Warm light. Intimate tables.
          Carefully curated music.
          Every detail is designed to make
          the evening unforgettable.
        </p>


        <div className="experience-line"></div>


        <div className="experience-meta">

          <div>
            <strong>01</strong>
            <span>Seasonal cuisine</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Intimate atmosphere</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Exceptional service</span>
          </div>

        </div>


        <a
          href="#reservation"
          className="button"
        >
          Reserve your evening ↗
        </a>

      </div>

    </section>
  );
}

export default Experience;
