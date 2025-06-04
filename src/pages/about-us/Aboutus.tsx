import Wrapper from "../../Wrapper";
import "../../css/Aboutus.css";
import "../../css/Services.css";
function Aboutus() {
  return (
    <Wrapper>
      <AboutUsPage />
    </Wrapper>
  );
}

export default Aboutus;

export function AboutUsPage() {
  return (
    <>
      <div className="main-content">
        <div className="s3-left-cont">
          {/* <div className="box1"> */}
          <div className="img1">
            <img src="img/about-1.jpg" className="image1" alt="" />
          </div>
          <div className="img2 flex">
            <img src="img/about-4.jpg" className="image2" alt="" />
          </div>
          {/* </div> */}
          {/* <div className="box2"> */}
          <div className="img3 flex">
            <img src="img/about-3.jpg" className="image3" alt="" />
          </div>
          <div className="img4">
            <img src="img/about-2.jpg" alt="" className="image4" />
          </div>
          {/* </div> */}
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
              <h2 className="year">15</h2> <p>YEAR OF EXPERIENCE</p>
            </div>

            <div className="container-number2">
              <h2 className="year">50</h2> <p>Poplur Master Cheif</p>
            </div>
          </div>
          <button className="btn-read">READ MORE</button>
        </div>
      </div>
    </>
  );
}
