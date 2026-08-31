
import { useState } from "react";

import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Scene3D from "./components/Scene3D";
import DigitalMenu from "./section/DigitalMenu";
import Hero from "./section/Hero";

import "./App.css";


const spaces = [
  {
    id: "dining",
    name: "Dining Room",
    description: "Our signature atmosphere",
    image: "/images/space-dining.jpg",
  },
  {
    id: "window",
    name: "Window Table",
    description: "City lights & intimate dining",
    image: "/images/space-window.jpg",
  },
  {
    id: "bar",
    name: "The Bar",
    description: "For a more intimate evening",
    image: "/images/space-bar.jpg",
  },
  {
    id: "private",
    name: "Private Table",
    description: "For special occasions",
    image: "/images/space-private.jpg",
  },
];


function App() {

  const [selectedSpace, setSelectedSpace] = useState("");


  const selectedSpaceName =
    spaces.find(
      (space) => space.id === selectedSpace
    )?.name;


  return (

    <div className="site">

      <LoadingScreen />

      <Navbar />

    


      <main>


        <Hero />

        {/* =========================
            STORY
        ========================== */}

        <section
          className="story"
          id="story"
        >

          <p className="label">
            OUR PHILOSOPHY
          </p>

          <h2>
            Dining is not
            <span>just a meal.</span>
          </h2>

          <p className="text">
            We create moments where exceptional
            ingredients, contemporary technique
            and human connection become one
            unforgettable experience.
          </p>

        </section>



        {/* =========================
            DIGITAL MENU
        ========================== */}

        <DigitalMenu />



        {/* =========================
            MENU
        ========================== */}

        <section
          className="menu-section"
          id="menu"
        >

          <div className="section-heading">

            <div>

              <p className="label">
                THE COLLECTION
              </p>

              <h2>
                Signature
                <span>dishes.</span>
              </h2>

            </div>


            <p className="section-intro">
              A collection of dishes shaped by
              season, instinct and the finest
              ingredients.
            </p>

          </div>



          <div className="menu-categories">

            <button className="active">
              All
            </button>

            <button>
              Starters
            </button>

            <button>
              Mains
            </button>

            <button>
              Desserts
            </button>

          </div>



          <div className="menu-grid">


            {/* DISH 1 */}

            <article className="menu-card">

              <div className="dish-image">

                <img
                  src="/images/dish-1.jpg"
                  alt="Truffle Risotto"
                />

                <span>
                  01
                </span>

              </div>


              <div className="dish-info">

                <div>

                  <p className="dish-category">
                    MAIN
                  </p>

                  <h3>
                    Truffle Risotto
                  </h3>

                  <p>
                    Black truffle · Parmigiano ·
                    Wild herbs
                  </p>

                </div>


                <strong>
                  ₺920
                </strong>

              </div>

            </article>



            {/* DISH 2 */}

            <article className="menu-card">

              <div className="dish-image">

                <img
                  src="/images/dish-2.jpg"
                  alt="Golden Sea Bass"
                />

                <span>
                  02
                </span>

              </div>


              <div className="dish-info">

                <div>

                  <p className="dish-category">
                    MAIN
                  </p>

                  <h3>
                    Golden Sea Bass
                  </h3>

                  <p>
                    Saffron · Citrus · Beurre blanc
                  </p>

                </div>


                <strong>
                  ₺1,280
                </strong>

              </div>

            </article>



            {/* DISH 3 */}

            <article className="menu-card">

              <div className="dish-image">

                <img
                  src="/images/dish-3.jpg"
                  alt="Fire Roasted Duck"
                />

                <span>
                  03
                </span>

              </div>


              <div className="dish-info">

                <div>

                  <p className="dish-category">
                    MAIN
                  </p>

                  <h3>
                    Fire Roasted Duck
                  </h3>

                  <p>
                    Black cherry · Thyme · Jus
                  </p>

                </div>


                <strong>
                  ₺1,450
                </strong>

              </div>

            </article>



            {/* DISH 4 */}

            <article className="menu-card">

              <div className="dish-image">

                <img
                  src="/images/dish-4.jpg"
                  alt="Midnight Chocolate"
                />

                <span>
                  04
                </span>

              </div>


              <div className="dish-info">

                <div>

                  <p className="dish-category">
                    DESSERT
                  </p>

                  <h3>
                    Midnight Chocolate
                  </h3>

                  <p>
                    Dark chocolate · Vanilla ·
                    Hazelnut
                  </p>

                </div>


                <strong>
                  ₺620
                </strong>

              </div>

            </article>


          </div>



          <div className="menu-bottom">

            <p>
              Our menu changes with the seasons.
            </p>

            <button className="text-button">
              View full menu ↗
            </button>

          </div>

        </section>



        {/* =========================
            GALLERY
        ========================== */}

        <section
          className="gallery"
          id="gallery"
        >

          <div className="gallery-intro-block">

            <p className="label">
              INSIDE L'ÉCLAT
            </p>

            <h2>
              Moments
              <span>in focus.</span>
            </h2>

            <p>
              Where atmosphere becomes part
              of the experience.
            </p>

          </div>



          <div className="gallery-editorial">


            <div className="gallery-photo photo-main">

              <img
                src="https://images.pexels.com/photos/6662510/pexels-photo-6662510.jpeg"
                alt="Luxury restaurant interior"
              />

              <span>
                01
              </span>

            </div>



            <div className="gallery-photo photo-small photo-left">

              <img
                src="https://images.pexels.com/photos/17001786/pexels-photo-17001786.jpeg"
                alt="Luxury restaurant bar"
              />

              <span>
                02
              </span>

            </div>



            <div className="gallery-photo photo-small photo-right">

              <img
                src="https://images.pexels.com/photos/16711344/pexels-photo-16711344.jpeg"
                alt="Elegant restaurant dining room"
              />

              <span>
                03
              </span>

            </div>



            <div className="gallery-photo photo-bottom">

              <img
                src="https://images.pexels.com/photos/37307284/pexels-photo-37307284.jpeg"
                alt="Fine dining restaurant interior"
              />

              <span>
                04
              </span>

            </div>


          </div>



          <div className="gallery-footer">

            <span>
              THE SPACE
            </span>

            <span>
              BEŞİKTAŞ · ISTANBUL
            </span>

          </div>

        </section>



        {/* =========================
            EXPERIENCE
        ========================== */}

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

              <span>
                03
              </span>

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
                <strong>
                  01
                </strong>

                <span>
                  Seasonal cuisine
                </span>
              </div>


              <div>
                <strong>
                  02
                </strong>

                <span>
                  Intimate atmosphere
                </span>
              </div>


              <div>
                <strong>
                  03
                </strong>

                <span>
                  Exceptional service
                </span>
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



        {/* =========================
            RESERVATION
        ========================== */}

        <section
          className="reservation"
          id="reservation"
        >


          {/* RESERVATION INTRO */}

          <div className="reservation-header">

            <p className="label">
              RESERVATIONS
            </p>

            <h2>
              Your table
              <span>is waiting.</span>
            </h2>

            <p className="reservation-text">
              Join us for an evening of exceptional
              food, intimate atmosphere and
              unforgettable moments.
            </p>


            <div className="reservation-details">


              <div>

                <span>
                  LOCATION
                </span>

                <p>
                  Beşiktaş, Istanbul
                </p>

              </div>


              <div>

                <span>
                  OPENING HOURS
                </span>

                <p>
                  Tuesday — Sunday
                </p>

                <p>
                  18:00 — 00:00
                </p>

              </div>


              <div>

                <span>
                  CONTACT
                </span>

                <p>
                  +90 212 000 00 00
                </p>

                <p>
                  hello@leclat.com
                </p>

              </div>


            </div>

          </div>



          {/* =========================
              SPACE SELECTION
          ========================== */}

          <div className="space-selection">


            <div className="space-selection-heading">

              <p className="label">
                CHOOSE YOUR PLACE
              </p>

              <h3>
                Where would you like
                <span>to dine?</span>
              </h3>

            </div>



            <div className="space-options">

              {spaces.map(
                (space, index) => (

                  <button
                    type="button"
                    key={space.id}
                    className={`space-card ${
                      selectedSpace === space.id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedSpace(
                        space.id
                      )
                    }
                  >


                    <div className="space-card-image">

                      <img
                        src={space.image}
                        alt={space.name}
                      />


                      {selectedSpace === space.id && (

                        <div className="space-selected">
                          ✓ SELECTED
                        </div>

                      )}

                    </div>



                    <div className="space-card-info">

                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <strong>
                        {space.name}
                      </strong>

                      <small>
                        {space.description}
                      </small>

                    </div>


                  </button>

                )
              )}

            </div>

          </div>



          {/* =========================
              RESERVATION FORM
          ========================== */}

          <div className="reservation-box">


            <div className="reservation-box-header">

              <span>
                01
              </span>

              <p>
                REQUEST A TABLE
              </p>

            </div>



            {/* SELECTED SPACE */}

            {selectedSpace && (

              <div className="selected-space-summary">

                <span>
                  YOUR PREFERRED SPACE
                </span>

                <strong>
                  {selectedSpaceName}
                </strong>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedSpace("")
                  }
                >
                  Change
                </button>

              </div>

            )}



            <form
              className="reservation-form"
              onSubmit={(e) => {

                e.preventDefault();

                alert(
                  "Thank you. Your reservation request has been received."
                );

              }}
            >


              {/* DATE + TIME */}

              <div className="form-row">


                <label>

                  <span>
                    Date
                  </span>

                  <input
                    type="date"
                    required
                  />

                </label>



                <label>

                  <span>
                    Time
                  </span>

                  <select
                    defaultValue=""
                    required
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select time
                    </option>

                    <option>
                      18:00
                    </option>

                    <option>
                      18:30
                    </option>

                    <option>
                      19:00
                    </option>

                    <option>
                      19:30
                    </option>

                    <option>
                      20:00
                    </option>

                    <option>
                      20:30
                    </option>

                    <option>
                      21:00
                    </option>

                    <option>
                      21:30
                    </option>

                    <option>
                      22:00
                    </option>

                  </select>

                </label>


              </div>



              {/* GUESTS + OCCASION */}

              <div className="form-row">


                <label>

                  <span>
                    Guests
                  </span>

                  <select
                    defaultValue="2"
                    required
                  >

                    <option value="1">
                      1 Guest
                    </option>

                    <option value="2">
                      2 Guests
                    </option>

                    <option value="3">
                      3 Guests
                    </option>

                    <option value="4">
                      4 Guests
                    </option>

                    <option value="5">
                      5 Guests
                    </option>

                    <option value="6">
                      6 Guests
                    </option>

                    <option value="7">
                      7 Guests
                    </option>

                    <option value="8">
                      8 Guests
                    </option>

                  </select>

                </label>



                <label>

                  <span>
                    Occasion
                  </span>

                  <select defaultValue="none">

                    <option value="none">
                      No special occasion
                    </option>

                    <option>
                      Birthday
                    </option>

                    <option>
                      Anniversary
                    </option>

                    <option>
                      Business dinner
                    </option>

                    <option>
                      Private celebration
                    </option>

                  </select>

                </label>


              </div>



              {/* NAME + PHONE */}

              <div className="form-row">


                <label>

                  <span>
                    Your name
                  </span>

                  <input
                    type="text"
                    placeholder="Full name"
                    required
                  />

                </label>



                <label>

                  <span>
                    Phone
                  </span>

                  <input
                    type="tel"
                    placeholder="+90"
                    required
                  />

                </label>


              </div>



              {/* EMAIL */}

              <label>

                <span>
                  Email
                </span>

                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                />

              </label>



              {/* SPECIAL REQUESTS */}

              <label>

                <span>
                  Special requests
                </span>

                <textarea
                  rows="4"
                  placeholder="Dietary requirements, allergies, celebrations..."
                />

              </label>



              {/* SUBMIT */}

              <button
                type="submit"
                className="reservation-button"
              >

                <span>
                  Request a table
                </span>

                <span>
                  ↗
                </span>

              </button>



              <p className="reservation-note">
                Your request will be reviewed
                by our team.
              </p>


            </form>

          </div>


        </section>


      </main>



      {/* =========================
          FOOTER
      ========================== */}

      <footer className="luxury-footer">


        <div className="footer-top">


          <div className="footer-brand">

            <p className="footer-kicker">
              PARIS · ISTANBUL
            </p>

            <div className="footer-logo">
              L'ÉCLAT
            </div>

            <p className="footer-tagline">
              Contemporary dining for
              <br />
              unforgettable evenings.
            </p>

          </div>



          <div className="footer-column">

            <span>
              EXPLORE
            </span>

            <a href="#story">
              Story
            </a>

            <a href="#menu">
              Menu
            </a>

            <a href="#experience">
              Experience
            </a>

            <a href="#gallery">
              Gallery
            </a>

            <a href="#reservation">
              Reservation
            </a>

          </div>



          <div className="footer-column">

            <span>
              VISIT
            </span>

            <p>
              Beşiktaş
            </p>

            <p>
              Istanbul, Türkiye
            </p>

            <br />

            <p>
              Tuesday — Sunday
            </p>

            <p>
              18:00 — 00:00
            </p>

          </div>



          <div className="footer-column">

            <span>
              CONTACT
            </span>

            <a href="tel:+902120000000">
              +90 212 000 00 00
            </a>

            <a href="mailto:hello@leclat.com">
              hello@leclat.com
            </a>


            <div className="footer-socials">

              <a href="#">
                Instagram
              </a>

              <a href="#">
                Facebook
              </a>

            </div>

          </div>


        </div>



        <div className="footer-middle">

          <p>
            An evening worth remembering.
          </p>

          <a href="#reservation">
            RESERVE A TABLE ↗
          </a>

        </div>



        <div className="footer-bottom">

          <span>
            © 2026 L'ÉCLAT
          </span>

          <span>
            ALL RIGHTS RESERVED
          </span>

          <span>
            ISTANBUL · TR
          </span>

        </div>


      </footer>


    </div>

  );
}


export default App;

