import React from "react";
import "./header.scss";
import logo from "../../assets/logo2.png";
import { Link } from "react-scroll";
import { BsSearch } from "react-icons/bs";
import OptionModal from "./OptionModal";
const Header = () => {
  return (
    <div className="header">
      <img className="logoImg" src={logo} />
      <div className="headerOptions">
        <Link
          className="headerOptionButton"
          activeClass="active"
          to="about"
          smooth={true}
          offset={-100}
          duration={600}
        >
          About
        </Link>
        <Link
          className="headerOptionButton"
          activeClass="active"
          to="portfolio"
          smooth={true}
          offset={-30}
          duration={1000}
        >
          Portfolio
        </Link>
        <Link
          className="headerOptionButton"
          activeClass="active"
          to="contact"
          smooth={true}
          offset={0}
          duration={1400}
        >
          Contact
        </Link>
      </div>
      <div className="headerInputDiv flexCenter">
        <input className="headerInput" placeholder="Search" type="text" />
        <BsSearch />
      </div>
      <OptionModal />
    </div>
  );
};

export default Header;
