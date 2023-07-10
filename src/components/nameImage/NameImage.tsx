import React from "react";
import "./nameImage.scss";
import { Link } from "react-scroll";
import myImage from "../../assets/myImage3.png";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsWhatsapp,
} from "react-icons/bs";
const NameImage = () => {
  return (
    <div className="nameImage">
      <div className="myDetailsDiv">
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
      <img className="myImage" src={myImage} alt="" />
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
