import { VscAccount } from "react-icons/vsc";
import { ImSpoonKnife } from "react-icons/im";
import { SlBasket } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
// import Wrapper from "../../Wrapper";
// import "../../css/Review.css";
import Wrapper from "../../../Wrapper";

function Services() {
  return (
    <Wrapper>
      <ServicePage />
    </Wrapper>
  );
}

export const ServicePage = () => {
  return (
    <>
      <div className="cards" id="card">
        <Card name1="Master Cheif" logo={<VscAccount />} />
        <Card name1="Quality Food" logo={<ImSpoonKnife />} />
        <Card name1="Online Order" logo={<SlBasket />} />
        <Card name1="24/7 Service" logo={<TfiHeadphoneAlt />} />
      </div>
    </>
  );
};

export default Services;

export function Card({ name1, logo }: any) {
  return (
    <>
      <div className="main">
        <div className="logo1">{logo}</div>
        <h3 className="name"> {name1}</h3>
        <p className="dis">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          assumenda.
        </p>
      </div>
    </>
  );
}
