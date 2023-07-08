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
const handleEmailClick = (email: string) => {
  const mailtoLink = `mailto:${email}`;
  window.location.href = mailtoLink;
};

const handlePhoneClick = (phoneNumber: string) => {
  const telLink = `tel:${phoneNumber}`;
  window.location.href = telLink;
};

const contacts = () => {
  return (
    <div className="contacts">
      <div className="contact">
        <div className="contactRow">
          <div className="straightLine"></div>
          <h1 className="headerText contactHead" id="contact">
            Contact Me
          </h1>
          <div className="straightLine"></div>
        </div>
        <div className="contactsGrid">
          <div className="gridRow1">
            <a
              href={`rehmanscholar321@gmail.com`}
              onClick={() => handleEmailClick("rehmanscholar321@gmail.com")}
            >
              <div className="card1">
                <BsEnvelopeOpen className="contactCardSvg" />
                rehmanscholar321@gmail.com
              </div>
            </a>
            <a
              href={`+91 8286529560`}
              onClick={() => handlePhoneClick("+91 8286529560")}
            >
              <div className="card1">
                <BsFillTelephoneFill className="contactCardSvg" />
                +91 8286529560 | +91 9321145007
              </div>
            </a>
          </div>
          <a href="https://goo.gl/maps/XZA8Q5WzJLXDxTAH6">
            <div className="card1">
              <BsFillMapFill className="contactCardSvg" />
              Mumbai, Maharashtra, India
            </div>
          </a>
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
