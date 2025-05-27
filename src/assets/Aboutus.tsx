import "./Section3.css";

function Aboutus() {
  return (
    <div className="main-content">
      <div className="s3-left-cont">
        <div className="box1">
          <img src="src/assets/img/about-1.jpg" className="image1" alt="" />
          <img src="src/assets/img/about-4.jpg" className="image2" alt="" />
        </div>
        <div className="box2">
          <img src="src/assets/img/about-3.jpg" className="image3" alt="" />
          <img src="src/assets/img/about-2.jpg" alt="" className="image4" />
        </div>
      </div>
      <div className="about-us-container">
        <h4 className="heading">about-us</h4>
        <h2 className="welcome-to-rest">Welcome To Restorn </h2>
        <div className="para1">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
            consequuntur ducimus eius rerum corrupti odio, alias, nulla maxime
            impedit magni natus odit numquam autem quaerat.
          </p>
        </div>
        <div className="para2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
            consequuntur ducimus eius rerum corrupti odio, alias, nulla maxime
            impedit magni natus odit numquam autem quaerat.
          </p>
        </div>

        <div className="experience">
          <div className="container-number1">
            <div className="border"></div>
            <h2 className="year">15</h2> <h3>YEAR OF EXPERIENCE</h3>
          </div>

          <div className="container-number2">
            <h2 className="year">50</h2> <h3>poplur master cheif</h3>
          </div>
        </div>
        <button className="btn-read">READ MORE</button>
      </div>
    </div>
  );
}

export default Aboutus;
