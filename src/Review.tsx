import "./Section7.css";
import { VscFeedback } from "react-icons/vsc";

function Review() {
  return (
    <>
      <div className="s7-main-div">
        <div className="review">
          <div>
            <h3 className="Testimonial">Testimonial</h3>
          </div>
          <div>
            <h1 className="Our-Clients-Say">Our Clients Say!!!</h1>
          </div>
        </div>

        <div className="r3">
          <Reviewcard />
          <Reviewcard />
          <Reviewcard />
        </div>
      </div>
    </>
  );
}

export default Review;

export function Reviewcard() {
  return (
    <>
      <div className="cardreview1">
        <div className="card-2">
          <div>
            <VscFeedback className="coma" />
          </div>
          <p className="cost-review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            eaque?
          </p>

          <div className="const-detail">
            <img
              src="src/assets/img/testimonial-1.jpg"
              className="const-img"
              alt=""
            />
            <div className="jhon2">
              {" "}
              <h3 className="client-name1">Jhon</h3>
              <h5 className="client-profession1">Profession</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
