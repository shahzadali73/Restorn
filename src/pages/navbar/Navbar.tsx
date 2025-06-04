// import "./Navbar.css";
import "../../css/Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

function Navbar() {
  const [] = useState("");
  const [toggle, togglebotton] = useState(true);

  function handleHanm() {
    togglebotton(!toggle);
  }

  function cancelbtn() {
    togglebotton(!toggle);
  }

  return (
    <>
      <div className="navbar-container">
        <div className="logo ">Restorn</div>

        {/* {!toggle ? (
          <MdCancel className="cancel" onClick={cancelbtn} />
        ) : (
          <GiHamburgerMenu className="teenline" onClick={handleHanm} />
        )} */}
        <a href="#" className="teenline" onClick={handleHanm}>
          {toggle ? <GiHamburgerMenu /> : <MdCancel />}
        </a>

        {!toggle ? (
          <div className="extra-nav active">
            {" "}
            <a className="a-btn" href="">
              Home
            </a>
            <a className="a-btn" href="/about">
              About
            </a>
            <a className="a-btn" href="">
              Services
            </a>
            <a className="a-btn" href="">
              Menu
            </a>
            <a className="a-btn" href="">
              Contact
            </a>
            <a className="a-btn" href="">
              <button className="cta-btn">
                <h3>Book A Table</h3>
              </button>
            </a>
          </div>
        ) : (
          <div className="nav-bar">
            <a className="a-btn" href="/">
              Home
            </a>
            <a className="a-btn" href="/aboutus">
              About
            </a>
            <a className="a-btn" href="/services">
              Services
            </a>
            <a className="a-btn" href="/foodmenu">
              Menu
            </a>
            <a className="a-btn" href=" /bookatable ">
              Contact
            </a>
            <a className="a-btn" href="/bookatable">
              <button className="cta-btn">
                <h3>Book A Table</h3>
              </button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
