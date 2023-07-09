import React, { useRef } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
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
          duration={700}
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
          duration={1300}
        >
          Contact
        </Link>
      </div>
      <div className="headerInputDiv flexCenter">
        <input className="headerInput" placeholder="Search" type="text" />
        <BsSearch />
      </div>
      {/* <AiOutlineMenu className="menuIcon" /> */}
      <OptionModal />
    </div>
  );
};

export default Header;
