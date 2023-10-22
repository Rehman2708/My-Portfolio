import React, { useState, useEffect } from "react";
import "./nameImage.scss";
import { Link } from "react-scroll";
import myImage from "../../assets/samir.png";
import myImage1 from "../../assets/myImage2 (2).png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsWhatsapp,
} from "react-icons/bs";
const NameImage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const [lightTheme, setLightTheme] = useState(false);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };
  return (
    <div className="nameImage">
      <div className="myDetailsDiv" data-aos="fade-right">
        <h1 className="detailHeader">
          I'M
          <span className="detailName"> Samir Khan</span>
        </h1>
        <h2 className="detailWork">Node.js Developer </h2>
        <Link
          className="headerOptionButton"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1300}
        >
          <button className="detailButton">Contact Me</button>
        </Link>
      </div>
      <img
        data-aos="fade-left"
        className="myImage"
        src={lightTheme ? myImage : myImage}
        alt=""
      />
      <div className="socialIcons flexCenter">
        <a href="https:/github.com/SAMIR0108">
          <BsGithub className="socialIcon" />
        </a>
        <a href="http://www.linkedin.com/in/samirkhan0108">
          <BsLinkedin className="socialIcon" />
        </a>
        <a href="https://wa.me/918291464520">
          <BsWhatsapp className="socialIcon" />
        </a>
      </div>
    </div>
  );
};
export default NameImage;
