import React from "react";
import "./contacts.scss";
import {
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
  BsInstagram,
  BsEnvelopeOpen,
  BsFillMapFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
const contacts = () => {
  return (
    <div className="contacts">
      <div className="contact">
        <div className="contactRow">
          <div className="straightLine"></div>
          <h1 className="headerText contactHead">Contact Me</h1>
          <div className="straightLine"></div>
        </div>
        <div className="contactsGrid">
          <div className="gridRow1">
            <div className="card1">
              <BsEnvelopeOpen className="contactCardSvg" />
              rehmanscholar321@gmail.com
            </div>
            <div className="card1">
              <BsFillTelephoneFill className="contactCardSvg" />
              +91 8286529560 | +91 9321145007
            </div>
          </div>
          <div className="card1">
            <BsFillMapFill className="contactCardSvg" />
            Mumbai, Maharashtra, India
          </div>
        </div>
        <div className="contactRow1 contactRow">
          <div className="straightLine"></div>
          <h1 className="headerText contactHead">
            <div className="socialIcons">
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
          </h1>
          <div className="straightLine"></div>
        </div>
      </div>
      <div className="gratitude">
        <h1>"Thanks for Scrolling"</h1>
      </div>
    </div>
  );
};

export default contacts;
