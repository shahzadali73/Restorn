import { IoIosCloseCircle } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import Wrapper from "../../Wrapper";
import "../../css/AddToCart.css";

function AddToCart1() {
  return (
    <>
      <Wrapper>
        <AddToCart1Page />
      </Wrapper>
    </>
  );
}

export default AddToCart1;

export function AddToCart1Page() {
  return (
    <>
      <div className="shopping-cart-main">
        <div className="shopping-card1">
          <h1>Shipping Cart</h1>

          <div className="food-items flex">
            <img src="public/img/menu-1.jpg" alt="" />
            <p>Pizza</p>
            <select name="num" id="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <p>40$</p>
            <IoIosCloseCircle />
          </div>

          <div className="food-items flex">
            <img src="public/img/menu-1.jpg" alt="" />
            <p>Pizza</p>
            <select name="num" id="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <p>40$</p>
            <IoIosCloseCircle />
          </div>

          <div className="food-items flex">
            <img src="public/img/menu-1.jpg" alt="" />
            <p>Pizza</p>
            <select name="num" id="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <p>40$</p>
            <IoIosCloseCircle />
          </div>

          <div className="back flex">
            <IoArrowBackSharp className="back1" />
            <p>Back to shop</p>
          </div>
        </div>

        <div className="summary">
          <h4>Summary</h4>
          <div className="item">
            <h5>Items</h5>
            <h6>$55</h6>
          </div>
          <div className="shipping-box ">
            <label htmlFor="Email" className="form-email">
              Shipping-
              <input type="text" placeholder="items" className="email-p" />
            </label>
          </div>
          <div className="shipping-box">
            <label htmlFor="Email" className="form-email">
              Give code-
              <input
                type="text"
                placeholder="Enter Your Code"
                className="email-p"
              />
            </label>
          </div>
          <div className="total-box flex">
            <p>Total Price</p>
            <p>$80</p>
          </div>
          <div className="sub-btn">
            <button className="check-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
