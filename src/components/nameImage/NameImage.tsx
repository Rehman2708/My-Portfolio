import React, { useState, useEffect } from "react";
import "./nameImage.scss";
import { Link } from "react-scroll";
import myImage from "../../assets/myImage3.png";
import myImage1 from "../../assets/myImage2 (2).png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsFacebook,
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
          <span className="detailName"> Abdul Rehman</span>
        </h1>
        <h2 className="detailWork">FrontEnd Designer </h2>
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
        <div className="straightLine"></div>
        <a href="https://www.facebook.com/abdulrehman.khan.12382923">
          <BsFacebook className="socialIcon" />
        </a>
        <a href="https://wa.me/918286529560">
          <BsWhatsapp className="socialIcon" />
        </a>
        <a href="https://www.linkedin.com/in/abdul-rehman-khan-a43b36233">
          <BsLinkedin className="socialIcon" />
        </a>
        <a href="https://instagram.com/rehman_khan_2274?igshid=MzNlNGNkZWQ4Mg==">
          <BsInstagram className="socialIcon" />
        </a>
      </div>
    </div>
  );
};
export default NameImage;
