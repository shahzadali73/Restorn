import { BsCupHot } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import Wrapper from "../../Wrapper";
import "../../css/FoodMenu.css";

function FoodMenu() {
  return (
    <>
      <Wrapper>
        <FoodItemPage />
      </Wrapper>
    </>
  );
}
import { Link } from "react-router-dom";

export default FoodMenu;

export function Dinner({ logo1 }: any) {
  return (
    <>
      <div className="cup">
        <div className="logo-cup">{logo1} </div>
        <div className="type">Break Fast</div>
      </div>
    </>
  );
}

export function Fooditem({ name2 }: any) {
  return (
    <>
      <Link to="/fooddetail" className="r5">
        <div className="food-item-detail">
          <div className="food-img">
            <img src="img/menu-1.jpg" alt="" />{" "}
          </div>
          <div className="foo-detail">
            <div className="price-food">
              <h2 className="food-name">{name2}</h2>{" "}
              <h3 className="food-price">$150</h3>
            </div>
            <div className="bor"></div>
            <p className="food-detail">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellat, nisi.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export function FoodItemPage() {
  return (
    <>
      <div className="s4-main-cont">
        <div className="header-s4">
          <h3 className="food-menu">Food Menu</h3>
          <h1 className="most-pop">Most Popular Item</h1>
        </div>
        <div className="s4-logo">
          <Dinner logo1={<BsCupHot className="logo-cup" />} />
          <Dinner logo1={<FaHamburger className="logo-cup" />} />
          <Dinner logo1={<ImSpoonKnife className="logo-cup" />} />
        </div>

        <div className="food-item-list">
          <div className="left-list">
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
          </div>

          <div className="right-list">
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
          </div>
        </div>
      </div>
    </>
  );
}
