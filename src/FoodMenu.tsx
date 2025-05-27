import "./Section4.css";
import { BsCupHot } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";

function FoodMenu() {
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
          <div>
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
            <br />
            <Fooditem name2="Chicken Burger" />
          </div>

          <div>
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

export default FoodMenu;

export function Dinner({ logo1 }: any) {
  return (
    <>
      <div className="cup">
        <div className="logo-cup">{logo1} </div>
        <div className="type">Breack Fast</div>
      </div>
    </>
  );
}

export function Fooditem({ name2 }: any) {
  return (
    <>
      <div className="food-item-detail">
        <div className="food-img">
          <img src="src/assets/img/menu-1.jpg" alt="" />
        </div>
        <div className="foo-detail">
          <div className="price-food">
            {" "}
            <h2 className="food-name">{name2}</h2>{" "}
            <h3 className="food-price">$150</h3>
          </div>
          <div className="bor"></div>
          <p className="food-detail">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            nisi.
          </p>
        </div>
      </div>
    </>
  );
}
