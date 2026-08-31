import Scene3D from "../components/Scene3D";

function Hero() {
  return (
    <section className="hero" id="top">

      <div className="hero-content">

        <p className="eyebrow">
          PARIS · ISTANBUL · EST. 2014
        </p>

        <h1>
          Taste
          <span>the</span>
          extraordinary.
        </h1>

        <p className="description">
          Contemporary cuisine shaped by season,
          imagination and the art of hospitality.
        </p>

        <a href="#menu" className="button">
          Explore menu
        </a>

      </div>

      <div className="hero-orb">
        <Scene3D />
      </div>

    </section>
  );
}
export default Hero;