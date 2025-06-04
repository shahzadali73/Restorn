// import "./FoodDetail.css";
import { CiStar } from "react-icons/ci";
import "../../css/FoodDetail.css";

function FoodDetail() {
  return (
    <>
      <div className="foo-maindiv1">
        <div className="img-foo1">
          <img
            className="food-img4"
            src="img/anami-asia-kitchen-bar.jpg"
            alt=""
          />
        </div>
        <div className="foo-detail1">
          <h1 className="dish-name">Pesto alla Genovese</h1>
          <div className="star">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            labore veniam voluptatum reprehenderit nihil, eaque officiis atque
            eos sed est. Rem, facilis. Quidem fugit nulla officia accusantium
            consectetur obcaecati ducimus. Eaque pariatur mollitia sit? Quos sed
            cum aliquam ad, expedita, suscipit quibusdam in possimus vero quas
            officia sapiente enim? Quidem dolorem sit voluptates illum eligendi
            obcaecati dignissimos, asperiores doloribus enim aut quia omnis!
            Blanditiis iste nobis aut non, vero asperiores.
          </p>
          <div className="non-veg">
            <a className="a-btn1" href="">
              <button className="cta-btn1">
                <h3>Non Veg</h3>
              </button>
            </a>
            <a className="a-btn1" href="">
              <button className="cta-btn1">
                <h3>American</h3>
              </button>
            </a>
            <a className="a-btn1" href="">
              <button className="cta-btn1">
                <h3>Main Couse</h3>
              </button>
            </a>
          </div>
          <div className="outer flex">
            <h3>Price:</h3>
            <h3>Rs 209</h3>
          </div>
          <div className="inner flex">
            <h3>Serves:</h3>
            <div className="btn5">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>
          </div>
          <button className="add-to">ADD TO CART</button>
        </div>
      </div>
    </>
  );
}

export default FoodDetail;
