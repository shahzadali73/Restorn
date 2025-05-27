import "./Section1.css";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="main-container flex">
            <div className="left-box">
              <h1>Enjoy Our</h1>
              <h1>Delicious Meal</h1>
              <p className="para">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>

              <a className="a-btn1" href="">
                <button className="cta-btn1">
                  <h3>Book A Table</h3>
                </button>
              </a>
            </div>

            <div className="right-box">
              <div className="img-box">
                <img src="img/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
