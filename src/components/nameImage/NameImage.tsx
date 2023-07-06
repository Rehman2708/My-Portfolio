import React from "react";
import "./nameImage.scss";
import myImage from "../../assets/myImage1.png";
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
        <button className="detailButton">Contact Me</button>
      </div>
      <img className="myImage" src={myImage} alt="" />
      <div className="socialIcons">
        <div className="straightLine"></div>
        <a href=""></a>
        <BsFacebook className="socialIcon" />
        <BsWhatsapp className="socialIcon" />
        <BsLinkedin className="socialIcon" />
        <BsInstagram className="socialIcon" />
      </div>
    </div>
  );
};

export default NameImage;
